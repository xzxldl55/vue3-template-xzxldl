module.exports = {
    // 注册 stylelint 的 prettier 插件
    plugins: ['stylelint-prettier'],
    // 继承一系列规则集合
    extends: [
        // standard 规则集合
        'stylelint-config-standard',
        // standard 规则集合的 scss 版本
        'stylelint-config-standard-scss',
        // 样式属性顺序规则
        'stylelint-config-recess-order',
        // 接入 Prettier 规则
        'stylelint-config-prettier',
        'stylelint-prettier/recommended',

        'stylelint-config-recommended-vue',
        'stylelint-config-recommended-vue/scss'
    ],
    customSyntax: 'postcss-html',
    ignoreFiles: [], // 忽略某些不想被检查的文件
    // 配置 rules
    rules: {
        // 开启 Prettier 自动格式化功能
        'prettier/prettier': true,
        'at-rule-no-unknown': [ // 不认识的规则处理
            true,
            {
                ignoreAtRules: [ // 忽略规则：以下关键词相关规则带来的错误被忽略
                    'tailwind',
                    'apply',
                    'variants',
                    'responsive',
                    'screen'
                ]
            }
        ],
        'declaration-block-trailing-semicolon': null,
        'no-descending-specificity': null, // 忽略规则：禁止再出现高优先级选择器后仍存在低优先级选择器（这里规避tailwindcss的utils）
        'order/properties-order': null, // 忽略样式排序
        "selector-class-pattern": null, // 忽略class名称只能时 kebab-case 格式，项目中使用的是BEM
        'keyframes-name-pattern': null, // 忽略动画名称只能是kebab-case的限制
    }
};
