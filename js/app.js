/* ============ MY LIFE ARCADE — app ============ */
const ROOT = window.ROOT || "";
const MEDIA = {"f0": [{"src": ROOT + "assets/images/childhood_memories/f0-1.jpg", "name": "Miracle Garden", "text": "Our first time at Miracle Garden, all of us together in front of a wall of flowers.", "w": 206, "h": 206}, {"src": ROOT + "assets/images/childhood_memories/f0-2.jpg", "name": "New school", "text": "Changing schools for the first time, from Global English School to Al Manahil, in our new white polos.", "w": 206, "h": 206}, {"src": ROOT + "assets/images/childhood_memories/f0-3.jpg", "name": "First laptop", "text": "Me and my brother with our very first laptop.", "w": 206, "h": 206}, {"src": ROOT + "assets/images/childhood_memories/f0-4.jpg", "name": "First basketball game", "text": "Me and my brother at our first basketball game, wearing our jerseys.", "w": 206, "h": 206}, {"src": ROOT + "assets/images/childhood_memories/f0-5.jpg", "name": "UAE falcon", "text": "Us posing with a UAE falcon.", "w": 604, "h": 453}], "f1": [{"src": ROOT + "assets/images/family_relatives/f1-1.jpg", "name": "Dad", "text": "My dad.", "w": 480, "h": 640}, {"src": ROOT + "assets/images/family_relatives/f1-2.jpg", "name": "Mom", "text": "My mom.", "w": 480, "h": 640}, {"src": ROOT + "assets/images/family_relatives/f1-3.jpg", "name": "My sister", "text": "My sister.", "w": 481, "h": 640}, {"src": ROOT + "assets/images/family_relatives/f1-4.jpg", "name": "Us as a family", "text": "Us as a family, all together.", "w": 640, "h": 481}, {"src": ROOT + "assets/images/family_relatives/f1-5.jpg", "name": "Me & my brother", "text": "Me and my brother.", "w": 480, "h": 640}, {"src": ROOT + "assets/images/family_relatives/f1-6.jpg", "name": "Grandmother", "text": "My grandmother, my absolute favorite.", "fave": true, "w": 480, "h": 640}], "f2": [{"src": ROOT + "assets/images/my_friends/f2-0.jpg", "name": "My second family", "text": "My second family.", "w": 1400, "h": 1050, "main": true}, {"src": ROOT + "assets/images/my_friends/f2-1.jpg", "name": "Friends 01", "w": 720, "h": 540}, {"src": ROOT + "assets/images/my_friends/f2-2.jpg", "name": "Friends 02", "w": 540, "h": 720}, {"src": ROOT + "assets/images/my_friends/f2-3.jpg", "name": "Friends 03", "w": 540, "h": 720}, {"src": ROOT + "assets/images/my_friends/f2-4.jpg", "name": "Friends 04", "w": 540, "h": 720}, {"src": ROOT + "assets/images/my_friends/f2-5.jpg", "name": "Friends 05", "w": 720, "h": 540}, {"src": ROOT + "assets/images/my_friends/f2-6.jpg", "name": "Friends 06", "w": 720, "h": 405}, {"src": ROOT + "assets/images/my_friends/f2-7.jpg", "name": "Friends 07", "text": "", "w": 1024, "h": 768}, {"src": ROOT + "assets/images/my_friends/embedded-photo.jpg", "name": "Friends 08", "w": 720, "h": 960}], "f3": [{"src": ROOT + "assets/images/me_and_my_love/f3-1.jpg", "name": "My love ♥", "text": "My love ♥", "w": 450, "h": 600}, {"src": ROOT + "assets/images/me_and_my_love/f3-2.jpg", "name": "My favorite person ♥", "text": "My favorite person ♥", "w": 450, "h": 600}, {"src": ROOT + "assets/images/me_and_my_love/f3-3.jpg", "name": "Me & my love ♥", "text": "Me & my love ♥", "w": 450, "h": 600}, {"src": ROOT + "assets/images/me_and_my_love/f3-4.jpg", "name": "Us ♥", "text": "Us ♥", "w": 450, "h": 600}, {"src": ROOT + "assets/images/me_and_my_love/f3-5.jpg", "name": "Silly us ♥", "text": "Silly us ♥", "w": 450, "h": 600}], "cast": [ROOT + "assets/images/my_favorite_movie/cast-1.jpg", ROOT + "assets/images/my_favorite_movie/cast-2.jpg", ROOT + "assets/images/my_favorite_movie/cast-3.jpg", ROOT + "assets/images/my_favorite_movie/cast-4.jpg", ROOT + "assets/images/my_favorite_movie/cast-5.jpg", ROOT + "assets/images/my_favorite_movie/cast-6.jpg"], "food": ROOT + "assets/images/my_favorite_food/food.jpg", "song": ROOT + "assets/video/song.mp4", "movie": ROOT + "assets/video/movie.mp4", "foodWH": [520, 798]};

const MEM = {};
const SESS = new Set(["score","coins","t0","booted","mt0"]);
const _st = k => { try { return SESS.has(k) ? sessionStorage : localStorage; } catch(e){ return null; } };
const load = k => { try { const v = _st(k).getItem("mla:" + k); if (v !== null) return v; } catch(e){} return MEM[k] ?? null; };
const save = (k,v) => { MEM[k] = v; try { _st(k).setItem("mla:" + k, v); } catch(e){} };
const PAGES = ["childhood_memories.html","family_relatives.html","my_friends.html","me_and_my_love.html","my_favorite_food.html","my_favorite_movie.html","my_song.html","joke_time.html","arcades/memory.html","arcades/wall.html","arcades/secret.html"].map(p => ROOT + p);
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const pad2 = n => String(n).padStart(2,"0");
const CALM = matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE = matchMedia("(hover: hover) and (pointer: fine)").matches;
const ease = "cubic-bezier(.16,1,.3,1)", inout = "cubic-bezier(.76,0,.24,1)";
const heart = (cls="") => `<i class="px-heart ${cls}"></i>`;

// Rename games or change colours here. t = what kind of game it is, g = cabinet marquee.
const folders = [
  {name:"Childhood Memories",    c:"#7dff4f", t:"gallery", g:"TOY QUEST"},
  {name:"My Family & Relatives", c:"#ffd84a", t:"gallery", g:"FAMILY TREE"},
  {name:"My Friends",            c:"#5de0ff", t:"gallery", g:"BUDDY BASH"},
  {name:"Me & My Love",          c:"#ff6fb0", t:"gallery", g:"LOVE LAND", love:true},
  {name:"My Favorite Food",      c:"#ff9a3c", t:"food",    g:"CHICKEN RUN"},
  {name:"My Favorite Movie",     c:"#b48cff", t:"movie",   g:"MOVIE NIGHT"},
  {name:"My Song",               c:"#3dffc5", t:"song",    g:"SING STAR"},
  {name:"Joke Time",             c:"#ff4d6a", t:"jokes",   g:"JOKE JAM"},
  {name:"Memory Match",          c:"#4f8bff", t:"memory",  g:"MEMORY MATCH"},
  {name:"Message Wall",          c:"#c4ff4d", t:"guest",   g:"MESSAGE WALL"},
  {name:"Secret Stage",          c:"#ff3df2", t:"secret",  g:"??? ? ???", hidden:true}
];
folders.forEach((f,i) => f.photos = i < 4 ? MEDIA["f"+i].slice() : []);
const hint = {food:"recipe · mini-game", movie:"cinema · cast", song:"karaoke", jokes:"6 cards", memory:"mini-game", guest:"leave a note", secret:"you found it"};
const visibleGames = () => folders.map((f, i) => i).filter(i => !folders[i].hidden || SECRET_ON);
const media = {};
let current = null, target = null;

const cast = [
  ["Josh Hutcherson","Jesse Aarons","The main character. A shy boy who loves drawing and finds his confidence through Leslie.",[9,6,4,8]],
  ["AnnaSophia Robb","Leslie Burke","Jesse’s imaginative, adventurous best friend who helps create Terabithia.",[10,9,8,7]],
  ["Bailee Madison","May Belle Aarons","Jesse’s younger sister, who admires him and is drawn into Terabithia.",[7,5,6,10]],
  ["Robert Patrick","Jack Aarons","Jesse’s father. He cares for his family but struggles to understand his son.",[3,8,7,5]],
  ["Zooey Deschanel","Miss Edmunds","Jesse’s music teacher, who encourages his artistic side.",[8,4,9,9]],
  ["Kate Butler","Mary Aarons","Jesse’s mother, who takes care of the family and supports her children.",[5,7,6,9]]
];
const STATS = ["IMAGINATION","COURAGE","WISDOM","HEART"];
const jokes = [
  ["Ano’ng kinakain ng mga pusa sa umaga?","Eh ’di MICE KRISPIES!"],
  ["Pa’no mo hahatiin sa dalawa ang dagat?","Gumamit ka ng SEASAW!"],
  ["Hulaan mo kung sa’n iniiwan ng mga aso ang kotse nila...","Sa BARKING LOT!"],
  ["Ano’ng puno ang hindi pwedeng akyatin?","’Yung nakatumba!"],
  ["Ano’ng bagay ang nagsisimula sa T at nagtatapos sa T at may T rin sa loob?","Eh ’di... TEAPOT!"],
  ["Ano’ng gamot sa mga sugat ng balat ng baboy?","OINKMENT!"]
];

const _vid = {};
function vidSrc(p){
  if (!p.startsWith("data:")) return p;
  if (_vid[p.length]) return _vid[p.length];
  try {
    const bin = atob(p.split(",")[1]), u8 = new Uint8Array(bin.length);
    for (let n = 0; n < bin.length; n++) u8[n] = bin.charCodeAt(n);
    return _vid[p.length] = URL.createObjectURL(new Blob([u8], {type:"video/mp4"}));
  } catch(e){ return p; }
}
const ed = (k, def, cls="") => `<div class="ed ${cls}" contenteditable="true" spellcheck="false" data-k="${k}">${esc(load(k) ?? def)}</div>`;

/* ---------------- chiptune sound ---------------- */
const SFX = (function(){
  let ac = null, on = true;
  const ctx = () => { if (!ac){ try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch(e){} } if (ac && ac.state === "suspended") ac.resume(); return ac; };
  function tone(f, t0, d, type="square", vol=.05, f2){
    const a = ctx(); if (!a || !on) return;
    const o = a.createOscillator(), g = a.createGain(), t = a.currentTime + t0;
    o.type = type; o.frequency.setValueAtTime(f, t); if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + d);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.0001, t + d);
    o.connect(g); g.connect(a.destination); o.start(t); o.stop(t + d + .02);
  }
  return {
    get on(){ return on; }, set on(v){ on = v; },
    ctx,
    coin(){ tone(988,0,.08); tone(1319,.08,.35); },
    blip(){ tone(880,0,.05,"square",.03); },
    select(){ tone(523,0,.06); tone(784,.06,.1); },
    flip(){ tone(330,0,.14,"triangle",.07,880); },
    back(){ tone(660,0,.07); tone(440,.07,.12); },
    unlock(){ [523,659,784,1047,1319].forEach((f,i) => tone(f,i*.08,.16)); },
    over(){ [392,370,349,330,262].forEach((f,i) => tone(f,i*.18,.22,"square",.05)); },
    err(){ tone(140,0,.25,"sawtooth",.05); },
    heart(){ tone(1046 + Math.random()*300,0,.08,"triangle",.05); },
    point(){ tone(1568,0,.05,"square",.025); }
  };
})();
$("snd").onclick = () => { SFX.on = !SFX.on; $("snd").setAttribute("aria-pressed", SFX.on); $("snd").textContent = SFX.on ? "♪ ON" : "♪ OFF"; if (SFX.on) SFX.blip(); };

/* ---------------- score + coins ---------------- */
let score = +load("score") || 0, shown = score, coins = +load("coins") || 0;
function addScore(n, x, y){
  score += n; save("score", String(score));
  if (x !== undefined){ const p = document.createElement("span"); p.className = "plus"; p.textContent = "+" + n; p.style.left = x + "px"; p.style.top = y + "px"; document.body.appendChild(p); setTimeout(() => p.remove(), 900); }
  const el = $("score"); el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump");
  (function roll(){ shown += Math.ceil((score - shown) / 6); el.textContent = String(Math.min(shown, 999999)).padStart(6,"0"); if (shown < score) requestAnimationFrame(roll); })();
}
$("score").textContent = String(Math.min(score, 999999)).padStart(6,"0");
function setCoins(){ $("credits").textContent = "COINS " + pad2(coins); }
setCoins();

/* ---------------- boot ---------------- */
(function boot(){
  const el = $("boot");
  if (!el || load("booted")){ if (el) el.remove(); document.body.classList.add("ready"); return; }
  save("booted", "1");
  const urls = [...MEDIA.f0, ...MEDIA.f1, ...MEDIA.f2].map(p => p.src).concat(MEDIA.food, MEDIA.cast);
  let loaded = 0, prog = 0, done = false; const t0 = performance.now();
  urls.forEach(u => { const im = new Image(); im.onload = im.onerror = () => loaded++; im.src = u; });
  function finish(){
    if (done) return; done = true;
    el.classList.add("out");
    setTimeout(() => document.body.classList.add("ready"), 380);
    setTimeout(() => el.remove(), 1000);
  }
  el.addEventListener("click", () => { SFX.ctx(); SFX.coin(); finish(); });
  if (CALM){ finish(); return; }
  (function tick(){
    if (done) return;
    const t = performance.now() - t0;
    const goal = t > 2600 ? 1 : Math.min(loaded / urls.length, Math.max(0, (t - 900) / 1000), 1);
    prog += (goal - prog) * .2;
    if (t > 900) $("b-mem").textContent = String(Math.min(640, Math.round(640 * Math.min(1, (t - 900) / 500)))).padStart(6,"0");
    if (t > 1450) $("b-memok").textContent = "OK";
    $("b-carts").textContent = Math.round(prog * 10);
    $("b-fill").style.transform = `scaleX(${prog})`;
    if (prog > .995 && t > 1900){ $("b-cartok").textContent = "OK"; setTimeout(finish, 520); return; }
    requestAnimationFrame(tick);
  })();
})();

