<template>
  <div class="branch_details">
    <div class="row">
      <div class="col-12 col-lg-4">
        <div class="content_card mb-3">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            no-animation
            :interval="4000"
            img-height="180"
          >
            <b-carousel-slide
              v-for="slide in slider"
              :key="slide.id"
              :img-src="slide.url"
            >
            </b-carousel-slide>
          </b-carousel>

          <div class="branch_name">
            <div class="info">
              <div class="img_wraper">
                <img :src="seller.image" alt="logo" @error="replaceByDefault" />
              </div>

              <div class="name">
                <h5>{{ seller.fullname }}</h5>
                <h6>{{ bio }}</h6>
              </div>
            </div>

            <div class="status">
              <p class="text-success" v-if="is_open == true">Open</p>
              <p class="text-danger" v-else>Closed</p>
            </div>
          </div>

          <div class="branch_location">
            <span>
              <i class="fas fa-location-arrow fa-lg"></i>
            </span>
            <p>{{ location }}</p>
          </div>

          <div class="branch_worktime">
            <h5 class="title_wraper">
              <span>
                <i class="far fa-clock fa-lg"></i>
              </span>
              Worktime
            </h5>

            <div class="worktime_table">
              <p v-for="time in workTimes" :key="time.id">
                <span> {{ time.day }} </span>

                <span> {{ time.from }} - {{ time.to }} </span>
              </p>
            </div>
          </div>
        </div>

        <!-- <div class="content_card mb-3">
          <div class="reviews_title_wraper">
            <h5>Reviews Of Users</h5>
            <span>
              <i class="fas fa-star fa-lg"></i>
              4.3
            </span>
          </div>

          <div class="review_wraper">
            <div class="img_wraper">
              <img
                src="../../../../assets/images/pics/default.jpg"
                alt="client"
              />
            </div>

            <div class="testimonial_wraper">
              <p>
                <span> Ahmed </span>
                <RatingStars rate="4"></RatingStars>
              </p>

              <p>
                <span> Good Seller </span>
                <span> 10 days ago </span>
              </p>
            </div>
          </div>

          <div class="review_wraper">
            <div class="img_wraper">
              <img
                src="../../../../assets/images/pics/default.jpg"
                alt="client"
              />
            </div>

            <div class="testimonial_wraper">
              <p>
                <span> Sara </span>
                <RatingStars rate="4"></RatingStars>
              </p>

              <p>
                <span> The seller is fast </span>
                <span> 5 months ago </span>
              </p>
            </div>
          </div>
        </div> -->
      </div>

      <div class="col-12 col-lg-8" v-if="business_type != 'central market'">
        <div class="content_wraper">
          <b-card no-body>
            <b-tabs pills card>
              <b-tab
                v-for="category in categories"
                :key="category.id"
                :title="category.name"
                @click="getproductsByBranchAndCatIds(category.id)"
                class="my-3"
              >
                <b-card-text
                  class="row justify-content-center justify-content-md-start"
                  id="vegetables_tap"
                >
                  <div
                    class="col-8 col-md-6 col-lg-3 my-3"
                    v-for="singleProduct in productsByBranchAndCatIds"
                    :key="singleProduct.id"
                  >
                    <div class="product_card">
                      <div class="img_wraper">
                        <img :src="singleProduct.images.url" alt="product" />
                      </div>

                      <div class="card_body">
                        <h5>{{ singleProduct.name }}</h5>
                        <h5>{{ singleProduct.simple_description }}</h5>
                      </div>

                      <div class="card_footer">
                        {{ singleProduct.price }} SR
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>

              <!-- <b-tab title="Vegetables">
                <b-card-text
                  class="row justify-content-center justify-content-md-start"
                  id="vegetables_tap"
                >
                  <div
                    class="col-md-6 col-lg-3 my-3"
                    v-for="product in broducts"
                    :key="product.id"
                  >
                    <div class="product_card">
                      <div class="img_wraper">
                        <img :src="product.img" alt="product" />
                      </div>

                      <div class="card_body">
                        <h5>{{ product.name }}</h5>
                        <h5>{{ product.amount }}</h5>
                      </div>

                      <div class="card_footer">{{ product.price }} SR</div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>

              <b-tab title="Fruits">
                <b-card-text>
                  <div
                    class="row justify-content-center justify-content-md-start"
                  >
                    <div
                      class="col-md-6 col-lg-3 my-3"
                      v-for="product in broducts"
                      :key="product.id"
                    >
                      <div class="product_card">
                        <div class="img_wraper">
                          <img :src="product.img" alt="product" />
                        </div>

                        <div class="card_body">
                          <h5>{{ product.name }}</h5>
                          <h5>{{ product.amount }}</h5>
                        </div>

                        <div class="card_footer">{{ product.price }} SR</div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>

              <b-tab title="Eggs">
                <b-card-text>
                  <div
                    class="row justify-content-center justify-content-md-start"
                  >
                    <div
                      class="col-md-6 col-lg-3 my-3"
                      v-for="product in broducts"
                      :key="product.id"
                    >
                      <div class="product_card">
                        <div class="img_wraper">
                          <img :src="product.img" alt="product" />
                        </div>

                        <div class="card_body">
                          <h5>{{ product.name }}</h5>
                          <h5>{{ product.amount }}</h5>
                        </div>

                        <div class="card_footer">{{ product.price }} SR</div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>

              <b-tab title="Other">
                <b-card-text>
                  <div
                    class="row justify-content-center justify-content-md-start"
                  >
                    <div
                      class="col-md-6 col-lg-3 my-3"
                      v-for="product in broducts"
                      :key="product.id"
                    >
                      <div class="product_card">
                        <div class="img_wraper">
                          <img :src="product.img" alt="product" />
                        </div>

                        <div class="card_body">
                          <h5>{{ product.name }}</h5>
                          <h5>{{ product.amount }}</h5>
                        </div>

                        <div class="card_footer">{{ product.price }} SR</div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab> -->
            </b-tabs>
          </b-card>
        </div>
      </div>

      <div class="col-12 col-lg-8" v-else>
        <div class="content_wraper">
          <div class="container-fluid">
            <div class="row justify-content-center justify-content-md-start">
              <div
                class="col-8 col-md-6 col-lg-3 my-3"
                v-for="product in productsByBranchId"
                :key="product.id"
              >
                <div class="product_card">
                  <div class="img_wraper">
                    <img :src="product.images.url" alt="product" />
                  </div>

                  <div class="card_body">
                    <h5>{{ product.name }}</h5>
                    <h5>{{ product.simple_description }}</h5>
                  </div>

                  <div class="card_footer">{{ product.price }} SR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <pre>
      {{ data }}
    </pre> -->
  </div>
