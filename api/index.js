import http from '@/utils'
import baseUrl from '@/utils/domain'

import login from './login'
import home from './home'
import recommend from './recommend'
import song from './song'
import user from './user'
import video from './video'
import dj from './dj'

/**
 * 将业务所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 *
 */

http.config.baseUrl = baseUrl

//设置请求前拦截器
http.interceptor.request = (config) => {
    const token = uni.getStorageSync('TOKEN')

    //添加通用参数
    config.header = {
        token,
        "Content-Type": "application/x-www-form-urlencoded"
    }
	 config.originData = config.data
}

//设置请求结束后拦截器
http.interceptor.response = (response) => {
    //判断返回状态 执行相应操作
	const { config, data: responseData } = response
   if(response.statusCode == 301){
		uni.navigateTo({
			url: '/pages/login/login'
		})
	}else if(response.statusCode != 200){
		uni.showToast({
			title: response.data.msg,
			icon: 'none'
		})
	}
	
   return responseData;
}

// 默认全部导出  import api from '@/common/vmeitime-http/'
export default {
    // 公共接口
    // 上传
    upload(data) {
        const token = uni.getStorageSync('TOKEN')
        return new Promise((resolve, reject) => {
            uni.uploadFile({
                url: baseUrl + '?store_id=1&r=socket/upload/index',
                name: 'file',
                header: {token},
                ...data
            }).then(([err, res]) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(JSON.parse(res.data))
                }
            })
        })
    },
    // 首页相关接口
	 ...login,
	 ...home,
	 ...recommend,
	 ...song,
	 ...user,
	 ...video,
	 ...dj
}
