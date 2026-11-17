// 木目・大理石・金属・壁の質感を、写真を使わずに計算で作る
import * as THREE from 'three';

let seed = 20261106;
export const rnd = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296;
export const clamp = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const smooth = (a: number, b: number, x: number) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };

const perm = new Uint8Array(1024);
{
  const p = [...Array(256).keys()];
  for (let i = 255; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; }
  for (let i = 0; i < 1024; i++) perm[i] = p[i & 255];
}
function vn(x: number, y: number) {
  const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi, X = xi & 255, Y = yi & 255;
  const h = (a: number, b: number) => perm[(perm[a & 255] + b) & 511] / 255;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = h(X, Y), b = h(X + 1, Y), c = h(X, Y + 1), d = h(X + 1, Y + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
function fbm(x: number, y: number, oct = 4) {
  let s = 0, a = .5, n = 0;
  for (let i = 0; i < oct; i++) { s += a * vn(x, y); n += a; a *= .5; x *= 2.03; y *= 2.03; }
  return s / n;
}
export const hex = (h: string) => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
const mix = (a: number, b: number, t: number) => a + (b - a) * t;

// out = [赤, 緑, 青, ざらつき(0〜1), 高さ]
type Fn = (u: number, v: number, out: number[]) => void;
export interface Baked { map: THREE.DataTexture; roughnessMap: THREE.DataTexture; normalMap: THREE.DataTexture }

export function bake(w: number, h: number, fn: Fn, normal = 1): Baked {
  const col = new Uint8Array(w * h * 4), rou = new Uint8Array(w * h * 4), hgt = new Float32Array(w * h), out = [0, 0, 0, 0, 0];
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    fn(x / w, y / h, out);
    const i = (x + y * w) * 4;
    col[i] = out[0]; col[i + 1] = out[1]; col[i + 2] = out[2]; col[i + 3] = 255;
    rou[i + 1] = clamp(out[3]) * 255; rou[i + 3] = 255; hgt[x + y * w] = out[4];
  }
  const nor = new Uint8Array(w * h * 4);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const l = hgt[((x + w - 1) % w) + y * w], r = hgt[((x + 1) % w) + y * w];
    const u = hgt[x + ((y + h - 1) % h) * w], d = hgt[x + ((y + 1) % h) * w];
    const nx = (l - r) * normal, ny = (u - d) * normal, nl = 1 / Math.hypot(nx, ny, 1), i = (x + y * w) * 4;
    nor[i] = (nx * nl * .5 + .5) * 255; nor[i + 1] = (ny * nl * .5 + .5) * 255; nor[i + 2] = (nl * .5 + .5) * 255; nor[i + 3] = 255;
  }
  const tex = (data: Uint8Array, srgb = false) => {
    const t = new THREE.DataTexture(data, w, h, THREE.RGBAFormat);
    t.wrapS = t.wrapT = THREE.MirroredRepeatWrapping;
    t.magFilter = THREE.LinearFilter; t.minFilter = THREE.LinearMipmapLinearFilter;
    t.generateMipmaps = true; t.anisotropy = 8;
    if (srgb) t.colorSpace = THREE.SRGBColorSpace;
    t.needsUpdate = true;
    return t;
  };
  return { map: tex(col, true), roughnessMap: tex(rou), normalMap: tex(nor) };
}

