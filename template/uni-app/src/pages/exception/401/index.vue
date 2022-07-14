<template>
	<view class="page-401__container">
		<image style="width: 580rpx; height: 540rpx;" :src="bg401Url" />
		
		<text class="wd-text-44r wd-font-bold wd-mt-40r" style="letter-spacing: 4rpx;">没有访问权限</text>
		
		<text 
			class="wd-text-36r wd-mt-20r" 
			style="color: #9e9e9e; letter-spacing: 2rpx;"
		>
			很抱歉，系统君拒绝了你的请求!
		</text>
		
		<u-button
			plain
			type="success"
			class="wd-mt-80r"
			@click="onBackHome"
		>
			<u-icon name="arrow-leftward" color="#57be6b" size="28" class="wd-mr-10r"></u-icon>
			返回首页
		</u-button>
	</view>
</template>

<script lang="ts" setup>
	import bg401Url from '@/static/images/exception/bg-401.png'
	
	const onBackHome = () => {
		uni.switchTab({
			url: '/pages/home/index'
		});
	}
</script>

<style lang="scss" scoped>
	page {
		width: 100%;
		height: 100%;
	}
	
	.page-401__container {
		display: flex;
		height: 100%;
		margin-top: -40rpx;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>