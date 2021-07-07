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
    // children: [
    //   {
    //     path: "/",
    //     name: "landing",
    //     component: () =>
    //       import(
    //         /* webpackChunkName: "LandingPage" */ "../pages/HomeSite/LandingPage.vue"
    //       ),
    //   },
    // ],
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
  routes,
});

export default router;
