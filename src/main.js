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
// ======== SWEET ALERT
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
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

// ======== VUE FORM WIZARD
import VueFormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

// ======== VUE MOBILE NUMBER INPUT
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";

// ======== VUETIFY
import vuetify from "./plugins/vuetify";

AOS.init();
Vue.use(iziToast);
Vue.use(VueSweetalert2);
Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueFormulate);
Vue.use(VueFormWizard);
Vue.component("vue-phone-number-input", VuePhoneNumberInput);
Vue.prototype.$iziToast = iziToast;

// AXIOS BASE URL
axios.defaults.baseURL = "https://dash-board.fitzonline.net/v1/api/";

new Vue({
  router,
  i18n,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
