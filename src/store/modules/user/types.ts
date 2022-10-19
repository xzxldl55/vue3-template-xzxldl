import { CanbeUndefined } from '@/types/utils';

// 1国有企业
// 2私营企业
// 3中外合资
// 4外商独资企业
// 5一人有限公司
// 6全民所有制
// 7集体所有制
// 8其他
type EnterpriseType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type UserState = CanbeUndefined<{
    id: string;
    bankName: string; // 基本账户开户行
    recommendBank: string; // 基本开户行账号code
    authority: string; // CONFIRM: ?
    byzd1: string; // CONFIRM: ?
    byzd2: string; // CONFIRM: ?
    caUserId: string; // CONFIRM: ?
    capital: string; // CONFIRM: ?

    // 所属地市信息
    province: string;
    provinceCode: number;
    city: string;
    cityCode: number;
    county: string;
    countyCode: number;
    newDistrictCode: number;
    newDistrictName: string;
    regArea: string; // 公司所属地区（申请贷款时，自动依据所属地分配可申请银行）provinceCode_cityCode_(countyCode|newDistrictCode)

    businessScope: string; // 经营范围
    companyLogo: string; // 公司logo图片地址
    companyName: string; // 公司名
    companyStatus: string; // CONFIRM: ?
    companyTag: string; // 公司标签
    contactPhone: string; // 联系电话
    contacts: string; // 联系人
    email: string; // 邮箱
    regAddress: string; // 公司注册地
    enterpriseType: EnterpriseType; // 企业类型
    identificationNumber: string; // 企业统一社会信用代码
    identificationType: string; // CONFIRM: ?
    unifiedSocialCreditCode: string; // REVIEW: 重复了，是否有必要? 企业统一社会信用代码
    industry: string; // CONFIRM: ?
    isLoaned: number; // CONFIRM: ?
    isProvince: string; // CONFIRM: ?
    lastYearEmployees: number; // 去年员工数
    lastYearIncome: string; // 去年收益
    lastYearTotal: string; // 去年总营业额

    legalPerson: string; // 法人姓名
    legalPersonCard: string; // 法人身份证
    legalPersonPhone: string; // 法人电话
    position: string; // CONFIRM: ?
    createTime: number; // 创建时间
    updateTime: number; // 更新信息时间
}>;
