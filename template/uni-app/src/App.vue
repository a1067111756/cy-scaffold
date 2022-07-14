<script setup lang="ts">
	import {
		onLaunch,
		onShow,
		onHide,
		onPullDownRefresh
	} from '@dcloudio/uni-app'

	onLaunch(() => {
		console.log('App Launch')
	})
	onShow(() => {
		console.log('App Show')
	})
	onHide(() => {
		console.log('App Hide')
	})
</script>

<style lang="scss">
	/* windiCss */
	@import '@limm/windi-css-uni';
	@import '@limm/windi-css-uni/src/index.scss';

	/* iconfont */
	@import './static/iconfont/iconfont.css';
	@import './static/iconfont/iconfont-weapp/iconfont-weapp-icon.css';
</style>
