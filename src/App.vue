<template>
  <v-app>
    <!-- START:: HEADER -->
    <TheHeader />
    <!-- END:: HEADER -->

    <div class="main_content_wraper">
      <router-view />
    </div>

    <!-- START:: FOOTER -->
    <TheFooter />
    <!-- END:: FOOTER -->
  </v-app>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheFooter from "./components/layouts/TheFooter.vue";

export default {
  name: "App",

  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
