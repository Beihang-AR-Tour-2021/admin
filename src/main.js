import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design'
import axios from 'axios';
import 'view-design/dist/styles/iview.css'

Vue.use(ViewUI)

Vue.config.productionTip = false

axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.defaults.headers.get['Content-Type'] = 'application/json'
// axios.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization')

axios.interceptors.request.use(config => {
  config.baseURL = 'http://49.232.106.208:8086/'
  config.withCredentials = true // 允许携带token ,这个是解决跨域产生的相关问题
  config.timeout = 10000
  const token = sessionStorage.getItem('token')
  if (token) {
    config.headers.common.authorization = token
  } else {
    config.headers.common.authorization = ''
  }
  console.log(config)
  return config
})

axios.interceptors.response.use(res => {
  console.log(res.data)
  return res.data
})

Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
