import * as path from "node:path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteBaseConfig from "./vite.base.config.ts";

const dirname = import.meta.dirname;

// https://vite.dev/config/
export default defineConfig({
    ...viteBaseConfig,

    mode: "production",

    build: {
        outDir: path.resolve(dirname, "dist"),
        assetsDir: path.resolve(dirname, "dist", "assets"),
        cssCodeSplit: true,
        target: "es2020",
        cssMinify: "lightningcss",
        sourcemap: true,
        manifest: true,
        minify: "oxc"
    }
});
