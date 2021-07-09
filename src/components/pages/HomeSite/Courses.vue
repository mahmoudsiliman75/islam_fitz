<template>
  <div class="courses">
    <!-- START:: UPPER SHAPE -->
    <div class="upper_shape_wraper">
      <Scratch />
    </div>
    <!-- START:: UPPER SHAPE -->

    <!-- START:: COURSES CONTENT -->
    <div class="overlay">
      <div class="title_wraper" data-aos="fade-up" data-aos-duration="2000">
        <h2>Courses Are Comming Soon</h2>
        <div class="loading">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <!-- END:: COURSES CONTENT -->

    <!-- START:: LOEWR SHAPE -->
    <div class="lower_shape_wraper">
      <Scratch />
    </div>
    <!-- START:: LOWER SHAPE -->
  </div>
</template>

<script>
import Scratch from "../../ui/ScratchShape.vue";

export default {
  components: {
    Scratch,
  },
};
</script>
