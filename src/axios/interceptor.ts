import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import baseUrl from './baseUrl';
import { Action, ElMessage, ElMessageBox } from 'element-plus';
import { useCityStore } from '@/store';
import { getSign, getToken } from '@/utils/auth';
import { getTimeStamp } from '@/utils/date';
import { ERROR_CODE, HTTP_CODE, STATUS_CODE } from './const';

export interface HttpResponse<T = unknown> {
    status: number; // 请求状态
    errMessage: string;
    errCode: number; // 错误码
    httpCode: number; // http状态码
    data: T;
}

export const handleResponseData = <T>(
    options: Partial<HttpResponse<T> & { data: T }>
): HttpResponse<T> => {
    return Object.assign(
        {
            status: STATUS_CODE.SUCCESS,
            errMessage: '',
            errCode: 0,
            httpCode: HTTP_CODE.SUCCESS,
            data: null
        },
        options
    );
};

const DURATION_TIME = 5 * 1000;

if (baseUrl) {
    axios.defaults.baseURL = baseUrl;
}

axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        if (!config.headers) {
            config.headers = {};
        }

        // 添加 jsessionid
        const token = getToken();
        if (token) {
            config.headers.JSESSIONID = token;
        }

        // 添加city
        const cityStore = useCityStore();
        const citycode = cityStore.code;
        if (citycode) {
            config.headers.citycode = citycode;
        }

        // 添加clientid
        config.headers.clientId = 'yqbyfront';

        // 添加本地时间 & sign加密值
        const timeStamp = getTimeStamp();
        config.headers.timeStamp = timeStamp;
        config.headers.sign = getSign(timeStamp);
        return config;
    },
    (error) => {
        // 请求发生错误
        return Promise.reject(
            handleResponseData<SafeAny>({
                data: error,
                httpCode: HTTP_CODE.REQUEST_ERROR
            })
        );
    }
);

// 响应拦截器
axios.interceptors.response.use(
    (response: AxiosResponse<HttpResponse>) => {
        const res = response.data;

        // 错误处理
        if (res.httpCode !== HTTP_CODE.SUCCESS) {
            ElMessage.error({
                message: res.errMessage || '请求失败',
                duration: DURATION_TIME
            });

            // 一些已知通用错误代码处理 --> 重新登录
            if ([...Object.values(ERROR_CODE)].includes(res.httpCode)) {
                ElMessageBox.alert(
                    res.errMessage || '请求失败，您或许无权限访问，请重新登录',
                    '请求失败',
                    {
                        confirmButtonText: '确认',
                        callback: async (action: Action) => {
                            console.log('debugLog: action is ', action);
                            // const userStore = useUserStore();

                            // await userStore.logout();
                            window.location.reload();
                        }
                    }
                );
            }

            // 其他错误 --> 交给具体接口处理
            return Promise.reject(handleResponseData<unknown>(res));
        }
        return res;
    },
    (error) => {
        ElMessage.error({
            message: error.msg || 'Request Error',
            duration: DURATION_TIME
        });
        return Promise.reject(error);
    }
);
