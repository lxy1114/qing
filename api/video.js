import http from '@/utils';

export default {
	// 全部MV
	allMV(data) {
		return http.post('/mv/all', data)
	},
	
	// 最新MV
	newMV(data) {
		return http.post('/mv/first', data)
	},
	
	// 网易云出品MV
	officialMV(data) {       //首页
		return http.post('/mv/exclusive/rcmd', data)
	},
	
	// 推荐MV
	recommendMV(data) {     //首页
		return http.post('/personalized/mv', data)
	},
	
	// 推荐新音乐
	recommendNewSongs(data) {
		return http.post('/personalized/newsong', data)
	},
	
	// MV排行
	mvRanking(data) {
		return http.post('/top/mv', data)
	},
	
	// MV详情
	mvDetail(data) {
		return http.post('/mv/detail', data)
	},
	
	// MV点赞、评论、转发数据
	mvNum(data) {
		return http.post('/mv/detail/info', data)
	},
	
	// MV地址
	mvUrl(data) {
		return http.post('/mv/url', data)
	},
	
	// 视频标签列表
	videoLabel(data) {
		return http.post('/video/group/list', data)
	},
	
	// 视频分类列表
	videoType(data) {
		return http.post('/video/category/list', data)
	},
	
	// 视频标签、分类下视频
	videoGroup(data) {
		return http.post('/video/group', data)
	},
	
	// 全部视频
	videoAll(data) {
		return http.post('/video/timeline/all', data)
	},
	
	// 相关视频
	videoLiked(data) {
		return http.post('/related/allvideo', data)
	},
	
	// 视频详情
	videoDetail(data) {
		return http.post('/video/detail', data)
	},
	
	// 视频点赞、评论、转发数
	mvNum(data) {
		return http.post('/video/detail/info', data)
	},
	
	// 视频播放地址
	videoUrl(data) {
		return http.post('/video/url', data)
	},
	
	// 所有榜单
	rankAll(data) {
		return http.post('/toplist', data)
	},
	
	// 排行榜详情
	rankDetail(data) {
		return http.post('/top/list', data)
	},
	
	// 所有榜单内容摘要
	rankDesc(data) {
		return http.post('/toplist/detail', data)
	},
}
