/**
 * 工具类型
 */

export type CanbeUndefined<T extends Record<string | symbol, SafeAny>> = {
    [P in keyof T]: T[P] | undefined;
};
