import { defineComponent } from 'vue';
import type { NavigationGuard, RouteMeta } from 'vue-router';

// Vue组件类型
export type Component<T = SafeAny> =
    | ReturnType<typeof defineComponent>
    | (() => Promise<typeof import('*.vue')>)
    | (() => Promise<T>);

// 路由配置类型
export interface AppRouteRecordRaw {
    path: string;
    name?: string | symbol;
    meta?: RouteMeta;
    redirect?: string;
    component: Component | string;
    children?: AppRouteRecordRaw[];
    alias?: string | string[];
    props?: Record<string, SafeAny>;
    beforeEnter?: NavigationGuard | NavigationGuard[];
    fullPath?: string;
}
