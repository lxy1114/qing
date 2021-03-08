import http from '@/utils';

export default {
	// 音乐url
	getUrl(data) {
		return http.post('/song/url', data)
	},
	
	// 歌词
	getlyric(data) {
		return http.post('/lyric', data)
	},
	
	// 歌曲评论
	getComment(data) {
		return http.post('/comment/music', data)
	},
	
	// 歌单分类
	catList(data) {
		return http.post('/playlist/catlist', data)
	},
	
	// 热门歌单分类
	hotcat(data) {
		return http.post('/playlist/hot', data)
	},
	
	// 歌单(网友精选碟)
	selectSheet(data) {
		return http.post('/top/playlist', data)
	},
	
	// 精品歌单
	goodSheet(data) {
		return http.post('/top/playlist/highquality', data)
	},
	
	// 相关歌单推荐
	relevantSheet(data) {
		return http.post('/related/playlist', data)
	},
	
	// 歌单详情
	sheetDetail(data) {
		return http.post('/playlist/detail', data)
	},
	
	// 相似歌单
	similarSheet(data) {
		return http.post('/simi/playlist', data)
	},
	
	// 推荐歌单
	recommendSheet(data) {
		return http.post('/personalized', data)
	},
	
	// 歌手分类
	singerCat(data) {
		return http.get('/artist/list', data)
	},
	
	// 搜索
	search(data) {
		return http.get('/search', data)
	},
	
	// 歌手单曲
	singerSong(data) {
		return http.get('/artists', data)
	},
	
	// 歌手MV
	singerMV(data) {
		return http.get('/artist/mv', data)
	},
	
	// 歌手专辑
	singerAlbums(data) {
		return http.get('/artist/album', data)
	},
	
	// 歌手描述
	singerDesc(data) {
		return http.get('/artist/desc', data)
	},
	
	// 相似歌手
	singerLiked(data) {
		return http.get('/simi/artist', data)
	},
	
	// 默认搜索关键词
	searchDefault(data) {
		return http.get('/search/default', data)
	},
	
	// 热搜列表（简略）
	searchHot(data) {
		return http.get('/search/hot', data)
	},
	
	// 热搜列表（详细）
	searchHotDetail(data) {
		return http.get('/search/hot/detail', data)
	},
	
	// 搜索建议
	searchSuggest(data) {
		return http.get('/search/suggest', data)
	},
	
	// 搜索多重匹配
	searchMul(data) {
		return http.get('/search/multimatch', data)
	},
	
	// 专辑内容
	albumDetail(data) {
		return http.get('/album', data)
	},
	
	// 专辑动态信息（如是否收藏,收藏数,评论数,分享数）
	albumNum(data) {
		return http.get('/album/detail/dynamic', data)
	},
	
	// 喜欢歌曲
	likeSong(data) {
		return http.get('/like', data)
	},
	
	// 对歌单添加或删除歌曲
	addSong(data) {
		return http.get('/playlist/tracks', data)
	},
	
	// 相似歌曲
	alikeSong(data) {
		return http.get('/simi/song', data)
	},
	
	// 歌曲详情
	songDetail(data) {
		return http.get('/song/detail', data)
	},
}
