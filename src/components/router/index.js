import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../pages/HomeSite/home.vue"),
    children: [
      {
        path: "/",
        name: "landing",
        component: () =>
          import(
            /* webpackChunkName: "LandingPage" */ "../pages/HomeSite/LandingPage.vue"
          ),
      },
    ],
  },
  {
    path: "/login",
    name: "mainAuth",
    component: () =>
      import(/* webpackChunkName: "mainAuth" */ "../pages/Auth/mainAuth"),
    children: [
      {
        path: "/login",
        name: "Login",
        component: () =>
          import(/* webpackChunkName: "Login" */ "../pages/Auth/Login.vue"),
      },
      {
        path: "/register",
        name: "Register",
        component: () =>
          import(
            /* webpackChunkName: "Register" */ "../pages/Auth/Register.vue"
          ),
      },
    ],
  },
  {
    path: "/verification/:type",
    name: "Verification",
    component: () =>
      import(
        /* webpackChunkName: "verification" */ "../pages/Auth/verification.vue"
      ),
  },
  {
    path: "/branch_verification",
    name: "Branch Verification",
    component: () =>
      import(
        /* webpackChunkName: "branch verification" */ "../pages/dashboard/branches/BranchVerification.vue"
      ),
  },
  {
    path: "/verification/:type/success",
    name: "successMessage",
    component: () =>
      import(
        /* webpackChunkName: "SuccessMessage" */ "../pages/dashboard/SuccessMessage.vue"
      ),
  },
  {
    path: "/business_data",
    name: "businessData",
    component: () =>
      import(
        /* webpackChunkName: "businessData" */ "../pages/dashboard/BusinessData.vue"
      ),
  },
  {
    path: "/dashboard",
    name: "mainDashboard",
    component: () =>
      import(
        /* webpackChunkName: "mainDashboard" */ "../pages/dashboard/mainDashboard"
      ),
    children: [
      {
        path: "/dashboard",
        name: "dashboard-home",
        component: () =>
          import(
            /* webpackChunkName: "dashboard-home" */ "../pages/dashboard/dashboard-home.vue"
          ),
      },
      {
        path: "/edit_profile",
        name: "profile",
        component: () =>
          import(
            /* webpackChunkName: "Profile" */ "../pages/dashboard/Profile.vue"
          ),
      },
      {
        path: "/branches",
        name: "branches",
        component: () =>
          import(
            /* webpackChunkName: "Branches" */ "../pages/dashboard/branches/Branches.vue"
          ),
      },
      {
        path: "/branches/:id",
        name: "branchDetails",
        component: () =>
          import(
            /* webpackChunkName: "BranchDetails" */ "../pages/dashboard/branches/BranchDetails.vue"
          ),
      },
      {
        path: "/addBranch",
        name: "addBranch",
        component: () =>
          import(
            /* webpackChunkName: "AddBranch" */ "../pages/dashboard/branches/AddBranch.vue"
          ),
      },
      {
        path: "/about",
        name: "about-us",
        component: () =>
          import(
            /* webpackChunkName: "AboutUs" */ "../pages/dashboard/AboutUs.vue"
          ),
      },
      {
        path: "/terms",
        name: "terms",
        component: () =>
          import(
            /* webpackChunkName: "Terms" */ "../pages/dashboard/Terms.vue"
          ),
      },
      {
        path: "/contact",
        name: "contact-us",
        component: () =>
          import(
            /* webpackChunkName: "ContactUs" */ "../pages/dashboard/ContactUs.vue"
          ),
      },
    ],
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
