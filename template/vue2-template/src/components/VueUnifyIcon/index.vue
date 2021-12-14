<template>
  <!-- vant -->
  <van-icon
    v-if="type === ENUM_SUPPORT_TYPE_CMP.ICON_VANT"
    :name="icon"
    :class="classCmp"
    :style="{ 'font-size': size + 'px', color: color }"
  />

  <!-- antd -->
  <a-icon
    v-else-if="type === ENUM_SUPPORT_TYPE_CMP.ICON_ANTD"
    :type="icon"
    :class="classCmp"
    :style="styleCmp"
  />

  <!-- iconfont、element -->
  <i
    v-else-if="type === ENUM_SUPPORT_TYPE_CMP.ICON_ICONFONT || type === ENUM_SUPPORT_TYPE_CMP.ICON_ELEMENT"
    :style="styleCmp"
    :class="{ [classCmp]: true, [icon]: true }"
  />

  <!-- svg、iconfont-symbol -->
  <svg
    v-else-if="type === ENUM_SUPPORT_TYPE_CMP.ICON_SVG || type === ENUM_SUPPORT_TYPE_CMP.ICON_ICONFONT_SYMBOL"
    :class="classCmp"
    :style="styleCmp"
    aria-hidden="true"
  >
    <use :xlink:href="`#icon-${this.icon}`" />
  </svg>
</template>

<script>
const ENUM_SUPPORT_TYPE = [
  { label: 'svg', value: 'svg', class: 'svg-icon', enum: 'ICON_SVG' },
  { label: '有赞', value: 'vant', class: 'vant-icon', enum: 'ICON_VANT' },
  { label: '蚂蚁金服', value: 'antd', class: 'antd-icon', enum: 'ICON_ANTD' },
  { label: '饿了吗', value: 'element', class: 'element-icon', enum: 'ICON_ELEMENT' },
  { label: '阿里图标', value: 'iconfont', class: 'iconfont-icon iconfont', enum: 'ICON_ICONFONT' },
  { label: '阿里图标-Symbol', value: 'iconfont-symbol', class: 'iconfont-symbol-icon icon', enum: 'ICON_ICONFONT_SYMBOL' }
]

export default {
  name: 'vue-unify-icon',
  props: {
    // 支持svg、iconfont、uview图标。默认uview
    type: {
      type: String,
      default: 'system',
      validator: (value) => {
        const supportList = ENUM_SUPPORT_TYPE.map(item => item.value)
        if (!supportList.includes(value)) {
          console.error(`icon参数不支持当前类型${value}, 仅支持['vant', 'element', 'svg', 'iconfont'], 请检查!`)
          return false
        }

        return true
      }
    },
    // 图标引用名，svg - svg文件名、iconfont - iconfont图标类名，vant - vant图标类名，antd - antd图标类名
    icon: {
      type: String,
      default: 'iconfont'
    },
    // 图标大小
    size: {
      type: Number,
      default: 20
    },
    // 图标颜色
    color: {
      type: String,
      default: '#ffffff'
    }
  },
  computed: {
    ENUM_SUPPORT_TYPE_CMP () {
      const match = {}
      ENUM_SUPPORT_TYPE.map(item => (match[item.enum] = item.value))
      return match
    },
    classCmp () {
      const match = ENUM_SUPPORT_TYPE.find(item => item.value === this.type)
      return match && match.class
    },
    styleCmp () {
      // iconfont
      if (this.type === 'iconfont') {
        return `line-height: 100%; font-size: ${this.size}px; color: ${this.color};`
      }

      // svg
      if (this.type === 'svg') {
        return `display: inline; font-size: ${this.size}px; fill: ${this.color};`
      }

      // antd、vant、element
      if (this.type === 'antd' || this.type === 'vant' || this.type === 'element') {
        return `font-size: ${this.size}px; color: ${this.color};`
      }

      return `font-size: ${this.size}px; color: ${this.color};`
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
