import { defineConfig } from "vite";
import { crx, defineManifest } from "@crxjs/vite-plugin";

const manifest = defineManifest({
  manifest_version: 3,
  name: "Reading time",
  description:
    "Add the reading time to Chrome Extension documentation articles",
  version: "1.0",
  content_scripts: [
    {
      js: ["scripts/content.ts"],
      matches: [
        "https://developer.chrome.com/docs/extensions/*",
        "https://developer.chrome.com/docs/webstore/*",
      ],
    },
  ],
});

export default defineConfig({
  plugins: [crx({ manifest })],
});