/* ---------------- neon arcade carpet ---------------- */
const SHAPES = {
  spiral:"M32 32c0-3 4-3 4 0s-6 5-8 0 6-9 12-4 0 14-10 14S12 36 14 24 30 8 46 14", zigzag:"M6 44l10-24 10 24 10-24 10 24 10-24",
  ring:"M32 10a22 22 0 100 44 22 22 0 000-44z", tri:"M32 8L58 54H6z", squig:"M4 34c8-16 12 16 20 0s12 16 20 0 8 8 16-4",
  bolt:"M36 6L16 36h14l-4 22 22-32H34z", star:"M32 6l7 17 18 2-14 12 4 18-15-10-15 10 4-18L7 25l18-2z", cross:"M16 16l32 32M48 16L16 48",
  waves:"M4 24c8-10 16-10 24 0s16 10 24 0M4 44c8-10 16-10 24 0s16 10 24 0", sq:"M14 14h36v36H14z", plus:"M32 10v44M10 32h44",
  ghost:"M16 52V28a16 16 0 0132 0v24l-6-5-5 5-5-5-5 5-5-5zM26 28h1M38 28h1", pad:"M12 24h40a8 8 0 018 8v6a6 6 0 01-10 4l-6-6H20l-6 6a6 6 0 01-10-4v-6a8 8 0 018-8zM20 31v6M17 34h6",
  note:"M24 48V14l24-6v34M24 48a6 6 0 11-12 0 6 6 0 0112 0zM48 42a6 6 0 11-12 0 6 6 0 0112 0z",
  blob:"M20 12c10-6 26-4 32 6s4 22-4 30-24 10-32 2S4 30 8 22s4-6 12-10z", arc:"M8 46a24 24 0 0148 0", semi:"M10 40a22 22 0 0044 0z",
  dots:"M14 32a3 3 0 106 0 3 3 0 10-6 0M29 32a3 3 0 106 0 3 3 0 10-6 0M44 32a3 3 0 106 0 3 3 0 10-6 0", diamond:"M32 6l20 26-20 26-20-26z",
  hex:"M32 6l22 13v26L32 58 10 45V19z", eye:"M4 32c14-18 42-18 56 0-14 18-42 18-56 0zM32 26a6 6 0 100 12 6 6 0 000-12z",
  burst:"M32 4v12M32 48v12M4 32h12M48 32h12M12 12l8 8M44 44l8 8M52 12l-8 8M20 44l-8 8", rings:"M32 8a24 24 0 100 48 24 24 0 000-48zM32 20a12 12 0 100 24 12 12 0 000-24z",
  sqspiral:"M12 12h40v40H20V20h24v24H28V28h8v8", pill:"M20 22h24a10 10 0 010 20H20a10 10 0 010-20z", stairs:"M6 54h12V42h12V30h12V18h12V6",
  moon:"M40 8a24 24 0 100 48 18 18 0 010-48z", wave3:"M4 20q7-8 14 0t14 0 14 0 14 0M4 32q7-8 14 0t14 0 14 0 14 0M4 44q7-8 14 0t14 0 14 0 14 0",
  heart:"M32 54C10 38 6 24 14 15c6-6 15-3 18 4 3-7 12-10 18-4 8 9 4 23-18 39z"
};
const P2D = Object.fromEntries(Object.entries(SHAPES).map(([k,v]) => [k, new Path2D(v)]));
const field = (function(){
  const cv = $("field"), cx = cv.getContext("2d");
  let W, H, dpr, items = [], sparks = [], mx = -9999, my = -9999, love = false, room = null;
  const COLS = ["125,255,79","255,216,74","255,111,176","93,224,255"], LCOLS = ["255,111,176","255,180,214","255,216,74","255,92,157"];
  const keys = Object.keys(SHAPES).filter(k => k !== "heart");
  function mk(x, y, fresh){
    const pal = love ? LCOLS : room ? [room, room, "255,255,255", room] : COLS;
    return {x, y, s:22 + Math.random()*58, r:Math.random()*6.28, vr:(Math.random()-.5)*.004, vx:(Math.random()-.5)*.1, vy:(Math.random()-.5)*.1,
      k: love && Math.random() < .55 ? "heart" : keys[Math.floor(Math.random()*keys.length)], c:pal[Math.floor(Math.random()*pal.length)],
      a:(room ? .08 : .1) + Math.random()*.16, ox:0, oy:0, sc:fresh ? 0 : 1, ph:Math.random()*6.28, fill:Math.random() < .12};
  }
  function seed(){
    const home = !room && !love, cols = W < 700 ? (home ? 5 : 4) : (home ? 11 : 8), rows = W < 700 ? (home ? 10 : 7) : (home ? 7 : 5), skip = home ? .1 : .3; items = [];
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++){ if (Math.random() < skip) continue; items.push(mk((c + .15 + Math.random()*.7)/cols*W, (r + .15 + Math.random()*.7)/rows*H)); }
  }
  function size(){ dpr = Math.min(devicePixelRatio || 1, 2); W = innerWidth; H = innerHeight; cv.width = W*dpr; cv.height = H*dpr; cx.setTransform(dpr,0,0,dpr,0,0); seed(); }
  size(); addEventListener("resize", size);
  addEventListener("pointermove", e => { mx = e.clientX; my = e.clientY; }, {passive:true});
  function frame(t){
    cx.clearRect(0,0,W,H);
    cx.lineJoin = "round"; cx.lineCap = "round";
    for (const it of items){
      it.x += it.vx; it.y += it.vy; it.r += it.vr; it.sc += (1 - it.sc) * .12;
      if (it.x < -80) it.x = W + 80; if (it.x > W + 80) it.x = -80; if (it.y < -80) it.y = H + 80; if (it.y > H + 80) it.y = -80;
      const dx = it.x - mx, dy = it.y - my, d = Math.hypot(dx, dy), f = d < 150 ? 1 - d/150 : 0;
      it.ox += ((dx/(d||1))*f*60 - it.ox) * .1; it.oy += ((dy/(d||1))*f*60 - it.oy) * .1;
      const s = it.s / 64 * it.sc * (1 + f*.3), bob = Math.sin(t/1400 + it.ph) * 6;
      cx.save(); cx.translate(it.x + it.ox, it.y + it.oy + bob); cx.rotate(it.r); cx.scale(s, s); cx.translate(-32,-32);
      cx.strokeStyle = `rgba(${it.c},${it.a + f*.3})`; cx.lineWidth = 2.2 / s;
      if (it.fill && it.k !== "dots"){ cx.fillStyle = `rgba(${it.c},${(it.a + f*.3) * .35})`; cx.fill(P2D[it.k]); }
      cx.stroke(P2D[it.k]); cx.restore();
    }
    for (let i = sparks.length - 1; i >= 0; i--){
      const p = sparks[i]; p.x += p.vx; p.y += p.vy; p.vx *= .92; p.vy = p.vy*.92 + .08; p.l -= .025;
      if (p.l <= 0){ sparks.splice(i,1); continue; }
      cx.fillStyle = `rgba(${p.c},${p.l})`; const z = p.z * (p.l > .5 ? 1 : .6); cx.fillRect(Math.round(p.x), Math.round(p.y), z, z);
    }
    requestAnimationFrame(frame);
  }
  if (!CALM) requestAnimationFrame(frame); else requestAnimationFrame(() => { frame(0); });
  return {
    burst(x, y, n=24, cols){ cols = cols || (love ? LCOLS : COLS); for (let i = 0; i < n; i++){ const a = Math.random()*6.283, v = 2 + Math.random()*6; sparks.push({x, y, vx:Math.cos(a)*v, vy:Math.sin(a)*v - 1, l:1, z:3 + Math.round(Math.random()*3), c:cols[i % cols.length]}); } },
    spawn(x, y){
      const near = items.find(it => Math.hypot(it.x + it.ox - x, it.y + it.oy - y) < it.s * .6);
      if (near){ items.splice(items.indexOf(near), 1); setTimeout(() => items.push(mk(Math.random()*W, Math.random()*H, true)), 700); return true; }
      items.push(mk(x, y, true)); if (items.length > 60) items.shift(); return false;
    },
    mode(l, c){ const r = !l && c ? hexRgb(c) : null; if (l === love && r === room) return; love = l; room = r; seed(); }
  };
})();

/* ---------------- pixel reticle cursor ---------------- */
(function(){
  if (!FINE || CALM) return;
  document.documentElement.classList.add("has-cursor");
  const cur = $("cursor"), dot = cur.querySelector(".c-dot"), box = cur.querySelector(".c-box"), lab = $("c-label");
  let x = innerWidth/2, y = innerHeight/2, rx = x, ry = y;
  addEventListener("pointermove", e => { x = e.clientX; y = e.clientY; dot.style.transform = `translate(${x}px,${y}px)`; }, {passive:true});
  addEventListener("pointerdown", () => cur.classList.add("down"));
  addEventListener("pointerup", () => cur.classList.remove("down"));
  document.addEventListener("pointerover", e => {
    const t = e.target.closest?.("[data-cursor]"), txt = e.target.closest?.(".ed,input");
    cur.classList.toggle("big", !!t); cur.classList.toggle("text", !t && !!txt);
    if (t) lab.textContent = t.dataset.cursor;
  });
  document.addEventListener("pointerleave", () => cur.style.opacity = 0);
  document.addEventListener("pointerenter", () => cur.style.opacity = 1);
  (function loop(){ rx += (x - rx) * .22; ry += (y - ry) * .22; box.style.transform = `translate(${Math.round(rx)}px,${Math.round(ry)}px)`; requestAnimationFrame(loop); })();
})();

function tilt(el, max=8){
  if (!FINE || CALM) return;
  el.addEventListener("pointermove", e => {
    const r = el.getBoundingClientRect(), u = (e.clientX - r.left)/r.width, v = (e.clientY - r.top)/r.height;
    el.classList.add("tilting");
    el.style.setProperty("--ry", ((u - .5) * max * 2).toFixed(2) + "deg");
    el.style.setProperty("--rx", ((.5 - v) * max * 1.4).toFixed(2) + "deg");
    el.style.setProperty("--gx", (u*100).toFixed(1) + "%"); el.style.setProperty("--gy", (v*100).toFixed(1) + "%");
    el.style.setProperty("--j", ((u - .5) * 60).toFixed(1));
  });
  el.addEventListener("pointerleave", () => { el.classList.remove("tilting"); ["--rx","--ry"].forEach(p => el.style.setProperty(p,"0deg")); el.style.setProperty("--j", 0); });
}

addEventListener("scroll", () => {
  const m = document.documentElement.scrollHeight - innerHeight;
  $("progress").style.transform = `scaleX(${m > 0 ? scrollY/m : 0})`;
}, {passive:true});
const T0 = +load("t0") || Date.now(); if (!load("t0")) save("t0", String(T0));
setInterval(() => { const s = Math.floor((Date.now() - T0)/1000); $("clock").textContent = `TIME ${pad2(Math.floor(s/60))}:${pad2(s%60)}`; }, 1000);

(function(){
  const items = ["★ WELCOME TO MY LIFE ARCADE ★","PRESS START","10 GAMES ON THE FLOOR","SIGN THE MESSAGE WALL","BEAT THE HIGH SCORE","INSERT COIN","HIGH SCORE: MEMORIES","PLAYER 2 HAS JOINED","NO REFUNDS ON NOSTALGIA"];
  const row = items.map(t => `<span>${t}</span>`).join("");
  const _t = document.querySelector(".tick-in"); if (_t) _t.innerHTML = row + row;
})();

/* logo letters */
(function(){
  let k = 0;
  document.querySelectorAll(".logo .lw").forEach(w => { w.innerHTML = [...w.dataset.w].map(ch => `<i data-c="${ch}" style="--k:${k++}"><b>${ch}</b></i>`).join(""); });
})();

const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }), {rootMargin:"0px 0px -6% 0px", threshold:.06});
function observe(root){
  [...root.querySelectorAll(".rv,.ph")].forEach((el, i) => { if (!el.style.getPropertyValue("--d")) el.style.setProperty("--d", Math.min(i, 8) * 90); if (CALM) el.classList.add("in"); else io.observe(el); });
}

/* ---------------- arcade floor ---------------- */
function screenArt(f){
  if (f.love) return `<div class="locked"><img decoding="async" src="${f.photos[0].src}" alt="">${heart()}<div class="dots">${[0,1,2,3,4,5].map(d => `<b style="--d:${d}"></b>`).join("")}</div></div>`;
  if (f.t === "gallery"){ const ph = f.photos; return `<div class="fan">${[ph[1], ph[2], ph[0]].filter(Boolean).map(p => `<img decoding="async" src="${p.src}" alt="" loading="lazy">`).join("")}</div>`; }
  if (f.t === "food") return `<div class="steam">${[0,1,2].map(d => `<i style="--d:${d}"></i>`).join("")}</div><div class="plate"><img decoding="async" src="${media.f4i0 || MEDIA.food}" alt=""></div>`;
  if (f.t === "movie") return `<div class="reel"><img decoding="async" src="${MEDIA.cast[1]}" alt=""><span class="play"></span></div>`;
  if (f.t === "song") return `<div class="eq">${Array.from({length:11}, (_, d) => `<i style="--d:${d};--h:${35 + Math.round(Math.abs(Math.sin(d*1.9))*60)}%"></i>`).join("")}</div>`;
  if (f.t === "jokes") return `<div class="qcard"><b>?</b><b>HA!</b></div>`;
  if (f.t === "memory") return `<div class="mini-mm">${[0,1,2,3,4,5].map(d => d === 1 || d === 4 ? `<i class="f" style="--d:${d}"><img decoding="async" src="${MEDIA.f1[5].src}" alt=""></i>` : `<i style="--d:${d}">?</i>`).join("")}</div>`;
  if (f.t === "guest") return `<div class="mini-notes"><i style="--c:#ffe86b;--r:-6deg">HI!</i><i style="--c:#ff9ccf;--r:5deg">♥</i><i style="--c:#9ff0ff;--r:-2deg">GG</i></div>`;
  if (f.t === "secret") return `<div class="mini-secret"><b>???</b><small>BONUS</small></div>`;
  return "";
}
/* aura of hearts around and over the Me & My Love cabinet */
function loveAura(){
  const pal = ["#ff6fb0","#ff9ac9","#ffd6ea","#ff4d8d","#ffb3d6"], r = (a, b) => a + Math.random()*(b - a), pc = () => pal[Math.floor(Math.random()*pal.length)];
  const rise = Array.from({length:48}, () => `<i class="ah" style="--x:${r(-10,102).toFixed(1)}%;--b:${r(-8,46).toFixed(0)}%;--s:${r(10,30).toFixed(0)}px;--hc:${pc()};--t:${r(5,10).toFixed(1)}s;--d:-${r(0,10).toFixed(1)}s;--w:${r(-26,26).toFixed(0)}px;--h:${r(200,440).toFixed(0)}px"></i>`).join("");
  return `<div class="aura" aria-hidden="true"><span class="halo"></span>${rise}</div>`;
}
function loveAuraTop(){
  const pal = ["#ff6fb0","#ffd6ea","#ff4d8d","#ffb3d6"], r = (a, b) => a + Math.random()*(b - a);
  const hearts = Array.from({length:26}, () => `<i class="ah tw" style="--x:${r(6,86).toFixed(1)}%;--y:${r(4,90).toFixed(1)}%;--s:${r(8,18).toFixed(0)}px;--hc:${pal[Math.floor(Math.random()*pal.length)]};--t:${r(1.8,3.6).toFixed(1)}s;--d:-${r(0,3.6).toFixed(1)}s"></i>`).join("");
  return `<div class="aura top" aria-hidden="true">${hearts}</div>`;
}
function renderHome(){
  $("grid").innerHTML = folders.map((f, i) => {
    if (f.hidden && !SECRET_ON) return "";
    const info = f.love ? "LOCKED ♥" : f.t === "gallery" ? f.photos.length + " photos" : hint[f.t];
    return `<a class="unit${f.hidden ? " secret-u" : ""}${f.love ? " love-u" : ""}" style="--i:${i};--c:${f.c}" href="${PAGES[i]}" data-theme="${["childhood","family","friends","love","food","movie","song","jokes","memory","guest","secret"][i]}" data-i="${i}" data-cursor="PLAY" aria-label="Game ${i+1}: ${esc(f.name)}">${f.love ? loveAura() : ""}
      <div class="cab">
        <div class="shell"></div>
        <div class="mq"><b>${f.g}</b></div><div class="bulbs"></div>
        <div class="bezel"><div class="scr">
          <div class="hud2"><span>1UP</span><span>${String((i+1)*1250).padStart(5,"0")}</span></div>
          <div class="art">${screenArt(f)}</div>
          <div class="insert"><span class="a">INSERT COIN</span><span class="b">PRESS START</span></div>
          <div class="ready-p1">PLAYER 1<br>READY</div>
        </div></div>
        <div class="cpanel"><span class="stick"></span><span class="btns"><i style="--d:0"></i><i style="--d:1"></i><i style="--d:2"></i></span></div>
        <div class="door"><span class="slot"></span><span class="slot"></span><span class="coin"></span></div>
        <div class="kick"></div>
      </div>
      <div class="ulabel"><b>${esc(f.name)}</b><small>GAME ${pad2(i+1)} · ${info}</small></div>${f.love ? loveAuraTop() : ""}
    </a>`;
  }).join("");
  $("grid").querySelectorAll(".unit").forEach(u => tilt(u, 6));
}
function hexRgb(h){ const n = parseInt(h.slice(1), 16); return `${n>>16&255},${n>>8&255},${n&255}`; }

if ($("grid")) $("grid").addEventListener("click", e => {
  const u = e.target.closest(".unit"); if (!u || u.classList.contains("go")) return;
  e.preventDefault();
  const i = +u.dataset.i; u.classList.add("go");
  SFX.coin(); coins++; save("coins", String(coins)); setCoins(); ach("coin");
  const r = u.getBoundingClientRect(); addScore(1250, r.left + r.width/2 - 30, r.top + r.height*.3);
  setTimeout(() => { const s = u.querySelector(".scr").getBoundingClientRect(); field.burst(s.left + s.width/2, s.top + s.height/2, 26, [hexRgb(folders[i].c), "255,255,255"]); SFX.select(); }, 480);
  setTimeout(() => goLevel(i, u.querySelector(".scr").getBoundingClientRect()), CALM ? 0 : 950);
});

function wipe(fromRect, label, mid){
  const w = $("wipe");
  if (CALM || !w.animate){ mid(); return; }
  w.dataset.t = label || ""; const r = fromRect;
  const A = w.animate([
    {left:r.left+"px", top:r.top+"px", width:r.width+"px", height:r.height+"px", opacity:1},
    {left:r.left+"px", top:r.top+"px", width:r.width+"px", height:r.height+"px", opacity:1, offset:.15},
    {left:"0px", top:"0px", width:innerWidth+"px", height:innerHeight+"px", opacity:1}
  ], {duration:820, easing:inout, fill:"forwards"});
  A.onfinish = () => {
    Object.assign(w.style, {left:"0px", top:"0px", width:"100vw", height:"100vh", opacity:1}); A.cancel();
    mid();
    setTimeout(() => { const F = w.animate([{opacity:1}, {opacity:0}], {duration:260, easing:"steps(4)"}); F.onfinish = () => { w.style.opacity = 0; w.style.width = "0px"; }; }, 220);
  };
}
function goLevel(i, rect){
  rect = rect || {left:innerWidth/2 - 40, top:innerHeight/2 - 30, width:80, height:60};
  wipe(rect, `STAGE ${pad2(i+1)}\n\n${folders[i].g}`, () => { location.href = PAGES[i]; });
}
function crt(el, cls){ el.classList.remove("on","off"); void el.offsetWidth; el.classList.add(cls); }
function goHomeAnimated(){
  if (current === null) return;
  SFX.back(); stopMedia();
  if (CALM){ location.href = ROOT + "index.html"; return; }
  crt($("inside"), "off");
  setTimeout(() => { location.href = ROOT + "index.html"; }, 430);
}

