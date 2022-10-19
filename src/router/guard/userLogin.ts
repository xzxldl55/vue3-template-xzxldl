/**
 * 用户校验页面检查
 * 1. 检查当前待访问页面是否需要登陆权限
 * 2. 如不要，直接next放过即可
 * 3. 如需要，则进行登录检查，刷新一次用户信息
 */

import type { LocationQueryRaw, Router } from 'vue-router';
import NProgress from 'nprogress';
import { useUserStore } from '@/store';
import { isLogin } from '@/utils/auth';

export default function setupUserLoginInfoGuard(router: Router) {
    router.beforeEach(async (to, from, next) => {
        console.log('守卫:', to);
        NProgress.start(); // 开启页面顶部加载loading
        const userStore = useUserStore();

        // 非需要登陆界面，直接放过即可
        if (!to.meta.requiresAuth) {
            next();
            return;
        }

        // 查询token，检查当前是否登录
        if (isLogin()) {
            await userStore.info(); // 刷新一次用户信息（自动在axios/interceptor.ts处理登录过期的情况）
        } else {
            if (to.name === 'login') {
                next();
                return;
            }
            next({
                name: 'login',
                query: {
                    redirect: to.name, // 将待访问页面作为参数传递，登陆后则直接跳转到redirect
                    ...to.query
                } as LocationQueryRaw
            });
        }
    });
}
