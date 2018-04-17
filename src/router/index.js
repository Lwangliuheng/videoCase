import Vue from 'vue'
import Router from 'vue-router'
import surveyContant from  '@/page/surveyContant'
import login from '@/page/login'
import historyCase from '@/page/historyCase'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/surveyContant',
      component: surveyContant,
      // children: [{
      //   path: '/',
      //   component: caseManage
      // }, {
      //   path: '/seatManage',
      //   component: seatManage
      // }, {
      //   path: '/institutionManage',
      //   component: institutionManage,
      //   children:[{
      //     path:'/insitutionEditor',
      //     component: insitutionEditor,
      //   }]
      // }]
    },
    {
      path: '/',
      component: login
    },
    {
      path: '/historyCase',
      component: historyCase
    }
  ]
})

