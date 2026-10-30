// カメラで本のバーコード（ISBN）を読む。
// Android の Chrome などは端末の読み取り機能（BarcodeDetector）、iPhone などは ZXing を使う
const ZXING = 'https://cdn.jsdelivr.net/npm/@zxing/library@0.21.3/umd/index.min.js';
let zxingLoad = null;
function loadZxing() {
  if (window.ZXing) return Promise.resolve(window.ZXing);
  if (!zxingLoad) zxingLoad = new Promise((ok, ng) => {
    const s = document.createElement('script');
    s.src = ZXING; s.onload = () => ok(window.ZXing); s.onerror = ng;
    document.head.appendChild(s);
  });
  return zxingLoad;
}

// video に映し、ISBN（978/979 で始まる13けた）が見つかったら onFound を呼ぶ。止めるための関数を返す
export async function startScan(video, onFound) {
  const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' }, width: { ideal: 1920 } }, audio: false });
  video.srcObject = stream;
  await video.play();
  let stopped = false;
  const stop = () => { stopped = true; stream.getTracks().forEach(t => t.stop()); video.srcObject = null; };
  const found = code => { if (stopped || !/^97[89]\d{10}$/.test(code)) return false; stop(); onFound(code); return true; };

  if ('BarcodeDetector' in window) {
    const det = new window.BarcodeDetector({ formats: ['ean_13'] });
    const tick = async () => {
      if (stopped) return;
      try { for (const c of await det.detect(video)) if (found(c.rawValue)) return; } catch (e) { /* 次のコマで読み直す */ }
      requestAnimationFrame(tick);
    };
    tick();
  } else {
    const Z = await loadZxing();
    const hints = new Map([[Z.DecodeHintType.POSSIBLE_FORMATS, [Z.BarcodeFormat.EAN_13]], [Z.DecodeHintType.TRY_HARDER, true]]);
    const reader = new Z.MultiFormatReader(); reader.setHints(hints);
    const cv = document.createElement('canvas'), cx = cv.getContext('2d', { willReadFrequently: true });
    const tick = () => {
      if (stopped) return;
      const w = video.videoWidth, h = video.videoHeight;
      if (w) {
        // 画面のまん中の帯だけを読む（速く・まちがいにくく）
        const bw = Math.round(w * 0.8), bh = Math.round(h * 0.35);
        cv.width = bw; cv.height = bh;
        cx.drawImage(video, (w - bw) / 2, (h - bh) / 2, bw, bh, 0, 0, bw, bh);
        try {
          const lum = new Z.HTMLCanvasElementLuminanceSource(cv);
          const r = reader.decode(new Z.BinaryBitmap(new Z.HybridBinarizer(lum)));
          if (found(r.getText())) return;
        } catch (e) { /* 見つからないコマは読み飛ばす */ }
      }
      setTimeout(tick, 120);
    };
    tick();
  }
  return stop;
}
