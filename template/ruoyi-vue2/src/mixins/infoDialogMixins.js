/* 新增&&详情&&编辑弹窗minxins */
import baseMixins from './baseMixins'
import loadingMixins from './loadingMixins'

const DIALOG_STATUS = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DETAIL: 'DETAIL'
}

// dialog open策略
const DIALOG_OPEN_STRATEGY = {
  [DIALOG_STATUS.CREATE]: function () {
    // 设置dialog类型c
    this.status__.DIALOG_TYPE = DIALOG_STATUS.CREATE
    this.config__.title = '新增'
    this.config__.okText = '确认'
  },
  [DIALOG_STATUS.UPDATE]: function (openParams) {
    this.status__.DIALOG_TYPE = DIALOG_STATUS.UPDATE
    this.config__.title = '编辑'
    this.config__.okText = '更新'
    this.$emit('hooks:getById', openParams)
  },
  [DIALOG_STATUS.DETAIL]: function (openParams) {
    this.status__.DIALOG_TYPE = DIALOG_STATUS.DETAIL
    this.config__.title = '详情'
    this.$emit('hooks:getById', openParams)
  }
}

// dialog ok策略
const DIALOG_OK_STRATEGY = {
  [DIALOG_STATUS.CREATE]: function (openParams) {
    this.MIXINS_METHODS_CHECK_FORM().then(data => {
      this.$emit('hooks:create', openParams)
    })
  },
  [DIALOG_STATUS.UPDATE]: function (openParams) {
    this.MIXINS_METHODS_CHECK_FORM().then(data => {
      this.$emit('hooks:update', openParams)
    })    
  }
}

export default {
  mixins: [baseMixins, loadingMixins],
  data () {
    return {
      config__: {
        destroyOnClose: true,
        closeOnClickModal: false
      },
      status__: {
        DIALOG_TYPE: DIALOG_STATUS.CREATE
      },
      options__: {
        DIALOG_STATUS
      }
    }
  },
  mounted () {
    // 新增事件
    this.$bus.on('global:info-dialog:create', e => this.MIXINS_METHODS_ON_OPEN(DIALOG_STATUS.CREATE, e))
    // 详情事件
    this.$bus.on('global:info-dialog:update', e => this.MIXINS_METHODS_ON_OPEN(DIALOG_STATUS.UPDATE, e))
    // 编辑事件
    this.$bus.on('global:info-dialog:detail', e => this.MIXINS_METHODS_ON_OPEN(DIALOG_STATUS.DETAIL, e))
  },
  beforeDestroy () {
    this.$bus.off('global:info-dialog:create')
    this.$bus.off('global:info-dialog:update')
    this.$bus.off('global:info-dialog:detail')
  },
  methods: {
    MIXINS_METHODS_ON_OPEN (status, openParams) {
      this.$emit('hooks:open', openParams)
      // 调用dialog open的策略
      DIALOG_OPEN_STRATEGY[status].bind(this)(openParams)
      // 显示dialog
      this.config__.visible = true
    },
    MIXINS_METHODS_ON_OK () {
      // 调用dialog ok的策略
      DIALOG_OK_STRATEGY[this.status__.DIALOG_TYPE].bind(this)()
    },    
    MIXINS_METHODS_ON_CANCEL () {
      this.config__.visible = false
      Object.assign(this.$data, this.$options.data.call(this))
    },
    MIXINS_METHODS_CHECK_FORM () {
      // 不存在form表单直接跳过检查
      if (!this.$refs['form']) {
        return Promise.resolve()
      }

      return this.$refs['form'].validate().then(data => {
        return Promise.resolve()
      })
      .catch(e => {
        console.warn('表单校验失败, 请检查填写信息!')
        return Promise.reject()
      })      
    }
  }
}
