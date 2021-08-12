<template>
  <div id="before_after" class="before_after">
    <div class="title_wraper">
      <h2>قبل و بعد</h2>
    </div>

    <div class="container">
      <div class="row" data-aos="zoom-in" data-aos-duration="1500">
        <div
          class="col-9 col-md-3 my-2"
          v-for="item in featuredBeforeAndAfter"
          :key="item.id"
        >
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
        </div>
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
import axios from "axios";
export default {
  data() {
    return {
      featuredBeforeAndAfter: null,

      beforeAndAfterSliderSettings: {
        dots: true,
        arrows: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 5,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              dots: false,
              arrows: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
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
