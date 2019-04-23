import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
import homePage from '@/components/home'
import orderList from "@/components/orderList.vue"
import appointmentPage from '@/components/appointment'

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "homePage",
      component: homePage
    },
    {
      path: "/orderList",
      name: "orderList",
      component: orderList
    },
    {
      path:"/appointment",
      name:'appointmentPage',
      component:appointmentPage
    }
  ]
});
