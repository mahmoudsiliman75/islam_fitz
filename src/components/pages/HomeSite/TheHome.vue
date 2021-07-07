<template>
  <div class="home">
    <!-- START:: THE HEADER -->
    <TheHeader />
    <!-- END:: THE HEADER -->

    <h1>Hi from home</h1>

    <!-- START:: THE FOOTER -->
    <TheFooter />
    <!-- END:: THE FOOTER -->
  </div>
</template>

<script>
import TheHeader from "../../layouts/TheHeader.vue";
import TheFooter from "../../layouts/TheFooter.vue";

export default {
  name: "Home",

  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
