// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Wilddog from 'wilddog'
import WildVue from 'wildvue'

// 在模块化环境中需要使用 user 安装
Vue.use(Wilddog)
Vue.use(WildVue)
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import store from './vuex/index'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/reset.css'
import 'viewerjs/dist/viewer.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')
Vue.prototype.ajaxUrl = "/boot-pub-survey-video"
// Vue.prototype.downloatUrl = "https://chakan.zhongchebaolian.com"//生产
Vue.prototype.downloatUrl = "https://survey.zhongchebaolian.com"//测试

// http请求拦截器
var loadinginstace = ''
axios.interceptors.request.use(config => {
  console.log(config.url)
  // element ui Loading方法
 
  if(config.url == '/boot-pub-survey-video/web/surveyor/v1/manual/status'){
    loadinginstace = ""
 }else if(config.url =="/boot-pub-survey-video/survey/order/v1/wait/order/list"){
    loadinginstace = ""
  }else if(config.url =="/boot-pub-survey-video/sync/session/v1/close"){
    loadinginstace = ""
  }else if(config.url =="/boot-pub-survey-video/sync/session/v1/open"){
  loadinginstace = ""
}else if(config.url == '/boot-pub-survey-video/survey/order/v1/wait/order/list'){
    loadinginstace = ""
  }else if(config.url == '/boot-pub-survey-video/survey/video/v1/connect/success'){
    loadinginstace = ""
  }else if(config.url == '/boot-pub-survey-video/survey/video/v1/accept/connect'){
    loadinginstace = ""
  }else if(config.url == '/boot-pub-survey-video/survey/vehicle/v1/vehicle/list'){
    loadinginstace = ""
  }else if(config.url == '/boot-pub-survey-video/survey/order/v1/timeout/rollback'){
    loadinginstace = ""
  }else if(config.url == '/boot-pub-survey-video/heartbeat/v1/beat'){
    loadinginstace = ""
  }else{
    // loadinginstace = ElementUI.Loading.service({ fullscreen: true })
    loadinginstace = ""
  }
   if(config.url == '/boot-pub-survey-video/survey_single/v1/send'){
    loadinginstace = ElementUI.Loading.service({ fullscreen: true })
  }
  //小额
  if(config.url == '/boot-pub-survey-video/small_claim/v1/send'){
    loadinginstace = ElementUI.Loading.service({ fullscreen: true })
  }
  //保存事故经过
  if(config.url == '/boot-pub-survey-video/survey/order/v1/accident/desc'){
    loadinginstace = ElementUI.Loading.service({ fullscreen: true })
  }

  return config
}, error => {
  // loadinginstace.close()
  ElementUI.Message.error({
    message: '加载超时'
  })
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {// 响应成功关闭loading

  if (loadinginstace) {
    loadinginstace.close();
    loadinginstace = ''
  }
  if (data.data.rescode == 300) {
    router.push('/')
  }
  return data
}, error => {
  console.log(error)
  // loadinginstace.close()
  ElementUI.Message.error({
    message: '加载失败'
  })
  return Promise.reject(error)
})

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);
// Vue.use(axios);
Vue.prototype.$ajax = axios;

// router.beforeEach((to, from, next) => {
//   var ajaxUrl = "/boot-pub-survey-manage";
//   next()
// });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  template: '<App/>',
  components: { App }
});