function openFolder(i){
  current = i; loveOpen = false;
  const f = folders[i];
  document.body.classList.toggle("love", !!f.love); document.body.dataset.room = i; field.mode(!!f.love, f.c);
  $("lvl").textContent = `STAGE ${pad2(i+1)} / ${pad2(visibleGames().length)} · ${f.g}`;
  visit(i); MUSIC.room(i);
  let k = 0; $("title").innerHTML = f.name.split(" ").map(w => `<span class="wd">${[...w].map(ch => `<span class="ch" style="--k:${k++}">${esc(ch)}</span>`).join("")}</span>`).join(" ");
  $("title").setAttribute("aria-label", f.name);
  if ($("home")) $("home").hidden = true;
  $("inside").hidden = false; crt($("inside"), "on");
  scrollTo(0, 0);
  renderBody(); renderPager();
}
function goHome(){
  if (!$("home")){ location.href = ROOT + "index.html"; return; }
  document.body.classList.remove("love"); delete document.body.dataset.room; field.mode(false, null); loveOpen = false;
  $("inside").hidden = true; $("home").hidden = false; current = null;
  renderHome(); MUSIC.home();
}
function renderPager(){
  const vis = visibleGames(), n = vis.length, at = vis.indexOf(current), p = vis[(at - 1 + n) % n], q = vis[(at + 1) % n];
  $("pager").innerHTML = `<button data-go="${p}" data-cursor="PREV"><small>◀ PREV STAGE</small><b>${esc(folders[p].name)}</b></button><button data-go="${q}" data-cursor="NEXT"><small>NEXT STAGE ▶</small><b>${esc(folders[q].name)}</b></button>`;
}
$("pager").addEventListener("click", e => { const b = e.target.closest("[data-go]"); if (b){ stopMedia(); SFX.select(); goLevel(+b.dataset.go, b.getBoundingClientRect()); } });
$("back").onclick = goHomeAnimated;
$("brand").onclick = e => { e.preventDefault(); if (current !== null) goHomeAnimated(); else scrollTo({top:0, behavior:"smooth"}); };
function stopMedia(){ document.querySelectorAll("#body video").forEach(v => v.pause()); }

/* ---------------- games ---------------- */
function videoBlock(k, label, tag){
  const src = media[k];
  if (!src) return `<div class="vpick" tabindex="0" data-m="${k}" data-a="video/*,audio/*">+ ${label}</div>`;
  return `<div class="screen rv"><span class="lbl"><i></i>${tag}</span><canvas class="amb" width="32" height="18"></canvas><div class="vslot"><video src="${src}" controls playsinline preload="auto"></video><button class="rep" data-m="${k}" data-a="video/*,audio/*">Replace</button></div></div>`;
}
function renderBody(){
  const f = folders[current], k = "f" + current, B = $("body");
  $("add").hidden = f.t !== "gallery" || (f.love && !loveOpen);
  if (f.love){ renderLove(f); return; }
  let h = "";
  if (f.t === "gallery"){
    $("note").textContent = f.photos.some(x => x.text) ? "Hover a photo to read the story behind it. Click to enlarge." : "Click any photo to enlarge it.";
    h = galleryHtml(f);
  }
  if (f.t === "food"){
    $("note").textContent = "Tick off the ingredients as you cook, then try the bonus stage below.";
    h = `<div class="food">
      <div class="popwrap rv"><div class="pop" tabindex="0" aria-label="Fried chicken photo" data-cursor="VIEW">
        <div class="im"><img decoding="async" src="${media[k+"i0"] || MEDIA.food}" alt="Plate of homemade fried chicken"></div>
        <span class="glint"></span>
        <b class="stk s1">CRUNCHY OUTSIDE</b><b class="stk s2">JUICY INSIDE</b><b class="stk s3">SERVES 4</b>
        <button class="rep" data-m="${k}i0" data-a="image/*">Replace</button>
      </div></div>
      <div>
        <div class="rv">${ed(k+"n","Homemade Fried Chicken","dish")}</div>
        <div class="rv">${ed(k+"t","Crunchy on the outside, juicy inside.","tagline")}</div>
        <div class="metas rv">${ed(k+"m","Serves 4 · Prep 15 min · Marinate 2 hrs · Fry 15 min","meta-ed")}</div>
        <div class="recipe rv">
          <div class="rtabs" role="tablist"><button class="on" data-tab="g" role="tab">INVENTORY</button><button data-tab="s" role="tab">QUEST STEPS</button><button class="redit" type="button">✎ EDIT</button></div>
          <div class="rpane" data-p="g"><ul class="chk"></ul>${ed(k+"g2","1 kg chicken pieces\n1 cup buttermilk\n1½ cups flour\n2 tsp salt\n1 tsp black pepper\n1 tsp paprika\n1 tsp garlic powder\n½ tsp cayenne, if you like heat\nOil for frying\nNo buttermilk? Regular milk with 1 tbsp of vinegar works fine.")}</div>
          <div class="rpane" data-p="s" hidden><ol class="chk"></ol>${ed(k+"s2","1. Soak the chicken in buttermilk with a pinch of salt for 2 hours, or overnight.\n2. Mix the flour with salt, pepper, paprika, garlic powder and cayenne.\n3. Dip each piece in flour, then buttermilk, then flour again. Press it in well.\n4. Let the pieces rest for 10 minutes so the coating sticks.\n5. Fry in 170°C (340°F) oil for 12–15 minutes, turning once, until deep golden.\n6. It’s done at 74°C (165°F) inside. Drain on a rack and eat while hot.")}</div>
          <p class="rprog" id="rprog">READY 0/0</p>
        </div>
      </div></div>` + chickenHtml();
  }
  if (f.t === "movie"){
    if (!media[k+"v"]) media[k+"v"] = vidSrc(MEDIA.movie);
    $("note").textContent = "The curtains are open. Press play, then pick a seat to meet the cast.";
    h = `<div class="page">
      <div class="wide stage"><div class="rv">${ed(k+"d","Bridge to Terabithia (2007)","dish")}</div>
        <div class="cinema"><div class="marq rv"><i class="bl"></i><span>NOW SHOWING · TONIGHT ONLY</span><i class="bl"></i></div><div class="curtain l" aria-hidden="true"></div><div class="curtain r" aria-hidden="true"></div>${videoBlock(k+"v","add a short clip of the movie","NOW SHOWING")}</div></div>
      <div class="rv"><h4>Story mode</h4>${ed(k+"y","Bridge to Terabithia is a fantasy-drama about Jesse Aarons, a boy who becomes friends with Leslie Burke, a creative and imaginative girl who moves into his neighborhood. Together they invent a magical kingdom called Terabithia in the woods, where they escape their everyday problems and learn about friendship, courage, and imagination. But a tragic event teaches Jesse an important lesson about love, loss, and moving forward.\n\nMain lesson: friendship, imagination, and courage can help us overcome challenges, while love and cherished memories help us cope with loss.","syn")}</div>
      <div class="rv theatre"><h4>Choose your character</h4>${castHtml(k)}<div class="bio" id="bio"></div></div></div>`;
  }
  if (f.t === "song"){
    if (!media[k+"v"]) media[k+"v"] = vidSrc(MEDIA.song);
    $("note").textContent = "Press play. The meter dances to the music.";
    h = `<div class="stage"><div class="rv">${ed(k+"d2","Change — J. Cole","dish")}</div>${videoBlock(k+"v","add the video of the song","NOW PLAYING")}
      <div class="viz idle" id="viz">${Array.from({length:44}, (_, d) => `<i style="--d:${d}"></i>`).join("")}</div></div>
      <div class="why-wrap rv"><h4>Bonus round · why I love this song</h4>${ed(k+"w2","This song made me stop waiting for the world around me to get better and start asking what I could change in myself first. Every time it plays, it reminds me that growth is a choice I have to make every day, and I want to become someone more patient, honest, and kind than I was yesterday.","why")}</div>`;
  }
  if (f.t === "jokes"){
    $("note").textContent = "Tap a card to flip it and see the punchline.";
    h = `<div class="cards">` + jokes.map((j, i) => `<div class="fc rv" role="button" tabindex="0" data-cursor="FLIP" aria-label="Joke ${i+1}"><div class="in">
      <div class="side f"><span class="n">${pad2(i+1)}</span><p>${esc(j[0])}</p><small><span>Tap to flip</span><span>${i+1}/${jokes.length}</span></small></div>
      <div class="side b"><small>★ Punchline ★</small><p>${esc(j[1])}</p><small>${i+1}/${jokes.length}</small></div>
    </div></div>`).join("") + `</div><p class="flipcount px" id="flipc">PUNCHLINES FOUND 0/${jokes.length}</p>`;
    flips = new Set();
  }
  const X = EXTRA[f.t];
  if (X){ $("note").textContent = X.note; h = X.html(f); }
  B.className = X && X.cls ? X.cls : "";
  B.innerHTML = h;
  observe(B);
  if (X) X.wire();
  if (f.t === "food"){ recipeWire(); chickenWire(); }
  if (f.t === "song"){ const sv = B.querySelector("video"); if (sv) sv.addEventListener("play", () => ach("dj"), {once:true}); }
  if (f.t === "movie"){ const mv = B.querySelector("video"); if (mv) mv.addEventListener("play", () => ach("film"), {once:true}); B.querySelector(".cm")?.classList.add("sel"); }
  const pop = B.querySelector(".pop"); if (pop) tilt(pop, 9);
  B.querySelectorAll(".cm").forEach(c => { tilt(c, 6); c.addEventListener("pointerenter", () => bio(+c.dataset.ci)); c.addEventListener("focus", () => bio(+c.dataset.ci)); });
  if ($("bio")) bio(0, true);
  wireFilm();
  B.querySelectorAll(".screen").forEach(wireScreen);
}
const LAYOUT = {0:"time", 1:"wall", 2:"spot"};
function galleryHtml(f){
  const lay = LAYOUT[current] || "grid", ph = f.photos;
  const fig = (p, i, extra="", inner="") => {
    const a = p.w && p.h ? (p.w / p.h).toFixed(3) : (p.a || 1);
    return `<figure class="ph${p.fave ? " fave" : ""}${extra}" style="--a:${a};--r:${((i*37)%7 - 3) * .7}deg" data-s="${i}" data-cursor="VIEW">
      <div class="fr">${p.fave ? `<span class="badge">♥ MY FAVORITE</span>` : ""}<div class="im"><img decoding="async" src="${p.src}" alt="${esc(p.name)}" loading="lazy" draggable="false"></div>${p.text && lay !== "time" && !p.main ? `<div class="say">${esc(p.text)}</div>` : ""}</div>${inner}
      <figcaption><span>${esc(p.name)}</span><span>${pad2(i+1)}</span></figcaption></figure>`;
  };
  if (lay === "time")
    return `<div class="photos lay-time"><div class="spine" aria-hidden="true"></div>` + ph.map((p, i) => fig(p, i, i % 2 ? " R" : " L",
      `<span class="arm" aria-hidden="true"></span><span class="node" aria-hidden="true">LV<b>${i+1}</b></span>${p.text ? `<p class="story">${esc(p.text)}</p>` : ""}`)).join("") +
      `<div class="goal" aria-hidden="true"><span>★ TO BE CONTINUED ★</span></div></div>`;
  if (lay === "wall"){
    const fi = Math.max(0, ph.findIndex(p => p.fave)), rest = ph.map((p, i) => [p, i]).filter(([, i]) => i !== fi);
    return `<div class="photos lay-wall"><div class="feat">${fig(ph[fi], fi, " big", `<span class="plaque">${esc(ph[fi].text || ph[fi].name)}</span>`)}</div>
      <div class="salon">${rest.map(([p, i]) => fig(p, i, "", `<span class="nail" aria-hidden="true"></span>`)).join("")}</div></div>`;
  }
  if (lay === "spot"){
    const mi = Math.max(0, ph.findIndex(p => p.main));
    let o = 0;
    return `<div class="photos lay-spot">` + ph.map((p, i) => i === mi
      ? fig(p, i, " main", `<span class="beam b1" aria-hidden="true"></span><span class="beam b2" aria-hidden="true"></span><div class="sign" aria-hidden="true"><i class="bul"></i><b>MY SECOND FAMILY</b><em>Mark's crew</em><i class="bul"></i></div>`)
      : fig(p, i, ` o${++o}`)).join("") + `</div>`;
  }
  return `<div class="photos">` + ph.map((p, i) => fig(p, i)).join("") + `</div>`;
}
function wireFilm(){
  const st = $("strip"); if (!st) return;
  const bar = $("filmbar"), upd = () => { const m = st.scrollWidth - st.clientWidth; bar.style.transform = `scaleX(${m > 0 ? Math.max(.06, st.scrollLeft / m) : 1})`; };
  st.addEventListener("scroll", upd, {passive:true}); upd();
  let down = false, sx = 0, sl = 0;
  st.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse") return; down = true; st._moved = false; sx = e.clientX; sl = st.scrollLeft; });
  addEventListener("pointermove", e => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 6){ st._moved = true; st.classList.add("dragging"); } if (st._moved) st.scrollLeft = sl - dx; });
  addEventListener("pointerup", () => { if (!down) return; down = false; st.classList.remove("dragging"); setTimeout(() => st._moved = false, 40); });
  document.querySelectorAll("[data-film]").forEach(b => b.onclick = () => { SFX.blip(); st.scrollBy({left:+b.dataset.film * st.clientWidth * .7, behavior:"smooth"}); });
}
function castHtml(k){
  return `<div class="cast seats">` + cast.map((c, i) => {
    const s = media[k+"p"+i] || MEDIA.cast[i];
    return `<div class="cm${i > 2 ? " back" : ""}" tabindex="0" data-ci="${i}" data-cursor="SELECT" role="button" aria-label="${c[1]}"><span class="p1">P1</span><div class="ci"><img decoding="async" src="${s}" alt="${c[1]}"></div><div class="cap"><b>${c[1]}</b><small>${c[0]}</small></div><span class="seat" aria-hidden="true"><i>${String.fromCharCode(65 + Math.floor(i/3))}${i%3 + 1}</i></span><button class="rep" data-m="${k}p${i}" data-a="image/*">Replace</button></div>`;
  }).join("") + `</div>`;
}
let lastBio = -1;
function bio(i, quiet){
  if (i === lastBio && !quiet) return; lastBio = i;
  const c = cast[i]; if (!quiet) SFX.blip();
  $("bio").innerHTML = `<b>${c[1].toUpperCase()} · ${c[0]}</b><p>${c[2]}</p><div class="stats">${STATS.map((s, n) => `<span>${s}</span><i style="width:${c[3][n]*10}%;animation-delay:${n*60}ms"></i>`).join("")}</div>`;
}

/* video glow + live meter */
let AC = null;
function wireScreen(sc){
  const v = sc.querySelector("video"), cv = sc.querySelector(".amb"); if (!v || !cv) return;
  const g = cv.getContext("2d"); let raf = 0, an = null, data = null;
  const viz = $("viz"), bars = viz ? [...viz.children] : [];
  const paint = () => { try { g.drawImage(v, 0, 0, 32, 18); } catch(e){} };
  v.addEventListener("loadeddata", () => { if (v.currentTime === 0) v.currentTime = .5; });
  v.addEventListener("seeked", paint);
  function loop(){
    paint();
    if (an){ an.getByteFrequencyData(data); const n = bars.length; for (let i = 0; i < n; i++){ const idx = Math.floor(Math.pow(i/n, 1.5) * data.length * .7); bars[i].style.height = Math.max(5, Math.round(data[idx]/255*100/8)*8) + "%"; } } else if (bars.length && !CALM){ const tt = performance.now()/1000; for (let i = 0; i < bars.length; i++){ const h = 16 + 64*Math.abs(Math.sin(tt*3.1 + i*.9) * Math.sin(tt*1.7 + i*.35)); bars[i].style.height = Math.round(h/8)*8 + "%"; } }
    if (!v.paused) raf = requestAnimationFrame(loop);
  }
  v.addEventListener("play", () => {
    if (viz && !v._an && !CALM){
      // Tapping the sound for the live meter silences the video when the page is opened straight from disk (file://)
      // or the file is cross-origin, so only tap when the browser will really pass the sound through.
      let tapOk = false;
      try { const u = new URL(v.currentSrc || v.src, location.href); tapOk = location.protocol !== "file:" && (u.protocol === "blob:" || u.protocol === "data:" || u.origin === location.origin); } catch(e){}
      if (tapOk){
        let src = null;
        try { AC = AC || SFX.ctx() || new (window.AudioContext || window.webkitAudioContext)(); src = AC.createMediaElementSource(v); const a = AC.createAnalyser(); a.fftSize = 256; a.smoothingTimeConstant = .75; src.connect(a); a.connect(AC.destination); v._an = a; }
        catch(e){ try { if (src) src.connect(AC.destination); } catch(_){} }   // never leave the video unplugged
      }
    }
    if (v._an){ an = v._an; data = data || new Uint8Array(an.frequencyBinCount); AC && AC.resume(); }
    if (viz) viz.classList.toggle("idle", !an && !!CALM);
    cancelAnimationFrame(raf); loop();
  });
  v.addEventListener("pause", () => { if (viz){ viz.classList.add("idle"); bars.forEach(b => b.style.height = ""); } });
}

