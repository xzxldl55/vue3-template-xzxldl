import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    base: './',
    plugins: [vue()],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, '../src')
            }
        ]
    },
    define: {
        'process.env': {}
    }
});
