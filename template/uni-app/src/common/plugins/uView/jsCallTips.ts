/* 支持通过uni.$u代码调用页面的tips实例 */
// 注册toast tip
const registToastTip = () => {
  uni.$u.uToast = {
    show: (params: Record<string, any>) => {
      // 获取当前页面
      const pages = getCurrentPages()
      const currentPages = pages[pages.length - 1]
      const currentPagesRoute = currentPages.route

      if (!uni.$u.globalRef) {
        return uni.showToast({
          ...params,
          icon: 'none'
        })
      }

      // 尝试查找当前页面的tip
      const match = uni.$u?.globalRef.get(currentPagesRoute)

      match
        ? match.uToastRef.show(params)
        : uni.showToast({
            ...params,
            icon: 'none'
          })
    }
  }
}

// 注册top tip
const registTopTip = () => {
  uni.$u.uTips = {
    show: (params: Record<string, any>) => {
      // 获取当前页面
      const pages = getCurrentPages()
      const currentPages = pages[pages.length - 1]
      const currentPagesRoute = currentPages.route

      if (!uni.$u.globalRef) {
        uni.showToast({
          ...params,
          icon: 'none'
        })
        return
      }

      // 尝试查找当前页面的tip
      const match = uni.$u?.globalRef.get(currentPagesRoute)

      match
        ? match.uTopTipRef.show(params)
        : uni.showToast({
            ...params,
            icon: 'none'
          })
    }
  }
}

// 注册alert tip
const registAlertTip = () => {
  uni.$u.uAlert = {
    show: (params: Record<string, any>) => {
      // 获取当前页面
      const pages = getCurrentPages()
      const currentPages = pages[pages.length - 1]
      const currentPagesRoute = currentPages.route

      if (!uni.$u.globalRef) {
        uni.showToast({
          ...params,
          icon: 'none'
        })
        return
      }

      // 尝试查找当前页面的tip
      const match = uni.$u?.globalRef.get(currentPagesRoute)
      match
        ? match.uAlertTipRef.show(params)
        : uni.showToast({
            ...params,
            icon: 'none'
          })
    }
  }
}

const install = () => {
  registTopTip()
  registToastTip()
  registAlertTip()
}

export default install
