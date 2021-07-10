<template>
  <div class="home">
    <!-- START:: LOADER -->
    <Loader v-if="isLoading" />
    <!-- END:: LOADER -->

    <div class="main_content_wraper">
      <!-- START:: HOME INTRO -->
      <Homeintro />
      <!-- END:: HOME INTRO -->

      <!-- START:: ABOUT US -->
      <AboutUs />
      <!-- END:: ABOUT US -->

      <!-- START:: BEFORE AND AFTER -->
      <BeforeAndAfter />
      <!-- END:: BEFORE AND AFTER -->

      <!-- START:: COURSES -->
      <Courses />
      <!-- END:: COURSES -->
    </div>
  </div>
</template>

<script>
import Loader from "../../ui/LoaderScreen.vue";
import Homeintro from "./HomeIntro.vue";
import AboutUs from "./AboutUs.vue";
import BeforeAndAfter from "./BeforeAndAfter.vue";
import Courses from "./Courses.vue";

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
    };
  },

  mounted() {
    this.isLoading = false;
  },
};
</script>
