/**
 * 日志模块
 */

type ConsoleType = 'log' | 'warn' | 'error';

class Log {
    // TODO:收集log信息，定时保存到本地 / 发送到服务器
    tag: string;
    constructor(tag: string) {
        this.tag = tag;
    }

    _log(type: ConsoleType, msg: string, reason: string) {
        window.console[type](`${this.tag}: ${msg}. ${reason}`);
    }

    info(msg: string, reason: string) {
        this._log('log', msg, reason);
    }

    warn(msg: string, reason: string) {
        this._log('warn', msg, reason);
    }

    error(msg: string, reason: string) {
        this._log('error', msg, reason);
    }
}

export default Log;
