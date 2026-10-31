// 背表紙の描き直し（見本4のやり方）：写真をそのまま貼らず、
//  ・背景は、影のない所で測った「平らな色の帯」にする
//  ・文字・ロゴ・絵は、写真から形を取り出して、なめらかになぞり直し、測った色で塗る
// 近づいてもぼやけず、まわりと違う色の四角も出ない。うまく読めない背表紙は、くずれた形を出さずに「近くで撮り直し」にする
const SCALE = 2;   // 描き直す細かさ（写真の2倍）

const med = a => a.slice().sort((p, q) => p - q)[a.length >> 1];
const dist3 = (p, q) => Math.abs(p[0] - q[0]) + Math.abs(p[1] - q[1]) + Math.abs(p[2] - q[2]);

// 背景の色の帯：左右の余白（文字のない所）を上から下まで測り、色が変わる所で区切って平らにする
function bands(d, w, h) {
  const cols = [];
  for (let x = Math.round(w * 0.06); x < w * 0.16; x++) cols.push(x);
  for (let x = Math.round(w * 0.84); x < w * 0.94; x++) cols.push(x);
  const row = [];
  for (let y = 0; y < h; y++) {
    const r = [], g = [], b = [];
    for (const x of cols) { const i = (y * w + x) * 4; r.push(d[i]); g.push(d[i + 1]); b.push(d[i + 2]); }
    row.push([med(r), med(g), med(b)]);
  }
  const R = Math.max(4, Math.round(h * 0.02));
  const prof = row.map((_, y) => { const win = row.slice(Math.max(0, y - R), y + R + 1); return [0, 1, 2].map(k => med(win.map(c => c[k]))); });
  const minLen = Math.max(6, Math.round(h * 0.035)), out = [];
  let st = 0;
  const colOf = (a, z) => { const seg = prof.slice(a, z); return [0, 1, 2].map(k => med(seg.map(c => c[k]))); };
  for (let y = 1; y <= h; y++) {
    if (y === h) { out.push([st, h]); break; }
    const cur = colOf(st, y);
    if (dist3(prof[y], cur) > 60 && y - st >= minLen) {
      let ok = true;
      for (let t = y; t < Math.min(h, y + minLen); t++) if (dist3(prof[t], cur) <= 60) { ok = false; break; }
      if (ok) { out.push([st, y]); st = y; }
    }
  }
  return out.map(([a, z]) => ({ a, z, col: colOf(a, z) }));
}

