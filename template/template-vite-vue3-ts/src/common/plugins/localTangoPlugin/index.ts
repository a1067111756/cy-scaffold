/* 本地持久化插件 */
import localTango from 'local-tango'

// 注册插件
const install = (): void => {
  localTango.config({
    driver: 'localStorage',
    encrypt: true,
    encryptKey: 'local_tango_encrypt_key'
  })
}

export default install
