import http from '@/utils';

export default {
	// 用户详情
	userDetail(data) {
		return http.post('/user/detail', data)
	},
	
	// 获取用户信息 , 歌单，收藏，mv, dj 数量
	userCount(data) {
		return http.post('/user/subcount', data)
	},
	
	// 用户歌单
	userSheet(data) {
		return http.post('/user/playlist', data)
	},
	
	// 用户电台
	userDj(data) {
		return http.post('/user/dj', data)
	},
	
	// 用户关注列表
	userFollow(data) {
		return http.post('/user/follows', data)
	},
	
	// 用户粉丝列表
	userFans(data) {
		return http.post('/user/followeds', data)
	},
	
	// 用户动态
	userActive(data) {
		return http.post('/user/event', data)
	},
	
	// 转发用户动态
	userForward(data) {
		return http.post('/event/forward', data)
	},
	
	// 删除用户动态
	userActiveDelete(data) {
		return http.post('/event/del', data)
	},
	
	// 关注/取消关注用户
	userLike(data) {
		return http.post('/follow', data)
	},
	
	// 用户播放记录
	userRecord(data) {
		return http.post('/user/record', data)
	},
	
	// 获取最近 5 个听了这首歌的用户
	userSimi(data) {
		return http.post('/simi/user', data)
	},
	
	// 用户创建电台
	userAudio(data) {
		return http.post('/user/audio', data)
	},
	
	//新建歌单
	addSheet(data) {
		return http.post('/playlist/create', data)
	},
	
	//删除歌单
	deleteSheet(data) {
		return http.post('/playlist/delete', data)
	},
	
	//取消收藏歌单
	uncollecSheet(data) {
		return http.post('/playlist/subscribe', data)
	},
	
	//收藏/取消收藏歌手
	collecSinger(data) {
		return http.post('/artist/sub', data)
	},
	
	//收藏的歌手列表
	collecSingerList(data) {
		return http.post('/artist/sublist', data)
	},
	
	//收藏视频
	collecVideo(data) {
		return http.post('/video/sub', data)
	},
	
	//收藏/取消收藏MV
	collecMv(data) {
		return http.post('/mv/sub', data)
	},
	
	//收藏的MV列表
	collecMvList(data) {
		return http.post('/mv/sublist', data)
	},
	
	//收藏/取消收藏歌单
	collecSheet(data) {
		return http.post('/playlist/subscribe', data)
	},
	
	//歌单收藏者
	collecSheetUser(data) {
		return http.post('/playlist/subscribers', data)
	},
	
	//收藏/取消收藏专辑
	collecAlbums(data) {
		return http.post('/album/sub', data)
	},
	
	//已收藏专辑
	collecAlbumsList(data) {
		return http.post('/album/sublist', data)
	},
	
	//已收藏音乐
	collecSong(data) {
		return http.post('/likelist', data)
	},
}
