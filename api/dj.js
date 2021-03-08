import http from '@/utils';

export default {
	// 推荐电台
	recommendDj(data) {
		return http.post('/personalized/djprogram', data)
	},
	
	// 电台节目
	djProgram(data) {
		return http.post('/dj/program', data)
	},
	
	// 电台节目详情
	djProgramDetail(data) {
		return http.post('/dj/program/detail', data)
	},
}