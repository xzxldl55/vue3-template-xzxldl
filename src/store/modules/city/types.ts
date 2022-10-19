import { CanbeUndefined } from '@/types/utils';

export type CityState = CanbeUndefined<{
    name: string; // 城市名
    code: number; // 城市code
    accessUrl: string; // 子平台访问地址
    platformNature: 0 | 1; // 是否原生子平台，0非原生，需要跳转到accessUrl，1原生，切换cityState即可
    platformName?: string; // 平台标题
    platformDesc?: string; // 平台描述
    cooperativeConstructionUnit?: string; // 合建单位
}>;