/* ---------------- file picking ---------------- */
function pick(k, accept, multi){ target = k; const f = $("file"); f.accept = accept; f.multiple = !!multi; f.click(); }
$("add").onclick = () => pick("gallery", "image/*", true);
$("file").onchange = e => {
  const files = [...e.target.files];
  if (target === "gallery") files.forEach(x => {
    const p = {src:URL.createObjectURL(x), name:x.name.replace(/\.[^.]+$/, ""), a:1};
    folders[current].photos.push(p);
    const im = new Image(); im.onload = () => { p.w = im.naturalWidth; p.h = im.naturalHeight; renderBody(); }; im.src = p.src;
  });
  else if (files[0]) media[target] = URL.createObjectURL(files[0]);
  e.target.value = ""; renderBody();
};

/* ---------------- interactions ---------------- */
let flips = new Set();
$("body").addEventListener("click", e => {
  const p = e.target.closest("[data-m]");
  if (p && !p.classList.contains("cm")) return pick(p.dataset.m, p.dataset.a, false);
  const cmc = e.target.closest(".cm"); if (cmc){ document.querySelectorAll(".cm").forEach(x => x.classList.toggle("sel", x === cmc)); bio(+cmc.dataset.ci); SFX.select(); return; }
  const fc = e.target.closest(".fc"); if (fc){ flip(fc); return; }
  const pp = e.target.closest(".pop");
  if (pp){ const im = pp.querySelector("img"); SFX.select(); openLB([{src:im.src, name:"Homemade Fried Chicken", text:"", w:im.naturalWidth, h:im.naturalHeight}], 0, pp.querySelector(".im")); return; }
  const lv = e.target.closest(".lv");
  if (lv){ if (lv._moved) return; SFX.select(); openLB(folders[current].photos, +lv.dataset.s, lv.querySelector("img"), "lv"); return; }
  const fig = e.target.closest(".ph"); if (!fig) return;
  if ($("strip") && $("strip")._moved) return;
  SFX.select(); openLB(folders[current].photos, +fig.dataset.s, fig.querySelector(".fr"), "ph");
});
function flip(fc){
  fc.classList.toggle("flipped"); SFX.flip();
  const i = [...fc.parentNode.children].indexOf(fc), r = fc.getBoundingClientRect();
  if (fc.classList.contains("flipped")){
    field.burst(r.left + r.width/2, r.top + r.height/2, 20, ["255,216,74","125,255,79","255,255,255"]);
    if (!flips.has(i)){ flips.add(i); addScore(100, r.left + r.width/2 - 20, r.top + 20); if (flips.size === jokes.length) setTimeout(() => { ach("joke"); toast("ALL PUNCHLINES FOUND · +1000"); addScore(1000); SFX.unlock(); }, 500); }
  }
  const c = $("flipc"); if (c) c.textContent = `PUNCHLINES FOUND ${flips.size}/${jokes.length}`;
}
$("body").addEventListener("keydown", e => {
  if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("fc")){ e.preventDefault(); flip(e.target); }
  if (e.key === "Enter" && e.target.dataset.m){ e.preventDefault(); pick(e.target.dataset.m, e.target.dataset.a, false); }
  if (e.key === "Enter" && e.target.classList.contains("pop")) e.target.click();
});
$("body").addEventListener("input", e => { if (e.target.dataset.k) save(e.target.dataset.k, e.target.innerText); });

/* ---------------- lightbox ---------------- */
const LB = {list:[], i:0, from:null, kind:""};
function fitRect(w, h){
  const mw = innerWidth * (innerWidth < 600 ? .9 : .8), mh = innerHeight * (innerWidth < 600 ? .58 : .68);
  const s = Math.min(mw / w, mh / h), W = w*s, H = h*s;
  return {left:(innerWidth - W)/2, top:Math.max(60, (innerHeight - H)/2 - 50), width:W, height:H};
}
function natural(p, img){ return p.w && p.h ? [p.w, p.h] : img && img.naturalWidth ? [img.naturalWidth, img.naturalHeight] : [4,3]; }
function placeLB(p, img){
  const [w, h] = natural(p, img), r = fitRect(w, h), el = $("lb-img");
  el.src = p.src; Object.assign(el.style, {left:r.left+"px", top:r.top+"px", width:r.width+"px", height:r.height+"px"});
  $("lb-cap").textContent = p.text || p.name || "";
  $("lb-count").textContent = `${pad2(LB.i+1)}/${pad2(LB.list.length)}`;
  $("lb-prev").style.visibility = $("lb-next").style.visibility = LB.list.length > 1 ? "" : "hidden";
  return r;
}
function flipFrom(el, from, to, dur, back){
  if (!from || CALM) return null;
  const a = {transform:`translate(${from.left - to.left}px,${from.top - to.top}px) scale(${from.width/to.width},${from.height/to.height})`}, b = {transform:"none"};
  return el.animate(back ? [b, a] : [a, b], {duration:dur, easing:inout, fill:"both"});
}
function openLB(list, i, thumb, kind){
  LB.list = list; LB.i = i; LB.kind = kind || "";
  const lb = $("lb"); lb.classList.add("on"); document.body.classList.add("lock-scroll");
  const to = placeLB(list[i], thumb), from = thumb ? thumb.getBoundingClientRect() : null;
  if (thumb) thumb.style.visibility = "hidden"; LB.from = thumb;
  requestAnimationFrame(() => lb.classList.add("open"));
  const A = flipFrom($("lb-img"), from, to, 640); if (A) A.onfinish = () => A.cancel();
  if (thumb) setTimeout(() => thumb.style.visibility = "", 660);
}
function thumbFor(i){
  if (LB.kind === "ph") return document.querySelector(`#body .ph[data-s="${i}"] .fr`);
  if (LB.kind === "lv") return document.querySelector(`#body .lv[data-s="${i}"] img`);
  return LB.list.length === 1 ? LB.from : null;
}
function closeLB(){
  const lb = $("lb"); if (!lb.classList.contains("on") || lb._closing) return;
  lb._closing = 1; lb.classList.remove("open"); SFX.back();
  const el = $("lb-img"), th = thumbFor(LB.i), to = el.getBoundingClientRect();
  const fin = () => { lb.classList.remove("on"); lb._closing = 0; document.body.classList.remove("lock-scroll"); if (th) th.style.visibility = ""; el.getAnimations().forEach(a => a.cancel()); };
  const r = th ? th.getBoundingClientRect() : null;
  if (th && r.bottom > 0 && r.top < innerHeight){ th.style.visibility = "hidden"; flipFrom(el, r, to, 560, true).onfinish = fin; }
  else if (!CALM) el.animate([{opacity:1, transform:"none"}, {opacity:0, transform:"scale(1,.01)"}], {duration:320, easing:inout, fill:"forwards"}).onfinish = fin;
  else fin();
}
function stepLB(d){
  if (LB.list.length < 2) return;
  SFX.blip(); const el = $("lb-img"); LB.i = (LB.i + d + LB.list.length) % LB.list.length;
  if (CALM){ placeLB(LB.list[LB.i]); return; }
  el.animate([{opacity:1, transform:"none"}, {opacity:0, transform:`translateX(${-d*40}px)`}], {duration:200, easing:"steps(4)", fill:"forwards"}).onfinish = function(){
    placeLB(LB.list[LB.i]); this.cancel();
    el.animate([{opacity:0, transform:`translateX(${d*50}px)`, filter:"brightness(2)"}, {opacity:1, transform:"none", filter:"none"}], {duration:480, easing:ease});
  };
}
$("lb-prev").onclick = e => { e.stopPropagation(); stepLB(-1); };
$("lb-next").onclick = e => { e.stopPropagation(); stepLB(1); };
$("lb-close").onclick = closeLB;
$("lb").addEventListener("click", e => { if (!e.target.closest(".lb-nav,#lb-close")) closeLB(); });
(function(){ let sx = null; $("lb").addEventListener("pointerdown", e => sx = e.clientX); $("lb").addEventListener("pointerup", e => { if (sx !== null && Math.abs(e.clientX - sx) > 50){ stepLB(e.clientX < sx ? 1 : -1); $("lb")._swiped = 1; } sx = null; }); })();
$("lb").addEventListener("click", e => { if ($("lb")._swiped){ $("lb")._swiped = 0; e.stopImmediatePropagation(); } }, true);
addEventListener("resize", () => { if ($("lb").classList.contains("on") && !$("lb")._closing) placeLB(LB.list[LB.i]); });

document.addEventListener("keydown", e => {
  if ($("lb").classList.contains("on")){ if (e.key === "Escape") closeLB(); if (e.key === "ArrowRight") stepLB(1); if (e.key === "ArrowLeft") stepLB(-1); return; }
  if (e.key !== "Escape") return;
  if ($("gameover").classList.contains("on")){ closeGO(); goHomeAnimated(); return; }
  if ($("hs") && $("hs").classList.contains("on")) return;
  if (current !== null && !e.target.closest?.(".ed,input,textarea")) goHomeAnimated();
});

/* ---------------- click the floor to play ---------------- */
addEventListener("click", e => {
  if (e.target.closest("button,a,.unit,.fc,.pop,.ph,.lv,.cm,.vpick,.ed,#lb,#gameover,#boot,input,textarea,video,.lovebar,.pin,.hud,.screen,.mini,.kara,.gb,.mm-wrap,.recipe,.secret,#hs,#achp,.mm-side")) return;
  if (document.body.classList.contains("love")){ loveBurst(e.clientX, e.clientY, 12); SFX.heart(); }
  else { field.burst(e.clientX, e.clientY, 22); SFX.point(); }
  if (field.spawn(e.clientX, e.clientY)){ addScore(50, e.clientX + 8, e.clientY - 10); if (++POPS === 10) ach("pop"); }
});

/* ---------------- secret code ---------------- */
(function(){
  const code = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"]; let at = 0;
  addEventListener("keydown", e => {
    if (e.target.closest?.(".ed,input")) return;
    at = e.key === code[at] ? at + 1 : (e.key === code[0] ? 1 : 0);
    if (at === code.length){ at = 0; toast("CHEAT ACTIVATED · +30 LIVES"); ach("cheat"); SFX.unlock(); addScore(30000); for (let i = 0; i < 12; i++) setTimeout(() => field.burst(Math.random()*innerWidth, Math.random()*innerHeight*.8, 26), i*120); }
  });
})();
function toast(t){ const el = document.createElement("div"); el.className = "toast"; el.textContent = t; document.body.appendChild(el); setTimeout(() => el.remove(), 3000); }

