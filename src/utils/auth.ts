/**
 * 认证相关
 */

import { md5 } from '../lib/md5';

const TOKEN_KEY = 'JSESSIONID';
const SECRET = 'ew32f_vowe_u02k'; // sign密钥

const isLogin = () => {
    return !!localStorage.getItem(TOKEN_KEY);
};

const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};

const setToken = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
};

const clearToken = () => {
    localStorage.removeItem(TOKEN_KEY);
};

const getSign = (timeStamp: string, secret: string = SECRET): string => {
    return md5(secret + timeStamp);
};

export { isLogin, getToken, setToken, clearToken, getSign };
