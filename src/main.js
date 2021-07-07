import Vue from "vue";
import App from "./App.vue";
// ======== Bootsrtap
import "bootstrap/dist/css/bootstrap.min.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "bootstrap-vue/dist/bootstrap-vue.css";
// ======== Font AweSome
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
// ======== ReSource
import VueResource from "vue-resource";
// ======== iziToast
import iziToast from "izitoast";
// ======== Axios
import axios from "axios";

// ======== Custom Style
import "./assets/css/iziToast.min.css";
import "./assets/sass/main.scss";

// ======== Router File
import router from "./router/index.js";

import VueFormulate from "@braid/vue-formulate";

Vue.config.productionTip = false;

import AOS from "aos";
import "aos/dist/aos.css";
import i18n from "./i18n";

let dashboard_lang = localStorage.getItem("dashboard_lang");
if (dashboard_lang == "ar") {
  require("../src/assets/sass/rtl.scss");
}

AOS.init();
Vue.use(iziToast);
Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueFormulate);
Vue.prototype.$iziToast = iziToast;

// AXIOS BASE URL
axios.defaults.baseURL = "";

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
