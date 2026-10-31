// 本棚を選ぶ：変えられるのは本棚のデザイン（選ぶ・自分で作る）だけ。展示室（壁・床）は固定
// 小物（飾り）は、背表紙のリアルさに見合う質にできないので置かない（2026-10-31 決定）
import { getState, setShelf } from './store.js';

export const WOODS = {
  oak: { name: 'オーク', frame: '#c89b65', inner: '#b5854f' },
  walnut: { name: 'ウォールナット無垢', frame: '#5a3a22', inner: '#4a2f1b' },
  ebony: { name: '黒檀', frame: '#231a15', inner: '#2b201a' },
};
export const PRESETS = {
  mine: { name: 'わたしの本棚', mat: 'paint', frame: '#f7f6f2', inner: '#f2cf1d', top: 'same', brass: false },
  oak: { name: 'オーク', mat: 'oak', top: 'same', brass: false },
  white: { name: '白い棚', mat: 'paint', frame: '#ffffff', inner: '#e9e5dd', top: 'same', brass: false },
  steel: { name: '黒いスチール', mat: 'steel', frame: '#151515', inner: '#3d3d3d', top: 'same', brass: false },
  walbrass: { name: 'ウォールナット×真鍮', mat: 'walnut', top: 'same', brass: true },
  ebmarble: { name: '黒檀×大理石', mat: 'ebony', top: 'marble', brass: true },
  library: { name: '図書館', mat: 'walnut', top: 'marble', brass: false },
  navy: { name: 'ネイビー×真鍮', mat: 'paint', frame: '#23395b', inner: '#1b2c47', top: 'same', brass: true },
};
const MATS = { paint: 'つるっと塗装', oak: 'オーク', walnut: 'ウォールナット無垢', ebony: '黒檀', steel: 'スチール' };
const FRAME_COLORS = ['#ffffff', '#f7f6f2', '#e9e1d2', '#c9b79c', '#8a8f86', '#23395b', '#2f4f3e', '#7a2e2e', '#151515'];
const INNER_COLORS = [null, '#f2cf1d', '#c0392b', '#8ecae6', '#f3f1ec', '#3a2414', '#2f6b4f', '#262626'];

export function colorsOf(sh) { return WOODS[sh.mat] || { frame: sh.frame, inner: sh.inner || sh.frame }; }
function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16), f = v => Math.max(0, Math.min(255, Math.round(v + amt * 255)));
  return '#' + [n >> 16, n >> 8 & 255, n & 255].map(v => f(v).toString(16).padStart(2, '0')).join('');
}
function lum(hex) { const n = parseInt(hex.slice(1), 16); return (0.299 * (n >> 16) + 0.587 * (n >> 8 & 255) + 0.114 * (n & 255)) / 255; }

// 本棚の素材・色を、本棚の要素に当てる
export function styleCase(c, sh) {
  const { frame, inner } = colorsOf(sh);
  c.style.setProperty('--frame', frame);
  c.style.setProperty('--inner', inner);
  c.style.setProperty('--edge', sh.brass ? '#c9a24a' : (lum(inner) > 0.5 ? shade(inner, 0.1) : shade(inner, -0.1)));
  c.classList.toggle('grain', !!WOODS[sh.mat]);
  c.classList.toggle('steel', sh.mat === 'steel');
  c.classList.toggle('top-marble', sh.top === 'marble');
  c.classList.toggle('brass', !!sh.brass);
}

function swatchStyle(sh) {
  const { frame, inner } = colorsOf(sh);
  const shelf = sh.brass ? '#c9a24a' : shade(inner, -0.08);
  return `background:linear-gradient(${sh.top === 'marble' ? '#ece8e1' : frame} 12%,${inner} 12%,${inner} 46%,${shelf} 46%,${shelf} 52%,${inner} 52%);border:5px solid ${frame};border-top:none`;
}

// ---- 設えの札 ----
const $ = s => document.querySelector(s);
export function openDesign() { draw(); $('#design').hidden = false; $('#app').classList.add('designing'); }
export function closeDesign() { $('#design').hidden = true; $('#app').classList.remove('designing'); }

function chip(label, on, onClick, style) {
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'chip'; b.setAttribute('aria-pressed', !!on);
  if (style) { b.className = 'sw2'; b.innerHTML = `<i style="${style}"></i><span></span>`; b.querySelector('span').textContent = label; }
  else b.textContent = label;
  b.onclick = onClick;
  return b;
}
function group(title, kids, cls) {
  const g = document.createElement('div');
  g.className = 'dgroup';
  g.innerHTML = `<div class="dt"></div><div class="${cls || 'chips'}"></div>`;
  g.querySelector('.dt').textContent = title;
  kids.forEach(k => g.lastElementChild.appendChild(k));
  return g;
}
function colorRow(list, cur, onPick, allowSame) {
  return list.map(c => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'sw';
    if (c === null) { b.textContent = 'わくと同じ'; b.classList.add('same'); }
    else b.style.background = c;
    b.setAttribute('aria-label', c === null ? 'わくと同じ色' : '色 ' + c);
    b.setAttribute('aria-pressed', c === cur || (c === null && allowSame && cur == null));
    b.onclick = () => onPick(c);
    return b;
  });
}

function draw() {
  const st = getState(), sh = st.shelf, body = $('#dBody');
  body.innerHTML = '';
  {
    body.appendChild(group('デザインから選ぶ', Object.entries(PRESETS).map(([k, p]) =>
      chip(p.name, sh.preset === k, () => { setShelf({ ...p, name: sh.name, preset: k }); draw(); }, swatchStyle(p))), 'swgrid'));
    const mk = [];
    mk.push(group('素材', Object.entries(MATS).map(([k, n]) => chip(n, sh.mat === k, () => {
      const base = WOODS[k] ? {} : { frame: sh.frame || '#f7f6f2', inner: sh.inner };
      setShelf({ ...base, mat: k, preset: 'custom' }); draw();
    }))));
    if (!WOODS[sh.mat]) {
      mk.push(group('わくの色', colorRow(FRAME_COLORS, sh.frame, c => { setShelf({ frame: c, preset: 'custom' }); draw(); }), 'pal'));
      mk.push(group('中の色（背板と棚板）', colorRow(INNER_COLORS, sh.inner === sh.frame ? null : sh.inner, c => { setShelf({ inner: c || sh.frame, preset: 'custom' }); draw(); }, true), 'pal'));
    }
    mk.push(group('天板', [chip('本体と同じ', sh.top !== 'marble', () => { setShelf({ top: 'same', preset: 'custom' }); draw(); }), chip('大理石', sh.top === 'marble', () => { setShelf({ top: 'marble', preset: 'custom' }); draw(); })]));
    mk.push(group('金具', [chip('なし', !sh.brass, () => { setShelf({ brass: false, preset: 'custom' }); draw(); }), chip('真鍮', !!sh.brass, () => { setShelf({ brass: true, preset: 'custom' }); draw(); })]));
    const d = document.createElement('details');
    d.className = 'maker';
    d.open = sh.preset === 'custom';
    d.innerHTML = '<summary>自分で作る</summary>';
    mk.forEach(x => d.appendChild(x));
    body.appendChild(d);
  }
}
export function initDesign() {
  $('#dClose').onclick = closeDesign;
}
