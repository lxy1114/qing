import Vue from 'vue'
import App from './App'
import util from '@/utils/util.js'
import api from '@/api'

Vue.prototype.$api = api
Vue.prototype.$utils = util
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
