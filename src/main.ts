import { createApp } from 'vue';
import App from './App.vue';
import store, { useCityStore } from './store';
import router from './router';
import '@/axios/interceptor'; // 引入全局axios拦截器

// 全局样式引入
import './assets/style/index.css';
import './assets/style/overwrite.scss';

// 引入组件库 ElementPlus TODO:后续差不多搞完后，改为按需引入，减小打包体积，目前全量包1.31MB
import ElementPlus from 'element-plus';
import { getCityInfo } from './utils/city';
import globalEventBus, { EVENT_NAME } from './utils/global-event-bus';

const app = createApp(App);

app.use(router).use(store).use(ElementPlus);

/**
 * TODO: 进入项目后立即设置城市信息（子平台信息）
 * 1. 按照url设置（优先级最高）--> CONFIRM: 确认重构后是否还要这样用子域名分平台
 * 2. 从localStorage中提取后，注入到pinia
 * 3. 设置默认的总平台信息——江西省360000 --> getCityInfo已配置默认信息
 */
{
    const cityStore = useCityStore();
    const localStorageCity = getCityInfo();
    cityStore.setInfo(localStorageCity);
}

app.mount('#app');

globalEventBus.on(EVENT_NAME.ROUTE_CHANGE, function (args: SafeAny) {
    console.log('路由切换：', args);
});
