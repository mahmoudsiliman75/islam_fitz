<template>
  <div id="home_intro" class="home_intro">
    <div class="container">
      <div class="row justify-content-between align-items-center target">
        <div
          class="outer_wraper col-12 col-md-7 order-2 order-md-1 my-3 my-md-0"
        >
          <div class="title_img_wraper">
            <img
              src="https://d18bl4bud716l6.cloudfront.net/survey/img/step-into-greatness-stacked-narrow@2x.png"
            />
          </div>

          <div class="title_wraper">
            <h1>{{ data.intro_title }}</h1>
          </div>
          <div class="intro_text_wraper">
            {{ data.intro_text }}
          </div>

          <div class="btns_wraper">
            <div class="text-box">
              <router-link to="/questions/Man" class="btn btn-white btn-animate"
                >ذكر</router-link
              >
            </div>

            <div class="text-box">
              <router-link
                to="/questions/Woman"
                class="btn btn-white btn-animate"
                >انثي</router-link
              >
            </div>
          </div>
        </div>

        <div
          class="outer_wraper col-12 col-md-4 text-center order-1 order-md-2"
        >
          <div class="img_wraper">
            <img :src="data.intro_image_url" alt="Intro Image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],

  methods: {
    controleBackGround() {
      const target = document.querySelector("#home_intro");
      target.addEventListener("mousemove", (e) => {
        let moveX = -e.pageX / 20;
        let moveY = -e.pageY / 20;
        target.style.backgroundPosition = moveX + "px " + moveY + "px";
      });
    },
  },

  mounted() {
    setTimeout(() => {
      this.controleBackGround();
    }, 1000);
  },
};
</script>
