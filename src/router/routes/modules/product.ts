import { MENU_NAME } from '@/router/const';
import { AppRouteRecordRaw } from '../types';

const PRODUCT: AppRouteRecordRaw = {
    path: `/${MENU_NAME.PRODUCT}`,
    name: MENU_NAME.PRODUCT,
    component: () => import('@/views/product/index.vue'),
    meta: {
        requiresAuth: false
    },
    children: []
};

export default PRODUCT;
