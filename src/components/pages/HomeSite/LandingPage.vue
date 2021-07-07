<template>
  <div class="landing">
    <div class="container-fluid">
      <div class="row justify-content-around align-items-center py-4">
        <div class="col-12 col-md-4 order-2 order-md-1 my-4 my-md-0">
          <div class="text_wraper">
            <div class="title">
              <h3>Lorem ipsum</h3>
              <h1>Dolor sit amet,</h1>
            </div>

            <div class="text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos
            </div>

            <div class="btns_wraper">
              <a :href="app_store_link">
                <img
                  src="../../../assets/images/pics/appp_store.png"
                  alt="App Store"
                  target="_blank"
                />
              </a>

              <a :href="google_play_link">
                <img
                  src="../../../assets/images/pics/google_play.png"
                  alt="App Store"
                  target="_blank"
                />
              </a>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 order-1 order-md-2 my-4 my-md-0">
          <div class="main_img_wraper">
            <img
              src="../../../assets/images/pics/landing_screen.png"
              alt="Landing Image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "landing",

  data() {
    return {
      google_play_link: "",
      app_store_link: "",
    };
  },

  mounted() {
    axios
      .get("contact", {
        headers: {
          "Accept-Language": localStorage.getItem("dashboard_lang"),
          "cache-control": "no-cache",
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        this.google_play_link = res.data.data.google_play_link;
        this.app_store_link = res.data.data.app_store_link;
      });
  },
};
</script>
