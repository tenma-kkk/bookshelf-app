// 本棚を撮る：まず本棚全体 → 上の段から1段ずつ。枠つきカメラで、まっすぐになったら自動でシャッター。
// 1段ごとに、自動で引いた本の境目を、違う所だけタップで直してから本棚に入れる。
import { getState, setShelf, addBook } from './store.js';
import { putImage } from './images.js';

const ROW_W = 560, PXMM = 4;   // 段の中の横幅（mm）と、切り出す細かさ（1mm あたりの点の数）
const $ = s => document.querySelector(s);
const S = { phase: 'all', rows: 5, row: 0, added: 0, colors: null };
let stream = null, raf = 0, tilt = null, holdStart = 0, lastProbe = 0, edgeOK = false, done = () => {};
const probe = document.createElement('canvas'), pctx = probe.getContext('2d', { willReadFrequently: true });
const within = (p, ms) => Promise.race([p, new Promise((_, ng) => setTimeout(() => ng(new Error('timeout')), ms))]);

export function openCapture(onDone) {
  done = onDone || (() => {});
  Object.assign(S, { phase: 'all', rows: 5, row: 0, added: 0, colors: null });
  $('#capture').hidden = false;
  showIntro();
}
function close() { stopCam(); $('#capture').hidden = true; done(S.added); }

// ---- 案内の画面 ----
function showIntro() {
  view('intro');
  const all = S.phase === 'all';
  $('#cpStep').textContent = all ? '本棚全体' : `${S.row + 1}段目 / ${S.rows}段`;
  $('#cpHead').textContent = all ? 'まず、本棚全体を撮ります' : `${S.row + 1}段目を撮ります`;
  $('#cpText').textContent = all ? '本棚の外側のわくが、枠にぴったり入るように正面から撮ってください。わくの色・中の色・段の数を読み取ります。'
    : 'スマホを横向きにして、棚板の上と下を枠の線に合わせてください。まっすぐになると、自動でシャッターが切れます。';
  $('#cpGo').textContent = all ? '本棚全体を撮る' : `${S.row + 1}段目を撮る`;
  $('#cpSkip').hidden = all;
}
function view(name) { for (const v of ['intro', 'cam', 'all', 'row']) $('#cp_' + v).hidden = v !== name; }