// 文字・ロゴ・絵の形：「すぐ近くより明るい（暗い）所」を取り出す。明るさ・赤・緑・青のうち、いちばんはっきり分かれる見方を使う
function shapes(d, w, h, bg) {
  const N = w * h, xa = Math.round(w * 0.08), xb = Math.round(w * 0.92), r = Math.max(4, Math.round(w * 0.3));
  const CH = [[0.3, 0.59, 0.11], [1, 0, 0], [0, 1, 0], [0, 0, 1]];
  let best = null;
  for (const wt of CH) {
    const L = new Float32Array(N);
    for (let j = 0; j < N; j++) { const i = j * 4; L[j] = d[i] * wt[0] + d[i + 1] * wt[1] + d[i + 2] * wt[2]; }
    const I = new Float64Array((w + 1) * (h + 1));
    for (let y = 0; y < h; y++) { let rs = 0; for (let x = 0; x < w; x++) { rs += L[y * w + x]; I[(y + 1) * (w + 1) + x + 1] = I[y * (w + 1) + x + 1] + rs; } }
    const diff = new Float32Array(N), vals = [];
    for (let y = 0; y < h; y++) {
      const ya = Math.max(0, y - r), yb = Math.min(h, y + r + 1);
      for (let x = xa; x < xb; x++) {
        const a = Math.max(0, x - r), b = Math.min(w, x + r + 1);
        const m = (I[yb * (w + 1) + b] - I[ya * (w + 1) + b] - I[yb * (w + 1) + a] + I[ya * (w + 1) + a]) / ((yb - ya) * (b - a));
        const v = L[y * w + x] - m; diff[y * w + x] = v; vals.push(v);
      }
    }
    vals.sort((p, q) => p - q);
    const lo = -vals[Math.floor(vals.length * 0.03)], hi = vals[Math.floor(vals.length * 0.97)];
    const score = Math.max(hi, lo) - 0.6 * Math.min(hi, lo);
    if (!best || (wt !== CH[0] && score > best.score * 1.8)) best = { diff, sgn: hi >= lo ? 1 : -1, span: Math.max(18, Math.max(hi, lo)), score };
  }
  const A = new Float32Array(N);
  for (let j = 0; j < N; j++) A[j] = Math.max(0, Math.min(1, (best.sgn * best.diff[j] - 0.3 * best.span) / (0.4 * best.span)));
  // 大きな文字が地をうめつくす所は近所とくらべられないので、地の色（色の帯）からの離れ方でもみる。
  // ただし、その行の大半が「地と違う」ときは、地の色の読みちがいとみなして使わない
  if (bg) {
    for (let y = 0; y < h; y++) {
      const c = bg[y]; let n = 0; const row = new Float32Array(xb - xa);
      for (let x = xa; x < xb; x++) { const i = (y * w + x) * 4, v = Math.abs(d[i] - c[0]) + Math.abs(d[i + 1] - c[1]) + Math.abs(d[i + 2] - c[2]); row[x - xa] = Math.max(0, Math.min(1, (v - 70) / 60)); if (row[x - xa] > 0.5) n++; }
      if (n / (xb - xa) > 0.7) continue;
      for (let x = xa; x < xb; x++) { const j = y * w + x; A[j] = Math.max(A[j], row[x - xa]); }
    }
  }
  // 小さなごみ（光の反射・本のふちの影）を消す
  const keep = new Uint8Array(N), seen = new Uint8Array(N), stack = [];
  for (let j = 0; j < N; j++) {
    if (seen[j] || A[j] < 0.5) continue;
    const comp = []; stack.push(j); seen[j] = 1;
    while (stack.length) {
      const c = stack.pop(); comp.push(c);
      const x = c % w, y = (c / w) | 0;
      for (const n of [x > 0 ? c - 1 : -1, x < w - 1 ? c + 1 : -1, y > 0 ? c - w : -1, y < h - 1 ? c + w : -1]) if (n >= 0 && !seen[n] && A[n] >= 0.5) { seen[n] = 1; stack.push(n); }
    }
    let x0 = w, x1 = 0, y0 = h, y1 = 0;
    for (const c of comp) { const x = c % w, y = (c / w) | 0; if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
    const edgeLine = ((x1 - x0) < w * 0.08 && (y1 - y0) > h * 0.5) || ((y0 <= h * 0.02 || y1 >= h * 0.98) && (y1 - y0) < Math.max(4, w * 0.12) && (x1 - x0) > w * 0.3);
    if (comp.length >= 12 && !edgeLine) for (const c of comp) keep[c] = 1;
  }
  for (let j = 0; j < N; j++) if (!keep[j]) { let near = 0; for (const n of [j - 1, j + 1, j - w, j + w]) if (n >= 0 && n < N && keep[n]) near = 1; if (!near) A[j] = 0; }
  let kc = 0, ins = 0;
  for (let y = 0; y < h; y++) for (let x = xa; x < xb; x++) { ins++; if (keep[y * w + x]) kc++; }
  // 色：濃くはっきりした所だけで測り、3色まで。近い色はまとめる
  const core = []; for (let j = 0; j < N; j++) if (keep[j] && A[j] > 0.95) core.push(j * 4);
  const px = i => [d[i], d[i + 1], d[i + 2]];
  let cs = [];
  if (core.length) {
    cs.push(px(core[0]));
    while (cs.length < 3) { let far = -1, pick = core[0]; for (const i of core) { const v = Math.min(...cs.map(c => dist3(px(i), c))); if (v > far) { far = v; pick = i; } } if (far < 90) break; cs.push(px(pick)); }
    for (let it = 0; it < 8; it++) {
      const sum = cs.map(() => [0, 0, 0, 0]);
      for (const i of core) { let k = 0, bd = 1e9; cs.forEach((c, ci) => { const v = dist3(px(i), c); if (v < bd) { bd = v; k = ci; } }); sum[k][0] += d[i]; sum[k][1] += d[i + 1]; sum[k][2] += d[i + 2]; sum[k][3]++; }
      cs = sum.map((s, k) => s[3] ? [s[0] / s[3], s[1] / s[3], s[2] / s[3]] : cs[k]);
    }
  }
  const owner = new Uint8Array(N);
  if (cs.length > 1) for (let j = 0; j < N; j++) { if (!A[j]) continue; let k = 0, bd = 1e9; cs.forEach((c, ci) => { const v = dist3(px(j * 4), c); if (v < bd) { bd = v; k = ci; } }); owner[j] = k; }
  return { A, owner, cs, coverage: kc / Math.max(1, ins) };
}

// crop：写真から切り出した1冊の背表紙（canvas）。gain：部屋の明かりの色を打ち消す倍率
export function redrawSpine(crop, gain = [1, 1, 1]) {
  const w = crop.width, h = crop.height, d = crop.getContext('2d', { willReadFrequently: true }).getImageData(0, 0, w, h).data;
  const fix = c => c.map((v, i) => Math.max(0, Math.min(255, Math.round(v * gain[i]))));
  const bs = bands(d, w, h), bgRow = new Array(h);
  for (const b of bs) for (let y = b.a; y < b.z; y++) bgRow[y] = b.col;
  const sh = shapes(d, w, h, bgRow);
  if (sh.coverage > 0.62 || !sh.cs.length) return { canvas: null, retake: sh.coverage > 0.62 };
  const W = w * SCALE, H = h * SCALE, out = document.createElement('canvas');
  out.width = W; out.height = H;
  const ox = out.getContext('2d');
  for (const b of bs) { const c = fix(b.col); ox.fillStyle = `rgb(${c[0]},${c[1]},${c[2]})`; ox.fillRect(0, b.a * SCALE, W, (b.z - b.a) * SCALE + 1); }
  sh.cs.forEach((c, L) => {
    const m = document.createElement('canvas'); m.width = w; m.height = h;
    const mx = m.getContext('2d'), md = mx.createImageData(w, h);
    for (let j = 0; j < w * h; j++) { const a = sh.owner[j] === L ? sh.A[j] : 0; md.data[j * 4] = md.data[j * 4 + 1] = md.data[j * 4 + 2] = a * 255; md.data[j * 4 + 3] = 255; }
    mx.putImageData(md, 0, 0);
    // 大きくしてから、ぼかし→くっきり、で線をなめらかになぞり直す
    const o = document.createElement('canvas'); o.width = W; o.height = H;
    const x = o.getContext('2d');
    x.imageSmoothingQuality = 'high';
    x.filter = `blur(${SCALE * 0.55}px)`; x.drawImage(m, 0, 0, W, H); x.filter = 'none';
    const od = x.getImageData(0, 0, W, H), col = fix(c.map(Math.round));
    for (let i = 0; i < od.data.length; i += 4) { const a = od.data[i] / 255, t = Math.max(0, Math.min(1, (a - 0.4) / 0.2)), s = t * t * (3 - 2 * t); od.data[i] = col[0]; od.data[i + 1] = col[1]; od.data[i + 2] = col[2]; od.data[i + 3] = s * 255; }
    x.putImageData(od, 0, 0);
    ox.drawImage(o, 0, 0);
  });
  return { canvas: out, retake: false };
}
