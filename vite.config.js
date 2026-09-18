import { defineConfig } from 'vite';

// Served at looterstudio.xyz/luv/ (a project site under the org's custom domain).
// xp.css has a selector lightningcss refuses to minify, so CSS minification is off.
export default defineConfig({ base: '/luv/', build: { cssMinify: false } });
