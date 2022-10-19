/**
 * 页面权限控制 --> 暂无该权限模块，这里做预留，直接放通router即可
 */

import type { Router } from 'vue-router';
import NProgress from 'nprogress';

export default function setupPermissionGuard(router: Router) {
    router.beforeEach(async (to, from, next) => {
        next();
        NProgress.done(); // 作为最后一个进入的守卫，结束progress
    });
}
