<template>
	<global-page-wrapper>
		<view class="page-home__container">
			<u-time-line>
				<u-time-line-item nodeTop="2" v-for="(item, index) in funList" :key="index">
					<template v-slot:node>
						<view class="u-node" style="background: #19be6b">
							<u-icon :name="item.icon" color="#fff" :size="18"></u-icon>
						</view>
					</template>

					<template v-slot:content>
						<view>
							<view class="u-order-title">{{ item.title }}</view>
							<view class="u-order-desc">{{ item.content }}</view>
						</view>
					</template>
				</u-time-line-item>
			</u-time-line>
		</view>
	</global-page-wrapper>
</template>

<script lang="ts" setup>
	import {
		ref
	} from 'vue'
	import {
		onPullDownRefresh
	} from '@dcloudio/uni-app'

	const funList = ref([{
			icon: 'pushpin-fill',
			title: '配置中心化',
			content: '将所有配置从main.ts抽离到config目录，所有配置在此统一配置，包括全局组件、插件、属性、设置、过滤器、指令等'
		},
		{
			icon: 'list-dot',
			title: '结构分层',
			content: 'MVC架构分层，提供(M)service管理模型数据源、(V)pages管理视图交互、(C)hooks管理逻辑复用'
		},
		{
			icon: 'bookmark-fill',
			title: '集成常用插件',
			content: '事件总线 - mitt，ajax请求 - axios，ui组件库 - uview，'
		},
		{
			icon: 'cut',
			title: '将常用属性挂载到上下文',
			content: '习惯了vue2的this全局上下文，利用hooks制作一个全局上下文，将常用属性挂载方便调用。包括$store、$api、$enum、$mittBus、$methods、$filters等'
		},
		{
			icon: 'photo',
			title: '三方图标库 - iconfont',
			content: '使用图标的地方太多，集成三方图标解决方案，支持iconfont'
		},
		{
			icon: 'thumb-up-fill',
			title: '集成windi-css-uni',
			content: '局部内联css编写非常方便'
		}
	])
</script>

<style lang="scss" scoped>
	.page-home__container {
		padding: 80rpx;

		.u-node {
			width: 38rpx;
			height: 38rpx;
			border-radius: 100rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			background: #d0d0d0;
		}

		.u-order-title {
			color: #333333;
			font-weight: bold;
			font-size: 28rpx;
		}

		.u-order-desc {
			color: rgb(150, 150, 150);
			font-size: 26rpx;
			margin-bottom: 6rpx;
			margin-top: 5rpx;
		}
	}
</style>