/* ---------------- Me & My Love ---------------- */
const LOVE_PASS = "013107";
let loveOpen = false, goTimer = 0;
(function(){
  const bh = document.createElement("div"); bh.id = "bigheart"; bh.setAttribute("aria-hidden","true"); document.body.appendChild(bh);
  $("retry").onclick = () => { closeGO(); SFX.select(); renderBody(); };
  $("quit").onclick = () => { closeGO(); goHomeAnimated(); };
  if (!CALM) setInterval(() => {
    if (!document.body.classList.contains("love") || document.hidden) return;
    const pet = Math.random() < .45, h = document.createElement("span"); h.className = pet ? "petal" : "hrt";
    if (pet) h.style.setProperty("--rot", Math.round(Math.random()*360) + "deg");
    h.style.cssText = `left:${Math.random()*96}vw;--s:${8+Math.round(Math.random()*4)*4}px;opacity:${.3+Math.random()*.5};animation-duration:${6+Math.random()*5}s;--sx:${Math.round(Math.random()*80-40)}px`;
    document.body.appendChild(h); setTimeout(() => h.remove(), 11500);
  }, 650);
})();
function petalBurst(x, y, n){
  for (let i = 0; i < n; i++){
    const p = document.createElement("span"), a = Math.random()*6.283, v = 60 + Math.random()*140;
    p.className = "pp"; p.style.cssText = `left:${x}px;top:${y}px;--s:${10 + (i%3)*5}px;--tx:${Math.cos(a)*v}px;--ty:${Math.sin(a)*v - 30}px;--rot:${Math.round(Math.random()*720 - 360)}deg`;
    document.body.appendChild(p); setTimeout(() => p.remove(), 1300);
  }
}
const LILY_PETAL = "M0 0C9-9 13-27 4-44C2-48-2-48-4-44C-13-27-9-9 0 0Z";
function lilySvg(id){
  const pet = [0,60,120,180,240,300].map((a, n) => `<g transform="rotate(${a + 30})"><path d="${LILY_PETAL}" fill="url(#${id}g)" ${n % 2 ? 'transform="scale(.88)"' : ""}/><path d="M0-4V-36" stroke="#ffb3a6" stroke-width="1.4" opacity=".7"/><circle cx="2.5" cy="-14" r="1.4" fill="#6d0012"/><circle cx="-2.5" cy="-19" r="1.2" fill="#6d0012"/><circle cx="1.8" cy="-24" r="1.1" fill="#6d0012"/></g>`).join("");
  const sta = [0,60,120,180,240,300].map(a => `<g transform="rotate(${a})"><path d="M0 0Q3-12 1-24" stroke="#d9f2a0" stroke-width="1.3" fill="none"/><ellipse cx="1" cy="-25" rx="2.2" ry="4" fill="#c4501a" transform="rotate(40 1 -25)"/></g>`).join("");
  return `<svg class="lily" viewBox="-50 -50 100 100" aria-hidden="true"><defs><radialGradient id="${id}g" cx="0" cy="0" r="46" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffd7a8"/><stop offset=".28" stop-color="#ff5a4a"/><stop offset=".7" stop-color="#e3112d"/><stop offset="1" stop-color="#9c0019"/></radialGradient></defs>${pet}${sta}<circle r="3.4" fill="#9fcf55"/></svg>`;
}
function lilyBouquet(){
  return `<svg class="bouquet" viewBox="0 0 200 220" aria-hidden="true">
    <path d="M100 205C96 160 70 120 52 82M100 205C100 150 100 110 100 62M100 205C106 160 130 120 150 88M100 205C88 170 60 150 34 140M100 205C114 170 146 150 170 146" stroke="#4f8a2b" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M78 150C56 140 44 120 42 104C60 112 74 128 78 150Z M124 150C146 140 158 120 160 104C142 112 128 128 124 150Z M96 120C80 108 76 92 78 78C92 88 98 104 96 120Z" fill="#6aa83a"/>
    <ellipse cx="34" cy="136" rx="7" ry="17" fill="#d61f36" transform="rotate(-55 34 136)"/><path d="M27 146l14-18" stroke="#8fc14c" stroke-width="2"/>
    <ellipse cx="170" cy="142" rx="7" ry="17" fill="#d61f36" transform="rotate(55 170 142)"/><path d="M177 152l-14-18" stroke="#8fc14c" stroke-width="2"/>
    <g class="lf" style="--d:0" transform="translate(52 80) scale(.5)">${lilySvg("bq1").replace(/^<svg[^>]*>|<\/svg>$/g, "")}</g>
    <g class="lf" style="--d:1" transform="translate(150 86) scale(.46)">${lilySvg("bq2").replace(/^<svg[^>]*>|<\/svg>$/g, "")}</g>
    <g class="lf" style="--d:2" transform="translate(100 58) scale(.6)">${lilySvg("bq3").replace(/^<svg[^>]*>|<\/svg>$/g, "")}</g>
    <path d="M70 182L100 168L130 182L118 214H82Z" fill="#ffd0e2" stroke="#ff6fb0" stroke-width="2"/>
    <path d="M100 176c-14-14-30-6-20 4 6 6 20 0 20-4zm0 0c14-14 30-6 20 4-6 6-20 0-20-4z" fill="#ff3b6b"/><circle cx="100" cy="177" r="4.5" fill="#d61f50"/>
    <path d="M97 180l-10 26M103 180l10 26" stroke="#ff3b6b" stroke-width="4" stroke-linecap="round"/>
  </svg>`;
}
function matchaSvg(){
  return `<svg class="matcha" viewBox="0 0 120 160" aria-hidden="true">
    <defs><clipPath id="mclip"><path d="M22 40H98L90 146Q89 152 82 152H38Q31 152 30 146Z"/></clipPath>
      <linearGradient id="mgrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9ccc5c"/><stop offset=".55" stop-color="#7fb446"/><stop offset="1" stop-color="#cfe3a4"/></linearGradient></defs>
    <rect x="70" y="2" width="9" height="78" rx="4" fill="#ff8fbf" transform="rotate(14 74 40)"/>
    <g clip-path="url(#mclip)"><g class="liq">
      <rect x="0" y="104" width="120" height="60" fill="#f7f1e3"/>
      <path d="M0 58Q15 52 30 58T60 58T90 58T120 58V108Q105 100 90 108T60 108T30 108T0 108Z" fill="url(#mgrad)"/>
      <rect x="38" y="66" width="18" height="16" rx="4" fill="#fff" opacity=".35" transform="rotate(-12 47 74)"/><rect x="64" y="74" width="16" height="15" rx="4" fill="#fff" opacity=".3" transform="rotate(16 72 81)"/>
    </g></g>
    <path d="M22 40H98L90 146Q89 152 82 152H38Q31 152 30 146Z" fill="rgba(255,255,255,.08)" stroke="#fff" stroke-opacity=".75" stroke-width="3"/>
    <path d="M30 48L36 140" stroke="#fff" stroke-opacity=".4" stroke-width="4" stroke-linecap="round"/>
    <g class="face"><ellipse cx="48" cy="122" rx="3.4" ry="4.4" fill="#2a1a10"/><ellipse cx="72" cy="122" rx="3.4" ry="4.4" fill="#2a1a10"/><circle cx="49" cy="120.5" r="1.1" fill="#fff"/><circle cx="73" cy="120.5" r="1.1" fill="#fff"/>
      <ellipse cx="40" cy="131" rx="5" ry="3" fill="#ff8fb5" opacity=".8"/><ellipse cx="80" cy="131" rx="5" ry="3" fill="#ff8fb5" opacity=".8"/><path d="M55 129Q60 134 65 129" stroke="#2a1a10" stroke-width="2.2" fill="none" stroke-linecap="round"/></g>
    <path d="M60 32c-4-5-11-2-8 3l8 7 8-7c3-5-4-8-8-3z" fill="#ff6fb0"/>
  </svg>`;
}
function closeGO(){ clearInterval(goTimer); $("gameover").classList.remove("on"); }
function loveBurst(x, y, n){
  const cols = ["#ff6fb0","#ff5c9d","#ffd0e2","#ff3b6b"];
  for (let i = 0; i < n; i++){
    const p = document.createElement("span"), a = Math.random()*6.283, v = 50 + Math.random()*130;
    p.className = "hp";
    p.style.cssText = `left:${x}px;top:${y}px;--s:${[10,13,16,20][i%4]}px;--c:${cols[i%4]};--tx:${Math.cos(a)*v}px;--ty:${Math.sin(a)*v - 40}px`;
    document.body.appendChild(p); setTimeout(() => p.remove(), 900);
  }
}
function gameOver(){
  SFX.over();
  const ph = folders[3].photos;
  $("tumble").innerHTML = ph.concat(ph).map(p => `<img decoding="async" src="${p.src}" alt="" style="left:${Math.random()*88}%;top:${Math.random()*78}%;--r:${Math.round(Math.random()*70-35)}deg;--dx:${Math.round(Math.random()*240-120)}px;--dy:${Math.round(Math.random()*240-120)}px;animation-duration:${4+Math.random()*4}s">`).join("");
  $("gameover").classList.add("on");
  const bar = $("go-fill"); bar.getAnimations().forEach(a => a.cancel());
  if (!CALM) bar.animate([{transform:"scaleX(1)"}, {transform:"scaleX(0)"}], {duration:9000, easing:"steps(18)", fill:"forwards"});
  let n = 9; $("cont").textContent = n; clearInterval(goTimer);
  goTimer = setInterval(() => { n--; $("cont").textContent = Math.max(n, 0); if (n >= 0) SFX.blip(); if (n < 0){ closeGO(); goHomeAnimated(); } }, 1000);
  setTimeout(() => $("retry").focus(), 100);
}
function renderLove(f){
  const k = "f" + current;
  if (!loveOpen){
    $("note").textContent = "";
    $("body").innerHTML = `<div class="lockv rv"><div class="lockheart">${heart()}</div><small style="color:var(--pink)">♥ PRIVATE LEVEL ♥</small><div class="lockflowers" aria-hidden="true">${lilySvg("ll1")}${matchaSvg()}</div><h3>MY <em>PEACE</em></h3><p class="lk">ENTER THE 6-DIGIT PASSCODE</p><div class="pin" id="pin">${"<i></i>".repeat(6)}</div><input id="pw" type="password" inputmode="numeric" maxlength="6" autocomplete="off" aria-label="Passcode"><button class="px-btn solid" id="go" data-cursor="UNLOCK">UNLOCK ♥</button><p class="lk" id="lkmsg" style="margin-top:18px"></p></div>`;
    observe($("body"));
    const inp = $("pw"), boxes = [...document.querySelectorAll("#pin i")];
    const paint = () => boxes.forEach((b, i) => { const on = i < inp.value.length; if (on && !b.firstChild) b.innerHTML = heart(); if (!on) b.innerHTML = ""; b.classList.toggle("on", on); b.classList.toggle("cur", i === inp.value.length && document.activeElement === inp); });
    const check = () => {
      if (inp.value.length < 6){ $("lkmsg").textContent = "6 DIGITS NEEDED"; SFX.err(); return; }
      if (inp.value === LOVE_PASS){
        $("lkmsg").textContent = "ACCESS GRANTED ♥"; ach("love"); $("pin").classList.add("ok"); inp.blur(); SFX.unlock();
        const r = $("pin").getBoundingClientRect(); loveBurst(r.left + r.width/2, r.top, 34); addScore(5000, r.left + r.width/2, r.top - 20);
        document.querySelector(".lockheart").animate([{transform:"scale(1)"}, {transform:"scale(1.8)", opacity:0}], {duration:700, easing:"steps(7)", fill:"forwards"});
        setTimeout(() => { loveOpen = true; renderBody(); }, 850);
      } else { SFX.err(); $("pin").classList.remove("shake"); void $("pin").offsetWidth; $("pin").classList.add("shake"); setTimeout(gameOver, 500); }
    };
    inp.addEventListener("input", () => { inp.value = inp.value.replace(/\D/g, "").slice(0, 6); paint(); SFX.blip(); if (inp.value.length === 6) setTimeout(check, 260); });
    inp.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
    inp.addEventListener("focus", paint); inp.addEventListener("blur", paint);
    $("pin").addEventListener("click", () => inp.focus());
    $("go").addEventListener("click", check);
    paint(); setTimeout(() => inp.focus({preventScroll:true}), 450);
    return;
  }
  $("add").hidden = false;
  $("note").textContent = "Drag the photos around, click one to enlarge, or shuffle them.";
  const order = f.photos.map((_, i) => i).sort(() => Math.random() - .5);
  $("body").innerHTML = `<div class="lovebar rv"><div class="p12"><span>MARK</span>${heart()}<span>DRIKCY</span></div><div class="meter">LOVE METER <i class="mb"><b></b></i> <em id="lm">0%</em></div><div class="lbtns"><button class="px-btn" id="send" data-cursor="LOVE">♥ SEND LOVE <span id="lc">0</span></button><button class="px-btn" id="shuf" data-cursor="SHUFFLE">⟲ SHUFFLE</button></div></div>
    <div class="lovehero">
      <button class="fave lily-card rv" id="fv-lily" data-cursor="GIVE ♥" aria-label="Give her red lilies">
        <small>HER FAVE FLOWER</small><span class="fv-art">${lilyBouquet()}</span><b>Red lilies</b><em id="fv-ln">TAP TO GIVE HER ONE ♥</em>
      </button>
      <div class="letter rv">
        <span class="seal" aria-hidden="true">${heart()}</span>
        <h3 class="lt-title">Mark <i>&amp;</i> Drikcy</h3>
        <p class="lt-sub">OUR STORY</p>
        <div class="lt-body">${ed(k+"m","A little corner for the things that remind me of you. No countdown, no rush — a story still being written.","why")}</div>
        <p class="lt-sign">— yours, Mark ♥</p>
        <span class="lt-lily l" aria-hidden="true">${lilySvg("lt1")}</span><span class="lt-lily r" aria-hidden="true">${lilySvg("lt2")}</span>
      </div>
      <button class="fave matcha-card rv" id="fv-mat" data-cursor="SIP ♥" aria-label="Sip her matcha">
        <small>HER FAVE DRINK</small><span class="fv-art"><span class="steam" aria-hidden="true"><i></i><i></i><i></i></span>${matchaSvg()}</span><b>Matcha latte</b><em id="fv-mn">TAP TO TAKE A SIP</em>
      </button>
    </div>
    <h4 class="lv-h rv">Our album</h4>
    <div class="lovegrid">${order.map((i, n) => { const p = f.photos[i]; return `<figure class="lv${n % 2 ? " mt" : ""}" data-s="${i}" data-cursor="DRAG" style="--i:${n};--r:${(Math.random()*16-8).toFixed(1)}deg;--sx:${Math.round(Math.random()*900-450)}px;--sy:${Math.round(Math.random()*700-350)}px;margin-top:${Math.round(Math.random()*30)}px">${n % 3 === 0 ? `<span class="stk lily-stk" aria-hidden="true">${lilySvg("st" + n)}</span>` : n % 3 === 1 ? `<span class="stk mat-stk" aria-hidden="true">${matchaSvg()}</span>` : ""}<img decoding="async" src="${p.src}" alt="${esc(p.name)}" draggable="false"><figcaption>${esc(p.name)}</figcaption></figure>`; }).join("")}</div>`;
  observe($("body"));
  const lm = $("lm"), t0 = performance.now();
  (function up(){ const t = Math.min(1, (performance.now() - t0 - 300) / 1800); lm.textContent = (t < 0 ? 0 : Math.round(t * 15) / 15 * 100 | 0) + "%"; if (t < 1) requestAnimationFrame(up); else lm.textContent = "100%"; })();
  document.querySelectorAll(".lv").forEach(el=>{if(innerWidth>700)dragify(el)});
  let sent = 0;
  $("send").onclick = e => {
    const r = e.currentTarget.getBoundingClientRect(); loveBurst(r.left + r.width/2, r.top, 18); SFX.heart();
    $("lc").textContent = ++sent; addScore(50, r.left + r.width/2, r.top - 10);
    if (sent % 10 === 0){ toast("LOVE LEVEL UP ♥ x" + sent/10); SFX.unlock(); }
  };
  $("shuf").onclick = () => { SFX.select(); renderBody(); };
  let lil = 0, sip = 0;
  $("fv-lily").onclick = e => {
    const c = e.currentTarget, r = c.getBoundingClientRect(); lil++;
    c.classList.remove("bloom"); void c.offsetWidth; c.classList.add("bloom"); SFX.heart();
    petalBurst(r.left + r.width/2, r.top + r.height*.38, 16); addScore(30, r.left + r.width/2, r.top);
    $("fv-ln").textContent = lil === 1 ? "1 RED LILY FOR YOU ♥" : `${lil} RED LILIES FOR YOU ♥`;
    if (lil % 12 === 0){ toast("A WHOLE BOUQUET FOR DRIKCY ♥"); SFX.unlock(); }
  };
  $("fv-mat").onclick = e => {
    const c = e.currentTarget, r = c.getBoundingClientRect(); sip++;
    const lvl = 5 - (sip % 6); c.style.setProperty("--lvl", lvl);
    c.classList.remove("sip"); void c.offsetWidth; c.classList.add("sip");
    loveBurst(r.left + r.width/2, r.top + r.height*.3, 8); SFX.blip();
    if (lvl === 0){ $("fv-mn").textContent = "ALL GONE · TAP FOR A REFILL ♥"; SFX.unlock(); }
    else if (lvl === 5){ $("fv-mn").textContent = "FRESH MATCHA, MADE WITH LOVE"; SFX.coin(); }
    else $("fv-mn").textContent = ["","LAST SIP…","HALF A CUP OF LOVE","SO GOOD","SIP SIP ♥"][lvl] || "SIP SIP ♥";
  };
  setTimeout(() => loveBurst(innerWidth/2, innerHeight/3, 26), 300);
}
function dragify(el){
  let sx, sy, ox = 0, oy = 0, lx, down = false;
  el.addEventListener("pointerdown", e => { down = true; el._moved = false; sx = e.clientX; sy = e.clientY; lx = sx; ox = parseFloat(el.style.getPropertyValue("--tx")) || 0; oy = parseFloat(el.style.getPropertyValue("--ty")) || 0; el.setPointerCapture(e.pointerId); el.style.animation = "none"; });
  el.addEventListener("pointermove", e => {
    if (!down) return;
    const dx = e.clientX - sx, dy = e.clientY - sy;
    if (!el._moved && Math.hypot(dx, dy) > 6){ el._moved = true; el.classList.add("drag"); }
    if (!el._moved) return;
    el.style.setProperty("--tx", ox + dx + "px"); el.style.setProperty("--ty", oy + dy + "px");
    const v = e.clientX - lx; lx = e.clientX; el.style.rotate = Math.max(-18, Math.min(18, v * 1.4)) + "deg";
  });
  const up = () => { if (!down) return; down = false; el.classList.remove("drag"); el.style.rotate = ""; setTimeout(() => el._moved = false, 30); };
  el.addEventListener("pointerup", up); el.addEventListener("pointercancel", up);
}

/* start: see extras */

/* ============ MY LIFE ARCADE — extras (v4) ============ */

/* ---------------- backend helper ---------------- */
const API = (function(){
  const raw = window.__API_BASE__;
  if (typeof raw !== "string" || !raw) return null;
  if (raw.startsWith("__PORT_")) return ["localhost","127.0.0.1","[::1]"].includes(location.hostname) ? "http://localhost:8000" : null;
  return raw.replace(/\/$/, "");
})();
async function api(path, opt = {}){
  if (!API) throw new Error("offline");
  const ctl = new AbortController(), t = setTimeout(() => ctl.abort(), 7000);
  try {
    const res = await fetch(API + path, {credentials:"same-origin", signal:ctl.signal, headers:{"Content-Type":"application/json"}, ...opt});
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw Object.assign(new Error(data.detail || "Request failed"), {status:res.status});
    return data;
  } finally { clearTimeout(t); }
}
const jget = (k, d) => { try { const v = load(k); return v ? JSON.parse(v) : d; } catch(e){ return d; } };
const jset = (k, v) => save(k, JSON.stringify(v));
function ago(sec){
  const s = Math.max(1, Math.floor(Date.now()/1000 - sec));
  if (s < 60) return "JUST NOW"; if (s < 3600) return Math.floor(s/60) + " MIN AGO";
  if (s < 86400) return Math.floor(s/3600) + " HR AGO"; return Math.floor(s/86400) + " DAYS AGO";
}

/* ---------------- background chiptune ---------------- */
const MUSIC = (function(){
  let gain = null, timer = 0, step = 0, next = 0, want = 0, unlocked = false;
  const BPM = 112, S16 = 60 / BPM / 4, mf = m => 440 * Math.pow(2, (m - 69) / 12);
  const CH = [[57,60,64],[53,57,60],[48,52,55],[55,59,62]];
  const LEAD = [76,0,72,74,76,0,79,76, 77,0,76,72,74,0,72,69, 72,0,74,76,79,0,76,74, 74,0,71,72,74,0,79,0];
  function note(a, f, t, d, type, v){
    const o = a.createOscillator(), g = a.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t);
    g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(.0001, t + d);
    o.connect(g); g.connect(gain); o.start(t); o.stop(t + d + .02);
  }
  function sched(){
    const a = SFX.ctx(); if (!a) return;
    while (next < a.currentTime + .15){
      const bar = Math.floor(step / 16) % 4, s = step % 16, ch = CH[bar];
      if (s % 2 === 0) note(a, mf(ch[0] - 12), next, S16 * 1.8, "triangle", .09);
      note(a, mf(ch[[0,1,2,1][s % 4]] + 12), next, S16 * .9, "square", .014);
      if (s % 2 === 0){ const m = LEAD[(Math.floor(step / 2)) % 32]; if (m && Math.floor(step / 64) % 2 === 0) note(a, mf(m), next, S16 * 1.9, "square", .022); }
      if (s % 4 === 2) note(a, 2400 + Math.random()*400, next, .03, "square", .006);
      next += S16; step++;
    }
  }
  function run(){
    const a = SFX.ctx(); if (!a) return;
    if (!gain){ gain = a.createGain(); gain.gain.value = 0; gain.connect(a.destination); }
    if (!timer){
      let t0 = +load("mt0") || 0; if (!t0){ t0 = Date.now(); save("mt0", String(t0)); }
      const el = (Date.now() - t0) / 1000;
      step = Math.floor(el / S16) + 1; next = a.currentTime + (step * S16 - el);
      timer = setInterval(sched, 30);
    }
  }
  function apply(){
    const a = SFX.ctx(); if (!a || !unlocked) return;
    const v = SFX.on ? want : 0;
    if (v > 0) run();
    if (!gain) return;
    gain.gain.cancelScheduledValues(a.currentTime);
    gain.gain.setTargetAtTime(v * .55, a.currentTime, .35);
    if (v === 0){ clearTimeout(apply._t); apply._t = setTimeout(() => { if ((SFX.on ? want : 0) === 0 && timer){ clearInterval(timer); timer = 0; } }, 1600); }
  }
  const unlock = () => { if (unlocked) return; unlocked = true; apply(); };
  addEventListener("pointerdown", unlock, {once:true}); addEventListener("keydown", unlock, {once:true});
  document.addEventListener("visibilitychange", () => { if (document.hidden){ const w = want; want = 0; apply(); want = w; } else apply(); });
  setTimeout(() => { const a = SFX.ctx(); if (a && a.state === "running"){ unlocked = true; apply(); } }, 300);
  return { home(){ want = 1; apply(); }, room(i){ want = (i === undefined || i === 3) ? 0 : 1; apply(); }, refresh: apply };
})();
$("snd").addEventListener("click", () => MUSIC.refresh());

