<template>
	<view class="content">
		<!-- <view class="swiper">
			<swiper indicator-dots="true">
				<swiper-item 
					v-for="(item,index) in bannerList" 
					:key="index" 
					@click="goPlay(bannerList,index)"
					v-if="index == 1">
					<image class="swiper-img" :src="item.pic" mode="widthFix"></image>
				</swiper-item>
		   </swiper>
		</view>
		<view class="nav">
			<view class="nav-list" v-for="(item,index) in navList" :key="index">
				<view class="nav-list-icon">
					<image class="icon" :src="item.icon" mode="widthFix"></image>
				</view>
				<view class="nav-list-text">{{item.text}}</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerList: [],
				navList: [{icon: '/static/images/recommend.png',text: '推荐'},
							{icon: '/static/images/sheet.png',text: '歌单'},
							{icon: '/static/images/singer.png',text: '歌手'},
							{icon: '/static/images/mv.png',text: 'MV'}]
			}
		},
		methods: {
			getData() {
				//banner图
				this.$api.getBanner({
					type: 1
				}).then(res => {
					this.bannerList = res.banners
				})
			},
		},
		onLoad() {
			this.getData()
		}
	}
</script>

<style lang="scss" scoped>
.swiper{
	width: 100%;
	&-img{
		width: 100%;
	}
}
.nav{
	display: flex;
	width: 660rpx;
	margin: 30rpx auto;
	&-list{
		display: inline-block;
		width: 25%;
		text-align: center;
		font-size: 28rpx;
		color: #333333;
		&-icon{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 80rpx;
			height: 80rpx;
			background: linear-gradient(150deg, #ff94a2 0%, #ff5d73 100%);
			border-radius: 100%;
			margin: 0px auto 10rpx;
			position: relative;
		}
	}
}
.icon{
	width: 40rpx;
	position: absolute;
}
</style>
