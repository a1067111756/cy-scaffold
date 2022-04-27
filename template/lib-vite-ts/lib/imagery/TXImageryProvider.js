/**
 * @author: chengyu
 * @date: 2022-03-16 11:40:00
 * @description: 天地图在线地图服务
 * @version: 1.0
 */
// 电子地图: 墨卡托投影 - XYZ
export const TX_VecW_XYZ = {
  sourceType: 'GCJ02',
  sourceUri: `http://rt{s}.map.gtimg.com/tile?z={z}&x={x}&y={y}&styleid=1&scene=0`,
  sourceOptions: {
    subdomains: ['0', '1', '2'],
    tms: true,
  }
}

// 电子路网标注: 墨卡托投影 - XYZ
export const TX_LuWangW_XYZ = {
  sourceType: 'GCJ02',
  sourceUri: `http://rt{s}.map.gtimg.com/tile?z={z}&x={x}&y={y}&styleid=2&scene=0`,
  sourceOptions: {
    subdomains: ['0', '1', '2'],
    tms: true,
  }
}

// 电子灰白色地图: 墨卡托投影 - XYZ
export const TX_VecW_Grey_XYZ = {
  sourceType: 'GCJ02',
  sourceUri: `http://rt{s}.map.gtimg.com/tile?z={z}&x={x}&y={y}&styleid=3&scene=0`,
  sourceOptions: {
    subdomains: ['0', '1', '2'],
    tms: true,
  }
}

// 电子蓝色地图: 墨卡托投影 - XYZ
export const TX_VecW_Blue_XYZ = {
  sourceType: 'GCJ02',
  sourceUri: `http://rt{s}.map.gtimg.com/tile?z={z}&x={x}&y={y}&styleid=4&scene=0`,
  sourceOptions: {
    subdomains: ['0', '1', '2'],
    tms: true,
  }
}

