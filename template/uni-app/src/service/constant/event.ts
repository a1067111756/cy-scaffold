/* 全局 - 常量 - event事件名列表 
 * 事件名约定写法 [类型标识]:[模块标识]:[动作标识]，每个常量都需要单独export
 * 类型标识：表示事件生效的作用域，当前划分为global - 全局  page - 页面  component - 组件
 * 模块标识: 表示事件作用的目标或者产生的目标，eg：'page:plugin-demo'表示作用于或者产生于插件demo页面的事件 
 * 动作标识: 表示事件作用的目的，eg：'page:plugin-demo:open'表示插件demo页面打开事件
 **/
 
 // 插件demo页面测试事件
export const PAGE$PLUGIN_DEMO$TEST = 'page:plugin-demo:test'

