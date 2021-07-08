<template>
  <div id="app">
    <!-- START:: THE HEADER -->
    <TheHeader />
    <!-- END:: THE HEADER -->

    <transition name="slither" mode="out-in">
      <router-view />
    </transition>

    <!-- START:: THE FOOTER -->
    <TheFooter />
    <!-- END:: THE FOOTER -->
  </div>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheFooter from "./components/layouts/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  mounted() {
    let dashboard_lang = localStorage.getItem("dashboard_lang");
    if (!dashboard_lang) {
      localStorage.setItem("dashboard_lang", "en");
      this.$i18n.locale = "en";
    } else {
      this.$i18n.locale = localStorage.getItem("dashboard_lang");
    }
  },
};
</script>
