import { getUserInfo, login, LoginData, logout } from '@/api/user';
import { clearToken, setToken } from '@/utils/auth';
import { defineStore } from 'pinia';
import { UserState } from './types';

const useUserStore = defineStore('user', {
    state: (): UserState => ({
        id: undefined,
        bankName: undefined,
        recommendBank: undefined,
        authority: undefined,
        byzd1: undefined,
        byzd2: undefined,
        caUserId: undefined,
        capital: undefined,

        province: undefined,
        provinceCode: undefined,
        city: undefined,
        cityCode: undefined,
        county: undefined,
        countyCode: undefined,
        newDistrictCode: undefined,
        newDistrictName: undefined,
        regArea: undefined,

        businessScope: undefined,
        companyLogo: undefined,
        companyName: undefined,
        companyStatus: undefined,
        companyTag: undefined,
        contacts: undefined,
        contactPhone: undefined,
        email: undefined,
        regAddress: undefined,
        enterpriseType: undefined,
        identificationNumber: undefined,
        identificationType: undefined,
        unifiedSocialCreditCode: undefined,
        industry: undefined,
        isLoaned: undefined,
        isProvince: undefined,
        lastYearEmployees: undefined,
        lastYearIncome: undefined,
        lastYearTotal: undefined,

        legalPerson: undefined,
        legalPersonCard: undefined,
        legalPersonPhone: undefined,
        position: undefined,
        createTime: undefined,
        updateTime: undefined
    }),
    getters: {
        userInfo(state: UserState): UserState {
            return { ...state };
        }
    },
    actions: {
        setInfo(partial: Partial<UserState>) {
            this.$patch(partial);
        },
        resetInfo() {
            this.$reset();
        },
        async login(loginForm: LoginData) {
            try {
                const res = await login(loginForm);
                setToken(res.data.jsesessionid);
            } catch (err) {
                clearToken();
                throw err;
            }
        },
        async logout() {
            try {
                await logout();
            } finally {
                this.logoutCallback();
            }
        },
        logoutCallback() {
            // 1. 清除菜单数据 --> TODO:
            // 2. 重置userState
            // 3. 清除token
            // 4. 清除路由监听事件 --> TODO:
            this.resetInfo();
            clearToken();
        },
        async info() {
            const res = await getUserInfo();

            this.setInfo(res.data);
        }
    }
});

export default useUserStore;
