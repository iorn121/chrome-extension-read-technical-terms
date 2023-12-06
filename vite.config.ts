import { defineConfig } from "vite";
import { crx, defineManifest } from "@crxjs/vite-plugin";

const manifest = defineManifest({
  manifest_version: 3,
  name: "Reading IT Terms",
  description: "IT用語ルビ振り拡張機能",
  version: "1.0",
  content_scripts: [
    {
      js: ["scripts/content.ts"],
      matches: ["https://qiita.com/*", "https://zenn.dev/*"],
    },
  ],
});

export default defineConfig({
  plugins: [crx({ manifest })],
});
