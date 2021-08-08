import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "../components/pages/HomeSite/TheHome.vue"
      ),
  },
  {
    path: "/about",
    name: "AboutUs",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "../components/pages/AboutUs/AboutUs.vue"
      ),
  },
  {
    path: "/before_and_after",
    name: "BeforeAndAfter",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "../components/pages/BeforeAndAfter/BeforeAndAfter.vue"
      ),
  },
  {
    path: "/questions/:type",
    name: "Questions",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "../components/pages/Questions/Questions.vue"
      ),
  },
  {
    path: "/faqs",
    name: "Faqs",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "../components/pages/Faqs/Faqs.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
  routes,
});

export default router;
