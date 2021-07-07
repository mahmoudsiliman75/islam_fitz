<template>
  <div class="rating">
    <!-- START:: ZERO STARS -->
    <span v-if="rate == '0'">
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
    </span>
    <!-- END:: ZERO STARS -->

    <!-- START:: ONE STARS -->
    <span v-if="rate == '1'">
      <i class="fas fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
    </span>
    <!-- END:: ONE STARS -->

    <!-- START:: ONE AND HALF STARS -->
    <span v-if="rate == '1.5'">
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
    </span>
    <!-- END:: ONE AND HALF STARS -->

    <!-- START:: TWO STARS -->
    <span v-if="rate == '2'">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
    </span>
    <!-- END:: TWO STARS -->

    <!-- START:: TWO AND HALF STARS -->
    <span v-if="rate == '2.5'">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
    </span>
    <!-- END:: TWO AND HALF STARS -->

    <!-- START:: THREE STARS -->
    <span v-if="rate == '3'">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
    </span>
    <!-- END:: THREE STARS -->

    <!-- START:: THREE AND HALF STARS -->
    <span v-if="rate == '3.5'">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i>
      <i class="far fa-star"></i>
    </span>
    <!-- END:: THREE AND HALF STARS -->

    <!-- START:: FOUR STARS -->
    <span v-if="rate == '4'">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="far fa-star"></i>
    </span>
    <!-- END:: FOUR STARS -->

    <!-- START:: FOUR AND HALF STARS -->
    <span v-if="rate == '4.5'">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i>
    </span>
    <!-- END:: FOUR AND HALF STARS -->

    <!-- START:: FIVE STARS -->
    <span v-if="rate == '5'">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </span>
    <!-- END:: FIVE STARS -->
  </div>
</template>

<script>
export default {
  props: ["rate"],
};
</script>

<style lang="scss">
.rating {
  margin-inline-start: 6px;
  span {
    svg {
      color: gold;
    }
  }
}
</style>
