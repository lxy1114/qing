import http from '@/utils';

export default {
	// 每日推荐歌单
	reResource(data) {
		return http.post('/recommend/resource', data)
	},
	
	// 每日推荐歌曲
	reSongs(data) {
		return http.post('/recommend/songs', data)
	},
}
