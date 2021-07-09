<template>
  <div class="home">
    <div class="main_content_wraper">
      <!-- START:: HOME INTRO -->
      <Homeintro />
      <!-- END:: HOME INTRO -->

      <!-- START:: ABOUT US -->
      <AboutUs />
      <!-- END:: ABOUT US -->

      <!-- START:: COURSES -->
      <Courses />
      <!-- END:: COURSES -->
    </div>
  </div>
</template>

<script>
import Homeintro from "./HomeIntro.vue";
import AboutUs from "./AboutUs.vue";
import Courses from "./Courses.vue";

export default {
  name: "Home",

  components: {
    Homeintro,
    AboutUs,
    Courses,
  },
};
</script>
