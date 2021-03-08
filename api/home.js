import http from '@/utils';

export default {
	// 推荐新音乐
	getNewSong(data) {
		return http.post('/personalized/newsong', data)
	},
	
	// banner图
	getBanner(data) {
		return http.post('/banner', data)
	}
}
