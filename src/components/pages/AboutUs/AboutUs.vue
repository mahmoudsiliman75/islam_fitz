<template>
  <div class="about">
    <!-- START:: LOADER -->
    <Loader v-if="isLoading" />
    <!-- END:: LOADER -->

    <div class="main_content_wraper">
      <div class="container">
        <div class="header_wraper">
          <h2>عن كابتن إسلام</h2>
        </div>

        <div class="row justify-content-center">
          <div class="col-8 col-md-3 text-center">
            <div class="about_us_img_wraper">
              <img :src="aboutData.photo_url" alt="About Us Image" />
            </div>
          </div>

          <div class="col-12">
            <div class="text_wraper">
              {{ aboutData.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../../ui/LoaderScreen.vue";
import axios from "axios";

export default {
  name: "AboutUs",

  components: {
    Loader,
  },

  data() {
    return {
      isLoading: true,
      aboutData: null,
    };
  },

  methods: {
    // START:: GET ABOUT US PAGE DATA
    getAboutData() {
      axios.get("about").then((res) => {
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
        this.aboutData = res.data[0];
      });
    },
    // END:: GET ABOUT US PAGE DATA
  },

  mounted() {
    this.isLoading = true;
    // START:: GET ABOUT US PAGE DATA
    this.getAboutData();
    // END:: GET ABOUT US PAGE DATA
  },
};
</script>
