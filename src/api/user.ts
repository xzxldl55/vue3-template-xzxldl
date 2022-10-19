import axios from 'axios';
import { UserState } from '@/store/modules/user/types';

// 0 账户不存在 | 1 账户可用 | 2 输入账户存在关联，但不能用作登录凭证，提示“请使用企业统一社会信用代码或者个体工商户经营者身份证号登录！”
export type IsExist = '0' | '1' | '2';

export interface LoginData {
    phone: string;
    passwd: string;
    key: number;
    verifyCode: string;
}

export interface LoginRes {
    companyInfo: UserState;
    jsesessionid: string; // sessionid <--> token登录校验凭证
    isExist: IsExist; // 账号是否存在
    isStatus: '2' | string; // 2 代表企业已完成认证
    openIdStatus: string; // CONFIRM: ?
    orgCode: string; // 开户行code
    orgName: string; // 开户行名称
    phone: string; // 用户电话号码
    userId: string; // CONFIRM:?
    userNumber: string; // 统一社会信用代码
    userType: string; // CONFIRM:?
}

// 登录
export function login(data: LoginData) {
    return axios.post<LoginRes>('/yqby/loginController/login', data);
}

// 注销
export function logout() {
    return axios.post<undefined>('/yqby/loginController/loginOut');
}

// 获取当前登录用户信息
export function getUserInfo() {
    return axios.post<UserState>('/yqby/loginController/info');
}
