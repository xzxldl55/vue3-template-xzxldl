import { MENU_NAME } from '@/router/const';
import { AppRouteRecordRaw } from '../types';

const HOME: AppRouteRecordRaw = {
    path: `/${MENU_NAME.HOME}`,
    name: MENU_NAME.HOME,
    component: () => import('@/views/home/index.vue'),
    meta: {
        requiresAuth: false
    },
    children: []
};

export default HOME;
