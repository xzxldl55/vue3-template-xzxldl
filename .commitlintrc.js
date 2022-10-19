/**
 * feat: 增加新功能。
 * fix: 修复 Bug。
 * chore: 一些不影响功能的更改。
 * docs: 文档的修改。
 * perf: 性能方面的优化。
 * refactor: 代码重构。
 * test: 添加测试代码等等
 * revert：回滚某个更早之前的提交
 * style：样式、代码风格
 * build：修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
 * ci：修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
 */
module.exports = {
    extends: ['@commitlint/config-conventional']
};
