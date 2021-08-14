<template>
  <div id="before_after" class="before_after">
    <div class="title_wraper">
      <h2>قبل و بعد</h2>
    </div>

    <div class="container">
      <div class="before_after_carousel_wraper">
        <splide :slides="featuredBeforeAndAfter" :options="options">
          <splide-slide v-for="item in featuredBeforeAndAfter" :key="item.id">
            <div class="card">
              <div class="image_wraper">
                <img :src="item.image_url" />
              </div>

              <div class="card_body_wraper">
                <h5>{{ item.name }}</h5>
                <div class="description">
                  {{ item.description }}
                </div>
              </div>
            </div>
          </splide-slide>
        </splide>
      </div>

      <div class="col-12">
        <div class="btn_wraper">
          <div class="text-box">
            <router-link
              to="/before_and_after"
              class="btn btn-white btn-animate"
            >
              إعرض المزيد
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import axios from "axios";
export default {
  components: {
    Splide,
    SplideSlide,
  },

  data() {
    return {
      featuredBeforeAndAfter: null,

      options: {
        pagination: false,
        autoplay: true,
        pauseOnHover: true,
        rewind: false,
        perPage: 4,
        perMove: 1,
        gap: "1rem",
        speed: "2000",
        direction: "rtl",
        breakpoints: {
          500: {
            perPage: 1,
          },

          900: {
            perPage: 3,
          },
        },
      },
    };
  },

  methods: {
    controleBackGround() {
      const target = document.querySelector("#before_after");
      target.addEventListener("mousemove", (e) => {
        let moveX = -e.pageX / 20;
        let moveY = -e.pageY / 20;
        target.style.backgroundPosition = moveX + "px " + moveY + "px";
      });
    },

    // START:: GRT FEATURED BEFORE AND AFTER
    getFeaturedBeforeAndAfter() {
      axios
        .get("before_after", {
          params: {
            feature: 8,
          },
        })
        .then((res) => {
          this.featuredBeforeAndAfter = res.data.BeforeAndAfter;
        });
    },
    // END:: GRT FEATURED BEFORE AND AFTER
  },

  mounted() {
    this.controleBackGround();

    // START:: GRT FEATURED BEFORE AND AFTER
    this.getFeaturedBeforeAndAfter();
    // END:: GRT FEATURED BEFORE AND AFTER
  },
};
</script>