</template>

<script>
import axios from "axios";
// import RatingStars from "../../../ui/RatingStars.vue";
import imgFalse from "../../../../assets/images/icons/user.png";

export default {
  name: "branchDetails",
  // components: {
  //   RatingStars,
  // },
  data() {
    return {
      slide: 0,
      sliding: null,

      perPage: 3,
      currentPage: 1,

      business_type: localStorage.getItem("business_type"),
      // data: [],

      bio: "",
      is_open: null,
      slider: [],
      seller: [],
      workTimes: [],
      location: null,
      categories: [],

      productsByBranchId: [],
      productsByBranchAndCatIds: [],
    };
  },

  computed: {
    rows() {
      return this.broducts.length;
    },
  },

  methods: {
    replaceByDefault(e) {
      e.target.src = imgFalse;
    },

    // START:: AXIOS GET BRANCH DETAILS
    getBranchDetaoils() {
      axios
        .get("home/branch_by_id", {
          headers: {
            "Accept-Language": localStorage.getItem("dashboard_lang"),
            "cache-control": "no-cache",
            "Content-type": "application/json",
            Accept: "application/json",
          },
          params: {
            branch_id: this.$route.params.id,
          },
        })
        .then((res) => {
          // this.data = res.data.data;
          this.is_open = res.data.data.is_open;
          this.bio = res.data.data.bio;
          this.seller = res.data.data.seller;
          this.slider = res.data.data.sliders;
          this.workTimes = res.data.data.work_times;
          this.location = res.data.data.seller.location.address;
        });
    },
    // END:: AXIOS GET BRANCH DETAILS

    // START:: AXIOS GET BRANCH CATEGORIES
    getBranchCategories() {
      axios
        .get("home/product_categories", {
          headers: {
            "Accept-Language": localStorage.getItem("dashboard_lang"),
            "cache-control": "no-cache",
            "Content-type": "application/json",
            Accept: "application/json",
          },
          params: {
            branch_id: this.$route.params.id,
          },
        })
        .then((res) => {
          console.log(res.data.data);
          this.categories = res.data.data;
        });
    },
    // END:: AXIOS GET BRANCH CATEGORIES

    // START:: PRODUCTS BY BRANCH ID
    getproductsByBranchId() {
      axios
        .get("vue/products", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user_token")}`,
            "Accept-Language": localStorage.getItem("dashboard_lang"),
            "cache-control": "no-cache",
            "Content-type": "application/json",
            Accept: "application/json",
          },
          params: {
            branch_id: this.$route.params.id,
          },
        })
        .then((res) => {
          this.productsByBranchId = res.data.data;
        });
    },
    // END:: PRODUCTS BY BRANCH ID

    // START:: PRODUCTS BY BRANCH & CATEGORY IDS
    getproductsByBranchAndCatIds(cat_id) {
      axios
        .get("vue/products", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user_token")}`,
            "Accept-Language": localStorage.getItem("dashboard_lang"),
            "cache-control": "no-cache",
            "Content-type": "application/json",
            Accept: "application/json",
          },
          params: {
            branch_id: this.$route.params.id,
            category_id: cat_id,
          },
        })
        .then((res) => {
          console.log(res.data.data);
          this.productsByBranchAndCatIds = res.data.data;
        });
    },
    // END:: PRODUCTS BY BRANCH & CATEGORY IDS
  },

  mounted() {
    // START:: AXIOS GET BRANCH DETAILS
    this.getBranchDetaoils();
    // END:: AXIOS GET BRANCH DETAILS

    // START:: AXIOS GET BRANCH CATEGORIES
    this.getBranchCategories();
    // END:: AXIOS GET BRANCH CATEGORIES

    this.getproductsByBranchId();

    let user_token = localStorage.getItem("user_token");
    if (!user_token) {
      this.$router.push("/login");
    }
  },
};
</script>
