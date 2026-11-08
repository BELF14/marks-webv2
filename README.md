# My Life Arcade

My Life Arcade is a static personal memories website with an arcade-inspired home page, eight category pages, and three additional arcade stages. It is built with HTML, CSS, and vanilla JavaScript; no package installation or build step is required.

## Run locally

Open `index.html` in a browser, or serve the project directory locally:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`. Serving locally is recommended for consistent browser media and storage behavior.

## Pages

The home page links to these category pages:

- `childhood_memories.html`
- `family_relatives.html`
- `my_friends.html`
- `me_and_my_love.html`
- `my_favorite_food.html`
- `my_favorite_movie.html`
- `my_song.html`
- `joke_time.html`

Memory Match, Message Wall, and the Secret Stage remain in `arcades/`.

## Media and interactions

Category images are kept in folders under `assets/images/`; videos and audio remain under `assets/video/` and `assets/audio/`. `js/app.js` contains the shared arcade, gallery, lightbox, media, and mini-game behavior. `js/fx.js` provides visual effects, and `css/style.css` contains the shared design.

The project version is recorded in `VERSION`. This is the initial published release, **1.0.0**.
