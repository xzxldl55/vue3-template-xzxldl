/**
 * 当前所处的子平台 <--> 当前所选择城市
 */

import { defineStore } from 'pinia';
import { CityState } from './types';

const useCityStore = defineStore('city', {
    state: (): CityState => ({
        name: undefined,
        code: undefined,
        accessUrl: undefined,
        platformNature: undefined,
        platformName: undefined,
        platformDesc: undefined,
        cooperativeConstructionUnit: undefined
    }),
    getters: {
        cityInfo(state: CityState): CityState {
            return { ...state };
        }
    },
    actions: {
        // 调用pinia内部更新方法，以partial方式更新state
        setInfo(partial: Partial<CityState>) {
            this.$patch(partial);
        },

        // 重置state
        resetInfo() {
            this.$reset();
        }
    }
});

export default useCityStore;
