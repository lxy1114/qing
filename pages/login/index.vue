<template>
	<view class="content">
		<view class="con">
			<view class="top">
				<view class="top-text" :class="{active: navIndex == 0}" @click="navTab(0)">账号密码登录</view>
				<view class="top-text" :class="{active: navIndex == 1}" @click="navTab(1)">邮箱登录</view>
			</view>
			<view class="list">
				<image class="list-icon" src="/static/images/user.svg"></image>
				<input class="list-input" placeholder="请输入账号" placeholder-class="placeholder" v-model="form.phone"/>
			</view>
			<view class="list">
				<image class="list-icon" src="/static/images/password.svg"></image>
				<input class="list-input" type="password" placeholder="请输入密码" placeholder-class="placeholder" v-model="form.password"/>
			</view>
			<button class="btn" @click="submit">登录</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			navIndex: 0,
			form: {}
		}
	},
	methods: {
		navTab(index) {
			this.navIndex = index
		},
		submit() {
			var msg = !this.form.phone ? '请输入账号' : !this.form.password ? '请输入密码' : ''
			if(msg) {
				return this.$utils.toast(msg)
			}
			var url = this.navIndex == 0 ? 'phoneLogin' : 'mailLogin'
			var form = this.navIndex == 0 ? {
				phone: this.form.phone,
				password: this.form.password
			} : {
				email: this.form.phone,
				password: this.form.password
			}
			this.$api[url]( form ).then(res => {
				this.$utils.reLaunch('/pages/index/index')
			})
		},
	},
	created() {
		
	}
}
</script>

<style lang="scss" scoped>
.content{
	width: 100%;
	height: 100%;
	// background: linear-gradient(150deg, rgba(255,148,162,0.2) 0%, rgba(255,93,115,0.2) 100%);
	position: fixed;
	top: 0rpx;
	left: 0rpx;
}
.con{
	width: 100%;
	box-sizing: border-box;
	padding: 0rpx 50rpx 150rpx;
	position: fixed;
	left: 0rpx;
	bottom: 0rpx;
}
.top{
	display: flex;
	width: 400rpx;
	margin: 0rpx auto 80rpx;
	background: $uni-btn-color8;
	border-radius: 30rpx;
	&-text{
		width: 50%;
		text-align: center;
		line-height: 50rpx;
		font-size: 4rpx;
		color: #FFFFFF;
	}
	&-text.active{
		background: $uni-btn-color10;
		border-radius: 30rpx;
	}
}
.list{
	display: flex;
	align-items: center;
	height: 100rpx;
	line-height: 100rpx;
	&-icon{
		width: 40rpx;
		height: 40rpx;
	}
	&-input{
		width: 580rpx;
		margin-left: 20rpx;
		border-bottom: 2rpx solid #EEEEEE;
	}
	&-input:hover{
		border-color: $uni-btn-color10;
	}
}
.btn{
	border-radius: 60rpx;
	background: linear-gradient(150deg, #1ad6cd 0%, #0f95a4 100%);
	color: #FFFFFF;
	margin-top: 100rpx;
}
</style>
