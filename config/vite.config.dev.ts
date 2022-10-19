import { mergeConfig } from 'vite';
import viteEslint from 'vite-plugin-eslint';
import viteStylelint from '@amatlash/vite-plugin-stylelint';
import baseConfig from './vite.config.base';

export default mergeConfig(
    {
        plugins: [viteEslint(), viteStylelint()],
        server: {
            open: true,
            // 设置接口代理转发
            proxy: {
                // 测试环境下手动添加的前缀 /yqby-api
                '/yqby-api': {
                    target: 'http://172.16.120.21:8080',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/yqby-api/, '')
                }
            }
        }
    },
    baseConfig
);