// ---- 枠つきカメラ ----
const aspect = () => S.phase === 'all' ? 0.62 : ROW_W / 236;
async function startCam() {
  const msg = $('#cpNote');
  msg.textContent = '';
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { msg.textContent = 'この画面ではカメラが使えません。'; return; }
  try { if (typeof DeviceMotionEvent !== 'undefined' && DeviceMotionEvent.requestPermission) await within(DeviceMotionEvent.requestPermission(), 4000); } catch (e) { /* 傾きセンサーなしでも撮れる */ }
  try { stream = await within(navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' }, width: { ideal: 3840 }, height: { ideal: 2160 } }, audio: false }), 6000); }
  catch (e) { msg.textContent = 'カメラを使えませんでした。カメラの使用を許可してから、もう一度押してください。'; return; }
  const v = $('#cpVideo');
  v.srcObject = stream;
  try { await v.play(); } catch (e) { /* 自動再生できなくても続ける */ }
  tilt = null; holdStart = 0;
  $('#cpCamStep').textContent = $('#cpStep').textContent;
  view('cam');
  addEventListener('devicemotion', onMotion);
  layoutFrame();
  raf = requestAnimationFrame(loop);
}
function stopCam() {
  cancelAnimationFrame(raf);
  removeEventListener('devicemotion', onMotion);
  if (stream) stream.getTracks().forEach(t => t.stop());
  stream = null;
}
function frameRect() {
  const cw = innerWidth, ch = innerHeight, a = aspect();
  let fw = cw * 0.9, fh = fw / a;
  const maxH = ch * (S.phase === 'all' ? 0.68 : 0.6);
  if (fh > maxH) { fh = maxH; fw = fh * a; }
  return { x: (cw - fw) / 2, y: (ch - fh) / 2, w: fw, h: fh };
}
function layoutFrame() {
  const r = frameRect(), W = innerWidth, H = innerHeight, L = Math.min(28, r.w / 5);
  $('#cpOv').setAttribute('viewBox', `0 0 ${W} ${H}`);
  $('#cpMask').setAttribute('d', `M0 0H${W}V${H}H0Z M${r.x} ${r.y}H${r.x + r.w}V${r.y + r.h}H${r.x}Z`);
  const c = [[r.x, r.y, 1, 1], [r.x + r.w, r.y, -1, 1], [r.x + r.w, r.y + r.h, -1, -1], [r.x, r.y + r.h, 1, -1]];
  $('#cpBrks').innerHTML = c.map(([x, y, dx, dy]) => `<path class="brk" d="M${x} ${y + dy * L}V${y}H${x + dx * L}"/>`).join('')
    + `<rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="1"/>`;
  $('#cpRot').hidden = !(S.phase === 'row' && H > W);
}
addEventListener('resize', () => { if (!$('#capture').hidden && !$('#cp_cam').hidden) layoutFrame(); });
function onMotion(e) {
  const g = e.accelerationIncludingGravity;
  if (!g || g.x == null) return;
  const n = Math.hypot(g.x, g.y, g.z) || 1;
  const pitch = Math.asin(Math.max(-1, Math.min(1, g.z / n))) * 57.3;
  let rot = Math.atan2(g.x, g.y) * 57.3; rot = ((rot % 90) + 90 + 45) % 90 - 45;
  tilt = { pitch, rot };
}
function vidMap() { const v = $('#cpVideo'), vw = v.videoWidth, vh = v.videoHeight, s = Math.max(innerWidth / vw, innerHeight / vh); return { s, ox: (innerWidth - vw * s) / 2, oy: (innerHeight - vh * s) / 2 }; }
function frameInVideo() { const r = frameRect(), m = vidMap(), f = (x, y) => [(x - m.ox) / m.s, (y - m.oy) / m.s]; return [f(r.x, r.y), f(r.x + r.w, r.y), f(r.x + r.w, r.y + r.h), f(r.x, r.y + r.h)]; }
// 枠の上と下の線の位置に、横一直線のくっきりした境目（棚板やわくのふち）があるか
function probeEdges(v) {
  const q = frameInVideo(), PW = 320, k = PW / v.videoWidth, PH = Math.round(v.videoHeight * k);
  probe.width = PW; probe.height = PH; pctx.drawImage(v, 0, 0, PW, PH);
  const d = pctx.getImageData(0, 0, PW, PH).data, Lm = (x, y) => { const i = (y * PW + x) * 4; return d[i] * 0.3 + d[i + 1] * 0.59 + d[i + 2] * 0.11; };
  const x0 = Math.max(1, Math.round(q[0][0] * k)), x1 = Math.min(PW - 2, Math.round(q[1][0] * k)), y0 = Math.round(q[0][1] * k), y1 = Math.round(q[3][1] * k);
  if (x1 - x0 < 20 || y1 - y0 < 10) return false;
  const rg = y => { if (y < 1 || y >= PH - 1) return 0; let s = 0, n = 0; for (let x = x0; x <= x1; x += 2) { s += Math.abs(Lm(x, y + 1) - Lm(x, y - 1)); n++; } return s / n; };
  let base = 0, bn = 0; for (let y = y0 + 4; y < y1 - 4; y += 3) { base += rg(y); bn++; } base /= Math.max(1, bn);
  const band = Math.max(3, Math.round((y1 - y0) * 0.06)), best = yc => { let m = 0; for (let y = yc - band; y <= yc + band; y++) m = Math.max(m, rg(y)); return m; };
  const thr = Math.max(9, base * 1.8);
  return best(y0) > thr && best(y1) > thr;
}
function loop(t) {
  raf = requestAnimationFrame(loop);
  const v = $('#cpVideo');
  if (!v.videoWidth) return;
  if (t - lastProbe > 180) { lastProbe = t; try { edgeOK = probeEdges(v); } catch (e) { edgeOK = false; } }
  const cam = $('#cp_cam');
  let lvl = null;
  if (tilt) {
    lvl = Math.abs(tilt.pitch) < 4 && Math.abs(tilt.rot) < 3;
    const cl = a => Math.max(-24, Math.min(24, a * 3));
    $('#cpBubble').style.transform = `translate(${cl(tilt.rot)}px,${cl(-tilt.pitch)}px)`;
  }
  cam.classList.toggle('level-ok', lvl === true);
  const ready = edgeOK && lvl !== false;
  cam.classList.toggle('ready', ready);
  cam.classList.toggle('tilted', lvl === false);
  $('#cpMsg').textContent = lvl === false ? 'スマホをまっすぐに（緑の丸をまん中へ）'
    : !edgeOK ? (S.phase === 'all' ? '本棚の外側のわくを、枠に合わせてください' : '棚板の上と下を、枠の線に合わせてください') : 'そのまま動かさないで…';
  if (ready) {
    if (!holdStart) holdStart = t;
    const p = Math.min(1, (t - holdStart) / 900);
    $('#cpArc').setAttribute('stroke-dasharray', `${p * 214} 214`);
    if (p >= 1) { holdStart = 0; shoot(); }
  } else { holdStart = 0; $('#cpArc').setAttribute('stroke-dasharray', '0 214'); }
}
function shoot() {
  const v = $('#cpVideo');
  if (!v.videoWidth) return;
  const q = frameInVideo(), k = Math.min(1, 3200 / Math.max(v.videoWidth, v.videoHeight));
  const c = document.createElement('canvas');
  c.width = Math.round(v.videoWidth * k); c.height = Math.round(v.videoHeight * k);
  c.getContext('2d').drawImage(v, 0, 0, c.width, c.height);
  stopCam();
  const src = c.getContext('2d', { willReadFrequently: true }).getImageData(0, 0, c.width, c.height);
  const quad = q.map(([x, y]) => [Math.max(0, Math.min(c.width, x * k)), Math.max(0, Math.min(c.height, y * k))]);
  setTimeout(() => S.phase === 'all' ? resultAll(src, quad) : resultRow(src, quad), 30);
}

// ---- ゆがみ直し ----
function solve(A, b) {
  const n = b.length, M = A.map((r, i) => [...r, b[i]]);
  for (let c = 0; c < n; c++) {
    let p = c; for (let r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[p][c])) p = r;
    [M[c], M[p]] = [M[p], M[c]];
    for (let r = 0; r < n; r++) { if (r === c) continue; const f = M[r][c] / M[c][c]; for (let k = c; k <= n; k++) M[r][k] -= f * M[c][k]; }
  }
  return M.map((r, i) => r[n] / r[i]);
}
function homography(from, to) {
  const A = [], b = [];
  for (let i = 0; i < 4; i++) { const [x, y] = from[i], [u, v] = to[i]; A.push([x, y, 1, 0, 0, 0, -u * x, -u * y]); b.push(u); A.push([0, 0, 0, x, y, 1, -v * x, -v * y]); b.push(v); }
  return [...solve(A, b), 1];
}
function rectify(src, q, W, H) {
  const h = homography([[0, 0], [W, 0], [W, H], [0, H]], q), sw = src.width, sh = src.height, sd = src.data, out = new ImageData(W, H), od = out.data;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const X = x + 0.5, Y = y + 0.5, z = h[6] * X + h[7] * Y + 1;
    let u = (h[0] * X + h[1] * Y + h[2]) / z - 0.5, v = (h[3] * X + h[4] * Y + h[5]) / z - 0.5;
    u = Math.max(0, Math.min(sw - 1.001, u)); v = Math.max(0, Math.min(sh - 1.001, v));
    const x0 = u | 0, y0 = v | 0, fx = u - x0, fy = v - y0, i = (y0 * sw + x0) * 4, j = i + sw * 4, o = (y * W + x) * 4;
    for (let c = 0; c < 3; c++) od[o + c] = (sd[i + c] * (1 - fx) + sd[i + 4 + c] * fx) * (1 - fy) + (sd[j + c] * (1 - fx) + sd[j + 4 + c] * fx) * fy;
    od[o + 3] = 255;
  }
  return out;
}
const len = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
const toCanvas = img => { const c = document.createElement('canvas'); c.width = img.width; c.height = img.height; c.getContext('2d').putImageData(img, 0, 0); return c; };

