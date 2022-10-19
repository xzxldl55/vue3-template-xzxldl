/// <reference types="vite/client" />

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type SafeAny = any;

declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent<
        Record<SafeAny, SafeAny>,
        Record<SafeAny, SafeAny>,
        SafeAny
    >;
    export default component;
}

// 增加样式文件声明
declare module '*.css' {
    const value: SafeAny;
    export = value;
}

declare module '*.scss' {
    const value: SafeAny;
    export = value;
}
