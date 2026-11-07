/* ============ MY LIFE ARCADE — fx.js · the transformation layer ============
   Boids flock · gravity well · comet cursor trail · cabinet glow + pixel sparkle · letter physics
   pixel-dissolve entry · scroll-velocity skew · 3D cabinet wave · text decode · OVERDRIVE (press O)
   Loads after app.js, touches nothing in it. Delete the <script> tag to turn it all off. */
(() => {
  if (typeof CALM !== "undefined" && CALM) return;
  const D = document, B = D.body, R = Math.random, TAU = Math.PI * 2, $$ = s => [...D.querySelectorAll(s)];
  const FN = typeof FINE === "undefined" ? true : FINE;
  let W = innerWidth, H = innerHeight, mx = W / 2, my = H / 2, down = false, acc = "125,255,79";
  let f = 0, ema = 16, prev = 0, vel = 0, lastY = scrollY, hot = null, units = [], over = 0, lastT = 0;

  /* ---------- shared overlay canvas ---------- */
  const cv = D.createElement("canvas"); cv.setAttribute("aria-hidden", "true");
  cv.style.cssText = "position:fixed;inset:0;width:100%;height:100%;z-index:59;pointer-events:none";
  const st = D.createElement("style"); st.textContent = "#home{overflow-x:clip}"; D.head.appendChild(st);
  B.appendChild(cv); const g = cv.getContext("2d", { desynchronized: true });
  const size = () => { const d = 1; W = innerWidth;   // effects are chunky pixels: 1x is enough and costs 4x less on retina screens
    H = innerHeight; cv.width = W * d; cv.height = H * d; g.setTransform(d, 0, 0, d, 0, 0); };
  size(); addEventListener("resize", size);
  addEventListener("pointermove", e => { mx = e.clientX; my = e.clientY; }, { passive: true });
  addEventListener("pointerdown", e => { down = !e.target.closest("button,a,input,textarea,.ed,#lb,#gameover,.fc,.ph,.cm"); });
  addEventListener("pointerup", () => down = false);
  addEventListener("blur", () => down = false);

  /* ---------- boids: pixel chevrons that flock, flee the cursor, and fall into a gravity well on hold ---------- */
  const boids = Array.from({ length: W < 700 || (navigator.hardwareConcurrency || 4) <= 4 ? 20 : 40 }, () => ({ x: R() * W, y: R() * H, vx: R() - .5, vy: R() - .5 }));
  function flock() {
    for (const a of boids) {
      let ax = 0, ay = 0, cx = 0, cy = 0, sx = 0, sy = 0, n = 0;
      for (const b of boids) {
        if (a === b) continue;
        const dx = b.x - a.x, dy = b.y - a.y, d = dx * dx + dy * dy;
        if (d < 14400) { n++; ax += b.vx; ay += b.vy; cx += b.x; cy += b.y; if (d < 1600) { sx -= dx; sy -= dy; } }
      }
      if (n) { a.vx += (ax / n - a.vx) * .03 + (cx / n - a.x) * .0008 + sx * .004; a.vy += (ay / n - a.vy) * .03 + (cy / n - a.y) * .0008 + sy * .004; }
      const dx = mx - a.x, dy = my - a.y, d = Math.hypot(dx, dy) || 1;
      if (down) { a.vx += dx / d * .4 + dy / d * .25; a.vy += dy / d * .4 - dx / d * .25; }   // spiral into the well
      else if (d < 140) { a.vx -= dx / d * .5; a.vy -= dy / d * .5; }
      const s = Math.hypot(a.vx, a.vy), m = down ? 7.5 : 2.4;
      if (s > m) { a.vx *= m / s; a.vy *= m / s; } else if (s < .8) { a.vx *= 1.06; a.vy *= 1.06; }
      a.x = (a.x + a.vx + W) % W; a.y = (a.y + a.vy + H) % H;
    }
  }
  function drawBoids() {
    for (const a of boids) {
      g.save(); g.translate(a.x, a.y); g.rotate(Math.atan2(a.vy, a.vx));
      g.fillStyle = `rgba(${acc},${down ? .85 : .5})`;
      g.fillRect(3, -1, 4, 2); g.fillRect(0, -3, 3, 2); g.fillRect(0, 1, 3, 2); g.fillRect(-4, -5, 3, 2); g.fillRect(-4, 3, 3, 2);
      g.restore();
    }
    if (down) {   // the well itself: rotating pixel ring
      for (let i = 0; i < 16; i++) { const a = i / 16 * TAU + f * .08, r = 26 + Math.sin(f * .2 + i) * 6; g.fillStyle = `rgba(${acc},${.35 + (i % 2) * .3})`; g.fillRect(mx + Math.cos(a) * r - 2, my + Math.sin(a) * r - 2, 4, 4); }
    }
  }

  /* ---------- comet trail: spring chain of pixels ---------- */
  const trail = Array.from({ length: 16 }, () => ({ x: mx, y: my }));
  function drawTrail() {
    let px = mx, py = my;
    trail.forEach((p, i) => {
      p.x += (px - p.x) * .42; p.y += (py - p.y) * .42; px = p.x; py = p.y;
      const s = Math.max(2, 10 - i * .55) | 0; g.fillStyle = `rgba(${acc},${(1 - i / 16) * .7})`; g.fillRect(p.x - s / 2 | 0, p.y - s / 2 | 0, s, s);
    });
  }

  /* ---------- chill cabinet ambience: soft neon halo + drifting pixel twinkles ---------- */
  const rgbOf = u => { try { return hexRgb(folders[+u.dataset.i].c); } catch (e) { return acc; } };
  const dust = []; let glow = 0, gx = 0, gy = 0, gc = acc;
  function ambience() {
    const me = hot && units.find(u => u.el === hot);
    if (me) { gx = me.cx; gy = me.my + (me.el._ty || 0); gc = rgbOf(hot); }
    glow += ((me ? 1 : 0) - glow) * .07;
    if (glow > .02) {
      const r = g.createRadialGradient(gx, gy, 20, gx, gy, 280);
      r.addColorStop(0, `rgba(${gc},${.13 * glow})`); r.addColorStop(1, `rgba(${gc},0)`);
      g.fillStyle = r; g.fillRect(gx - 280, gy - 280, 560, 560);
    }
    if (me && f % 5 === 0 && dust.length < 40) dust.push({ x: gx + (R() - .5) * 170, y: gy + (R() - .1) * 190, vy: -.2 - R() * .3, l: 1, c: gc, k: R() * TAU });
    for (let i = dust.length - 1; i >= 0; i--) {
      const p = dust[i]; p.y += p.vy; p.x += Math.sin(f / 40 + p.k) * .2; p.l -= .008;
      if (p.l <= 0) { dust.splice(i, 1); continue; }
      const a = p.l * (.55 + .45 * Math.sin(f * .12 + p.k)), x = p.x | 0, y = p.y | 0;
      g.fillStyle = `rgba(${p.c},${a})`; g.fillRect(x - 1, y - 4, 2, 8); g.fillRect(x - 4, y - 1, 8, 2);   // soft pixel sparkle
      g.fillStyle = `rgba(255,255,255,${a * .8})`; g.fillRect(x - 1, y - 1, 2, 2);
    }
  }
  D.addEventListener("pointerover", e => { const u = e.target.closest?.(".unit"); hot = u || null; });

  /* ---------- hero letter physics ---------- */
  const L = $$(".logo .lw i").map(el => ({ el, x: 0, y: 0, vx: 0, vy: 0, r: 0, vr: 0 }));
  let lr = null, awake = 0;
  function letters() {
    if (f % 8 === 0) { const q = D.querySelector(".logo"); lr = q && q.getBoundingClientRect(); }
    if (!lr || !lr.width) return;
    if (mx > lr.left - 220 && mx < lr.right + 220 && my > lr.top - 220 && my < lr.bottom + 220) awake = 90;   // wake ~1.5s after the cursor leaves
    if (awake <= 0) return; awake--;
    const rects = L.map(l => l.el.getBoundingClientRect());   // read pass
    L.forEach((l, i) => {
      const r = rects[i]; if (!r.width) return;
      const cx = r.left + r.width / 2 - l.x, cy = r.top + r.height / 2 - l.y, dx = cx - mx, dy = cy - my, d = Math.hypot(dx, dy) || 1;
      if (d < 190) { const p = (1 - d / 190) ** 2 * 4.5; l.vx += dx / d * p; l.vy += dy / d * p; l.vr += (dx / d) * p * .9; }
      l.vx += -l.x * .06; l.vy += -l.y * .06; l.vr += -l.r * .06;
      l.vx *= .86; l.vy *= .86; l.vr *= .86; l.x += l.vx; l.y += l.vy; l.r += l.vr;
      l.el.style.translate = `${l.x.toFixed(1)}px ${l.y.toFixed(1)}px`; l.el.style.rotate = `${l.r.toFixed(1)}deg`;
    });
  }
  D.addEventListener("pointerdown", e => {   // click the logo: shatter it
    if (!e.target.closest(".logo")) return;
    awake = 120; L.forEach(l => { const a = R() * TAU, v = 14 + R() * 18; l.vx += Math.cos(a) * v; l.vy += Math.sin(a) * v - 8; l.vr += (R() - .5) * 60; });
    try { SFX.err(); field.burst(mx, my, 40, [acc, "255,255,255"]); } catch (_) {}
  });

  /* ---------- text decode ---------- */
  const GL = "█▓▒░<>/\\#%&*+=?01";
  function scramble(el, delay = 0) {
    if (!el || el._s) return; const to = el.textContent; el._s = 1; let k = 0;
    setTimeout(() => { const id = setInterval(() => {
      el.textContent = [...to].map((c, i) => c === " " || c === "\n" || i < k / 1.6 ? c : GL[R() * GL.length | 0]).join("");
      if (++k > to.length * 1.6 + 3) { el.textContent = to; el._s = 0; clearInterval(id); }
    }, 30); }, delay);
  }
  $$(".lede,#lvl,#note,.floor-label span").forEach((el, i) => { if (el.offsetParent !== null || el.id) scramble(el, 500 + i * 140); });
  D.addEventListener("pointerover", e => { const b = e.target.closest?.(".unit")?.querySelector(".ulabel b"); if (b && !b._s) scramble(b); });

  /* ---------- pixel-dissolve entry transition ---------- */
  if (!$("boot")) {
    const c = D.createElement("canvas"); c.width = W; c.height = H;
    c.style.cssText = "position:fixed;inset:0;width:100%;height:100%;z-index:90;pointer-events:none"; B.appendChild(c);
    const x = c.getContext("2d"), S = W < 700 ? 30 : 44, cols = Math.ceil(W / S), rows = Math.ceil(H / S), mid = Math.hypot(cols / 2, rows / 2), T0 = performance.now(), DUR = 1250;
    const cells = []; for (let r = 0; r < rows; r++) for (let q = 0; q < cols; q++) cells.push([q, r, Math.hypot(q - cols / 2, r - rows / 2) / mid * .55 + R() * .25]);
    (function tick(now) {
      const t = (now - T0) / DUR; x.clearRect(0, 0, W, H); let live = 0;
      for (const [q, r, off] of cells) {
        const p = Math.min(1, Math.max(0, (t - off) / .35)); if (p >= 1) continue; live++;
        const s = S * (1 - p * p), o = (S - s) / 2; x.fillStyle = "#020905"; x.fillRect(q * S + o, r * S + o, s, s);
        x.strokeStyle = `rgba(${acc},${1 - p})`; x.lineWidth = 2; x.strokeRect(q * S + o + 1, r * S + o + 1, s - 2, s - 2);
      }
      if (live) requestAnimationFrame(tick); else c.remove();
    })(T0);
  }

  /* ---------- OVERDRIVE (press O): matrix rain, hue storm, screen shake ---------- */
  const rain = Array.from({ length: Math.ceil(W / 16) }, () => R() * -H);
  function overdrive() {
    if (over) return; over = 180;   // ~3s of frames, reset each frame below
    try { SFX.unlock(); toast("ARCADE OVERDRIVE"); field.burst(W / 2, H / 2, 60, [acc, "255,255,255"]); } catch (_) {}
  }
  addEventListener("keydown", e => { if ((e.key === "o" || e.key === "O") && !e.target.closest?.(".ed,input,textarea") && !e.ctrlKey && !e.metaKey) overdrive(); });
  function drawOver() {
    const k = over / 180, main = $("main");
    g.font = "16px monospace";
    rain.forEach((y, i) => {
      for (let j = 0; j < 14; j++) { g.fillStyle = j ? `rgba(${acc},${(1 - j / 14) * .8 * k})` : `rgba(255,255,255,${k})`; g.fillText(String.fromCharCode(0x30A0 + R() * 90 | 0), i * 16, y - j * 16); }
      rain[i] = y > H + 220 ? R() * -300 : y + 14 + (i % 5) * 3;
    });
    if (main) { main.style.filter = `hue-rotate(${Math.sin(f * .12) * 70 * k}deg) saturate(${1 + .5 * k})`; main.style.translate = `${(R() - .5) * 8 * k}px ${(R() - .5) * 8 * k}px`; }
    if (--over <= 0 && main) { main.style.filter = ""; main.style.translate = ""; }
  }

  /* ---------- per-frame: scroll skew + 3D cabinet wave + hero parallax ---------- */
  let grids = [], dirty = true, sun = null, home = null;
  addEventListener("scroll", () => dirty = true, { passive: true }); addEventListener("resize", () => dirty = true);
  function scene() {
    if (f % 30 === 1) { grids = $$("#grid,.photos"); sun = D.querySelector(".horizon .sun"); home = $("home"); dirty = true; }
    vel += ((scrollY - lastY) - vel) * .15; lastY = scrollY;
    const sk = Math.max(-4, Math.min(4, vel * .12)), tf = Math.abs(sk) > .03 ? `skewY(${sk.toFixed(2)}deg)` : "";
    for (const el of grids) if (el._sk !== tf) { el.style.transform = tf; el._sk = tf; }
    if (!home || home.hidden) return;
    if (dirty || tf) {   // layout reads only while something actually moved (scroll / resize / periodic refresh)
      dirty = false;
      units = $$(".unit").map(el => { const r = el.getBoundingClientRect(), o = el._ty || 0; return { el, cx: r.left + r.width / 2, my: r.top + r.height / 2 - o }; });   // subtract our own offset so the wave can't feed back into itself
      for (const u of units) {
        const d = Math.max(-1, Math.min(1, (u.my - H / 2) / H)), ty = Math.round(-d * 14);
        if (u.el._ty !== ty) { u.el._ty = ty; u.el.style.translate = `0 ${ty}px`; u.el.style.rotate = `${(Math.round(d * 16) / 10).toFixed(1)}deg`; }
      }
    }
    if (sun) sun.style.translate = `${((mx / W - .5) * -34).toFixed(1)}px ${(scrollY * .28 + (my / H - .5) * -22).toFixed(1)}px`;
  }

  /* ---------- master loop ---------- */
  (function loop(now) {
    requestAnimationFrame(loop);
    if (prev) ema += (Math.min(now - prev, 100) - ema) * .05; prev = now;
    if (D.hidden || now - lastT < (ema > 24 ? 30 : 15)) return; lastT = now; f++;   // adaptive: drop to ~30fps when the device is struggling
    if (B.classList.contains("lock-scroll")) { if (f % 10 === 0) g.clearRect(0, 0, W, H); return; }   // lightbox open: stop animating
    if (f % 40 === 1) acc = getComputedStyle(B).getPropertyValue("--accent-rgb").trim() || acc;
    g.clearRect(0, 0, W, H);
    scene(); flock(); drawBoids(); ambience(); if (FN) drawTrail(); if (L.length) letters(); if (over) drawOver();
  })(0);
})();
