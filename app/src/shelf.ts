// 本棚1台：棚の板・名札・本をまとめて持つ。本は1つの形にまとめて描き、置き場所だけを小さな表で動かす
import * as THREE from 'three';
import { FORMATS, thickness } from '../../js/store.js';
import { imageUrl } from '../../js/images.js';
import { Atlas, PX, UV, hash, plateCanvas } from './spines';
import { MATERIALS, brassTextures, clamp, marbleTextures, texturesFor } from './textures';

export interface ShelfStyle { mat: string; frame?: string; inner?: string; top?: string; brass?: boolean }
export interface BookIn { id: string; title?: string; author?: string; format?: string; pages?: number; color?: string; w?: number; h?: number; img?: boolean; sample?: boolean }
export interface ShelfIn { key: string; name: string; sample: boolean; own: boolean; books: BookIn[]; shelf: ShelfStyle; minRows: number; wide: number; sort?: string }

export interface Item {
  b: BookIn; id: number; t: number; h: number; d: number; z0: number;
  cur: number[]; tgt: number[]; lift: number; uv?: UV;
}

const T = .024, D = .24, Z0 = .02, GAP = .0006, ROW_MIN = .236;
export const FRONT = Z0 + D;
const WOODS: Record<string, string> = { oak: '#b5854f', walnut: '#4a2f1b', ebony: '#2b201a' };

function colorHue(hexs?: string) {
  const n = parseInt((hexs || '#e9e4d8').slice(1), 16), r = (n >> 16) / 255, g = (n >> 8 & 255) / 255, b = (n & 255) / 255;
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn;
  if (d < .08) return 400 + (1 - mx) * 10;
  const h = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return (h * 60 + 360) % 360;
}
function sorted(books: BookIn[], sort?: string) {
  if (sort === 'author') return [...books].sort((a, b) => (a.author || '～').localeCompare(b.author || '～', 'ja'));
  if (sort === 'color') return [...books].sort((a, b) => colorHue(a.color) - colorHue(b.color));
  return books;
}

// 角を少し丸めた箱。木目の向き（grain）に合わせて、実寸で模様を貼る
function roundBox(w: number, h: number, d: number, r: number, grain: 'x' | 'y', ts = [1.2, .6], seedKey = '') {
  const g = new THREE.BoxGeometry(1, 1, 1, 5, 5, 5), P = g.attributes.position, N = g.attributes.normal, UVs = g.attributes.uv;
  const half = [w / 2, h / 2, d / 2], off = [hash(seedKey + 'a') * 3, hash(seedKey + 'b') * 3], v = [0, 0, 0], o = [0, 0, 0];
  for (let i = 0; i < P.count; i++) {
    const p = [P.getX(i), P.getY(i), P.getZ(i)], fn = [N.getX(i), N.getY(i), N.getZ(i)];
    for (let a = 0; a < 3; a++) {
      const u = p[a] * 2, s = Math.sign(u), k = clamp((Math.abs(u) - .2) / .8), inner = half[a] - r;
      v[a] = Math.abs(u) > .2 ? s * inner : (u / .2) * inner; o[a] = Math.abs(u) > .2 ? s * k : 0;
    }
    const l = Math.hypot(o[0], o[1], o[2]) || 1, n = o.map(x => x / l), q = v.map((x, a) => x + n[a] * r);
    P.setXYZ(i, q[0], q[1], q[2]); N.setXYZ(i, n[0], n[1], n[2]);
    const ax = Math.abs(fn[0]) > .5 ? 0 : Math.abs(fn[1]) > .5 ? 1 : 2;
    const along = grain === 'x' ? q[0] : q[1], across = grain === 'x' ? (ax === 1 ? q[2] : q[1]) : (ax === 0 ? q[2] : q[0]);
    UVs.setXY(i, along / ts[0] + off[0], across / ts[1] + off[1]);
  }
  return g;
}

