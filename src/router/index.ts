import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import createRouteGuard from './guard';
import { appRoutes } from './routes';
import { DEFAULT_LAYOUT, MENU_NAME } from './const';

// 配置pageProgress不显示spinner
NProgress.configure({ showSpinner: false });

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: MENU_NAME.HOME,
            component: DEFAULT_LAYOUT,
            children: [...appRoutes]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login/index.vue'),
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            meta: {
                requiresAuth: false
            },
            component: () => import('@/views/not-found/index.vue')
        }
    ],
    scrollBehavior() {
        return { top: 0 };
    }
});

createRouteGuard(router);

export default router;
