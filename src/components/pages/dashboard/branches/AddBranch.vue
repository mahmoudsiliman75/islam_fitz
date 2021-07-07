<template>
  <div class="add_branch">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-6">
          <div class="add_branch_card_wraper">
            <!-- START:: LOADER -->
            <transition name="fade" mode="in-out">
              <LoaderScreen v-if="isLoading" />
            </transition>
            <!-- END:: LOADER -->

            <div class="title_wraper">
              <h4>{{ $t("add_new_branch") }}</h4>
            </div>

            <div class="branch_form">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <!-- START:: NAME INPUT -->
                  <div class="col-12">
                    <div class="form-group form-group-custom my-4">
                      <input
                        type="text"
                        name="fullName"
                        class="form-control"
                        v-model="addData.name"
                      />
                      <label class="label-form"> {{ $t("full_name") }} </label>
                    </div>
                  </div>
                  <!-- END:: NAME INPUT -->

                  <!-- START:: MOBILE NUMBER INPUT -->
                  <div class="col-12">
                    <div class="form-group form-group-custom">
                      <!-- Dropdown  -->
                      <div class="dropdown-countries">
                        <div
                          class="
                            number-show
                            d-flex
                            align-items-center
                            justify-content-center
                          "
                          @click="showNmber = !showNmber"
                        >
                          <img
                            src="../../../../assets/images/flags/ar.png"
                            alt=""
                          />
                          <i class="fas fa-chevron-down"></i>
                          <p>{{ numbers.number }}</p>
                        </div>
                        <transition name="fade" mode="out-in">
                          <ul v-if="showNmber">
                            <li
                              @click="chooseKey('+966')"
                              class="
                                d-flex
                                align-items-center
                                justify-content-start
                              "
                            >
                              <img
                                src="../../../../assets/images/flags/ar.png"
                                alt=""
                              />
                              <p>+966</p>
                            </li>
                            <li
                              @click="chooseKey('+020')"
                              class="
                                d-flex
                                align-items-center
                                justify-content-start
                              "
                            >
                              <img
                                src="../../../../assets/images/flags/ar.png"
                                alt=""
                              />
                              <p>+966</p>
                            </li>
                            <li
                              @click="chooseKey('+976')"
                              class="
                                d-flex
                                align-items-center
                                justify-content-start
                              "
                            >
                              <img
                                src="../../../../assets/images/flags/ar.png"
                                alt=""
                              />
                              <p>+966</p>
                            </li>
                          </ul>
                        </transition>
                      </div>
                      <!-- Dropdown  -->
                      <input
                        type="tel"
                        class="form-control mobile-input"
                        v-model="addData.phone"
                        placeholder="5XXXXXXXXXXXXX"
                        name="mobile"
                      />
                      <label class="label-form">
                        {{ $t("mobile_number") }}
                      </label>
                    </div>
                  </div>
                  <!-- END:: MOBILE NUMBER INPUT -->

                  <!-- START:: PASSWORD INPUT -->
                  <div class="col-12 col-md-6">
                    <div class="form-group form-group-custom">
                      <span
                        class="showPassword"
                        v-if="visibility == 'password'"
                        @click="showPassword"
                      >
                      </span>
                      <span class="hidePassword" v-else @click="hidePassword">
                      </span>
                      <input
                        :type="visibility"
                        name="password"
                        class="form-control"
                        v-model="addData.password"
                      />
                      <label class="label-form"> {{ $t("password") }} </label>
                    </div>
                  </div>
                  <!-- END:: PASSWORD INPUT -->

                  <!-- START:: PASSWORD CONFIRMATION INPUT -->
                  <div class="col-12 col-md-6">
                    <div class="form-group form-group-custom">
                      <input
                        type="password"
                        name="confirmPass"
                        class="form-control"
                        v-model="addData.password_confirmation"
                      />
                      <label class="label-form">
                        {{ $t("confirm_password") }}
                      </label>
                    </div>
                  </div>
                  <!-- END:: PASSWORD CONFIRMATION INPUT -->

                  <!-- START:: EMAIL INPUT -->
                  <div class="col-12 col-lg-6">
                    <div class="form-group form-group-custom">
                      <input
                        type="email"
                        name="confirmPass"
                        class="form-control"
                        v-model="addData.email"
                      />
                      <label class="label-form"> {{ $t("email") }} </label>
                    </div>
                  </div>
                  <!-- END:: EMAIL INPUT -->

                  <!-- START:: CATEGORY INPUT -->
                  <div
                    class="col-12 col-lg-6"
                    v-if="business_type == 'central market'"
                  >
                    <div class="form-group form-group-custom">
                      <select
                        class="form-select"
                        v-model="addData.branch_category_id"
                      >
                        <option disabled>{{ $t("choose_category") }}</option>
                        <option
                          v-for="category in allCategories"
                          :key="category.id"
                          :value="category.id"
                        >
                          {{ category.name }}
                        </option>
                      </select>
                      <label class="label-form"> {{ $t("category") }} </label>
                    </div>
                  </div>
                  <!-- END:: CATEGORY INPUT -->

                  <!-- START:: BUSINESS LICENS INPUT -->
                  <div class="col-lg-8">
                    <div class="file-upload">
                      <div class="file-select">
                        <label
                          class="file-select-name"
                          for="file"
                          v-if="beforeUploadLicense"
                        >
                          {{ $t("upload_business_license") }}
                        </label>
                        <label
                          class="file-select-name"
                          for="file"
                          v-if="afterUploadLicense"
                        >
                          {{ addData.branch_license.name }}
                        </label>
                        <input
                          type="file"
                          name="chooseFile"
                          id="file"
                          @change="uploadLicenseFile"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- END:: BUSINESS LICENS INPUT -->

                  <!-- START:: LOCATION INPUT -->
                  <div class="col-12">
                    <div class="form-group form-group-custom">
                      <input
                        type="text"
                        name="location"
                        class="form-control"
                        v-model="addData.address"
                      />
                      <label class="label-form">
                        {{ $t("business_location") }}
                      </label>
                    </div>
                  </div>
                  <!-- END:: LOCATION INPUT -->

                  <!-- START:: SUBMIT BUTTON -->
                  <div class="col-lg-12">
                    <div class="main-btn">
                      <button>
                        {{ $t("continue") }}
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LoaderScreen from "../../../ui/LoaderScreen.vue";

