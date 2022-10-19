/**
 * 生成打包分析可视化报告
 * TODO:该包基于rollup2.x，所以再package.json中显示引入了 --> pnpm配置resolutions不生效？
 */

import visualizer from 'rollup-plugin-visualizer';

function isReportMode(): boolean {
    return process.env.REPORT === 'true';
}

export default function configVisualizerPlugin() {
    if (!isReportMode()) {
        return [];
    }
    return visualizer({
        filename: './node_modules/.cache/visualizer/stats.html',
        open: true,
        gzipSize: true,
        brotliSize: true
    });
}
