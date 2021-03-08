<template>
	<view class="content">
		<!-- <transition name = "fade">
			<view class="line" v-show="show">
				<view class="line-text" v-for="(item,index) in list" :key="index">{{item}}</view>
			</view>
		</transition> -->
		<transition name="bounce">
			<view class="popup" v-show="show"></view>
		</transition>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N',
					'O','P','Q','R','S','T','U','V','W','X','Y','Z'],
			show: false
		}
	},
	methods: {
		
	},
	onPageScroll() {
		this.show = true
		setTimeout(() => {
			this.show = false
		},1500)
	},
	created() {
		
	}
}
</script>

<style lang="less" scoped>
.content{
	height: 2000rpx;
}
.line{
	position: fixed;
	top: 100rpx;
	right: 30rpx;
	&-text{
		
	}
}
.fade-leave-active {
   transition: opacity 0.5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
   opacity: 0
}
.popup{
	width: 100%;
	height: 200rpx;
	background: #EEEEEE;
	border-radius: 32rpx 32rpx 0rpx 0rpx;
	position: fixed;
	left: 0rpx;
	bottom: 0rpx;
}
</style>
