/**
 * @author: chengyu
 * @date: 2022-03-16 11:40:00
 * @description: 天地图在线地图服务
 * @version: 1.0
 */
// 影像地图: 墨卡托投影 - wmts
export const Tdt_ImgW_WMTS = {
  sourceType: 'wmts',
  sourceUri: 'https://t{s}.tianditu.gov.cn/img_w/wmts',
  sourceOptions: {
    subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
    tk: 'bac31128a02d7b76788548a33ac6817b',
    LAYER: 'img',
    STYLE: 'default',
    TILEMATRIXSET: 'w',
    FORMAT: 'tiles',
  }
}


// 矢量底图 - 影像地图