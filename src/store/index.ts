import { createPinia } from 'pinia';
import useCityStore from './modules/city';
import useUserStore from './modules/user';

const pinia = createPinia();

export { useCityStore, useUserStore };
export default pinia;