/* ---------------- achievements ---------------- */
const ACH = [
  ["coin","FIRST COIN","Insert your first coin."],
  ["explore","EXPLORER","Visit all 8 original rooms."],
  ["film","MOVIE NIGHT","Watch the movie clip."],
  ["dj","SING ALONG","Play your song."],
  ["joke","JOKESTER","Find every punchline."],
  ["love","PLAYER 2","Unlock Love Land."],
  ["pop","DOODLE POPPER","Pop 10 doodles on the floor."],
  ["memory","MEMORY MASTER","Clear Memory Match."],
  ["chef","CHICKEN CHAMP","Catch 15 drumsticks in one run."],
  ["guest","GUESTBOOK","Pin a note on the message wall."],
  ["cheat","CHEAT CODE","Enter the secret code."],
  ["secret","SECRET STAGE","Find the hidden cabinet."]
];
const GOT = new Set(jget("ach", []));
const VISITED = new Set(jget("visited", []));
let POPS = 0, SECRET_ON = !!load("secret");
function achCount(){ $("trophy").textContent = `★ ${GOT.size}/${ACH.length}`; }
function ach(id){
  if (GOT.has(id)) return; const a = ACH.find(x => x[0] === id); if (!a) return;
  GOT.add(id); jset("ach", [...GOT]); achCount();
  const el = document.createElement("div"); el.className = "ach-toast";
  el.innerHTML = `<i class="tro" aria-hidden="true"></i><span><small>ACHIEVEMENT UNLOCKED</small><b>${a[1]}</b><em>${a[2]}</em></span>`;
  const host = $("ach-stack"); host.appendChild(el); setTimeout(() => el.classList.add("out"), 3600); setTimeout(() => el.remove(), 4200);
  setTimeout(() => { SFX.unlock(); addScore(500); }, 120);
  $("trophy").animate([{transform:"scale(1.4)", color:"#fff"}, {transform:"none"}], {duration:600, easing:"steps(6)"});
  if (id === "explore" || id === "cheat") unlockSecret();
}
(function(){
  const b = document.createElement("button"); b.id = "trophy"; b.className = "trophy"; b.setAttribute("aria-label", "Achievements"); b.dataset.cursor = "TROPHIES";
  $("snd").before(b);
  const st = document.createElement("div"); st.id = "ach-stack"; st.setAttribute("aria-live", "polite"); document.body.appendChild(st);
  const p = document.createElement("div"); p.id = "achp"; p.setAttribute("role", "dialog"); p.setAttribute("aria-modal", "true"); p.setAttribute("aria-label", "Achievements");
  document.body.appendChild(p);
  b.onclick = () => {
    SFX.select();
    p.innerHTML = `<div class="achp-box"><div class="achp-h"><b>TROPHY ROOM</b><span>${GOT.size}/${ACH.length} UNLOCKED</span><button class="px-btn sq" id="achx" aria-label="Close">✕</button></div>
      <div class="achp-bar"><i style="width:${GOT.size/ACH.length*100}%"></i></div>
      <ul>${ACH.map(([id, n, d]) => `<li class="${GOT.has(id) ? "got" : ""}"><i class="tro"></i><span><b>${GOT.has(id) ? n : "? ? ?"}</b><em>${d}</em></span></li>`).join("")}</ul></div>`;
    p.classList.add("on"); $("achx").onclick = () => p.classList.remove("on"); $("achx").focus();
  };
  p.addEventListener("click", e => { if (e.target === p) p.classList.remove("on"); });
  addEventListener("keydown", e => { if (e.key === "Escape" && p.classList.contains("on")){ p.classList.remove("on"); e.stopImmediatePropagation(); } }, true);
  achCount();
})();
function unlockSecret(){
  if (SECRET_ON) return; SECRET_ON = true; save("secret", "1");
  setTimeout(() => { toast("??? A SECRET CABINET APPEARED ON THE FLOOR"); if (current === null) renderHome(); }, 1200);
}
function visit(i){
  if (i > 7) return; VISITED.add(i); jset("visited", [...VISITED]);
  if ([0,1,2,3,4,5,6,7].every(n => VISITED.has(n))) ach("explore");
}

/* ---------------- high score entry + boards ---------------- */
const LOCAL_SCORES = () => jget("scores", {memory:[], chicken:[]});
async function getBoard(game){
  try { return await api(`/api/scores/${game}`); }
  catch(e){ const s = LOCAL_SCORES()[game] || []; return s.sort((a, b) => game === "memory" ? a.score - b.score : b.score - a.score).slice(0, 10); }
}
async function postScore(game, initials, score){
  try { return await api("/api/scores", {method:"POST", body:JSON.stringify({game, initials, score})}); }
  catch(e){ const all = LOCAL_SCORES(); (all[game] = all[game] || []).push({initials, score}); jset("scores", all); return getBoard(game); }
}
function boardHtml(rows, game, hiIni){
  const unit = game === "memory" ? "MOVES" : "PTS";
  if (!rows.length) return `<p class="hs-empty">NO SCORES YET · BE THE FIRST</p>`;
  return `<ol class="hs-list">${rows.map((r, i) => `<li class="${hiIni && r.initials === hiIni ? "me" : ""}"><span>${pad2(i+1)}</span><b>${esc(r.initials)}</b><em>${String(r.score).padStart(4,"0")} ${unit}</em></li>`).join("")}</ol>`;
}
async function renderBoard(el, game, hiIni){
  if (!el) return; el.innerHTML = `<h5>HIGH SCORES</h5><p class="hs-empty">LOADING…</p>`;
  const rows = await getBoard(game); if (!document.body.contains(el)) return;
  el.innerHTML = `<h5>HIGH SCORES${API ? "" : " · THIS DEVICE"}</h5>` + boardHtml(rows, game, hiIni);
}
function askInitials(title, sub){
  return new Promise(res => {
    let m = $("hs"); if (!m){ m = document.createElement("div"); m.id = "hs"; m.setAttribute("role", "dialog"); m.setAttribute("aria-modal", "true"); m.setAttribute("aria-label", "Enter your initials"); document.body.appendChild(m); }
    const L = ["A","A","A"]; let at = 0;
    m.innerHTML = `<div class="hs-box"><small>${esc(sub)}</small><h3>${esc(title)}</h3><p>ENTER YOUR INITIALS</p>
      <div class="hs-slots">${L.map((_, i) => `<div class="sl" data-i="${i}"><button data-d="1" aria-label="Next letter">▲</button><b></b><button data-d="-1" aria-label="Previous letter">▼</button></div>`).join("")}</div>
      <input id="hs-in" maxlength="3" autocomplete="off" aria-label="Initials" spellcheck="false">
      <button class="px-btn solid" id="hs-ok">OK ▶</button></div>`;
    m.classList.add("on");
    const inp = $("hs-in"), slots = [...m.querySelectorAll(".sl")];
    const paint = () => slots.forEach((s, i) => { s.querySelector("b").textContent = L[i]; s.classList.toggle("cur", i === at); });
    const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    slots.forEach((s, i) => s.addEventListener("click", e => { const b = e.target.closest("button"); at = i; if (b){ L[i] = ABC[(ABC.indexOf(L[i]) + +b.dataset.d + ABC.length) % ABC.length]; SFX.blip(); } paint(); inp.focus(); }));
    inp.addEventListener("input", () => { const v = inp.value.toUpperCase().replace(/[^A-Z0-9]/g, ""); for (let i = 0; i < 3; i++) if (v[i]) L[i] = v[i]; at = Math.min(2, v.length); paint(); SFX.blip(); });
    inp.addEventListener("keydown", e => {
      if (e.key === "Enter"){ e.preventDefault(); done(); }
      if (e.key === "ArrowUp" || e.key === "ArrowDown"){ e.preventDefault(); L[at] = ABC[(ABC.indexOf(L[at]) + (e.key === "ArrowUp" ? 1 : -1) + ABC.length) % ABC.length]; paint(); SFX.blip(); }
      if (e.key === "ArrowRight"){ at = Math.min(2, at + 1); paint(); } if (e.key === "ArrowLeft"){ at = Math.max(0, at - 1); paint(); }
      e.stopPropagation();
    });
    function done(){ m.classList.remove("on"); SFX.coin(); res(L.join("")); }
    $("hs-ok").onclick = done; paint(); setTimeout(() => inp.focus(), 60);
  });
}

/* ---------------- MEMORY MATCH ---------------- */
let MM = null;
function memoryHtml(){
  return `<div class="mm-wrap rv">
    <div class="mm-hud"><span>MOVES <b id="mm-moves">0</b></span><span>PAIRS <b id="mm-pairs">0/6</b></span><span>TIME <b id="mm-time">00:00</b></span><button class="px-btn" id="mm-new" data-cursor="RESET">⟲ NEW GAME</button></div>
    <div class="mm" id="mm"></div>
  </div>
  <div class="mm-side rv"><div class="hs-board" id="hs-memory"></div><p class="mm-tip">Find all six pairs of photos in as few moves as you can. Fewest moves wins.</p></div>`;
}
function memoryStart(){
  const pool = [...MEDIA.f0, ...MEDIA.f1, ...MEDIA.f2].map(p => p.src);
  const pick = pool.sort(() => Math.random() - .5).slice(0, 6);
  const deck = [...pick.map((s, k) => ({s, k})), ...pick.map((s, k) => ({s, k}))].sort(() => Math.random() - .5);
  clearInterval(MM && MM.tick);
  MM = {open:[], moves:0, pairs:0, t0:0, tick:0, lock:false};
  $("mm").innerHTML = deck.map((c, i) => `<button class="mc" data-k="${c.k}" style="--i:${i}" aria-label="Card ${i+1}"><span class="mc-in"><span class="mc-b"><i class="px-heart"></i><b>?</b></span><span class="mc-f"><img decoding="async" src="${c.s}" alt="" draggable="false"></span></span></button>`).join("");
  ["mm-moves","mm-pairs","mm-time"].forEach((id, n) => $(id).textContent = ["0","0/6","00:00"][n]);
}
function memoryWire(){
  memoryStart(); renderBoard($("hs-memory"), "memory");
  $("mm-new").onclick = () => { SFX.select(); memoryStart(); };
  $("mm").addEventListener("click", e => {
    const c = e.target.closest(".mc"); if (!c || MM.lock || c.classList.contains("up")) return;
    if (!MM.t0){ MM.t0 = Date.now(); MM.tick = setInterval(() => { if (!$("mm-time")){ clearInterval(MM.tick); return; } const s = Math.floor((Date.now() - MM.t0)/1000); $("mm-time").textContent = `${pad2(Math.floor(s/60))}:${pad2(s%60)}`; }, 500); }
    c.classList.add("up"); SFX.flip(); MM.open.push(c);
    if (MM.open.length < 2) return;
    MM.moves++; $("mm-moves").textContent = MM.moves;
    const [a, b] = MM.open; MM.open = [];
    if (a.dataset.k === b.dataset.k){
      MM.pairs++; $("mm-pairs").textContent = `${MM.pairs}/6`;
      setTimeout(() => { a.classList.add("ok"); b.classList.add("ok"); SFX.coin(); const r = b.getBoundingClientRect(); field.burst(r.left + r.width/2, r.top + r.height/2, 18); addScore(200, r.left + r.width/2, r.top); }, 280);
      if (MM.pairs === 6){
        clearInterval(MM.tick); const moves = MM.moves;
        setTimeout(async () => {
          SFX.unlock(); ach("memory");
          const ini = await askInitials(`CLEARED IN ${moves} MOVES`, "MEMORY MATCH");
          await postScore("memory", ini, moves); renderBoard($("hs-memory"), "memory", ini);
        }, 900);
      }
    } else {
      MM.lock = true;
      setTimeout(() => { a.classList.add("no"); b.classList.add("no"); SFX.err(); }, 380);
      setTimeout(() => { a.classList.remove("up","no"); b.classList.remove("up","no"); MM.lock = false; }, 950);
    }
  });
}

/* ---------------- CHICKEN CATCH (food room) ---------------- */
const SPR = {
  leg:["..aaa...",".abbba..","abbbbba.","abbbbba.",".abbbba.","..aabw..","....ww..",".....ww.","....w..w"],
  gold:["..ccc...",".cddc...","cdddddc.","cdddddc.",".cdddc..","..ccdw..","....ww..",".....ww.","....w..w"],
  bomb:[".....y..","....y...","..kkk...",".kkkkk..","kkgkkkk.","kkkkkkk.","kkkkkkk.",".kkkkk..","..kkk..."],
  bucket:["rwrwrwrwrwrwrw","rwrwrwrwrwrwrw",".rwrwrwrwrwrw.",".rwrwrwrwrwrw.","..rwrwrwrwrw..","..rwrwrwrwrw..","...rwrwrwrw..."]
};
const PAL = {a:"#7a3b0c", b:"#d4801f", w:"#f4ead2", c:"#a87b00", d:"#ffd84a", k:"#1a1a1a", g:"#666", y:"#ffb12b", r:"#e2332f"};
function sprite(ctx, s, x, y){ const m = SPR[s]; for (let r = 0; r < m.length; r++) for (let c = 0; c < m[r].length; c++){ const ch = m[r][c]; if (ch !== "."){ ctx.fillStyle = PAL[ch]; ctx.fillRect(Math.round(x) + c, Math.round(y) + r, 1, 1); } } }
let CC = null;
function chickenHtml(){
  return `<section class="mini rv"><h4>Bonus stage · chicken catch</h4>
    <div class="cc-grid"><div class="cc-wrap" id="cc-wrap"><canvas id="cc" aria-label="Chicken catch game"></canvas>
      <div class="cc-over" id="cc-over"><b>CHICKEN CATCH</b><p>Catch the drumsticks in the bucket. Dodge the bombs. Gold ones are worth 5.</p><button class="px-btn solid" id="cc-go" data-cursor="START">▶ PRESS START</button><small>MOVE · MOUSE, FINGER OR ← →</small></div></div>
    <div class="hs-board" id="hs-chicken"></div></div></section>`;
}
function chickenWire(){
  const cv = $("cc"), wrap = $("cc-wrap"); if (!cv) return;
  const ctx = cv.getContext("2d"), low = document.createElement("canvas"), lc = low.getContext("2d");
  const PX = 4; let W, H, LW, LH;
  function size(){ W = wrap.clientWidth; H = wrap.clientHeight; const d = Math.min(devicePixelRatio || 1, 2); cv.width = W*d; cv.height = H*d; ctx.setTransform(d,0,0,d,0,0); LW = Math.floor(W/PX); LH = Math.floor(H/PX); low.width = LW; low.height = LH; }
  size(); const ro = new ResizeObserver(size); ro.observe(wrap);
  const S = CC = {run:false, items:[], x:0, tx:0, score:0, caught:0, lives:3, last:0, spawn:0, raf:0, keys:{}, ro};
  S.x = S.tx = LW/2;
  const acc = getComputedStyle(document.body).getPropertyValue("--accent").trim() || "#ff9a3c";
  function setX(cx){ const r = cv.getBoundingClientRect(); S.tx = (cx - r.left) / PX; }
  cv.addEventListener("pointermove", e => setX(e.clientX));
  cv.addEventListener("pointerdown", e => { setX(e.clientX); cv.setPointerCapture(e.pointerId); });
  cv.addEventListener("touchmove", e => { if (S.run) e.preventDefault(); }, {passive:false});
  const kd = e => { if (!S.run || !document.body.contains(cv)) return; if (["ArrowLeft","ArrowRight","a","d"].includes(e.key)){ S.keys[e.key] = e.type === "keydown"; e.preventDefault(); } };
  addEventListener("keydown", kd); addEventListener("keyup", kd);
  function draw(t){
    lc.fillStyle = "#0d0602"; lc.fillRect(0, 0, LW, LH);
    lc.fillStyle = "rgba(255,154,60,.07)"; for (let y = (t/60|0) % 6; y < LH; y += 6) lc.fillRect(0, y, LW, 1);
    lc.fillStyle = acc; lc.globalAlpha = .5; lc.fillRect(0, LH - 3, LW, 1); lc.globalAlpha = 1;
    for (const it of S.items) sprite(lc, it.k, it.x - 4, it.y);
    sprite(lc, "bucket", S.x - 7, LH - 11);
    ctx.imageSmoothingEnabled = false; ctx.clearRect(0, 0, W, H); ctx.drawImage(low, 0, 0, LW*PX, LH*PX);
    ctx.font = "10px 'Press Start 2P', monospace"; ctx.fillStyle = "#ffe0c0"; ctx.textBaseline = "top";
    ctx.fillText(`SCORE ${String(S.score).padStart(4,"0")}`, 12, 12);
    ctx.fillStyle = "#ff6fb0"; ctx.textAlign = "right"; ctx.fillText("♥".repeat(S.lives) + "♡".repeat(3 - S.lives), W - 12, 12); ctx.textAlign = "left";
  }
  function frame(t){
    if (!document.body.contains(cv)){ S.run = false; ro.disconnect(); removeEventListener("keydown", kd); removeEventListener("keyup", kd); return; }
    const dt = Math.min(50, t - (S.last || t)) / 16.7; S.last = t;
    if (S.run){
      if (S.keys.ArrowLeft || S.keys.a) S.tx -= 2.2*dt; if (S.keys.ArrowRight || S.keys.d) S.tx += 2.2*dt;
      S.tx = Math.max(7, Math.min(LW - 7, S.tx)); S.x += (S.tx - S.x) * Math.min(1, .35*dt);
      S.spawn -= dt * 16.7;
      if (S.spawn <= 0){
        const r = Math.random(), k = r < .12 + Math.min(.18, S.score/400) ? "bomb" : r > .95 ? "gold" : "leg";
        S.items.push({k, x:6 + Math.random()*(LW - 12), y:-10, v:(.32 + Math.min(.9, S.score*.006)) * (k === "gold" ? 1.3 : 1)});
        S.spawn = Math.max(330, 950 - S.score * 6);
      }
      for (let i = S.items.length - 1; i >= 0; i--){
        const it = S.items[i]; it.y += it.v * dt;
        const hit = it.y + 9 >= LH - 11 && it.y < LH - 6 && Math.abs(it.x - S.x) < 9;
        if (hit){
          S.items.splice(i, 1);
          const r = cv.getBoundingClientRect(), sx = r.left + it.x*PX, sy = r.top + (LH - 12)*PX;
          if (it.k === "bomb"){ S.lives--; SFX.err(); field.burst(sx, sy, 22, ["255,177,43","255,80,60","60,60,60"]); wrap.animate([{transform:"translateX(-6px)"},{transform:"translateX(6px)"},{transform:"none"}], {duration:240, easing:"steps(3)"}); }
          else { const p = it.k === "gold" ? 5 : 1; S.score += p; S.caught++; SFX.coin(); field.burst(sx, sy, it.k === "gold" ? 20 : 8, ["255,216,74","255,154,60"]); addScore(p * 10); if (S.caught === 15) ach("chef"); }
        } else if (it.y > LH){ S.items.splice(i, 1); if (it.k !== "bomb"){ S.lives--; SFX.blip(); } }
      }
      if (S.lives <= 0) over();
    }
    draw(t); S.raf = requestAnimationFrame(frame);
  }
  async function over(){
    S.run = false; S.items = []; SFX.over();
    const o = $("cc-over"); o.querySelector("b").textContent = "GAME OVER"; o.querySelector("p").textContent = `You caught ${S.caught} drumsticks for ${S.score} points.`; $("cc-go").textContent = "▶ PLAY AGAIN"; o.classList.remove("hide");
    if (S.score > 0){ const ini = await askInitials(`${S.score} POINTS`, "CHICKEN CATCH"); await postScore("chicken", ini, S.score); renderBoard($("hs-chicken"), "chicken", ini); }
  }
  $("cc-go").onclick = () => { SFX.coin(); S.run = true; S.score = 0; S.caught = 0; S.lives = 3; S.items = []; S.spawn = 400; $("cc-over").classList.add("hide"); cv.focus?.(); };
  renderBoard($("hs-chicken"), "chicken");
  S.raf = requestAnimationFrame(frame);
}

