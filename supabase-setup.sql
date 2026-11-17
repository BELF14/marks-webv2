-- My Life Arcade · Message Wall setup for Supabase
-- Paste this whole file into: Supabase dashboard -> SQL Editor -> New query -> Run

create table if not exists public.messages (
  id          bigint generated always as identity primary key,
  name        text not null default 'PLAYER 2',
  body        text not null default '',
  color       text not null default 'yellow',
  photo       text,                       -- JPEG data URL from the photo booth
  owner_token text not null,              -- random id kept in the visitor's browser; never sent back to other visitors
  created_at  timestamptz not null default now(),
  constraint name_len    check (char_length(name) between 1 and 24),
  constraint body_len    check (char_length(body) <= 280),
  constraint color_ok    check (color in ('green','pink','yellow','cyan','orange')),
  constraint photo_ok    check (photo is null or (photo like 'data:image/jpeg;base64,%' and char_length(photo) < 600000 and photo !~ '["''<>\s]')),
  constraint has_content check (char_length(body) > 0 or photo is not null),
  constraint owner_len   check (char_length(owner_token) between 16 and 64)
);

create index if not exists messages_created_idx on public.messages (created_at desc);
create index if not exists messages_owner_idx   on public.messages (owner_token, created_at desc);

-- Lock the table down: visitors (the "anon" role) can read the public columns and add notes, nothing else.
alter table public.messages enable row level security;
revoke all on public.messages from anon, authenticated;
grant select (id, name, body, color, photo, created_at) on public.messages to anon;
grant insert (name, body, color, photo, owner_token)    on public.messages to anon;

drop policy if exists "anyone can read"  on public.messages;
drop policy if exists "anyone can post"  on public.messages;
create policy "anyone can read" on public.messages for select to anon using (true);
create policy "anyone can post" on public.messages for insert to anon with check (true);

-- Simple spam brake: 5 posts per minute per visitor, 40 per minute for the whole wall.
create or replace function public.messages_rate_limit() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from public.messages where owner_token = new.owner_token and created_at > now() - interval '1 minute') >= 5 then
    raise exception 'SLOW DOWN · TRY AGAIN IN A MINUTE';
  end if;
  if (select count(*) from public.messages where created_at > now() - interval '1 minute') >= 40 then
    raise exception 'THE WALL IS BUSY · TRY AGAIN SOON';
  end if;
  return new;
end $$;

drop trigger if exists messages_rate_limit on public.messages;
create trigger messages_rate_limit before insert on public.messages
  for each row execute function public.messages_rate_limit();

-- Visitors can remove only their own note (they must know the owner_token that made it).
create or replace function public.delete_my_message(p_id bigint, p_owner text) returns boolean
language sql security definer set search_path = public as $$
  with d as (delete from public.messages where id = p_id and owner_token = p_owner returning 1)
  select exists (select 1 from d);
$$;
revoke all on function public.delete_my_message(bigint, text) from public;
grant execute on function public.delete_my_message(bigint, text) to anon;