export default {
  name: "addBranch",

  components: {
    LoaderScreen,
  },

  data() {
    return {
      isLoading: true,
      isWaiting: false,

      attatch: "",
      beforeUploadLicense: true,
      afterUploadLicense: false,
      visibility: "password",
      //   number
      showNmber: false,
      numbers: {
        number: "+966",
        flag: "",
      },

      business_type: localStorage.getItem("business_type"),

      //   data
      allCategories: [],
      addData: {
        name: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
        // locaion: {
        //   address: "",
        //   lat: "",
        //   lang: "",
        // },
        address: "",
        branch_category_id: "",
        branch_license: null,
      },

      data: new FormData(),
    };
  },

  methods: {
    // upload File
    uploadLicenseFile(e) {
      this.data.append("business_license", e.target.files[0]);
      this.addData.branch_license = e.target.files[0];
      this.beforeUploadLicense = false;
      this.afterUploadLicense = true;
    },
    // Show Password
    showPassword() {
      this.visibility = "text";
    },
    // Hidden Password
    hidePassword() {
      this.visibility = "password";
    },
    // Submit Form
    submitForm() {
      this.isWaiting = true;

      this.data.append("name", this.addData.name);
      this.data.append("email", this.addData.email);
      this.data.append("phone", this.addData.phone);
      this.data.append("password", this.addData.password);
      this.data.append(
        "password_confirmation",
        this.addData.password_confirmation
      );
      this.data.append("address", this.addData.address);
      this.data.append("branch_category_id", this.addData.branch_category_id);
      this.data.append("branch_license", this.addData.branch_license);

      axios
        .post("business_owner/branch/store", this.data, {
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
          console.log(res.data);
          this.$iziToast.success({
            message: res.data.message,
            position: "bottomCenter",
            rtl: true,
          });

          this.name = "";
          this.email = "";
          this.phone = "";
          this.password = "";
          this.password_confirmation = "";
          this.address = "";
          this.branch_category_id = "";
          this.branch_license = null;

          localStorage.setItem("new_branch_name", this.addData.name);
          localStorage.setItem("new_branch_phone", this.addData.phone);

          this.$router.push("/branch_verification");
        })
        .catch((error) => {
          this.isWaiting = false;
          console.log("ERROR:" + error.response.data);
          this.$iziToast.error({
            message: error.response.data.message,
            position: "bottomCenter",
            rtl: true,
          });
        });
    },
  },

  mounted() {
    // this.isLoading = false;
    this.isWaiting = false;

    // START:: AXIOS GET ALL CATEGORIES
    axios
      .get("branch_category", {
        headers: {
          "Accept-Language": localStorage.getItem("dashboard_lang"),
          "cache-control": "no-cache",
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        this.allCategories = res.data.data;
        this.isLoading = false;
      });
    // END:: AXIOS GET ALL CATEGORIES

    let user_token = localStorage.getItem("user_token");
    if (!user_token) {
      this.$router.push("/login");
    }
  },
};
</script>
