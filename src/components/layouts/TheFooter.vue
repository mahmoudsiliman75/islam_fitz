<template>
  <footer v-if="footerData">
    <!-- START:: FOOTERT UPPER SHAPE -->
    <div class="lower_shape_wraper">
      <Scratch />
    </div>
    <!-- END:: FOOTERT UPPER SHAPE -->

    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="footer_logo col-6 col-md-2">
          <router-link to="/">
            <img src="../../assets/images/logo/logo.png" alt="Site Logo" />
          </router-link>
        </div>

        <div
          class="
            short_cuts
            col-12 col-md-4
            justify-content-between justify-content-md-center
          "
        >
          <div
            class="
              d-flex
              flex-column
              align-items-start
              justify-content-center
              p-3
            "
          >
            <router-link to="/"> الرئيسية </router-link>
            <router-link to="/about"> من نحن </router-link>
          </div>

          <div
            class="
              d-flex
              flex-column
              align-items-start
              justify-content-center
              p-3
            "
          >
            <router-link to="/before_and_after"> قبل و بعد </router-link>
            <a href="AllArticles.php"> المدونة </a>
          </div>
        </div>

        <div class="get_in_touch col-10 col-md-3 px-md-2">
          <h5 class="my-3 d-flex">تواصل معنا</h5>

          <ul class="list-unstyled p-0">
            <li class="d-flex align-items-center" v-if="footerData.address">
              <i class="fas fa-map-marker-alt mx-1"></i>
              <span> {{ footerData.address }} </span>
            </li>

            <li class="d-flex align-items-center" v-if="footerData.email">
              <i class="fas fa-envelope mx-1"></i>
              <span>
                <a :href="'mailto:' + footerData.email">
                  {{ footerData.email }}
                </a>
              </span>
            </li>

            <li class="d-flex align-items-center">
              <i class="fas fa-mobile-alt mx-1"></i>
              <span>
                <a :href="'tele:' + footerData.first_phone_number">
                  {{ footerData.first_phone_number }}
                </a>
                -
                <a :href="'tele:' + footerData.second_phone_number">
                  {{ footerData.second_phone_number }}
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div class="follow_us col-12 col-md-3">
          <h5 class="text-center my-3">تابعنا على</h5>
          <ul class="list-unstyled">
            <li v-if="footerData.facebook">
              <a :href="footerData.facebook" class="facebook" target="_blanck">
                <img
                  src="../../assets/images/icons/social/facebook.png"
                  alt="Facebook"
                />
              </a>
            </li>

            <li v-if="footerData.instagram">
              <a
                :href="footerData.instagram"
                class="instagram"
                target="_blanck"
              >
                <img
                  src="../../assets/images/icons/social/instagram.png"
                  alt="Instagram"
                />
              </a>
            </li>

            <li v-if="footerData.youtube">
              <a :href="footerData.youtube" class="youtube" target="_blanck">
                <img
                  src="../../assets/images/icons/social/youtube.png"
                  alt="youtube"
                />
              </a>
            </li>

            <li v-if="footerData.twitter">
              <a :href="footerData.twitter" class="twitter" target="_blanck">
                <img
                  src="../../assets/images/icons/social/twitter.png"
                  alt="Twitter"
                />
              </a>
            </li>
          </ul>
        </div>

        <div class="copy_rights col-12 d-flex justify-content-center">
          <span> &copy; 2021 Islam Fitz </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Scratch from "../ui/ScratchShape.vue";
import axios from "axios";

export default {
  name: "Footer",

  components: {
    Scratch,
  },

  data() {
    return {
      footerData: null,
    };
  },

  methods: {
    // START:: GET FOOTER DATA
    getFooterData() {
      axios.get("footer").then((res) => {
        this.footerData = res.data[0];
      });
    },
    // END:: GET FOOTER DATA
  },

  mounted() {
    // START:: GET FOOTER DATA
    this.getFooterData();
    // END:: GET FOOTER DATA
  },
};
</script>
