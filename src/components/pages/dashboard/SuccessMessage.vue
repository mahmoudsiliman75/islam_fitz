<template>
  <div class="message_wraper">
    <header-site></header-site>

    <section id="authSiteWraper">
      <div class="container d-flex justify-content-center align-items-center">
        <div class="message">
          <div class="title_wraper">
            <h4>{{ $t("thank_you") }}</h4>
          </div>

          <div class="text_wraper">
            You have successfully created your account. Your subscription is
            under review, once it is verify from us you can avail our services.
          </div>

          <div class="loader_wraper">
            <div class="pill">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderSite from "@/components/pages/Header/HeaderSite";

export default {
  name: "successMessage",
  components: {
    HeaderSite,
  },

  mounted() {
    setTimeout(() => {
      this.$router.replace("/business_data");
    }, 4000);
  },
};
</script>
