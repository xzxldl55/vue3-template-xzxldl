import { MENU_NAME } from '@/router/const';
import { AppRouteRecordRaw } from '../types';

const ABOUT: AppRouteRecordRaw = {
    path: `/${MENU_NAME.ABOUT}`,
    name: MENU_NAME.ABOUT,
    component: () => import('@/views/about/index.vue'),
    meta: {
        requiresAuth: false
    },
    children: []
};

export default ABOUT;
