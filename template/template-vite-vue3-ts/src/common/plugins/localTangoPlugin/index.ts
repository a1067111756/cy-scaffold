/* 本地持久化插件 */
import LocalTango from 'local-tango'

// 注册插件
const install = (): void => {
  LocalTango.config({
    driver: 'localStorage',
    encrypt: true,
    encryptKey: 'local_tango_encrypt_key'
  })
  window.LocalTango = LocalTango
}

export default install