/* ---------------- recipe card (food room) ---------------- */
function recipeWire(){
  const R = document.querySelector(".recipe"); if (!R) return;
  const build = () => R.querySelectorAll(".rpane").forEach(p => {
    const raw = p.querySelector(".ed").innerText, list = p.querySelector(".chk"), done = jget("chk-" + p.dataset.p, []);
    const lines = raw.split("\n").map(s => s.trim()).filter(Boolean);
    list.innerHTML = lines.map((l, i) => `<li class="${done.includes(i) ? "done" : ""}" data-n="${i}" tabindex="0" role="checkbox" aria-checked="${done.includes(i)}"><i></i><span>${esc(l.replace(/^\d+\.\s*/, ""))}</span></li>`).join("");
    prog();
  });
  const prog = () => { const all = R.querySelectorAll(".rpane:not([hidden]) .chk li"), d = R.querySelectorAll(".rpane:not([hidden]) .chk li.done"); $("rprog").textContent = `READY ${d.length}/${all.length}`; $("rprog").classList.toggle("full", all.length && d.length === all.length); };
  R.addEventListener("click", e => {
    const tab = e.target.closest("[data-tab]");
    if (tab){
      if (tab.classList.contains("on")) return; SFX.flip();
      R.classList.add("flip"); setTimeout(() => { R.querySelectorAll("[data-tab]").forEach(t => t.classList.toggle("on", t === tab)); R.querySelectorAll(".rpane").forEach(p => p.hidden = p.dataset.p !== tab.dataset.tab); prog(); R.classList.remove("flip"); }, 200);
      return;
    }
    if (e.target.closest(".redit")){ const on = R.classList.toggle("editing"); e.target.closest(".redit").textContent = on ? "✓ DONE" : "✎ EDIT"; if (!on) build(); SFX.blip(); return; }
    const li = e.target.closest(".chk li");
    if (li){
      li.classList.toggle("done"); li.setAttribute("aria-checked", li.classList.contains("done")); SFX[li.classList.contains("done") ? "point" : "blip"]();
      const p = li.closest(".rpane"), d = [...p.querySelectorAll(".chk li.done")].map(x => +x.dataset.n); jset("chk-" + p.dataset.p, d); prog();
      if ($("rprog").classList.contains("full")){ const r = $("rprog").getBoundingClientRect(); field.burst(r.left + r.width/2, r.top, 22); SFX.unlock(); }
    }
  });
  R.addEventListener("keydown", e => { if ((e.key === "Enter" || e.key === " ") && e.target.matches(".chk li")){ e.preventDefault(); e.target.click(); } });
  build();
}

/* ---------------- karaoke (song room) ---------------- */
function karaokeHtml(){
  return `<div class="kara rv">
    <div class="kara-scr" id="kara"><p class="k-prev"></p><p class="k-now"></p><p class="k-next"></p></div>
    <div class="kara-ctl">
      <button class="px-btn" id="k-edit" data-cursor="LYRICS">✎ LYRICS</button>
      <button class="px-btn" id="k-sync" data-cursor="SYNC">● SYNC</button>
      <button class="px-btn solid" id="k-tap" hidden data-cursor="TAP">NEXT LINE ▶</button>
      <span id="k-stat"></span>
    </div>
    <div class="k-editor" id="k-editor" hidden><textarea id="k-text" rows="8" spellcheck="false" placeholder="Paste the lyrics here, one line per row."></textarea><button class="px-btn solid" id="k-save">SAVE LYRICS</button></div>
  </div>`;
}
function karaokeWire(){
  const v = document.querySelector("#body video"); if (!$("kara")) return;
  let K = jget("kara", {lines:[], times:[]}), syncing = false, si = 0, raf = 0;
  const now = $("kara").querySelector(".k-now"), prev = $("kara").querySelector(".k-prev"), nxt = $("kara").querySelector(".k-next");
  function show(i){
    const L = K.lines;
    if (!L.length){ prev.textContent = ""; now.textContent = "PASTE YOUR LYRICS TO START KARAOKE"; nxt.textContent = "Press ✎ LYRICS, paste them in, then ● SYNC and tap along."; now.classList.add("idle"); return; }
    now.classList.remove("idle");
    prev.textContent = L[i - 1] || ""; nxt.textContent = L[i + 1] || "";
    if (now.dataset.i !== String(i)){ now.dataset.i = i; now.textContent = i < 0 ? "♪ ♪ ♪" : (L[i] || ""); now.classList.remove("sweep"); void now.offsetWidth; now.classList.add("sweep"); }
  }
  function stat(){ $("k-stat").textContent = !K.lines.length ? "" : syncing ? `SYNCING ${si}/${K.lines.length} · TAP ON EACH NEW LINE` : K.times.length === K.lines.length ? "SYNCED ✓" : `${K.lines.length} LINES · NOT SYNCED`; }
  function idx(t){ let i = -1; for (let n = 0; n < K.times.length; n++) if (K.times[n] <= t) i = n; return i; }
  function loop(){ if (!document.body.contains($("kara") || document.createElement("i"))) return; if (!syncing && K.times.length) show(idx(v.currentTime)); if (v && !v.paused) raf = requestAnimationFrame(loop); }
  if (v){ v.addEventListener("play", () => { ach("dj"); cancelAnimationFrame(raf); loop(); }); v.addEventListener("seeked", () => { if (!syncing && K.times.length) show(idx(v.currentTime)); }); }
  $("k-edit").onclick = () => { const ed = $("k-editor"); ed.hidden = !ed.hidden; $("k-text").value = K.lines.join("\n"); if (!ed.hidden) $("k-text").focus(); SFX.blip(); };
  $("k-save").onclick = () => { const lines = $("k-text").value.split("\n").map(s => s.trim()).filter(Boolean); K = {lines, times:[]}; jset("kara", K); $("k-editor").hidden = true; show(lines.length ? 0 : -1); stat(); SFX.select(); };
  function tap(){ if (!syncing) return; K.times[si] = v.currentTime; show(si); si++; SFX.point(); stat(); if (si >= K.lines.length){ syncing = false; $("k-tap").hidden = true; jset("kara", K); stat(); toast("KARAOKE SYNCED · PRESS PLAY TO SING"); } }
  $("k-sync").onclick = () => {
    if (!K.lines.length){ $("k-edit").click(); return; }
    if (!v) return; syncing = true; si = 0; K.times = []; v.currentTime = 0; v.play(); $("k-tap").hidden = false; show(-1); stat(); SFX.select();
  };
  $("k-tap").onclick = tap;
  addEventListener("keydown", function kk(e){ if (!document.body.contains($("k-tap") || document.createElement("i"))){ removeEventListener("keydown", kk); return; } if (syncing && e.key === " " && !e.target.closest("textarea,input,.ed")){ e.preventDefault(); tap(); } });
  show(K.times.length ? -1 : (K.lines.length ? 0 : -1)); stat();
}

/* ---------------- MESSAGE WALL ---------------- */
const NOTE_COLS = ["green","pink","yellow","cyan","orange"];
let wallTimer = 0, wallColor = "yellow";
function guestHtml(){
  return `<div class="gb">
    <form class="wallform rv" id="wf" autocomplete="off">
      <h4>Leave a message</h4>
      <label>NAME<input id="wf-name" maxlength="24" placeholder="PLAYER 2" required></label>
      <label>MESSAGE<textarea id="wf-body" maxlength="280" rows="4" placeholder="Say something nice to Mark…"></textarea><small id="wf-count">0/280</small></label>
      <div class="sw" role="radiogroup" aria-label="Note colour">${NOTE_COLS.map(c => `<button type="button" class="n-${c}${c === wallColor ? " on" : ""}" data-c="${c}" role="radio" aria-checked="${c === wallColor}" aria-label="${c}"></button>`).join("")}</div>
      <div class="wf-photo"><button type="button" class="px-btn" id="wf-booth" data-cursor="BOOTH">📷 PHOTO BOOTH</button><span class="wf-ph" id="wf-ph" hidden><img id="wf-phi" alt="Your photo"><button type="button" id="wf-phx" aria-label="Remove photo">✕</button></span></div>
      <button class="px-btn solid" id="wf-go" type="submit" data-cursor="PIN">PIN IT ▶</button>
      <p class="wf-msg" id="wf-msg" role="status"></p>
      ${API ? "" : `<p class="wf-off">OFFLINE MODE · notes are saved on this device only.</p>`}
    </form>
    <div class="notes" id="notes" aria-live="polite"><p class="notes-empty">LOADING MESSAGES…</p></div>
  </div>`;
}
async function loadNotes(){
  try { return {list:await api("/api/messages"), ok:true}; }
  catch(e){ return {list:jget("msgs", []), ok:!API}; }
}
async function drawNotes(fresh){
  const box = $("notes"); if (!box) return;
  const {list, ok} = await loadNotes(); if (!document.body.contains(box)) return;
  if (!ok && !list.length){ box.innerHTML = `<p class="notes-empty">THE WALL IS NOT RESPONDING · TRY AGAIN SOON</p>`; return; }
  if (!list.length){ box.innerHTML = `<p class="notes-empty">NO MESSAGES YET · BE THE FIRST TO PIN ONE</p>`; return; }
  box.innerHTML = list.map((m, i) => `<article class="nt n-${NOTE_COLS.includes(m.color) ? m.color : "yellow"}${fresh === m.id ? " fresh" : ""}" style="--r:${((m.id*53)%9 - 4) * .8}deg;--i:${Math.min(i, 12)}">
    <span class="pin" aria-hidden="true"></span>${okPhoto(m.photo) ? `<img class="nphoto" src="${m.photo}" alt="Photo from ${esc(m.name)}" data-cursor="ZOOM">` : ""}${m.body ? `<p>${esc(m.body)}</p>` : ""}<footer><b>— ${esc(m.name)}</b><small>${ago(m.at)}</small></footer>
    ${m.mine ? `<button class="nx" data-id="${m.id}" aria-label="Remove my note" title="Remove my note">✕</button>` : ""}</article>`).join("");
}
function guestWire(){
  drawNotes(); clearInterval(wallTimer);
  wallTimer = setInterval(() => { if (!$("notes")){ clearInterval(wallTimer); return; } if (!document.hidden) drawNotes(); }, 20000);
  const body = $("wf-body"); wallPhoto = null;
  body.addEventListener("input", () => $("wf-count").textContent = `${body.value.length}/280`);
  $("wf-booth").onclick = boothOpen; $("wf-phx").onclick = () => { wallPhoto = null; paintPhoto(); SFX.back(); }; paintPhoto();
  $("wf").querySelector(".sw").addEventListener("click", e => { const b = e.target.closest("[data-c]"); if (!b) return; wallColor = b.dataset.c; $("wf").querySelectorAll(".sw button").forEach(x => { x.classList.toggle("on", x === b); x.setAttribute("aria-checked", x === b); }); SFX.blip(); });
  $("wf").addEventListener("submit", async e => {
    e.preventDefault();
    const name = $("wf-name").value.trim().slice(0, 24) || "PLAYER 2", text = body.value.trim();
    const msg = $("wf-msg"); if (!text && !wallPhoto){ msg.textContent = "WRITE A MESSAGE OR ADD A PHOTO"; SFX.err(); return; }
    $("wf-go").disabled = true; msg.textContent = "PINNING…";
    try {
      let m;
      try { m = await api("/api/messages", {method:"POST", body:JSON.stringify({name, body:text, color:wallColor, photo:wallPhoto})}); }
      catch(err){ if (API) throw err; const all = jget("msgs", []); m = {id:Date.now(), name, body:text, color:wallColor, photo:wallPhoto, mine:true, at:Date.now()/1000}; all.unshift(m); jset("msgs", all); }
      body.value = ""; $("wf-count").textContent = "0/280"; wallPhoto = null; paintPhoto(); msg.textContent = "PINNED ✓ THANK YOU"; SFX.unlock(); ach("guest");
      const r = $("wf-go").getBoundingClientRect(); field.burst(r.left + r.width/2, r.top, 24); addScore(300, r.left + r.width/2, r.top - 10);
      await drawNotes(m.id);
    } catch(err){ msg.textContent = (err.message || "COULD NOT PIN").toUpperCase(); SFX.err(); }
    finally { $("wf-go").disabled = false; }
  });
  $("notes").addEventListener("click", async e => {
    const ph = e.target.closest(".nphoto");
    if (ph){ SFX.select(); openLB([{src:ph.src, name:"Photo booth", text:"", w:ph.naturalWidth, h:ph.naturalHeight}], 0, ph); return; }
    const x = e.target.closest(".nx"); if (!x) return;
    const card = x.closest(".nt"); card.classList.add("gone"); SFX.back();
    try { await api(`/api/messages/${x.dataset.id}`, {method:"DELETE"}); }
    catch(err){ if (API){ card.classList.remove("gone"); toast("COULD NOT REMOVE THAT NOTE"); return; } jset("msgs", jget("msgs", []).filter(m => String(m.id) !== x.dataset.id)); }
    setTimeout(drawNotes, 320);
  });
}

