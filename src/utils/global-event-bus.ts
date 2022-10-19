/**
 * 全局事件总线
 */

import { SafeAny } from '@/types/utils';

export type EventCallback = (...args: SafeAny[]) => unknown;
export type EventKey = string | symbol;
export type EventBusDep = Set<EventCallback>;
export type EventBusMap = Map<EventKey, EventBusDep>;

export const EVENT_NAME = {
    ROUTE_CHANGE: Symbol('ROUTE_CHANGE')
};

class GlobalEventBus {
    listener: EventBusMap;
    constructor() {
        this.listener = new Map();
    }

    // 设置监听函数
    on(key: EventKey, fn: EventCallback) {
        if (!this.listener.has(key)) {
            this.listener.set(key, new Set<EventCallback>().add(fn));
        }
        this.listener.get(key)?.add(fn);
    }

    emit(key: EventKey, ...args: SafeAny[]) {
        this.listener.get(key)?.forEach((fn) => fn(...args));
    }

    remove(key: EventKey, fn: EventCallback) {
        return !!this.listener.get(key)?.delete(fn);
    }
}

const globalEventBus = new GlobalEventBus();

export default globalEventBus;
