<template>
  <div class="home">
    <header-site></header-site>

    <transition name="fadeIn" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import HeaderSite from "../Header/HeaderSite";
export default {
  components: { HeaderSite },
};
</script>
