/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {TanStackRouterVite} from "@tanstack/router-vite-plugin"
import dynamicImport from "vite-plugin-dynamic-import";
import { resolve } from "path";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(),TanStackRouterVite()],
// })

export default defineConfig({
  plugins: [react(), dynamicImport(),TanStackRouterVite()],
  test: {
    //  describe, expect, it などのAPIをファイル内でimportしなくても使用可にする設定
    globals: true,
    // dom
    environment: "happy-dom",
    // テスト全体で使用するライブラリをvitest-setup.jsに記載し、インポートする設定
    setupFiles: [resolve(__dirname, "src", "vitest-setup.js")],
  },
});