function wood({ light, dark, rings = 12, rough = .45, contrast = 1, pores = 1 }: { light: string; dark: string; rings?: number; rough?: number; contrast?: number; pores?: number }): Fn {
  const L = hex(light), D = hex(dark);
  return (u, v, o) => {
    const low = fbm(u * 2.2 + 7, v * 3.1, 3), warp = fbm(u * 3.5, v * 7 + 3, 3);
    const t = (v + (low - .5) * .55 + (warp - .5) * .1) * rings + (fbm(u * 5, v * 16, 2) - .5) * .5;
    const f = t - Math.floor(t), late = smooth(.45, .92, f) * (1 - smooth(.94, 1, f));
    const fiber = fbm(u * 9, v * 170, 3), pore = Math.pow(vn(u * 46 + 3, v * 330), 6) * pores * (.5 + late * .5);
    let s = .3 + late * .24 * contrast + (fiber - .5) * .3 * contrast + (low - .5) * .5;
    s = clamp(s + pore * .55);
    o[0] = mix(L[0], D[0], s); o[1] = mix(L[1], D[1], s); o[2] = mix(L[2], D[2], s);
    o[3] = rough + pore * .35 + (fiber - .5) * .12; o[4] = -pore * 1.4 - late * .06 + (fiber - .5) * .12;
  };
}
export const marble: Fn = (u, v, o) => {
  const w1 = fbm(u * 3 + 2, v * 3, 5), w2 = fbm(u * 6 + w1 * 2.4, v * 5 - w1 * 2, 4);
  const vein = Math.pow(1 - Math.abs(w2 * 2 - 1), 13), soft = Math.pow(1 - Math.abs(fbm(u * 2.2 + w2, v * 2.2, 4) * 2 - 1), 4);
  const s = clamp(vein * .78 + soft * .2);
  o[0] = mix(238, 92, s); o[1] = mix(235, 94, s); o[2] = mix(230, 102, s); o[3] = .12 + s * .1; o[4] = 0;
};
export const brushed = (base: number[]): Fn => (u, v, o) => {
  const s = fbm(u * 10, v * 900, 3), l = fbm(u * 2, v * 22, 2);
  o[0] = base[0] * (.9 + s * .2); o[1] = base[1] * (.9 + s * .2); o[2] = base[2] * (.9 + s * .2);
  o[3] = .24 + (s - .5) * .24 + (l - .5) * .1; o[4] = s * .22;
};
const paint: Fn = (u, v, o) => { const s = fbm(u * 200, v * 100, 2); o[0] = o[1] = o[2] = 236; o[3] = .34; o[4] = s * .05; };
export const plaster: Fn = (u, v, o) => { const s = fbm(u * 40, v * 40, 4); o[0] = 206 + s * 9; o[1] = 196 + s * 9; o[2] = 180 + s * 9; o[3] = .88; o[4] = 0; };

// 素材ごとの作り方。color を掛け合わせる素材（塗装・スチール）は、白っぽく作っておく
export const MATERIALS: Record<string, { fn: () => Fn; metal: number; coat: number; normal: number; tint: boolean }> = {
  walnut: { fn: () => wood({ light: '#74503a', dark: '#2b1b12', rings: 10, rough: .44 }), metal: 0, coat: .28, normal: 1, tint: false },
  oak: { fn: () => wood({ light: '#cfa877', dark: '#8d6236', rings: 15, rough: .5, contrast: .8, pores: 1.2 }), metal: 0, coat: .12, normal: 1, tint: false },
  ebony: { fn: () => wood({ light: '#2e2520', dark: '#070504', rings: 27, rough: .24, contrast: .9, pores: .5 }), metal: 0, coat: .65, normal: 1, tint: false },
  paint: { fn: () => paint, metal: 0, coat: .5, normal: 1, tint: true },
  steel: { fn: () => brushed([200, 202, 205]), metal: 1, coat: 0, normal: 1.4, tint: true },
};
const cache: Record<string, Baked> = {};
export const texturesFor = (mat: string) => cache[mat] || (cache[mat] = bake(1600, 800, (MATERIALS[mat] || MATERIALS.paint).fn(), (MATERIALS[mat] || MATERIALS.paint).normal));
let marbleTex: Baked | null = null, brassTex: Baked | null = null, wallTex: Baked | null = null;
export const marbleTextures = () => marbleTex || (marbleTex = bake(1024, 512, marble, 0));
export const brassTextures = () => brassTex || (brassTex = bake(512, 256, brushed([214, 170, 92]), 1));
export const wallTextures = () => wallTex || (wallTex = bake(512, 512, plaster, 0));
