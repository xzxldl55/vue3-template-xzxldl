module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true
    },
    globals: {
        defineEmits: 'readonly',
        defineProps: 'readonly'
    },
    extends: [
        'standard',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-recommended',
        'plugin:prettier/recommended',
        'prettier'
    ],
    plugins: ['vue', '@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': ['error', { endOfLine: 'auto' }], // 对换行符 CRLF 自动处理

        // Eslint规则
        complexity: [
            'error',
            {
                max: 20 // 最大允许40的圈复杂度 --> 过于复杂的圈数会导致代码难懂，这里使用默认的20圈(具体推荐用法参考：https://eslint.org/docs/latest/rules/complexity#options)
            }
        ],

        // vue 相关规则
        'vue/html-indent': ['error', 4], // sfc内4空格缩进
        'vue/singleline-html-element-content-newline': 0, // 允许单行标签内容换行
        'vue/html-self-closing': 0, // 允许标签自合必
        'vue/max-attributes-per-line': 0, // 关闭单行允许的最大属性数量限制
        'vue/multi-word-component-names': 0, // 关闭Vue3组件名必须未AaB驼峰命名格式的校验（组件习惯以文件夹存放，文件夹名为组件名）
        'vue/custom-event-name-casing': [2, 'kebab-case'], // 自定义组件事件名称限定为 - 命名
        'vue/padding-line-between-blocks': 1, // 两个代码块之间需要空行
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 开发环境允许debugger
        'no-sparse-arrays': 2, // 禁止在数组内插入未定义值 [1, , 2]

        // TS相关规则
        '@typescript-eslint/no-require-imports': 0, // 允许require()
        '@typescript-eslint/no-var-requires': 0, // 允许用var接收require的导入
        '@typescript-eslint/dot-notation': 0, // 允许非点表示 --> x['aPropoty']
        '@typescript-eslint/no-non-null-assertion': 'error', // 禁用非空断言 ! --> 建议用 ? 代替
        '@typescript-eslint/prefer-function-type': 'error', // 使用函数类型，而不是调用签名的接口 --> 建议 type = () => string 而不是 interface { (): string }
        '@typescript-eslint/unified-signatures': 'error', // 禁止出现可合并的多个函数重载声明 --> 如 function x (p1: number): void; function x (p1: string): void; ==> 建议改为：function x (p1: number | string): void;
        '@typescript-eslint/no-shadow': 'error', // 禁止重复声明同名变量对原变量遮盖
        '@typescript-eslint/no-this-alias': 0, // 禁止别名 this --> Vue3不推荐去利用this机制，尽量都是用箭头函数与 hooks 的写法来书写代码，避免this带来的心智负担
        '@typescript-eslint/member-ordering': 0, // 允许再实现类型时不遵循类型属性的顺序
        '@typescript-eslint/indent': 0 // ts文件缩进规范 --> 这里对于嵌套情况会存在误判，禁掉使用prettier的即可
    }
};
