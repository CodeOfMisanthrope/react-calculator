import * as path from "node:path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const dirname = import.meta.dirname;

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],

    resolve: {
        alias: {
            '~': path.resolve(dirname, 'src'),
            '~utils': path.resolve(dirname, 'src', 'utils'),
            '~assets': path.resolve(dirname, 'assets'),
        },

        extensions: ['.tsx', '.ts', '.css'],
    }
});
