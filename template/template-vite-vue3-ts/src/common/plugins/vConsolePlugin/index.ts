/* 日志打印插件 */
import '@achengyu/vconsole'

// 注册插件
const install = (): void => {
  vconsole
    .setting
    // 开启日志打印，表示是否开启插件
    .setEnabled(true)
    // 开启日志打印所在的文件、行号信息
    .setEnableStackInfo(true)
  // 设置过滤的tag，表示需要过滤打印的tag日志
  // .filterTags(['test'])
  // 设置过滤的等级，表示需要过滤打印的日志等级
  // .filterLevel([vconsole.CONSOLE_TYPE.DEBUG])
}

export default install
