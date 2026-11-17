// 背表紙を1枚の大きな画像（アトラス）にまとめて描く。
// 色の画像と、つや・金属感の画像（緑＝ざらつき、青＝金属）を同じ配置で2枚作る
import { clamp, hex } from './textures';

export const PX = 3.2; // 1mm あたりの画素数
const MIN = '"Shippori Mincho","Hiragino Mincho ProN","Yu Mincho","Noto Serif CJK JP",serif';
const GOT = '"Zen Kaku Gothic New","Hiragino Sans","Noto Sans CJK JP",sans-serif';
const ROT = /[ーー—…〜～・「」（）()\-]/;

export interface Rect { x: number; y: number; w: number; h: number }
export interface UV { u0: number; u1: number; v0: number; v1: number }

const lum = (h: string) => { const [r, g, b] = hex(h); return (.3 * r + .59 * g + .11 * b) / 255; };
const shade = (h: string, k: number) => `rgb(${hex(h).map(v => Math.round(clamp(v * k, 0, 255)))})`;
const orm = (rough: number, metal: number) => `rgb(0,${Math.round(rough * 255)},${Math.round(metal * 255)})`;
// 同じ本はいつも同じ見た目になるように、本の番号から決まった値を出す
export function hash(s: string) { let h = 0; for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) | 0; return (h >>> 0) / 4294967296; }

export class Atlas {
  readonly W = 4096; H: number;
  canvas: HTMLCanvasElement; orm: HTMLCanvasElement;
  private c: CanvasRenderingContext2D; private o: CanvasRenderingContext2D;
  private ax = 8; private ay = 8; private rowH = 0;
  pagesUV: UV;

  constructor(heightPx: number) {
    this.H = Math.min(4096, Math.max(512, Math.ceil(heightPx / 256) * 256));
    this.canvas = Object.assign(document.createElement('canvas'), { width: this.W, height: this.H });
    this.orm = Object.assign(document.createElement('canvas'), { width: this.W / 2, height: this.H / 2 });
    this.c = this.canvas.getContext('2d')!; this.o = this.orm.getContext('2d')!;
    this.o.scale(.5, .5);
    this.c.fillStyle = '#403830'; this.c.fillRect(0, 0, this.W, this.H);
    this.o.fillStyle = orm(.7, 0); this.o.fillRect(0, 0, this.W, this.H);
    // 小口（紙の重なり）
    const pr = this.slot(200, 200);
    this.c.fillStyle = '#e8dfca'; this.c.fillRect(pr.x, pr.y, pr.w, pr.h);
    for (let i = 0; i < 80; i++) { this.c.fillStyle = `rgba(90,70,45,${.05 + hash('p' + i) * .14})`; this.c.fillRect(pr.x + i * 2.5, pr.y, 1, pr.h); }
    this.o.fillStyle = orm(.9, 0); this.o.fillRect(pr.x, pr.y, pr.w, pr.h);
    this.pagesUV = this.uv(pr);
  }
  // 背表紙をいくつ描けるかの見積もり（高さ方向の画素数）
  static estimate(books: { t: number; h: number }[]) {
    let x = 8, rows = 1, rowH = 0, total = 216;
    for (const b of books) {
      const w = Math.ceil(b.t * 1000 * PX) + 6, h = Math.ceil(b.h * 1000 * PX);
      if (x + w > 4096) { x = 8; rows++; total += rowH + 6; rowH = 0; }
      x += w; rowH = Math.max(rowH, h);
    }
    return total + rowH + 16;
  }
  slot(w: number, h: number): Rect {
    if (this.ax + w + 6 > this.W) { this.ax = 8; this.ay += this.rowH + 6; this.rowH = 0; }
    const r = { x: this.ax, y: this.ay, w, h };
    this.ax += w + 6; this.rowH = Math.max(this.rowH, h);
    return r;
  }
  uv(r: Rect): UV { return { u0: r.x / this.W, u1: (r.x + r.w) / this.W, v0: 1 - (r.y + r.h) / this.H, v1: 1 - r.y / this.H }; }

  private both(rough: number, metal: number, color: string, draw: (g: CanvasRenderingContext2D) => void) {
    this.c.fillStyle = color; draw(this.c); this.o.fillStyle = orm(rough, metal); draw(this.o);
  }
  private vtext(x: number, top: number, str: string, size: number, font: string, rough: number, metal: number, color: string, maxLen: number) {
    const chars = [...str]; let s = size; const gap = 1.06;
    if (chars.length * s * gap > maxLen) s = maxLen / (chars.length * gap);
    for (const g of [this.c, this.o]) {
      g.save(); g.font = font.replace('$', String(s)); g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillStyle = g === this.c ? color : orm(rough, metal);
      chars.forEach((ch, i) => {
        const y = top + (i + .5) * s * gap;
        if (ROT.test(ch)) { g.save(); g.translate(x, y); g.rotate(Math.PI / 2); g.fillText(ch, 0, 0); g.restore(); } else g.fillText(ch, x, y);
      });
      g.restore();
    }
  }

