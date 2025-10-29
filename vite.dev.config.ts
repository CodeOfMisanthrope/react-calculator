import * as path from "node:path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteBaseConfig from "./vite.base.config.ts";

const dirname = import.meta.dirname;

// https://vite.dev/config/
export default defineConfig({
  ...viteBaseConfig,

  mode: "development",

  server: {
    port: 5173,
    hmr: true,
  },
});
