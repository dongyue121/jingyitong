// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import axios from "axios";
import router from "./router";
import "./common/style/base.css";
Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;
// Vue.use(axios);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
