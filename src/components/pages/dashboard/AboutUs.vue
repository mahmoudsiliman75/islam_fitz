<template>
  <div class="about_us">
    <!-- START:: LOADER -->
    <transition name="fade" mode="in-out">
      <LoaderScreen v-if="isLoading" />
    </transition>
    <!-- END:: LOADER -->

    <div class="container-fluid">
      <div class="row">
        <!-- START:: LOGO -->
        <div class="col-12">
          <div class="logo_wraper">
            <img src="../../../assets/images/logos/large_logo.png" alt="logo" />
          </div>
        </div>
        <!-- END:: LOGO -->

        <!-- START:: ABOUT TEXT -->
        <div class="col-12">
          <div class="text_wraper" v-html="aboutText"></div>
        </div>
        <!-- END:: ABOUT TEXT -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LoaderScreen from "../../ui/LoaderScreen.vue";

export default {
  name: "about-us",

  components: {
    LoaderScreen,
  },

  data() {
    return {
      isLoading: true,
      aboutText: "",
    };
  },

  mounted() {
    this.isLoading = false;

    // START:: AXIOS GET ABOUT DATA
    axios
      .get("about", {
        headers: {
          "Accept-Language": localStorage.getItem("dashboard_lang"),
          "cache-control": "no-cache",
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        this.aboutText = res.data.data.about;
      });
    // END:: AXIOS GET ABOUT DATA
  },
};
</script>
