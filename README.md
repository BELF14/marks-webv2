# My Life Arcade

## Project Overview

My Life Arcade is a static personal memories website presented as a retro arcade. The homepage links to eight standalone category pages, each with its own content and shared visual style. Three additional arcade experiences—Memory Match, Message Wall, and Secret Stage—remain under `arcades/`.

The project uses HTML, CSS, and vanilla JavaScript. It has no package installation or build step.

## Key Features

- Arcade-inspired homepage with direct links to each category.
- Dedicated pages for childhood, family, friends, love, food, movie, song, and jokes.
- Photo galleries with captions and an interactive lightbox.
- Category-specific experiences, including a recipe checklist, movie cast profiles, karaoke controls, and flip-card jokes.
- Shared arcade effects, scoring, sound, and browser-based progress storage.
- Responsive styling and reduced-motion support.

## Pages

The home page is `index.html`. Its category pages are:

| Category | Page |
|---|---|
| Childhood Memories | `childhood_memories.html` |
| Family & Relatives | `family_relatives.html` |
| My Friends | `my_friends.html` |
| Me & My Love | `me_and_my_love.html` |
| My Favorite Food | `my_favorite_food.html` |
| My Favorite Movie | `my_favorite_movie.html` |
| My Song | `my_song.html` |
| Joke Time | `joke_time.html` |

Memory Match, Message Wall, and Secret Stage are in `arcades/`.

## Technology

- **Markup:** HTML
- **Styles:** `css/style.css`
- **Shared interactions and page content:** `js/app.js`
- **Visual effects:** `js/fx.js`
- **Images:** `assets/images/`
- **Audio and video:** `assets/audio/` and `assets/video/`

Images are grouped into category folders under `assets/images/`. The Song and Joke Time folders are present for their categories and currently contain no image assets.

## Run Locally

Open `index.html` in a browser, or serve the project directory locally:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`. Serving locally is recommended for consistent browser media and storage behavior.

## Changelog

### 1.0.0 — Initial Release

- Added standalone HTML pages for all eight memory categories, with homepage and back-to-home navigation.
- Organized the existing images into category folders and updated the shared JavaScript media paths.
- Preserved the additional Memory Match, Message Wall, and Secret Stage experiences.
- Added initial project setup and usage documentation.

The current project version is recorded in `VERSION`.
