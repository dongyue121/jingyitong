import Vue from "vue";
import Router from "vue-router";
import homePage from "@/components/home";
import orderList from "@/components/orderList.vue";

Vue.use(Router);

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
    }
  ]
});
