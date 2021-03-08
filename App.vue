<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
@import url("/static/public.less");
.placeholder{
	font-size: 28rpx;
	color: #999999;
}
uni-button:after{
	border-style: none;
}
</style>
