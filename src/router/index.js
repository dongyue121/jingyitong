<<<<<<< HEAD
import Vue from "vue";
import Router from "vue-router";
import homePage from "@/components/home";
import orderList from "@/components/orderList.vue";

Vue.use(Router);
=======
import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/home'
import appointmentPage from '@/components/appointment'
Vue.use(Router)
>>>>>>> b08d18d7fc8a8d638b50240c80c4e8f285a721ee

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "homePage",
      component: homePage
    },
    {
<<<<<<< HEAD
      path: "/orderList",
      name: "orderList",
      component: orderList
=======
      path:"/appointment",
      name:'appointmentPage',
      component:appointmentPage
>>>>>>> b08d18d7fc8a8d638b50240c80c4e8f285a721ee
    }
  ]
});
