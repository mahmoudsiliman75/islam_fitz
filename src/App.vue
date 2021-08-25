<template>
  <v-app>
    <!-- START:: HEADER -->
    <TheHeader :logo_url="logo" v-if="logo" />
    <!-- END:: HEADER -->

    <div class="main_content_wraper">
      <router-view />
    </div>

    <!-- START:: FOOTER -->
    <TheFooter :logo_url="logo" v-if="logo" />
    <!-- END:: FOOTER -->
  </v-app>
</template>

<script>
import axios from "axios";
import TheHeader from "./components/layouts/TheHeader.vue";
import TheFooter from "./components/layouts/TheFooter.vue";

export default {
  name: "App",

  components: {
    TheHeader,
    TheFooter,
  },

  data() {
    return {
      logo: null,
    };
  },

  methods: {
    // START:: GET HOME PAGE DATA
    getLogoData() {
      axios.get("home").then((res) => {
        this.logo = res.data[0].logo_url;
      });
    },
    // END:: GET HOME PAGE DATA
  },

  mounted() {
    this.getLogoData();
  },
};
</script>
