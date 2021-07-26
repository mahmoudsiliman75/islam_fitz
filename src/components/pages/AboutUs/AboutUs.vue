<template>
  <div class="about">
    <div class="main_content_wraper">
      <div class="container">
        <div class="header_wraper">
          <h2>عن كابتن إسلام</h2>
        </div>

        <div class="row justify-content-center">
          <div class="col-8 col-md-3 text-center">
            <div class="about_us_img_wraper">
              <img :src="aboutData.photo" alt="About Us Image" />
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
import axios from "axios";

export default {
  name: "AboutUs",

  data() {
    return {
      aboutData: null,
    };
  },

  methods: {
    // START:: GET ABOUT US PAGE DATA
    getAboutData() {
      axios.get("about").then((res) => {
        this.aboutData = res.data[0];
      });
    },
    // END:: GET ABOUT US PAGE DATA
  },

  mounted() {
    // START:: GET ABOUT US PAGE DATA
    this.getAboutData();
    // END:: GET ABOUT US PAGE DATA

    // setTimeout(() => {
    //   console.log(this.aboutData);
    // }, 2000);
  },
};
</script>
