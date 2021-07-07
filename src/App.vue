<template>
  <div id="app">
    <transition name="slither" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
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