  // 撮っていない本：題名と作者から背表紙を描く
  drawSpine(r: Rect, b: { id: string; title?: string; author?: string; color?: string; format?: string }) {
    const { x, y, w, h } = r, base = b.color || '#e9e4d8', ink = lum(base) > .55 ? '#221c17' : '#f3ecdf', cx = x + w / 2;
    const k = hash(b.id), matte = k < .45 ? .32 : .62, name = (b.title || '').replace(/ /g, ''), author = b.author || '';
    const hard = (b.format === 'shiroku' || b.format === 'a5') && k > .4;
    const kind = hard ? 'hard' : ['band', 'label', 'gothic'][Math.floor(hash(b.id + 'k') * 3)];
    this.both(matte, 0, base, g => g.fillRect(x, y, w, h));
    const fs = Math.min(w * .6, 40);
    if (kind === 'hard') { // 布張り＋金の箔押し
      const foil = '#d9b56d';
      this.both(.72, 0, shade(base, .72), g => g.fillRect(x, y, w, h));
      this.both(.3, 1, foil, g => { g.fillRect(x + 2, y + h * .06, w - 4, 3); g.fillRect(x + 2, y + h * .92, w - 4, 3); });
      this.vtext(cx, y + h * .1, name, fs * 1.08, `800 $px ${MIN}`, .26, 1, foil, h * .56);
      this.vtext(cx, y + h * .73, author, fs * .62, `600 $px ${MIN}`, .3, 1, foil, h * .16);
    } else if (kind === 'band') {
      this.both(.5, 0, '#f2ecdf', g => g.fillRect(x, y + h * .055, w, h * .03));
      this.vtext(cx, y + h * .11, name, fs, `800 $px ${MIN}`, matte, 0, ink, h * .56);
      this.vtext(cx, y + h * .71, author, fs * .6, `600 $px ${GOT}`, matte, 0, ink, h * .17);
      this.both(matte, 0, ink, g => g.fillRect(cx - w * .16, y + h * .93, w * .32, 2));
    } else if (kind === 'label') {
      const lx = x + w * .12, ly = y + h * .06, lw = w * .76, lh = h * .58;
      this.both(.8, 0, '#efe6d3', g => g.fillRect(lx, ly, lw, lh));
      this.vtext(cx, ly + 12, name, Math.min(lw * .72, 34), `800 $px ${MIN}`, .8, 0, '#2a211a', lh - 22);
      this.vtext(cx, y + h * .69, author, fs * .58, `600 $px ${MIN}`, matte, 0, ink, h * .2);
    } else {
      this.vtext(cx, y + h * .07, name, fs * 1.02, `700 $px ${GOT}`, matte, 0, ink, h * .62);
      this.vtext(cx, y + h * .73, author, fs * .56, `500 $px ${GOT}`, matte, 0, ink, h * .17);
      this.both(matte, 0, ink, g => g.fillRect(x + w * .3, y + h * .955, w * .4, Math.min(14, w * .4)));
    }
  }
  // 撮った本：描き直した背表紙の画像をそのまま貼る
  drawImage(r: Rect, img: CanvasImageSource) {
    this.c.drawImage(img, r.x, r.y, r.w, r.h);
    this.o.fillStyle = orm(.55, 0); this.o.fillRect(r.x, r.y, r.w, r.h);
  }
  // 紙の質感：ごく薄いざらつきを全体に重ねる
  grain() {
    const ns = Object.assign(document.createElement('canvas'), { width: 256, height: 256 }), nx = ns.getContext('2d')!, id = nx.createImageData(256, 256);
    for (let i = 0; i < id.data.length; i += 4) { const v = hash('g' + i) * 255; id.data[i] = id.data[i + 1] = id.data[i + 2] = v; id.data[i + 3] = 13; }
    nx.putImageData(id, 0, 0);
    this.c.fillStyle = this.c.createPattern(ns, 'repeat')!; this.c.fillRect(0, 0, this.W, this.H);
  }
}

// 名札（棚の上に下がる黒い札）
export function plateCanvas(name: string, sample: boolean) {
  const cv = Object.assign(document.createElement('canvas'), { width: 1024, height: 220 }), g = cv.getContext('2d')!;
  g.fillStyle = '#1f1b17'; g.fillRect(0, 0, 1024, 220);
  g.fillStyle = '#efe6d6'; g.textBaseline = 'middle'; g.textAlign = 'center';
  g.font = `600 84px ${MIN}`;
  const spaced = [...name].join(' ');
  const tw = g.measureText(spaced).width;
  g.fillText(spaced, 512 - (sample ? 50 : 0), 112);
  if (sample) { g.font = `500 44px ${GOT}`; g.fillStyle = '#b5a892'; g.textAlign = 'left'; g.fillText('見本', 512 - 50 + tw / 2 + 24, 118); }
  return cv;
}