// ---- 本棚全体：段の数・わくの色・中の色 ----
function countRows(img) {
  const { width: W, height: H, data: d } = img, off = W * 4 * 3, prof = new Float32Array(H);
  for (let y = 4; y < H - 4; y++) { let n = 0, c = 0; for (let x = Math.round(W * 0.08); x < W * 0.92; x += 3) { const i = (y * W + x) * 4; if (Math.abs(d[i - off] + d[i - off + 1] + d[i - off + 2] - d[i + off] - d[i + off + 1] - d[i + off + 2]) > 60) n++; c++; } prof[y] = n / c; }
  const cand = []; for (let y = Math.round(H * 0.06); y < H * 0.94; y++) if (prof[y] > 0.6) cand.push(y);
  cand.sort((a, b) => prof[b] - prof[a]);
  const keep = []; for (const y of cand) if (keep.every(k => Math.abs(k - y) >= H * 0.08)) keep.push(y);
  return Math.max(1, Math.min(10, keep.length + 1));
}
function avgColor(img, pick) {
  const { width: W, height: H, data: d } = img; let r = 0, g = 0, b = 0, n = 0;
  for (let y = 0; y < H; y += 3) for (let x = 0; x < W; x += 3) if (pick(x, y)) { const i = (y * W + x) * 4; r += d[i]; g += d[i + 1]; b += d[i + 2]; n++; }
  n = n || 1;
  return '#' + [r / n, g / n, b / n].map(v => Math.round(v).toString(16).padStart(2, '0')).join('');
}
function resultAll(src, q) {
  const hw = (len(q[0], q[1]) + len(q[3], q[2])) / 2, hh = (len(q[0], q[3]) + len(q[1], q[2])) / 2;
  const W = 900, H = Math.round(W * hh / hw), img = rectify(src, q, W, H);
  S.rows = countRows(img);
  S.colors = {
    frame: avgColor(img, (x, y) => x < W * 0.025 || x > W * 0.975 || y < H * 0.012 || y > H * 0.988),
    inner: avgColor(img, (x, y) => x > W * 0.1 && x < W * 0.9 && y > H * 0.035 && y < H * 0.06),
  };
  const cv = $('#cpAllCv'); cv.width = W; cv.height = H; cv.getContext('2d').putImageData(img, 0, 0);
  $('#cpRows').textContent = S.rows + '段';
  $('#cpFrame').style.background = S.colors.frame; $('#cpInner').style.background = S.colors.inner;
  view('all');
}