// 本の形（原点＝背表紙の下のまん中）。番号 id を頂点に持たせる
function bookGeometry(items: Item[], pagesUV: UV) {
  const P: number[] = [], Nn: number[] = [], U: number[] = [], C: number[] = [], I: number[] = [];
  let id = 0;
  const vert = (x: number, y: number, z: number, nx: number, ny: number, nz: number, u: number, v: number, k: number) => {
    const l = Math.hypot(nx, ny, nz);
    P.push(x, y, z); Nn.push(nx / l, ny / l, nz / l); U.push(u, v); C.push(k, k, k); I.push(id);
  };
  type V = [number, number, number, number, number, number, number, number, number];
  const quad = (a: V, b: V, c: V, d: V) => { for (const q of [a, b, c, a, c, d]) vert(...q); };
  for (const it of items) {
    id = it.id;
    const { t, h, d } = it, { u0, v0, u1, v1 } = it.uv!, K = 6, bulge = Math.min(.0013, t * .09);
    const col = (s: number) => .56 + .44 * Math.pow(clamp(4.5 * Math.min(s, 1 - s)), .7);
    const f = (s: number) => bulge * (1 - (2 * s - 1) ** 2);
    for (let i = 0; i < K; i++) {
      const a = i / K, e = (i + 1) / K, xa = -t / 2 + a * t, xb = -t / 2 + e * t, nA = (2 * a - 1) * .6, nB = (2 * e - 1) * .6;
      const ua = u0 + a * (u1 - u0), ub = u0 + e * (u1 - u0);
      quad([xa, 0, f(a), nA, 0, 1, ua, v0, col(a) * .86], [xb, 0, f(e), nB, 0, 1, ub, v0, col(e) * .86],
        [xb, h, f(e), nB, 0, 1, ub, v1, col(e)], [xa, h, f(a), nA, 0, 1, ua, v1, col(a)]);
    }
    const su = u0 + .0004, sv = (v0 + v1) / 2;
    quad([-t / 2, 0, -d, -1, 0, 0, su, sv, .12], [-t / 2, 0, 0, -1, 0, 0, su, sv, .42], [-t / 2, h, 0, -1, 0, 0, su, sv, .5], [-t / 2, h, -d, -1, 0, 0, su, sv, .16]);
    quad([t / 2, 0, 0, 1, 0, 0, su, sv, .42], [t / 2, 0, -d, 1, 0, 0, su, sv, .12], [t / 2, h, -d, 1, 0, 0, su, sv, .16], [t / 2, h, 0, 1, 0, 0, su, sv, .5]);
    const pg = pagesUV, tp = .0006;
    quad([-t / 2 + tp, h, 0, 0, 1, 0, pg.u0, pg.v0, .95], [t / 2 - tp, h, 0, 0, 1, 0, pg.u1, pg.v0, .95], [t / 2 - tp, h, -d, 0, 1, 0, pg.u1, pg.v1, .3], [-t / 2 + tp, h, -d, 0, 1, 0, pg.u0, pg.v1, .3]);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(Nn, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(U, 2));
  g.setAttribute('color', new THREE.Float32BufferAttribute(C, 3));
  g.setAttribute('aId', new THREE.Float32BufferAttribute(I, 1));
  return g;
}

// 本の置き場所の表を読んで、頂点を動かす（影の計算にも同じ動きを入れる）
function patch(mat: THREE.Material, tex: THREE.DataTexture, full: boolean) {
  mat.onBeforeCompile = sh => {
    sh.uniforms.uBooks = { value: tex };
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
uniform highp sampler2D uBooks;
attribute float aId;
vec3 rotB(vec3 v, float a) { float c = cos(a), s = sin(a); return vec3(c * v.x - s * v.y, s * v.x + c * v.y, v.z); }`)
      .replace('#include <begin_vertex>', `vec4 bk = texelFetch(uBooks, ivec2(int(aId + .5), 0), 0);
vec3 transformed = rotB(position, bk.w) + bk.xyz;`);
    if (full) sh.vertexShader = sh.vertexShader
      .replace('#include <beginnormal_vertex>', 'vec3 objectNormal = rotB(normal, texelFetch(uBooks, ivec2(int(aId + .5), 0), 0).w);')
      .replace('#include <color_vertex>', `#include <color_vertex>
vColor = mix(vColor, vec3(.92), texelFetch(uBooks, ivec2(int(aId + .5), 1), 0).x);`);
  };
}

export class Shelf {
  group = new THREE.Group();
  frame = new THREE.Group();
  items: Item[] = [];
  order: Item[] = [];
  rows: Item[][] = [];
  n = 5; rowH = ROW_MIN; IW: number; W: number; H = 1;
  private frameMat = new THREE.MeshPhysicalMaterial();
  private backMat = new THREE.MeshPhysicalMaterial();
  private data!: Float32Array; private tex!: THREE.DataTexture; private mesh?: THREE.Mesh;
  private atlas?: Atlas; private texA?: THREE.CanvasTexture; private texO?: THREE.CanvasTexture;

  constructor(public cfg: ShelfIn, public cx: number, private maxAniso: number) {
    this.IW = .56 * (cfg.wide || 1);
    this.W = this.IW + 2 * T;
    this.group.position.x = cx;
    this.group.add(this.frame);
  }

  floorY(k: number) { return T + (this.n - 1 - k) * (this.rowH + T); }
  rowAt(y: number) { return clamp(this.n - 1 - Math.floor((y - T) / (this.rowH + T)), 0, this.n - 1); }
  get inL() { return -this.IW / 2 + .002; }
  get inR() { return this.IW / 2 - .002; }

  async build() {
    const fmt = (b: BookIn) => (FORMATS as any)[b.format || ''] || FORMATS.shiroku;
    let id = 0;
    this.items = this.cfg.books.map(b => {
      const f = fmt(b), wob = hash(b.id) * 2 - 1;
      const h = (b.h || f.h + wob * (b.format === 'bunko' ? 1.5 : 4)) / 1000;
      return { b, id: ++id, t: thickness(b) / 1000, h, d: f.w / 1000, z0: FRONT - .022 - hash(b.id + 'z') * .004, cur: [0, 0, 0, 0], tgt: [0, 0, 0, 0], lift: 0 };
    });
    this.order = sorted(this.cfg.books, this.cfg.sort).map(b => this.items.find(i => i.b === b)!);
    this.rowH = Math.max(ROW_MIN, ...this.items.map(i => i.h + .012));
    this.n = Math.max(this.cfg.minRows, this.flow().length);
    this.H = this.n * this.rowH + (this.n + 1) * T;
    this.buildFrame();
    this.buildPlate();
    if (this.items.length) await this.buildBooks();
    this.layout(true);
  }

  // 段に流し込む（上の段の左から）
  private flow(drag?: Item) {
    const rows: Item[][] = [[]]; let x = 0;
    for (const it of this.order) {
      const w = it.t + GAP;
      if (x + w > this.IW - .004 && rows[rows.length - 1].length) { rows.push([]); x = 0; }
      rows[rows.length - 1].push(it); x += w;
    }
    void drag;
    return rows;
  }

  layout(snap = false, drag?: Item) {
    this.rows = this.flow();
    if (this.rows.length > this.n) { this.n = this.rows.length; this.H = this.n * this.rowH + (this.n + 1) * T; this.buildFrame(); this.buildPlate(); }
    this.rows.forEach((list, k) => {
      let x = this.inL;
      list.forEach((it, i) => {
        if (it !== drag) {
          let px = x + it.t / 2, a = 0, rise = 0;
          const gap = this.inR - x - it.t;
          if (i === list.length - 1 && list.length > 1 && gap > .004) { // 段にすき間があれば、端の本は左の本に寄りかかる
            a = Math.min(.157, gap * .7 / it.h); rise = it.t / 2 * Math.sin(a); px += it.h * Math.sin(a) * .9;
          }
          it.tgt = [px, this.floorY(k) + rise, it.z0, a];
          if (snap) it.cur = [...it.tgt];
        }
        x += it.t + GAP;
      });
    });
    if (snap) this.write();
  }

  // 1コマぶん、本を目標の場所へ近づける。動いたら true
  step(dt: number, held?: Item, calm = false) {
    let moved = false;
    const k = calm ? 1 : 1 - Math.exp(-dt / 70);
    for (const it of this.items) {
      const isHeld = it === held, K = isHeld ? Math.max(k, .6) : k;
      const dy = it.tgt[1] - it.cur[1], dx = it.tgt[0] - it.cur[0];
      const fly = !isHeld && Math.abs(dy) > .012 ? Math.min(.2, Math.abs(dy) * .7 + Math.abs(dx) * .1) : 0;
      for (let i = 0; i < 4; i++) {
        const t = i === 2 ? it.tgt[2] + fly : it.tgt[i], d = t - it.cur[i];
        if (Math.abs(d) > .00002) { it.cur[i] += d * K; moved = true; } else it.cur[i] = t;
      }
      it.lift = clamp((it.cur[2] - it.z0) / .05);
    }
    if (moved) this.write();
    return moved;
  }

  private write() {
    if (!this.tex) return;
    const w = this.tex.image.width;
    for (const it of this.items) { this.data.set(it.cur, it.id * 4); this.data[(w + it.id) * 4] = it.lift; }
    this.tex.needsUpdate = true;
  }

  // 棚の中の位置（この棚から見た座標）にある本
  pick(x: number, y: number) {
    const k = this.rowAt(y), base = this.floorY(k);
    return (this.rows[k] || []).find(it => Math.abs(x - it.tgt[0]) <= it.t / 2 + .0015 && y >= base - .01 && y <= base + it.h + .012);
  }

  // 並べ替え：持っている本を、段 k の i 番目に入れる
  insertAt(held: Item, k: number, x: number) {
    const others = (this.rows[k] || []).filter(o => o !== held);
    let idx = others.length, px = this.inL;
    for (let i = 0; i < others.length; i++) { if (x < px + others[i].t / 2) { idx = i; break; } px += others[i].t + GAP; }
    const before = this.rows.slice(0, k).flat().filter(o => o !== held).length;
    const flat = this.order.filter(o => o !== held);
    const at = before + idx;
    const next = [...flat.slice(0, at), held, ...flat.slice(at)];
    if (next.every((o, i) => o === this.order[i])) return false;
    this.order = next;
    this.layout(false, held);
    return true;
  }

  applyStyle(st: ShelfStyle) {
    this.cfg.shelf = st;
    const m = MATERIALS[st.mat] || MATERIALS.paint, t = texturesFor(st.mat in MATERIALS ? st.mat : 'paint');
    const frameColor = m.tint ? new THREE.Color(st.frame || '#f7f6f2') : new THREE.Color(1, 1, 1);
    const innerHex = st.inner || WOODS[st.mat];
    for (const mat of [this.frameMat, this.backMat]) {
      Object.assign(mat, { map: t.map, roughnessMap: t.roughnessMap, normalMap: t.normalMap, metalness: m.metal, roughness: 1, clearcoat: m.coat, clearcoatRoughness: .3 });
      mat.needsUpdate = true;
    }
    this.frameMat.color.copy(frameColor);
    if (m.tint && innerHex) { this.backMat.color.set(innerHex); this.backMat.metalness = 0; this.backMat.map = texturesFor('paint').map; }
    else this.backMat.color.setScalar(st.mat === 'steel' ? .16 : .42);
    if (st.mat === 'steel') this.backMat.metalness = 0;
    this.buildFrame();
  }

  private buildFrame() {
    for (const c of [...this.frame.children]) { this.frame.remove(c); (c as THREE.Mesh).geometry?.dispose(); }
    if (!this.frameMat.map) { this.applyStyle(this.cfg.shelf); return; }
    const st = this.cfg.shelf, key = this.cfg.key;
    const add = (g: THREE.BufferGeometry, x: number, y: number, z: number, mat: THREE.Material) => {
      const m = new THREE.Mesh(g, mat); m.position.set(x, y, z); m.castShadow = m.receiveShadow = true; this.frame.add(m); return m;
    };
    for (let k = 0; k <= this.n; k++) add(roundBox(this.IW + .004, T, D, .0016, 'x', [1.2, .6], key + k), 0, k * (this.rowH + T) + T / 2, Z0 + D / 2, this.frameMat);
    for (const s of [-1, 1]) add(roundBox(T, this.H, D, .002, 'y', [1.2, .6], key + s), s * (this.W / 2 - T / 2), this.H / 2, Z0 + D / 2, this.frameMat);
    add(roundBox(this.W - .01, this.H - .01, .008, .001, 'y', [1.2, .6], key + 'back'), 0, this.H / 2, Z0 + .004, this.backMat);
    if (st.top === 'marble') {
      const t = marbleTextures();
      add(roundBox(this.W + .03, .022, D + .018, .003, 'x', [.9, .45], key + 'top'), 0, this.H + .011, Z0 + D / 2 + .004,
        new THREE.MeshPhysicalMaterial({ ...t, clearcoat: .7, clearcoatRoughness: .12 }));
    }
    if (st.brass) {
      const brass = new THREE.MeshStandardMaterial({ ...brassTextures(), metalness: 1 });
      for (let k = 0; k <= this.n; k++) {
        const m = add(roundBox(this.IW - .006, .0035, .0026, .0007, 'x', [.6, .3], key + 'br' + k), 0, k * (this.rowH + T) + T / 2, FRONT + .0004, brass);
        m.castShadow = false;
      }
    }
  }

  private plate?: THREE.Group;
  private buildPlate() {
    if (this.plate) this.group.remove(this.plate);
    const g = new THREE.Group(), w = Math.min(.3, this.W * .5), h = w * 220 / 1024;
    const t = new THREE.CanvasTexture(plateCanvas(this.cfg.name, this.cfg.sample)); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
    const board = new THREE.Mesh(new THREE.BoxGeometry(w, h, .006), [
      ...Array(4).fill(new THREE.MeshStandardMaterial({ color: 0x1f1b17, roughness: .6 })),
      new THREE.MeshStandardMaterial({ map: t, roughness: .55 }), new THREE.MeshStandardMaterial({ color: 0x1f1b17 }),
    ]);
    const y = this.H + .1 + h / 2;
    board.position.set(0, y, FRONT - .04); board.castShadow = true; g.add(board);
    const wire = new THREE.MeshStandardMaterial({ color: 0x3a3530, metalness: .6, roughness: .4 });
    for (const s of [-1, 1]) {
      const c = new THREE.Mesh(new THREE.CylinderGeometry(.0007, .0007, .5, 6), wire);
      c.position.set(s * w * .38, y + h / 2 + .25, FRONT - .04); g.add(c);
    }
    this.plate = g; this.group.add(g);
  }

  private async buildBooks() {
    const atlas = new Atlas(Atlas.estimate(this.items));
    this.atlas = atlas;
    const pending: Promise<void>[] = [];
    for (const it of this.items) {
      const r = atlas.slot(Math.ceil(it.t * 1000 * PX), Math.ceil(it.h * 1000 * PX));
      it.uv = atlas.uv(r);
      atlas.drawSpine(r, it.b);
      if (it.b.img) pending.push(this.loadImage(it.b.id).then(img => { if (img) atlas.drawImage(r, img); }).catch(() => {}));
    }
    atlas.grain();
    const texA = new THREE.CanvasTexture(atlas.canvas), texO = new THREE.CanvasTexture(atlas.orm);
    texA.colorSpace = THREE.SRGBColorSpace;
    for (const t of [texA, texO]) { t.anisotropy = Math.min(8, this.maxAniso); t.minFilter = THREE.LinearMipmapLinearFilter; t.generateMipmaps = true; }
    this.texA = texA; this.texO = texO;
    const n = this.items.length + 1;
    this.data = new Float32Array(n * 2 * 4);
    this.tex = new THREE.DataTexture(this.data, n, 2, THREE.RGBAFormat, THREE.FloatType);
    this.tex.minFilter = this.tex.magFilter = THREE.NearestFilter;
    const mat = new THREE.MeshStandardMaterial({ map: texA, roughnessMap: texO, metalnessMap: texO, metalness: 1, roughness: 1, vertexColors: true });
    patch(mat, this.tex, true);
    const mesh = new THREE.Mesh(bookGeometry(this.items, atlas.pagesUV), mat);
    mesh.castShadow = mesh.receiveShadow = true; mesh.frustumCulled = false;
    const depth = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
    patch(depth, this.tex, false);
    mesh.customDepthMaterial = depth;
    this.mesh = mesh; this.group.add(mesh);
    // 撮った本の画像は、読み込めたら貼りかえる
    if (pending.length) Promise.all(pending).then(() => { texA.needsUpdate = true; texO.needsUpdate = true; this.onUpdate?.(); });
  }
  onUpdate?: () => void;

  private async loadImage(id: string): Promise<HTMLImageElement | null> {
    const u = await imageUrl(id);
    if (!u) return null;
    return new Promise(ok => { const im = new Image(); im.onload = () => ok(im); im.onerror = () => ok(null); im.src = u; });
  }

  dispose() {
    this.group.traverse(o => { const m = o as THREE.Mesh; m.geometry?.dispose(); });
    this.texA?.dispose(); this.texO?.dispose(); this.tex?.dispose();
    this.group.removeFromParent();
  }
}
