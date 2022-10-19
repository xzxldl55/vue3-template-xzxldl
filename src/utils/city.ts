/**
 * 城市相关操作
 *
 * 与useCityStore关系：这里用localStorage实现长时间缓存地市信息，而真正进行使用则为useCityStore，这样可以充分Pinia的响应式特性，与其相关操作方法，更便捷
 */

import { CityState } from '@/store/modules/city/types';

const CITY_KEY = 'city';
const defaultCity: CityState = {
    code: 360000,
    name: '江西省',
    accessUrl: '',
    platformNature: 1
};

const getCityInfo = (): CityState => {
    return localStorage.getItem(CITY_KEY)
        ? (JSON.parse(localStorage.getItem(CITY_KEY) as string) as CityState)
        : defaultCity;
};

const setCityInfo = (city: CityState) => {
    localStorage.setItem(CITY_KEY, JSON.stringify(city));
};

const clearCityInfo = () => {
    localStorage.removeItem(CITY_KEY);
};

export { getCityInfo, setCityInfo, clearCityInfo };
