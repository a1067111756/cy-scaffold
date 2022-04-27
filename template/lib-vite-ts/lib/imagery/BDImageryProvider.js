/**
 * @author: chengyu
 * @date: 2022-03-16 11:40:00
 * @description: 天地图在线地图服务
 * @version: 1.0
 */
// 影像地图: 墨卡托投影 - wmts
export const BD_ImgW_WMTS = {
  sourceType: 'BD09',
  sourceUri: `http://online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1`,
  sourceOptions: {
    subdomains: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    tms: true,
    keepBuffer: 100
  }
}


// 矢量底图 - 影像地图 - 草绿地图 - 深蓝地图 - 浅蓝地图 - 淡蓝地图 - 黑色地图 - 灰色地图 - 红色地图 - 粉红地图 - 墨绿地图 - 简约地图 - 谷歌地图 - 离线百度瓦片