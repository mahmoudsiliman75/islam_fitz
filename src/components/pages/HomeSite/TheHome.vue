<template>
  <div class="home">
    <!-- START:: LOADER -->
    <Loader v-if="isLoading" />
    <!-- END:: LOADER -->

    <!-- START:: HOME INTRO -->
    <Homeintro :data="data" v-if="data" />
    <!-- END:: HOME INTRO -->

    <!-- START:: ABOUT US -->
    <AboutUs :data="data" v-if="data" />
    <!-- END:: ABOUT US -->

    <!-- START:: BEFORE AND AFTER -->
    <BeforeAndAfter v-if="data" />
    <!-- END:: BEFORE AND AFTER -->

    <!-- START:: COURSES -->
    <Courses v-if="data" />
    <!-- END:: COURSES -->
  </div>
</template>

<script>
import Loader from "../../ui/LoaderScreen.vue";
import Homeintro from "./HomeIntro.vue";
import AboutUs from "./AboutUs.vue";
import BeforeAndAfter from "./BeforeAndAfter.vue";
import Courses from "./Courses.vue";

import axios from "axios";

export default {
  name: "Home",

  components: {
    Loader,
    Homeintro,
    AboutUs,
    BeforeAndAfter,
    Courses,
  },

  data() {
    return {
      isLoading: true,
      data: null,
    };
  },

  methods: {
    // START:: GET HOME PAGE DATA
    getHomeData() {
      axios.get("home").then((res) => {
        this.isLoading = false;
        this.data = res.data[0];
      });
    },
    // END:: GET HOME PAGE DATA
  },

  mounted() {
    (this.isLoading = true),
      // STAT:: GET HOME PAGE DATA
      this.getHomeData();
    // END:: GET HOME PAGE DATA
  },
};
</script>
