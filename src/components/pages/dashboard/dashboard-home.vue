<template>
  <div class="mainHome">
    <!-- START:: LOADER -->
    <transition name="fade" mode="in-out">
      <LoaderScreen v-if="isLoading" />
    </transition>
    <!-- END:: LOADER -->

    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-12 col-md-5 my-2">
          <div class="chart_card p-2">chart 1</div>
        </div>

        <div class="col-12 col-md-2 my-2">
          <div class="chart_card p-2">chart 2</div>
        </div>

        <div class="col-12 col-md-5 my-2">
          <div class="chart_card p-2">chart 3</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoaderScreen from "../../ui/LoaderScreen.vue";

export default {
  components: {
    LoaderScreen,
  },

  data() {
    return {
      isLoading: true,
    };
  },

  mounted() {
    this.isLoading = false;

    localStorage.removeItem("ver_code");
    localStorage.removeItem("ver_phone");

    let user_token = localStorage.getItem("user_token");
    if (!user_token) {
      this.$router.push("/login");
    }
  },
};
</script>
