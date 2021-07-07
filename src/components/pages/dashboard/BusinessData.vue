<template>
  <div class="business_additional_data">
    <header-site></header-site>
    <section id="authSite">
      <div class="container">
        <form @submit.prevent="submitForm">
          <div class="form-tab crud-auth padding-all-15">
            <div class="title_wraper">
              <h4 class="text-start">About {{ business_name }}</h4>
            </div>

            <div class="row">
              <!-- START:: DESCRIPTION -->
              <div class="col-lg-12 mt-5">
                <div class="form-group form-group-custom">
                  <input
                    type="text"
                    name="description"
                    class="form-control"
                    v-model="businessData.bio"
                  />
                  <label class="label-form">
                    Simple Description about Shop
                  </label>
                </div>
              </div>
              <!-- END:: DESCRIPTION -->

              <!-- START:: BUSINESS HEADER -->
              <div class="col-lg-6">
                <div class="file-upload">
                  <div class="file-select">
                    <label
                      class="file-select-name"
                      for="header_file"
                      v-if="beforeUploadHeader"
                    >
                      Upload Header For Your Shop
                    </label>
                    <label
                      class="file-select-name"
                      for="header_file"
                      v-if="afterUploadHeader"
                    >
                      {{ businessData.header_images[0].length }} Files
                    </label>
                    <input
                      type="file"
                      name="header_images"
                      id="header_file"
                      @change="uploadHeaderFile"
                      multiple
                    />
                  </div>
                </div>
              </div>
              <!-- END:: BUSINESS HEADER -->

              <!-- START:: WORK TIMES -->
              <div class="title_wraper">
                <h5 class="text-start">Working Time</h5>
              </div>

              <div class="col-lg-8">
                <table class="table">
                  <tbody>
                    <tr>
                      <td scope="row">#</td>
                      <td>From</td>
                      <td>To</td>
                    </tr>

                    <tr>
                      <td scope="row">Saturday</td>
                      <td>
                        <input
                          type="time"
                          placeholder="From"
                          v-model="businessData.working_times[0].from"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          placeholder="To"
                          v-model="businessData.working_times[0].to"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td scope="row">Sunday</td>
                      <td>
                        <input
                          type="time"
                          placeholder="From"
                          v-model="businessData.working_times[1].from"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          placeholder="To"
                          v-model="businessData.working_times[1].to"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td scope="row">Monday</td>
                      <td>
                        <input
                          type="time"
                          placeholder="From"
                          v-model="businessData.working_times[2].from"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          placeholder="To"
                          v-model="businessData.working_times[2].to"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td scope="row">Tuesday</td>
                      <td>
                        <input
                          type="time"
                          placeholder="From"
                          v-model="businessData.working_times[3].from"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          placeholder="To"
                          v-model="businessData.working_times[3].to"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td scope="row">Wednesday</td>
                      <td>
                        <input
                          type="time"
                          placeholder="From"
                          v-model="businessData.working_times[4].from"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          placeholder="To"
                          v-model="businessData.working_times[4].to"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td scope="row">Thursday</td>
                      <td>
                        <input
                          type="time"
                          placeholder="From"
                          v-model="businessData.working_times[5].from"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          placeholder="To"
                          v-model="businessData.working_times[5].to"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td scope="row">Friday</td>
                      <td>
                        <input
                          type="time"
                          placeholder="From"
                          v-model="businessData.working_times[6].from"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          placeholder="To"
                          v-model="businessData.working_times[6].to"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- END:: WORK TIMES -->

              <!-- START:: CATEGORIES -->
              <div
                class="title_wraper mt-4"
                v-if="business_type != 'central market'"
              >
                <h5 class="text-start">Your Main Categories</h5>
              </div>

              <div class="col-12 mb-4" v-if="business_type != 'central market'">
                <div class="wraper">
                  <div class="row">
                    <div
                      class="col-4 fadeIn"
                      v-for="(category, index) in businessData.main_categories"
                      :key="index"
                    >
                      <div class="form-group append_inputs_wraper me-2 my-2">
                        <input
                          type="text"
                          placeholder="Write Here"
                          v-model="category.categoryName"
                        />
                        <button
                          type="button"
                          class="input-delete btn text-danger p-0"
                          @click="deleteSieze(index)"
                        >
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </div>
                    </div>

                    <div
                      class="
                        col-3
                        d-flex
                        align-items-center
                        justify-content-start
                      "
                    >
                      <button
                        type="button"
                        @click="addSizes"
                        class="
                          button
                          btn btn-outline-secondary
                          rounded-pill
                          ms-1
                        "
                      >
                        <span class="mr-2">
                          <span>
                            <i class="fas fa-plus"></i>
                          </span>
                          Add
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- END:: CATEGORIES -->

              <!-- START:: HAS BRANCHES -->
              <div class="col-12" v-if="business_type != 'central market'">
                <div class="form-check form-switch">
                  <label class="form-check-label" for="flexSwitchCheckChecked">
                    This Business Has Branches
                  </label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    v-model="businessData.has_branches"
                    @change="handleSwitch()"
                  />
                </div>
              </div>
              <!-- END:: HAS BRANCHES -->

              <!-- START:: SUBMIT BUTTON -->
              <div class="col-lg-12 mt-5">
                <div class="main-btn">
                  <button>
                    Continue
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                      v-if="isWaiting"
                    ></span>
                  </button>
                </div>
              </div>
              <!-- END:: SUBMIT BUTTON -->
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import HeaderSite from "@/components/pages/Header/HeaderSite";

