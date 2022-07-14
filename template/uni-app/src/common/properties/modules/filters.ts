/* 全局 - 过滤器 */

// 格式化小数位数 - 注意：zeroKeep为真时，返回的是字符串
const toFixed = (strOrNum: string | number, fixed = 2, zeroKeep = false) => {
	let temp: number
	
	Object.prototype.toString.call(strOrNum) === '[object String]'
		? temp = parseFloat(strOrNum as string)
		: temp = strOrNum as number

  return zeroKeep
		? temp.toFixed(fixed)
		: parseFloat(temp.toFixed(fixed))
}

export default {
  toFixed
}