// ---- 1段：本の境目を自動で見つけ、タップで直す ----
let ROW = null;
function detect(img) {
  const { width: W, height: H, data: d } = img, ya = Math.round(H * 0.3), yb = Math.round(H * 0.95), sc = new Float32Array(W);
  const L = (x, y) => { const i = (y * W + x) * 4; return [d[i], d[i + 1], d[i + 2]]; }, dd = (p, q) => Math.abs(p[0] - q[0]) + Math.abs(p[1] - q[1]) + Math.abs(p[2] - q[2]);
  for (let x = 4; x < W - 4; x++) {
    const fr = [0, 0, 0, 0]; let c = 0;
    for (let y = ya; y < yb; y += 3) { const q = Math.min(3, ((y - ya) / (yb - ya) * 4) | 0); if (dd(L(x - 3, y), L(x + 3, y)) > 45) fr[q]++; c++; }
    sc[x] = Math.min(...fr) / (c / 4);
  }
  const s2 = new Float32Array(W); for (let x = 3; x < W - 3; x++) s2[x] = (sc[x - 2] + 2 * sc[x - 1] + 3 * sc[x] + 2 * sc[x + 1] + sc[x + 2]) / 9;
  const gap = 6 * PXMM, cand = [];
  for (let x = gap; x < W - gap; x++) if (s2[x] >= 0.3 && s2[x] >= s2[x - 1] && s2[x] >= s2[x + 1]) cand.push(x);
  cand.sort((a, b) => s2[b] - s2[a]);
  const keep = []; for (const x of cand) if (keep.every(k => Math.abs(k - x) >= gap)) keep.push(x);
  return keep.sort((a, b) => a - b);
}
function resultRow(src, q) {
  const hw = (len(q[0], q[1]) + len(q[3], q[2])) / 2, hh = (len(q[0], q[3]) + len(q[1], q[2])) / 2;
  const hmm = Math.round(ROW_W * hh / hw), W = ROW_W * PXMM, H = hmm * PXMM, img = rectify(src, q, W, H);
  ROW = { img, canvas: toCanvas(img), W, H, hmm, cuts: detect(img), taps: 0 };
  ROW.auto = ROW.cuts.length;
  const fixImg = $('#cpRowImg');
  fixImg.src = ROW.canvas.toDataURL('image/jpeg', 0.85);
  fixImg.parentElement.style.aspectRatio = `${W} / ${H}`;   // 写真と線の位置をぴったり合わせる
  $('#cpRowHead').textContent = `${S.row + 1}段目の本の境目`;
  drawCuts();
  view('row');
}
function drawCuts() {
  const svg = $('#cpLines');
  svg.setAttribute('viewBox', `0 0 ${ROW.W} ${ROW.H}`);
  svg.innerHTML = ROW.cuts.map(c => `<line x1="${c}" y1="0" x2="${c}" y2="${ROW.H}"/>`).join('');
  $('#cpCount').textContent = `${ROW.cuts.length + 1}冊 ・ 直した回数 ${ROW.taps}回`;
}
function tapLines(e) {
  const r = e.currentTarget.getBoundingClientRect(), x = Math.round((e.clientX - r.left) / r.width * ROW.W), tol = 14 / r.width * ROW.W;
  const i = ROW.cuts.findIndex(c => Math.abs(c - x) < tol);
  if (i >= 0) ROW.cuts.splice(i, 1); else { ROW.cuts.push(x); ROW.cuts.sort((a, b) => a - b); }
  ROW.taps++;
  drawCuts();
}

