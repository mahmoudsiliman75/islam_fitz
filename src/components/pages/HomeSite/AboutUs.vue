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
            <img src="../../../assets/images/pics/about.png" />
          </div>
        </div>

        <div class="col-12 col-md-7 order-1 order-md-2">
          <div class="text_wraper">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae ex itaque ullam necessitatibus molestiae a tempora
            inventore non mollitia quam aperiam iste, eum animi impedit
            asperiores earum explicabo eaque unde veritatis? Ratione, blanditiis
            deleniti! Voluptate tenetur quaerat ex omnis praesentium quidem!
            Dolorem ipsa commodi, asperiores quo dolores impedit aliquid.
            Officia, veniam exercitationem nihil, odio eum, quam in officiis
            accusantium soluta facere quod eveniet harum itaque!
          </div>

          <div class="btn_wraper">
            <router-link to="/about_us"> Show More </router-link>
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
};
</script>
