/**
 * @Author: Chengyu
 * @Date: 2021-11-2 14:08:00
 * @Description: 导出图源对象
 */
// 瓦片服务
import * as GD from './imagery/GDImageryProvider'
import * as TX from './imagery/TXImageryProvider'
import * as BD from './imagery/BDImageryProvider'
import * as TDT from './imagery/TdtImageryProvider'

export default {
    TDT,
    GD,
    TX,
    BD
}