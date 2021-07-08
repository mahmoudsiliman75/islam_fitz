<template>
  <div class="home">
    <div class="main_content_wraper">
      <!-- START:: HOME INTRO -->
      <Homeintro />
      <!-- END:: HOME INTRO -->
    </div>
  </div>
</template>

<script>
import Homeintro from "./HomeIntro.vue";

export default {
  name: "Home",

  components: {
    Homeintro,
  },
};
</script>
