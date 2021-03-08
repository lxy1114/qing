import http from '@/utils';

export default {
	// 账号密码登录
	phoneLogin(data) {
		return http.get('/login/cellphone', data)
	},
	
	// 邮箱登录
	mailLogin(data) {
		return http.get('/login', data)
	},
	
	getList(data) {
		return http.get('/recommend/resource', data)
	},
}