// 直した線で本を切り分け、本の上の端から下までを1冊として本棚に入れる
async function saveRow() {
  const { img, canvas, W, H } = ROW, d = img.data;
  const px = (x, y) => { const i = (y * W + x) * 4; return [d[i], d[i + 1], d[i + 2]]; }, dd = (p, q) => Math.abs(p[0] - q[0]) + Math.abs(p[1] - q[1]) + Math.abs(p[2] - q[2]);
  const back = []; for (let x = 0; x < W; x += 7) for (let y = 4; y < H * 0.04; y += 2) back.push(px(x, y));
  const bk = [0, 1, 2].map(k => back.map(c => c[k]).sort((a, b) => a - b)[back.length >> 1]);
  const xs = [0, ...ROW.cuts, W];
  for (let i = 1; i < xs.length; i++) {
    const a = xs[i - 1], b = xs[i];
    if (b - a < 3 * PXMM) continue;
    let top = 0, run = 0;
    const ca = a + Math.round((b - a) * 0.25), cb = Math.max(ca + 1, b - Math.round((b - a) * 0.25));
    for (let y = 0; y < H * 0.7; y += 2) { let n = 0, c = 0; for (let x = ca; x < cb; x += 2) { if (dd(px(x, y), bk) > 60) n++; c++; } if (n / c > 0.6) { if (++run >= 3) { top = Math.max(0, y - 6); break; } } else run = 0; }
    if (H - top < H * 0.2) continue;   // 本のない、すき間
    const c = document.createElement('canvas'); c.width = b - a; c.height = H - top;
    c.getContext('2d').drawImage(canvas, a, top, b - a, H - top, 0, 0, b - a, H - top);
    const blob = await new Promise(ok => c.toBlob(ok, 'image/jpeg', 0.88));
    const avg = avgColor(c.getContext('2d').getImageData(0, 0, c.width, c.height), () => true);
    const id = addBook({ title: '', author: '', format: 'shiroku', h: Math.round((H - top) / PXMM), w: Math.round((b - a) / PXMM * 10) / 10, color: avg, img: true, row: S.row + 1 });
    await putImage(id, blob);
    S.added++;
  }
}

export function initCapture() {
  $('#cpGo').onclick = startCam;
  $('#cpClose').onclick = close;
  $('#cpCamBack').onclick = () => { stopCam(); showIntro(); };
  $('#cpShutter').onclick = shoot;
  $('#cpRowsMinus').onclick = () => { if (S.rows > 1) { S.rows--; $('#cpRows').textContent = S.rows + '段'; } };
  $('#cpRowsPlus').onclick = () => { if (S.rows < 10) { S.rows++; $('#cpRows').textContent = S.rows + '段'; } };
  $('#cpUseColors').onclick = () => { setShelf({ mat: 'paint', frame: S.colors.frame, inner: S.colors.inner, top: 'same', brass: false, preset: 'custom' }); $('#cpUseColors').textContent = 'この色の本棚にしました'; };
  $('#cpAllOk').onclick = () => { S.phase = 'row'; S.row = 0; showIntro(); };
  $('#cpAllRetake').onclick = () => { showIntro(); };
  $('#cpLines').addEventListener('click', tapLines);
  $('#cpReset').onclick = () => { ROW.cuts = detect(ROW.img); ROW.taps = 0; drawCuts(); };
  $('#cpRowRetake').onclick = () => showIntro();
  $('#cpRowOk').onclick = async () => {
    const b = $('#cpRowOk'); b.disabled = true; b.textContent = '本棚に入れています…';
    try { await saveRow(); } finally { b.disabled = false; b.textContent = '本棚に入れる'; }
    S.row++;
    if (S.row >= S.rows) close(); else showIntro();
  };
  $('#cpSkip').onclick = () => close();
}

// 確かめ用：カメラなしで、写真から1段の画面を出す（パソコンでの確認に使う）
export function __testRow(src, quad) { $('#capture').hidden = false; S.phase = 'row'; S.row = 0; S.rows = 1; resultRow(src, quad); }
