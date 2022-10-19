import 'vue-router';

declare module 'vue-router' {
    // 覆写meta属性
    interface RouteMeta {
        roles?: string[]; // 当前用户所属角色（目前没用）
        requiresAuth: boolean; // 是否需要登陆才能访问
        icon?: string; // 菜单对应的icon
        ignoreCache?: boolean; // 是否禁用该页面的缓存
    }
}
