/* loading相关minxins - 抽离常见loading，页面只关注调用，不关注实现 */

// loading策略
const loadingStrategy = {
  'confirmLoading': {
    show: function () {
      this.status__.confirmLoading = true
    },
    hidden: function () {
      setTimeout(_ => { this.status__.confirmLoading = false }, 300)
    }
  },
  'pageLoading': {
    show: function () {
      this.status__.pageLoading = true
    },
    hidden: function () {
      setTimeout(_ => { this.status__.pageLoading = false }, 300)
    }
  },
  'tableLoading': {
    show: function () {
      this.status__.tableLoading = true
    },
    hidden: function () {
      setTimeout(_ => { this.status__.tableLoading = false }, 300)
    }
  },
  'modalLoading': {
    show: function () {
      this.status__.modalLoading = true
    },
    hidden: function () {
      setTimeout(_ => { this.status__.modalLoading = false }, 300)
    }
  }
}

export default {
  data () {
    return {
      status__: {
        // 页面加载loading
        pageLoading: false,
        // table加载loading
        tableLoading: false,
        // modal加载loading
        modalLoading: false,
        // 确认按钮loading
        confirmLoading: false
      }
    }
  },
  methods: {
    // 显示loading
    showLoading (type) {
      loadingStrategy[type].show.bind(this)()
    },
    // 隐藏loading
    hiddenLoading (type) {
      loadingStrategy[type].hidden.bind(this)()
    }
  }
}
