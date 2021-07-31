<template>
  <div class="about_us">
    <!-- START:: UPPER SHAPE -->
    <div class="upper_shape_wraper">
      <Scratch />
    </div>
    <!-- START:: UPPER SHAPE -->

    <!-- START:: ABOUT US CONTENT -->
    <div class="container">
      <div
        class="
          row
          justify-content-center justify-content-md-between
          align-items-center
        "
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div class="col-8 col-md-4 order-2 order-md-1">
          <div class="img_wraper">
            <img :src="data.about_us_image_url" />
          </div>
        </div>

        <div class="col-12 col-md-7 order-1 order-md-2">
          <div class="title_wraper">
            <h2>عن كابتن إسلام</h2>
          </div>

          <div class="text_wraper">
            {{ data.about_us_text }}
          </div>

          <div class="btn_wraper">
            <router-link to="/about"> إعرض المزيد </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- END:: ABOUT US CONTENT -->

    <!-- START:: LOEWR SHAPE -->
    <div class="lower_shape_wraper">
      <Scratch />
    </div>
    <!-- END:: LOWER SHAPE -->
  </div>
</template>

<script>
import Scratch from "../../ui/ScratchShape.vue";

export default {
  components: {
    Scratch,
  },

  props: ["data"],
};
</script>
