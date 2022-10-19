import { mergeConfig } from 'vite';
import baseConfig from './vite.config.base';
import legacy from '@vitejs/plugin-legacy';
import configVisualizerPlugin from './plugins/visualizer';

export default mergeConfig(
    {
        plugins: [
            // CONFIRM:针对低版本浏览器 ESM 模块语法兼容（后面测试时再确认是否有必要加上，会增加大概 1MB 的 polyfills 代码）
            // PS:legacy基于terser进行代码压缩混淆（vite默认是esbuild，所以没有安装terser），启用后需要手动安装一下terser `pnpm add terser -D`
            legacy({
                targets: ['defaults', 'not IE 11']
            }),
            configVisualizerPlugin()
        ],
        build: {
            target: 'es2015', // CONFIRM:后续测试在确定是否要向下兼容到 es2015 的版本
            cssTarget: 'chrome61' // CONFIRM:~向下兼容css的浏览器版本
        }
    },
    baseConfig
);
