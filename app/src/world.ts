// 店内（壁・照明・カメラ）と指の操作。本棚を左右に並べ、1台ずつ見て回る
import * as THREE from 'three';
import { FRONT, Item, Shelf, ShelfIn, ShelfStyle } from './shelf';
import { clamp, wallTextures } from './textures';

export interface WorldEvents {
  shelf: (index: number) => void;
  fps: (text: string) => void;
  moved: (shelf: Shelf, held: Item) => void;
}

const SPACING_PAD = 1.5; // となりの棚が画面に入らない間隔（m）

export class World {
  renderer: THREE.WebGLRenderer;
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(26, 1, .05, 30);
  shelves: Shelf[] = [];
  cur = 0;
  private view = { x: 0, y: 1, w: .7 };
  private vel = { x: 0, y: 0 };
  private go: { x: number; y: number } | null = null;
  private dirty = true;
  private W = 1; private H = 1;
  private key: THREE.SpotLight; private hand: THREE.PointLight;
  private drag: { id: number; s: Shelf; it: Item; k: number; pk: number; pt: number; x: number; y: number } | null = null;
  private calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  private sound = new Audio('../sounds/page1.mp3');
  canReorder = true;

  constructor(private canvas: HTMLCanvasElement, private ev: WorldEvents) {
    const r = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    r.setPixelRatio(Math.min(devicePixelRatio, 2));
    r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.02;
    r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFShadowMap; r.shadowMap.autoUpdate = false;
    this.renderer = r;
    this.scene.background = new THREE.Color(0x14100c);

    // 映り込み用の部屋：天井の照明と、手前のやわらかい明かり
    const env = new THREE.Scene();
    env.add(new THREE.Mesh(new THREE.BoxGeometry(8, 5, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color(.05, .04, .032), side: THREE.BackSide })));
    const panel = (w: number, h: number, x: number, y: number, z: number, rx: number, ry: number, c: number[]) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(c[0], c[1], c[2]), side: THREE.DoubleSide }));
      m.position.set(x, y, z); m.rotation.set(rx, ry, 0); env.add(m);
    };
    for (const x of [-2.6, -.9, .9, 2.6]) panel(.5, 3.4, x, 2.4, 1, Math.PI / 2, 0, [11, 8.6, 6]);
    panel(6, 1.3, 0, .4, 3.9, 0, Math.PI, [.55, .46, .36]);
    panel(.35, 3, -3.8, .3, 1, 0, Math.PI / 2, [3.2, 2.5, 1.8]);
    panel(.35, 3, 3.8, .3, 1, 0, -Math.PI / 2, [2.2, 1.8, 1.4]);
    this.scene.environment = new THREE.PMREMGenerator(r).fromScene(env, .025).texture;
    this.scene.environmentIntensity = .62;

    const wt = wallTextures();
    const wall = new THREE.Mesh(new THREE.PlaneGeometry(40, 8), new THREE.MeshStandardMaterial({ map: wt.map, roughness: .88 }));
    wt.map.repeat.set(12, 2.5);
    wall.position.set(0, 1.2, 0); wall.receiveShadow = true; this.scene.add(wall);

    const key = new THREE.SpotLight(0xffe0bd, 34, 6, .62, .9, 2);
    key.castShadow = true; key.shadow.mapSize.set(2048, 2048); key.shadow.bias = -.00012; key.shadow.normalBias = .0012; key.shadow.radius = 7;
    key.shadow.camera.near = 1.2; key.shadow.camera.far = 5;
    this.scene.add(key, key.target); this.key = key;
    const fill = new THREE.SpotLight(0xffc790, 7, 6, .95, 1, 2); fill.position.set(0, 2.9, 1.6); fill.target.position.set(0, .4, 0);
    this.scene.add(fill, fill.target);
    key.userData.fill = fill;
    this.hand = new THREE.PointLight(0xfff0dc, .22, 1.6, 2); this.scene.add(this.hand);
    this.scene.add(new THREE.HemisphereLight(0xffe4c4, 0x2a1d14, .22));

    this.bindInput();
    addEventListener('resize', () => this.resize());
    this.resize();
    requestAnimationFrame(t => this.loop(t));
  }

  // 本棚を並べ直す。order は左からの順、home は最初に見る棚
  async setShelves(list: ShelfIn[], home: number) {
    for (const s of this.shelves) s.dispose();
    this.shelves = [];
    let x = 0;
    const built: Shelf[] = [];
    for (const cfg of list) {
      const s = new Shelf(cfg, 0, this.renderer.capabilities.getMaxAnisotropy());
      await s.build();
      s.onUpdate = () => { this.dirty = true; };
      built.push(s);
    }
    built.forEach((s, i) => {
      if (i > 0) x += built[i - 1].W / 2 + SPACING_PAD + s.W / 2;
      s.cx = x; s.group.position.x = x; this.scene.add(s.group);
    });
    this.shelves = built;
    this.jump(home);
  }

  async replaceShelf(i: number, cfg: ShelfIn) {
    const old = this.shelves[i];
    const s = new Shelf(cfg, old.cx, this.renderer.capabilities.getMaxAnisotropy());
    await s.build();
    s.onUpdate = () => { this.dirty = true; };
    old.dispose();
    this.shelves[i] = s; this.scene.add(s.group);
    this.shadow(); this.dirty = true;
  }

  styleShelf(i: number, st: ShelfStyle) { this.shelves[i].applyStyle(st); this.shadow(); this.dirty = true; }

  // 最初に見る高さ：背の高い棚は上の段から、低い棚は棚全体がまん中に来るように
  private topY(s: Shelf) { const vh = this.viewH(); return s.H + .25 < vh * .8 ? s.H / 2 + .08 : s.H - vh * .38 + .05; }
  private jump(i: number) {
    const s = this.shelves[i]; this.cur = i;
    this.view.w = Math.max(.5, s.W + .14); this.view.x = s.cx; this.view.y = this.topY(s);
    this.placeKey(); this.ev.shelf(i); this.dirty = true;
  }
  goTo(i: number) {
    if (i < 0 || i >= this.shelves.length || this.drag) return;
    const s = this.shelves[i];
    if (i !== this.cur) { try { this.sound.currentTime = 0; void this.sound.play().catch(() => {}); } catch { /* 音が出せなくても続ける */ } }
    this.cur = i; this.vel.x = this.vel.y = 0;
    this.go = { x: s.cx, y: Math.min(this.view.y, this.topY(s)) };
    this.ev.shelf(i); this.dirty = true;
  }

  private viewH() { return this.view.w * this.H / this.W; }
  private limits() {
    const s = this.shelves[this.cur]; if (!s) return;
    const vh = this.viewH(), top = s.H + .3 - vh * .38, bot = -.02 + vh * .55;
    this.view.y = top > bot ? clamp(this.view.y, bot, top) : s.H / 2;
    if (!this.go && !this.panning) {
      const mx = Math.max(0, s.W / 2 + .05 - this.view.w / 2);
      this.view.x = clamp(this.view.x, s.cx - mx, s.cx + mx);
    }
  }
  private placeCamera() {
    this.limits();
    const v = this.view, dist = (this.viewH() / 2) / Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2));
    const s = this.shelves[this.cur], mid = s ? s.H / 2 : .8, rel = s ? v.x - s.cx : 0;
    this.camera.position.set(v.x - rel * .18, v.y + .13 - (v.y - mid) * .22, FRONT + dist);
    this.camera.lookAt(v.x, v.y, FRONT);
    this.scene.environmentRotation.y = rel * 1.15;
    this.scene.environmentRotation.x = (v.y - mid) * .25;
    this.placeKey();
  }
  private keyX = NaN;
  private placeKey() {
    const x = this.view.x, s = this.shelves[this.cur], mid = s ? s.H / 2 : .8;
    if (Math.abs(x - this.keyX) < .0005) return;
    this.keyX = x;
    this.key.position.set(x + .05, 3.05, 2.0); this.key.target.position.set(x, mid, .15);
    const fill = this.key.userData.fill as THREE.SpotLight; fill.position.x = x; fill.target.position.x = x;
    this.shadow();
  }
  private shadow() { this.renderer.shadowMap.needsUpdate = true; }

  private resize() {
    this.W = innerWidth; this.H = innerHeight;
    this.renderer.setSize(this.W, this.H, false);
    this.camera.aspect = this.W / this.H; this.camera.updateProjectionMatrix(); this.dirty = true;
  }

  // ---- 指の操作 ----
  private panning = false;
  private bindInput() {
    const c = this.canvas, pts = new Map<number, [number, number]>();
    let pinch = 0, lastT = 0, press = 0, pressAt: [number, number] = [0, 0];
    const stopPress = () => { clearTimeout(press); press = 0; };
    c.addEventListener('contextmenu', e => e.preventDefault());
    c.addEventListener('pointerdown', e => {
      c.setPointerCapture(e.pointerId); pts.set(e.pointerId, [e.clientX, e.clientY]);
      this.vel.x = this.vel.y = 0; this.go = null; pinch = 0; this.moveHand(e.clientX, e.clientY); stopPress();
      if (pts.size === 1 && !this.drag) {
        pressAt = [e.clientX, e.clientY];
        press = window.setTimeout(() => { press = 0; this.startDrag(e.pointerId, pts.get(e.pointerId)); }, 350);
      }
    });
    c.addEventListener('pointermove', e => {
      const prev = pts.get(e.pointerId); if (!prev) return;
      const dx = e.clientX - prev[0], dy = e.clientY - prev[1];
      pts.set(e.pointerId, [e.clientX, e.clientY]);
      if (this.drag) { if (e.pointerId === this.drag.id) { this.drag.x = e.clientX; this.drag.y = e.clientY; this.moveHand(e.clientX, e.clientY); } return; }
      if (press && Math.hypot(e.clientX - pressAt[0], e.clientY - pressAt[1]) > 8) stopPress();
      if (pts.size === 1) {
        const k = this.view.w / this.W; this.view.x -= dx * k; this.view.y += dy * k; this.panning = true;
        const now = performance.now(), dt = Math.max(8, now - lastT); lastT = now;
        this.vel.x = -dx * k / dt * 16; this.vel.y = dy * k / dt * 16;
        this.moveHand(e.clientX, e.clientY);
      } else if (pts.size === 2) {
        const [a, b] = [...pts.values()], d = Math.hypot(a[0] - b[0], a[1] - b[1]);
        if (pinch) this.view.w = clamp(this.view.w * pinch / d, .22, 1.4);
        pinch = d;
      }
      this.dirty = true;
    });
    const up = (e: PointerEvent) => {
      pts.delete(e.pointerId); pinch = 0; stopPress();
      if (this.drag && e.pointerId === this.drag.id) { this.endDrag(); return; }
      if (!pts.size && this.panning) { this.panning = false; this.release(); }
    };
    c.addEventListener('pointerup', up); c.addEventListener('pointercancel', up);
    c.addEventListener('wheel', e => { e.preventDefault(); this.view.w = clamp(this.view.w * Math.exp(e.deltaY * .001), .22, 1.4); this.dirty = true; }, { passive: false });
  }
  // 指を離したとき、棚の外まで引っぱっていたら、となりの棚へ
  private release() {
    const s = this.shelves[this.cur]; if (!s) return;
    const reach = this.view.x + this.vel.x * 10 - s.cx, edge = Math.max(.06, s.W / 2 + .05 - this.view.w / 2) + .05;
    if (reach > edge && this.cur < this.shelves.length - 1) this.goTo(this.cur + 1);
    else if (reach < -edge && this.cur > 0) this.goTo(this.cur - 1);
    else { // 届かなかったときは、なめらかに棚の中へ戻す
      const mx = Math.max(0, s.W / 2 + .05 - this.view.w / 2), x = clamp(this.view.x, s.cx - mx, s.cx + mx);
      if (Math.abs(x - this.view.x) > .0005) { this.vel.x = 0; this.go = { x, y: this.view.y }; }
    }
  }
  private moveHand(cx: number, cy: number) {
    this.hand.position.set(this.view.x + (cx / this.W - .5) * this.view.w, this.view.y - (cy / this.H - .5) * this.viewH(), FRONT + .3);
    this.dirty = true;
  }

  // ---- 並べ替え（自分の棚だけ） ----
  private ray = new THREE.Vector3();
  private worldAt(cx: number, cy: number, z: number) {
    this.ray.set(cx / this.W * 2 - 1, -(cy / this.H * 2 - 1), .5).unproject(this.camera).sub(this.camera.position);
    const t = (z - this.camera.position.z) / this.ray.z;
    return { x: this.camera.position.x + this.ray.x * t, y: this.camera.position.y + this.ray.y * t };
  }
  private startDrag(id: number, q?: [number, number]) {
    const s = this.shelves[this.cur];
    if (!q || !s || !s.cfg.own || !this.canReorder) return;
    const p = this.worldAt(q[0], q[1], FRONT - .024), it = s.pick(p.x - s.cx, p.y);
    if (!it) return;
    const k = s.rows.findIndex(r => r.includes(it));
    this.drag = { id, s, it, k, pk: k, pt: 0, x: q[0], y: q[1] };
    this.panning = false; this.vel.x = this.vel.y = 0; this.fpsMin = 0;
    try { navigator.vibrate?.(12); } catch { /* 振動できなくても続ける */ }
    this.dragUpdate(); this.dirty = true;
  }
  private dragUpdate() {
    const d = this.drag!, s = d.s, now = performance.now();
    const held = this.worldAt(d.x, d.y, FRONT + .05), at = this.worldAt(d.x, d.y, FRONT - .024);
    d.it.tgt = [held.x - s.cx, clamp(held.y - d.it.h * .4, .03, s.H + .1), FRONT + .05, .05];
    const k = s.rowAt(at.y);
    if (k !== d.k) {
      if (d.pk !== k) { d.pk = k; d.pt = now; } else if (now - d.pt > 180) d.k = k;
    } else d.pk = k;
    s.insertAt(d.it, d.k, at.x - s.cx);
    d.k = Math.min(d.k, s.rows.length - 1);
    // 画面の端では棚を送る
    const ex = this.W * .12, ey = this.H * .12;
    if (d.x < ex) this.view.x -= .007; else if (d.x > this.W - ex) this.view.x += .007;
    if (d.y < ey) this.view.y += .007; else if (d.y > this.H - ey - 120) this.view.y -= .007;
  }
  private endDrag() {
    const d = this.drag!; this.drag = null;
    d.s.layout();
    this.ev.moved(d.s, d.it);
    this.dirty = true;
  }

  // ---- 毎コマ ----
  private frames = 0; private t0 = 0; private moving = false; private prev = 0; private fpsMin = 0;
  paused = false;
  private loop(now: number) {
    requestAnimationFrame(t => this.loop(t));
    const dt = Math.min(50, now - (this.prev || now)); this.prev = now;
    if (this.go) {
      const k = this.calm ? 1 : 1 - Math.exp(-dt / 110);
      this.view.x += (this.go.x - this.view.x) * k; this.view.y += (this.go.y - this.view.y) * k;
      if (Math.abs(this.go.x - this.view.x) < .0005) { this.view.x = this.go.x; this.go = null; }
      this.dirty = true;
    } else if (!this.panning && !this.drag && Math.abs(this.vel.x) + Math.abs(this.vel.y) > .00006) {
      this.view.x += this.vel.x; this.view.y += this.vel.y; this.vel.x *= .93; this.vel.y *= .93; this.dirty = true;
    }
    if (this.drag) this.dragUpdate();
    for (const s of this.shelves) if (s.step(dt, this.drag?.it, this.calm)) { this.shadow(); this.dirty = true; }
    if (!this.dirty || this.paused) { this.moving = false; return; }
    this.dirty = false; this.placeCamera(); this.renderer.render(this.scene, this.camera);
    if (!this.moving) { this.moving = true; this.frames = 0; this.t0 = now; }
    this.frames++;
    if (now - this.t0 > 500) {
      const fps = Math.round(this.frames * 1000 / (now - this.t0));
      if (this.drag) this.fpsMin = this.fpsMin ? Math.min(this.fpsMin, fps) : fps;
      this.ev.fps(this.fpsMin ? `並べ替え ${fps}コマ/秒（最低${this.fpsMin}）` : `なめらかさ ${fps}コマ/秒`);
      this.frames = 0; this.t0 = now;
    }
  }
  redraw() { this.dirty = true; }
}
