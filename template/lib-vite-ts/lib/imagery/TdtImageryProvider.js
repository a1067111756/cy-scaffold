/**
 * @author: chengyu
 * @date: 2022-03-16 11:40:00
 * @description: 天地图在线地图服务
 * @version: 1.0
 */
// 生成天地图WMTS服务地址
export const computedWMTSUrl = (serviceType, projectType) => {
  return {
    sourceType: 'wmts',
    sourceUri: `https://t{s}.tianditu.gov.cn/${serviceType}_${projectType}/wmts`,
    sourceOptions: {
      subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
      tk: 'bac31128a02d7b76788548a33ac6817b',
      layer: serviceType,
      style: 'default',
      tilematrixSet: projectType,
      format: 'tiles',
      ...(projectType === 'c' && { zoomOffset: 1 }),
    }
  }
}

// 影像地图: 墨卡托投影 - wmts
export const Tdt_ImgW_WMTS = computedWMTSUrl('img', 'w')

// 影像地图: 经纬度投影 - wmts
export const Tdt_ImgC_WMTS = computedWMTSUrl('img', 'c')

// 影像注记: 墨卡托投影 - wmts
export const Tdt_CiaW_WMTS = computedWMTSUrl('cia', 'w')

// 影像注记: 经纬度投影 - wmts
export const Tdt_CiaC_WMTS = computedWMTSUrl('cia', 'c')

// 矢量底图: 墨卡托投影 - wmts
export const Tdt_VecW_WMTS = computedWMTSUrl('vec', 'w')

// 矢量底图: 经纬度投影 - wmts
export const Tdt_VecC_WMTS = computedWMTSUrl('vec', 'c')

// 矢量注记: 墨卡托投影 - wmts
export const Tdt_CvaW_WMTS = computedWMTSUrl('cva', 'w')

// 矢量注记: 经纬度投影 - wmts
export const Tdt_CvaC_WMTS = computedWMTSUrl('cva', 'c')

// 生成天地图WMTS服务地址
export const computedXYZUrl = (serviceType, projectType) => {
  return {
    sourceType: 'XYZ',
    sourceUri: `https://t{s}.tianditu.gov.cn/${serviceType}_${projectType}/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=${serviceType}&STYLE=default&TILEMATRIXSET=${projectType}&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=bac31128a02d7b76788548a33ac6817b`,
    sourceOptions: {
      subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
      ...(projectType === 'c' && { zoomOffset: 1 })
    }
  }
}

// 影像地图: 墨卡托投影 - xyz切片
export const Tdt_ImgW_XYZ = computedXYZUrl('img', 'w')

// 影像地图: 经纬度投影 - xyz切片
export const Tdt_ImgC_XYZ = computedXYZUrl('img', 'c')

// 影像注记: 墨卡托投影 - xyz切片
export const Tdt_CiaW_XYZ = computedXYZUrl('cia', 'w')

// 影像注记: 经纬度投影 - xyz切片
export const Tdt_CiaC_XYZ = computedXYZUrl('cia', 'c')

// 矢量底图: 墨卡托投影 - xyz切片
export const Tdt_VecW_XYZ = computedXYZUrl('vec', 'w')

// 矢量底图: 经纬度投影 - xyz切片
export const Tdt_VecC_XYZ = computedXYZUrl('vec', 'c')

// 矢量注记: 墨卡托投影 - xyz切片
export const Tdt_CvaW_XYZ = computedXYZUrl('cva', 'w')

// 矢量注记: 经纬度投影 - xyz切片
export const Tdt_CvaC_XYZ = computedXYZUrl('cva', 'c')