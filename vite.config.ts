import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 新しい3Dの本屋は app/ に書いて、組み立てたものを v3/ に置く。
// 今の公開ページ（いちばん上の index.html）はそのまま残すので、GitHub の設定は変えない。
// ファイル名は毎回同じにして、古いファイルを消さなくても上書きされるようにする。
export default defineConfig({
  root: 'app',
  base: './',
  plugins: [react()],
  server: { fs: { allow: ['..'] } },
  build: {
    outDir: '../v3',
    emptyOutDir: false,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: { entryFileNames: 'app.js', chunkFileNames: '[name].js', assetFileNames: '[name][extname]' },
    },
  },
});
