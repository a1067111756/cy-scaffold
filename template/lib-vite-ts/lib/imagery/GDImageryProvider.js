/**
 * @author: chengyu
 * @date: 2022-03-16 11:40:00
 * @description: 天地图在线地图服务
 * @version: 1.0
 */
// 影像地图: 墨卡托投影 - XYZ
export const GD_ImgW_XYZ = {
  sourceType: 'GCJ02',
  sourceUri: `https://webst{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}`,
  sourceOptions: {
    subdomains: ['01', '02', '03', '04'],
  }
}


// 矢量地图: 墨卡托投影 - XYZ
export const GD_VecW_XYZ = {
  sourceType: 'GCJ02',
  sourceUri: `http://wprd{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}`,
  sourceOptions: {
    subdomains: ['01', '02', '03', '04'],
  }
}

// 路网标注: 墨卡托投影 - XYZ
export const GD_LuWangW_XYZ = {
  sourceType: 'GCJ02',
  sourceUri: `http://wprd{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}`,
  sourceOptions: {
    subdomains: ['01', '02', '03', '04'],
  }
}