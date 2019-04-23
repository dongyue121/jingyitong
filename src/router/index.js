import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/home'
import appointmentPage from '@/components/appointment'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path:"/appointment",
      name:'appointmentPage',
      component:appointmentPage
    }
  ]
})