/* ---------------- PHOTO BOOTH (message wall) ---------------- */
let wallPhoto = null;
const BOOTH = {stream:null, mode:"single", look:"normal", busy:false, gone:true, result:null};
const LOOKS = {normal:"none", green:"sepia(.4) hue-rotate(48deg) saturate(1.5) contrast(1.05)", pink:"sepia(.35) hue-rotate(290deg) saturate(1.6) brightness(1.05)", mono:"grayscale(1) contrast(1.15)"};
const CAN_FILTER = (() => { try { return "filter" in CanvasRenderingContext2D.prototype; } catch(e){ return false; } })();
const bsleep = ms => new Promise(r => setTimeout(r, ms));
const okPhoto = u => typeof u === "string" && u.startsWith("data:image/jpeg;base64,") && u.length < 600000 && !/["'<>\s]/.test(u);
function paintPhoto(){
  const w = $("wf-ph"); if (!w) return;
  w.hidden = !wallPhoto; if (wallPhoto) $("wf-phi").src = wallPhoto;
  $("wf-booth").textContent = wallPhoto ? "📷 RETAKE PHOTO" : "📷 PHOTO BOOTH";
}
const stamp = () => new Date().toLocaleDateString("en-GB", {day:"2-digit", month:"short", year:"numeric"}).toUpperCase();
function boothGrab(w, h){
  const v = $("bth-v"), c = document.createElement("canvas"); c.width = w; c.height = h;
  const x = c.getContext("2d"), vw = v.videoWidth || w, vh = v.videoHeight || h, ar = w/h;
  let sw = vw, sh = vw/ar; if (sh > vh){ sh = vh; sw = vh*ar; }
  if (CAN_FILTER) x.filter = LOOKS[BOOTH.look];
  x.translate(w, 0); x.scale(-1, 1);                       // mirrored, like a real booth
  x.drawImage(v, (vw - sw)/2, (vh - sh)/2, sw, sh, 0, 0, w, h);
  return c;
}
function boothFrame(shots){
  const pad = 14, cap = 34, strip = shots.length > 1, sw = shots[0].width, sh = shots[0].height, gap = 10;
  const W = sw + pad*2, H = pad + shots.length*sh + (shots.length - 1)*gap + pad + cap;
  const o = document.createElement("canvas"); o.width = W; o.height = H; const x = o.getContext("2d");
  x.fillStyle = "#08130c"; x.fillRect(0, 0, W, H);
  x.strokeStyle = "#c4ff4d"; x.lineWidth = 3; x.strokeRect(1.5, 1.5, W - 3, H - 3);
  shots.forEach((c, i) => { const y = pad + i*(sh + gap); x.drawImage(c, pad, y); x.strokeStyle = "#000"; x.lineWidth = 2; x.strokeRect(pad - 1, y - 1, sw + 2, sh + 2); });
  x.fillStyle = "#c4ff4d"; x.textAlign = "center"; x.font = "10px 'Press Start 2P', monospace";
  x.fillText("PHOTO BOOTH · " + stamp(), W/2, H - 13);
  return o;
}
function boothMsg(t){ const m = $("bth-m"); if (m) m.textContent = t || ""; }
function boothBusy(on){ BOOTH.busy = on; ["bth-snap","bth-up"].forEach(id => { const b = $(id); if (b) b.disabled = on; }); }
function boothShow(canvas){
  BOOTH.result = canvas.toDataURL("image/jpeg", .72);
  $("bth-r").src = BOOTH.result; $("bth-view").classList.add("res");
  $("bth-v").hidden = true; $("bth-r").hidden = false; $("bth-main").hidden = true; $("bth-after").hidden = false; boothMsg("");
}
async function boothShoot(){
  if (BOOTH.busy || BOOTH.gone) return; boothBusy(true);
  const strip = BOOTH.mode === "strip", n = strip ? 3 : 1, [w, h] = strip ? [300, 225] : [480, 360], shots = [];
  for (let k = 0; k < n; k++){
    for (let c = 3; c >= 1; c--){
      if (BOOTH.gone) return;
      const el = $("bth-n"); el.textContent = c; el.classList.remove("pop"); void el.offsetWidth; el.classList.add("pop"); SFX.blip(); await bsleep(850);
    }
    if (BOOTH.gone) return;
    $("bth-n").textContent = ""; const f = $("bth-f"); f.classList.remove("on"); void f.offsetWidth; f.classList.add("on"); SFX.select();
    shots.push(boothGrab(w, h));
    if (n > 1 && k < n - 1){ boothMsg(`SHOT ${k+1}/${n} ✓ · NEXT ONE…`); await bsleep(900); boothMsg(""); }
  }
  boothBusy(false); boothShow(boothFrame(shots));
}
function boothRetake(){ BOOTH.result = null; $("bth-view").classList.remove("res"); $("bth-r").hidden = true; $("bth-main").hidden = false; $("bth-after").hidden = true; if (BOOTH.stream) $("bth-v").hidden = false; SFX.back(); }
function boothClose(){
  BOOTH.gone = true; BOOTH.busy = false;
  if (BOOTH.stream){ BOOTH.stream.getTracks().forEach(t => t.stop()); BOOTH.stream = null; }
  document.removeEventListener("keydown", boothKey, true);
  $("booth")?.remove();
}
function boothKey(e){ if (e.key === "Escape"){ e.stopImmediatePropagation(); e.preventDefault(); boothClose(); } }
async function boothCamera(){
  const v = $("bth-v");
  try {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) throw new Error("no camera api");
    const st = await navigator.mediaDevices.getUserMedia({video:{facingMode:"user", width:{ideal:960}, height:{ideal:720}}, audio:false});
    if (BOOTH.gone){ st.getTracks().forEach(t => t.stop()); return; }
    BOOTH.stream = st; v.srcObject = st; await v.play(); boothMsg("");
  } catch(e){
    if (BOOTH.gone) return;
    v.hidden = true; boothMsg("CAMERA NOT AVAILABLE · PICK A PHOTO INSTEAD");
    const s = $("bth-snap"); if (s) s.disabled = true;
  }
}
function boothOpen(){
  if ($("booth")) return; SFX.select();
  BOOTH.gone = false; BOOTH.mode = "single"; BOOTH.look = "normal"; BOOTH.result = null; BOOTH.busy = false;
  const el = document.createElement("div"); el.id = "booth"; el.setAttribute("role", "dialog"); el.setAttribute("aria-label", "Photo booth");
  const looks = CAN_FILTER ? Object.keys(LOOKS) : ["normal"];
  el.innerHTML = `<div class="bth">
    <div class="bth-top"><b>PHOTO BOOTH</b><button type="button" class="px-btn" id="bth-x" aria-label="Close photo booth">✕</button></div>
    <div class="bth-view" id="bth-view"><video id="bth-v" playsinline muted autoplay></video><img id="bth-r" alt="Your photo" hidden><div class="bth-count" id="bth-n"></div><div class="bth-flash" id="bth-f"></div><p class="bth-msg" id="bth-m">STARTING CAMERA…</p></div>
    <div id="bth-main">
      <div class="bth-opts"><span>MODE</span><button type="button" class="chip on" data-mode="single">SINGLE</button><button type="button" class="chip" data-mode="strip">STRIP ×3</button></div>
      <div class="bth-opts"><span>LOOK</span>${looks.map(l => `<button type="button" class="chip${l === "normal" ? " on" : ""}" data-look="${l}">${l.toUpperCase()}</button>`).join("")}</div>
      <div class="bth-btns"><button type="button" class="px-btn solid" id="bth-snap">● SNAP</button><button type="button" class="px-btn" id="bth-up">⬆ UPLOAD</button><input type="file" id="bth-file" accept="image/*" hidden></div>
    </div>
    <div class="bth-btns" id="bth-after" hidden><button type="button" class="px-btn" id="bth-re">↻ RETAKE</button><button type="button" class="px-btn solid" id="bth-use">✓ USE THIS</button></div>
  </div>`;
  el.addEventListener("click", e => e.stopPropagation());
  document.body.appendChild(el); document.addEventListener("keydown", boothKey, true);
  $("bth-x").onclick = () => { SFX.back(); boothClose(); };
  $("bth-snap").onclick = boothShoot;
  $("bth-re").onclick = boothRetake;
  $("bth-use").onclick = () => { if (!BOOTH.result) return; wallPhoto = BOOTH.result; boothClose(); paintPhoto(); SFX.unlock(); };
  $("bth-up").onclick = () => $("bth-file").click();
  $("bth-file").onchange = e => {
    const f = e.target.files[0]; e.target.value = ""; if (!f) return;
    if (!/^image\//.test(f.type)){ boothMsg("THAT IS NOT A PICTURE"); return; }
    const img = new Image(), url = URL.createObjectURL(f);
    img.onload = () => {
      URL.revokeObjectURL(url); if (BOOTH.gone) return;
      const c = document.createElement("canvas"); c.width = 480; c.height = 360; const x = c.getContext("2d"), ar = 480/360;
      let sw = img.naturalWidth, sh = sw/ar; if (sh > img.naturalHeight){ sh = img.naturalHeight; sw = sh*ar; }
      x.drawImage(img, (img.naturalWidth - sw)/2, (img.naturalHeight - sh)/2, sw, sh, 0, 0, 480, 360);
      boothShow(boothFrame([c]));
    };
    img.onerror = () => { URL.revokeObjectURL(url); boothMsg("COULD NOT READ THAT PICTURE"); };
    img.src = url;
  };
  el.querySelectorAll("[data-mode]").forEach(b => b.onclick = () => { if (BOOTH.busy) return; BOOTH.mode = b.dataset.mode; el.querySelectorAll("[data-mode]").forEach(x => x.classList.toggle("on", x === b)); SFX.blip(); });
  el.querySelectorAll("[data-look]").forEach(b => b.onclick = () => { if (BOOTH.busy) return; BOOTH.look = b.dataset.look; $("bth-v").style.filter = LOOKS[BOOTH.look]; el.querySelectorAll("[data-look]").forEach(x => x.classList.toggle("on", x === b)); SFX.blip(); });
  boothCamera();
}

/* ---------------- SECRET STAGE ---------------- */
function secretHtml(){
  const s = Math.floor((Date.now() - T0)/1000);
  const L = [["MY LIFE ARCADE",""],["A GAME BY","MARK"],["STARRING","MARK AS PLAYER 1"],["FAMILY","DAD · MOM · MY SISTER · MY BROTHER · GRANDMOTHER"],["SECOND FAMILY","MY FRIENDS"],["PLAYER 2","DRIKCY ♥"],["HER FAVES","RED LILIES · MATCHA LATTE"],["MUSIC","CHANGE — J. COLE"],["MOVIE NIGHT","BRIDGE TO TERABITHIA"],["SPECIAL THANKS","EVERYONE WHO PLAYED"],["",""],["THANK YOU","FOR PLAYING"]];
  return `<div class="secret">
    <div class="crawl rv" aria-label="Credits"><div class="crawl-in">${L.map(([a, b]) => `<p><small>${a}</small>${b ? `<b>${b}</b>` : ""}</p>`).join("")}<p class="fin">INSERT COIN<br>TO PLAY AGAIN</p></div></div>
    <div class="stats-card rv"><h4>Your run</h4>
      <dl><dt>SCORE</dt><dd>${String(score).padStart(6,"0")}</dd><dt>COINS</dt><dd>${pad2(coins)}</dd><dt>TIME</dt><dd>${pad2(Math.floor(s/60))}:${pad2(s%60)}</dd>
      <dt>ROOMS</dt><dd>${VISITED.size}/8</dd><dt>TROPHIES</dt><dd>${GOT.size}/${ACH.length}</dd><dt>DOODLES POPPED</dt><dd>${POPS}</dd></dl>
      <button class="px-btn solid" id="sec-replay" data-cursor="REPLAY">⟲ ROLL CREDITS</button></div>
  </div>`;
}
function secretWire(){
  ach("secret");
  $("sec-replay").onclick = () => { const c = document.querySelector(".crawl-in"); c.style.animation = "none"; void c.offsetWidth; c.style.animation = ""; SFX.select(); };
}

/* ---------------- registry used by renderBody ---------------- */
const EXTRA = {
  memory:{note:"Flip two cards at a time to find matching photos.", html:memoryHtml, wire:memoryWire, cls:"mm-page"},
  guest:{note:"Write a note for Mark. Everyone who visits can read the wall.", html:guestHtml, wire:guestWire},
  secret:{note:"You found the hidden stage. Roll the credits.", html:secretHtml, wire:secretWire}
};

/* ---------------- start ---------------- */
if (typeof PAGE === "number") openFolder(PAGE);
else { renderHome(); MUSIC.home(); }


/* Hidden, looping love-room background music. No player or soundtrack UI. */
(()=>{
 if(window.__loveBackgroundInstalled)return;window.__loveBackgroundInstalled=true;
 for(const id of ['love-audio-panel','love-song-panel','love-song-panel-style'])document.getElementById(id)?.remove();
 for(const id of ['love-room-audio','love-soundtrack']){
  const old=document.getElementById(id);if(old){old.pause();old.muted=true;old.removeAttribute('src');old.load();old.remove();}
 }
 // Disable the earlier standalone controller if this add-on follows that version.
 if(window.LoveRoomAudio)window.LoveRoomAudio={enter(){},leave(){},toggleSound(){}};
 const audio=document.createElement('audio');audio.id='love-background-audio';audio.hidden=true;audio.controls=false;
 audio.loop=true;audio.preload='auto';audio.setAttribute('playsinline','');audio.volume=.45;
 audio.src=ROOT + "assets/audio/love.mp3";document.body.append(audio);
 let active=false,pending=false,epoch=0,entryTimer=0,needsGesture=false,hiddenPlaying=false;
 const enabled=()=>document.getElementById('snd')?.getAttribute('aria-pressed')!=='false';
 async function start(){
  if(!active||!enabled()||document.hidden||pending||!audio.paused)return;
  const token=epoch;pending=true;audio.muted=false;
  try{await audio.play();if(token!==epoch||!active||!enabled()||document.hidden){audio.pause();return;}needsGesture=false;}
  catch(error){if(token===epoch){needsGesture=true;if(error.name!=='NotAllowedError'&&error.name!=='AbortError')console.warn('Love background music:',error.name);}}
  finally{pending=false;}
 }
 function enter(){
  if(!active){active=true;epoch++;try{audio.currentTime=0;}catch(_){} }
  try{if(typeof MUSIC!=='undefined')MUSIC.room();}catch(_){}
  void start();
 }
 function leave(){
  clearTimeout(entryTimer);if(!active)return;active=false;epoch++;pending=false;needsGesture=false;hiddenPlaying=false;audio.pause();try{audio.currentTime=0;}catch(_){}
 }
 function syncRoom(){if(document.body.dataset.room==='3')enter();else leave();}
 new MutationObserver(syncRoom).observe(document.body,{attributes:true,attributeFilter:['data-room']});
 document.addEventListener('click',event=>{
  const item=event.target.closest?.('[data-i],[data-go],#back,#brand');
  if(item){const destination=item.dataset.i??item.dataset.go;
   if(destination==='3'){enter();clearTimeout(entryTimer);entryTimer=setTimeout(()=>{if(document.body.dataset.room!=='3')leave();},6000);}
   else if(destination!==undefined||item.id==='back'||item.id==='brand')leave();
  }
  if(active&&needsGesture&&enabled())void start();
 },true);
 document.addEventListener('keydown',()=>{if(active&&needsGesture&&enabled())void start();},true);
 document.getElementById('snd')?.addEventListener('click',()=>{
  if(!enabled()){epoch++;audio.pause();pending=false;}
  else if(active)void start();
 });
 document.addEventListener('visibilitychange',()=>{
  if(document.hidden){hiddenPlaying=!audio.paused;epoch++;pending=false;audio.pause();}
  else if(active&&(hiddenPlaying||needsGesture)){hiddenPlaying=false;void start();}
 });
 addEventListener('pagehide',()=>audio.pause());syncRoom();
})();


/* Any video that starts playing stops the love-room background song, so the two never talk over each other. */
document.addEventListener("play", e => {
  if (!e.target || e.target.tagName !== "VIDEO") return;
  const a = document.getElementById("love-background-audio"); if (a && !a.paused) a.pause();
  try { if (typeof MUSIC !== "undefined") MUSIC.room(); } catch(_){}
}, true);

/* Bring the arcade chiptune back when a video stops (not in the Me & My Love room). */
(function(){
  const back = e => {
    if (!e.target || e.target.tagName !== "VIDEO") return;
    if (document.body.dataset.room === "3") return;
    if ([...document.querySelectorAll("video")].some(v => !v.paused && !v.ended)) return;
    const n = typeof PAGE !== "undefined" ? PAGE : undefined;
    try { MUSIC.room(n); } catch(_){}
  };
  document.addEventListener("pause", back, true);
  document.addEventListener("ended", back, true);
})();
