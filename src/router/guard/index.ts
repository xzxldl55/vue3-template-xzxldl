import type { Router } from 'vue-router';
import setupUserLoginInfoGuard from './userLogin';
import setupPermissionGuard from './permission';
import globalEventBus, { EVENT_NAME } from '@/utils/global-event-bus';

function setupPageGuard(router: Router) {
    router.beforeEach(async (to) => {
        // 路由切换事件emit
        globalEventBus.emit(EVENT_NAME.ROUTE_CHANGE, to.name);
    });
}

export default function createRouteGuard(router: Router) {
    setupPageGuard(router);
    setupUserLoginInfoGuard(router);
    setupPermissionGuard(router);
}
