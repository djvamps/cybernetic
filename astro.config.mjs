import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import CompressionPlugin from "vite-plugin-compression";
import sitemap from "@astrojs/sitemap";

export const siteUrl = "https://dalopeza.netlify.app";

const date = new Date().toISOString();

// https://astro.build/config
export default defineConfig({
site: siteUrl + "/",
integrations: [
    react(),
],
});