export default {
  name: "businessData",
  components: {
    HeaderSite,
  },

  data() {
    return {
      isWaiting: false,

      business_type: localStorage.getItem("business_type"),
      business_name: localStorage.getItem("user_name"),

      attatch: "",
      beforeUploadHeader: true,
      afterUploadHeader: false,

      fields: [],
      businessData: {
        bio: "",
        header_images: [],
        working_times: [
          {
            day: "Saturday",
            from: null,
            to: null,
          },
          {
            day: "Sunday",
            from: null,
            to: null,
          },
          {
            day: "Monday",
            from: null,
            to: null,
          },
          {
            day: "Tuesday",
            from: null,
            to: null,
          },
          {
            day: "Wednesday",
            from: null,
            to: null,
          },
          {
            day: "Thursday",
            from: null,
            to: null,
          },
          {
            day: "Friday",
            from: null,
            to: null,
          },
        ],
        main_categories: [],
        has_branches: 0,
      },

      data: new FormData(),
    };
  },

  methods: {
    handleSwitch() {
      if (this.businessData.has_branches == true) {
        this.businessData.has_branches = 1;
      } else if (this.businessData.has_branches == false) {
        this.businessData.has_branches = 0;
      }
    },

    addSizes() {
      this.businessData.main_categories.push({
        categoryName: "",
      });
    },

    deleteSieze: function (index) {
      this.businessData.main_categories.splice(index, 1);
    },
    uploadHeaderFile(e) {
      this.businessData.header_images.push(e.target.files);
      this.beforeUploadHeader = false;
      this.afterUploadHeader = true;
    },

    submitForm() {
      this.isWaiting = true;

      this.data.append("bio", this.businessData.bio);
      this.data.append("has_branches", this.businessData.has_branches);

      var catValues = this.businessData.main_categories;
      catValues.forEach((item, index) => {
        var catText = [];
        catText.push(item.categoryName);
        this.data.append("main_categories[" + index + "]", item.categoryName);
      });

      var timesValues = this.businessData.working_times;
      timesValues.forEach((item, index) => {
        var times = [];
        times.push({
          day: item.day,
          from: item.from,
          to: item.to,
        });

        this.data.append("working_times[" + index + "][day]", item.day);
        this.data.append("working_times[" + index + "][from]", item.from);
        this.data.append("working_times[" + index + "][to]", item.to);
      });

      var headerValues = this.businessData.header_images[0];
      headerValues.forEach((item, index) => {
        var headers = [];
        headers.push(item);
        this.data.append("header_images[" + index + "]", item);
      });

      axios
        .post("business_owner/shop_description/store", this.data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user_token")}`,
            "Accept-Language": localStorage.getItem("dashboard_lang"),
            "cache-control": "no-cache",
            "Content-type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          this.isWaiting = false;
          this.$iziToast.success({
            message: res.data.message,
            position: "bottomCenter",
            rtl: true,
          });
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          this.isWaiting = false;
          this.$iziToast.error({
            message: error.response.data.message,
            position: "bottomCenter",
            rtl: true,
          });
        });
    },
  },

  mounted() {
    this.isWaiting = false;

    let user_token = localStorage.getItem("user_token");
    if (!user_token) {
      this.$router.push("/login");
    }
  },
};
</script>
