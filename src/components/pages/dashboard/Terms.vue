<template>
  <div class="terms">
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

        <!-- START:: TERMS TEXT -->
        <div class="col-12">
          <div class="text_wraper" v-html="termsText"></div>
        </div>
        <!-- END:: TERMS TEXT -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LoaderScreen from "../../ui/LoaderScreen.vue";

export default {
  name: "terms",

  components: {
    LoaderScreen,
  },

  data() {
    return {
      isLoading: true,
      termsText: "",
    };
  },

  mounted() {
    this.isLoading = false;

    // END:: AXIOS GET TERMS DATA
    axios
      .get("policy", {
        headers: {
          "Accept-Language": localStorage.getItem("dashboard_lang"),
          "cache-control": "no-cache",
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        this.termsText = res.data.data.policy;
      });
    // END:: AXIOS GET TERMS DATA

    let user_token = localStorage.getItem("user_token");
    if (!user_token) {
      this.$router.push("/login");
    }
  },
};
</script>
