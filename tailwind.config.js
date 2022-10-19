/**
 * Tailwindcss 配置
 * 从Tailwindcss3开始，Just in time Mode(JIT)就默认被开启了, 有以下可用特性:
 * 1. 生产/开发 环境同样使用按需构建模式，仅添加已使用的css样式 --> Fastly dev build。
 * 2. 任意值辅助类，允许直接在css使用自定义样式，eg: mt-[50px] -> margin-top: 50px;
 * 3. 可以设置伪元素样式，eg: first-letter:text-red-400 --> 首字母红色
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'], // Purge content
    theme: {
        extend: {},
        screens: {
            phone: '320px',
            iPad: '1024px',
            sm: '1280px',
            md: '1366px',
            lg: '1440px',
            xl: '1920px'
        }
    }
    // plugins: [require('daisyui')]
};
