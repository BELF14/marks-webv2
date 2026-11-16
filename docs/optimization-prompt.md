# Optimization prompt

Prompt for an AI coding agent to optimize this site for mobile, tablet and desktop.

```
You are optimizing "My Life Arcade", a static personal website (HTML, CSS and
vanilla JS, no build step) for speed and usability on mobile, tablet and desktop.

REPO LAYOUT
- index.html (home with arcade cabinets) and 8 category pages in the root
- arcades/ (memory.html, wall.html, secret.html are real; the other 8 files
  are stale duplicates)
- js/app.js (about 1,500 lines, all game logic), js/fx.js (visual effects)
- css/style.css, assets/images, assets/audio/love.mp3 (6.7 MB), assets/video (2 x 3.3 MB)

RULES
- Do not change the content, photos, captions, game logic or visual style.
- Keep honoring prefers-reduced-motion (the CALM flag in app.js).
- Make small, reviewable commits grouped by area, and list what changed and
  the expected effect after each group.

TARGETS
- Lighthouse Performance 90+ on mobile and desktop
- LCP under 2.5 s on a throttled 4G connection
- CLS under 0.1
- Stable 60 fps on desktop and at least 30 fps on a mid-range phone

1. SHARED PERFORMANCE (all devices)
- Merge the four requestAnimationFrame loops (background canvas in app.js, fx.js
  overlay, cursor, effects) into a single loop. Pause it when document.hidden
  is true. Skip the cursor loop when the pointer is idle.
- Cap background canvas pixel density at 1x on phones and tablets.
- Shorten the page transitions: click delay 950 ms to about 400 ms, the fx.js
  pixel-dissolve from 1.25 s to about 600 ms, and prefetch the destination page
  on hover or touchstart. On first visit, end the boot screen as soon as
  images are loaded instead of waiting up to 2.6 s.
- Videos: preload="metadata" plus a poster image. Re-encode love.mp3 to
  about 96-128 kbps. Convert photos to WebP with JPG fallback.
- Add width and height attributes to every <img> (the MEDIA object already has
  w and h) to prevent layout shift. Add loading="lazy" to off-screen images.
- Self-host Press Start 2P and VT323 as WOFF2 with font-display: swap and
  preload the hero font. Drop or subset Geist Mono.
- Minify CSS and JS. Split app.js into a small core plus per-game modules that
  load on demand (guestbook, photo booth, karaoke, memory match).
- Add cache-busting via the VERSION file.

2. MOBILE (up to 599 px, touch)
- Detect capabilities with (hover: none) and (pointer: coarse), not only width.
  Turn off the custom cursor, 3D tilt, comet trail and boids on touch devices.
- Use dvh instead of vh (for example the wipe overlay and full-screen
  sections) so browser toolbars don't cut content off. Respect safe-area
  insets for the HUD and footer.
- All tap targets at least 44x44 px, with at least 8 px between them. Raise
  the 8-10 px pixel-font labels to at least 11-12 px.
- Lightbox: add swipe left/right and swipe-down-to-close, and lock body
  scroll while it is open.
- Reduce the number of floating shapes, hearts and petals, and avoid
  heavy filters (blur, hue-rotate) on large areas.
- Do not autoplay audio or video. Keep sound opt-in behind the existing toggle.
- Respect Save-Data and slow connections by skipping the boot preload of images.

3. TABLET (600-1024 px, touch or hybrid)
- Treat tablets as touch devices when (pointer: coarse), even if the width
  is above 700 px. The current code only switches behavior at 700 px wide.
- Use a 2-3 column cabinet grid with comfortable spacing in both portrait
  and landscape. Test orientation changes without a reload.
- Keep hover-only effects available only when (hover: hover) is true,
  so iPads with a keyboard or mouse still get them.
- Moderate effect counts: about 30 boids and the reduced shape count.

4. DESKTOP (1025 px and up, mouse and keyboard)
- Keep the custom cursor, tilt, trail and boids, but pause them when the tab
  is hidden or the lightbox is open.
- Cap the maximum content width on ultrawide screens so the cabinets don't
  stretch. Add keyboard support: arrow keys in the lightbox and gallery,
  Esc to close, Enter to start, and a visible :focus-visible style everywhere.
- Add a Skip button and key handler to the boot screen.

5. VERIFY
- Test in Chrome DevTools at 375x667, 390x844, 768x1024, 1024x768 and 1440x900
  with CPU 4x slowdown and Slow 4G.
- Run Lighthouse on index.html and one gallery page for each of mobile
  and desktop, and report before and after scores.
- Confirm there is no horizontal scroll and no layout shift at any breakpoint.
- Confirm that with prefers-reduced-motion enabled, no animation runs.
```
