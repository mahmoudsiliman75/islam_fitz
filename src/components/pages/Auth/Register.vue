<template>
  <div class="Login-page">
    <!-- Content Tabs -->
    <form @submit.prevent="submitForm">
      <div class="form-tab">
        <!-- START:: LOADER -->
        <transition name="fade" mode="in-out">
          <LoaderScreen v-if="isLoading" />
        </transition>
        <!-- END:: LOADER -->

        <div class="row">
          <!-- START:: BUSINESS LOGO -->
          <div class="col-lg-12">
            <div class="form-group">
              <div class="upload-block uplaod-user">
                <label class="text-center mb-3"> {{ $t("logo") }} </label>
                <div class="upload_wrap">
                  <img :src="imgSrc" class="uploading-image" />
                  <input
                    type="file"
                    accept="image/*"
                    @change="uploadImage"
                    v-on:keydown.enter.prevent="editUser"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- END:: BUSINESS LOGO -->

          <!-- START:: BUSINESS NAME -->
          <div class="col-lg-12">
            <div class="form-group form-group-custom">
              <input
                type="text"
                name="businessName"
                class="form-control"
                v-model="regData.name"
              />
              <label class="label-form"> {{ $t("business_name") }} </label>
            </div>
          </div>
          <!-- END:: BUSINESS NAME -->

          <!-- START:: MOBILE NUMBER -->
          <div class="col-lg-12">
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
                  <img src="../../../assets/images/flags/ar.png" alt="" />
                  <i class="fas fa-chevron-down"></i>
                  <p>{{ numbers.number }}</p>
                </div>
                <transition name="fade" mode="out-in">
                  <ul v-if="showNmber">
                    <li
                      @click="chooseKey('+966')"
                      class="d-flex align-items-center justify-content-between"
                    >
                      <img src="../../../assets/images/flags/ar.png" alt="" />
                      <p>+966</p>
                    </li>
                    <li
                      @click="chooseKey('+020')"
                      class="d-flex align-items-center justify-content-between"
                    >
                      <img src="../../../assets/images/flags/ar.png" alt="" />
                      <p>+966</p>
                    </li>
                    <li
                      @click="chooseKey('+976')"
                      class="d-flex align-items-center justify-content-between"
                    >
                      <img src="../../../assets/images/flags/ar.png" alt="" />
                      <p>+966</p>
                    </li>
                  </ul>
                </transition>
              </div>
              <!-- Dropdown  -->
              <input
                type="tel"
                class="form-control mobile-input"
                placeholder="5XXXXXXXXXXXXX"
                name="mobile"
                v-model="regData.phone"
              />
              <label class="label-form"> {{ $t("mobile_number") }} </label>
            </div>
          </div>
          <!-- END:: MOBILE NUMBER -->

          <!-- START:: PASSWORD -->
          <div class="col-lg-6">
            <div class="form-group form-group-custom">
              <span
                class="showPassword"
                v-if="visibility == 'password'"
                @click="showPassword"
              >
              </span>
              <span class="hidePassword" v-else @click="hidePassword"> </span>
              <input
                :type="visibility"
                name="password"
                class="form-control"
                v-model="regData.password"
              />
              <label class="label-form"> {{ $t("password") }} </label>
            </div>
          </div>
          <!-- END:: PASSWORD -->

          <!-- START:: PASSWORD CONFIRMATION -->
          <div class="col-lg-6">
            <div class="form-group form-group-custom">
              <input
                :type="visibility"
                name="password"
                class="form-control"
                v-model="regData.password_confirmation"
              />
              <label class="label-form"> {{ $t("confirm_password") }} </label>
            </div>
          </div>
          <!-- END:: PASSWORD CONFIRMATION -->

          <!-- START:: EMAIL -->
          <div class="col-lg-12">
            <div class="form-group form-group-custom">
              <input
                type="email"
                class="form-control"
                name="email"
                v-model="regData.email"
              />
              <label class="label-form"> {{ $t("email") }} </label>
            </div>
          </div>
          <!-- END:: EMAIL -->

          <!-- START:: BUSINESS TYPE -->
          <div class="col-lg-12">
            <div class="form-group form-group-radioButtons">
              <label> {{ $t("business_type") }} </label>
              <div class="radios-buttons d-flex">
                <div
                  class="wraper"
                  v-for="the_type in business_types"
                  :key="the_type.id"
                >
                  <input
                    type="radio"
                    class="btn-check"
                    name="business_type"
                    :id="the_type.id"
                    :value="the_type.id"
                    v-model="regData.business_type_id"
                  />
                  <label class="btn btn-outline-success" :for="the_type.id">
                    {{ the_type.name }}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <!-- END:: BUSINESS TYPE -->

          <!-- START:: BUSINESS LICENSE -->
          <div class="col-lg-6">
            <div class="file-upload">
              <div class="file-select">
                <label
                  class="file-select-name"
                  for="license_file"
                  v-if="beforeUploadLicense"
                >
                  {{ $t("upload_business_license") }}
                </label>
                <label
                  class="file-select-name"
                  for="license_file"
                  v-if="afterUploadLicense"
                >
                  {{ regData.business_license.name }}
                </label>
                <input
                  type="file"
                  name="business_license"
                  id="license_file"
                  @change="uploadLicenseFile"
                />
              </div>
            </div>
          </div>
          <!-- END:: BUSINESS LICENSE -->

          <!-- START:: NATIONAL IDENTITY -->
          <div class="col-lg-6">
            <div class="file-upload">
              <div class="file-select">
                <label
                  class="file-select-name"
                  for="identity_file"
                  v-if="beforeUploadIdentity"
                >
                  {{ $t("upload_national_identity") }}
                </label>
                <label
                  class="file-select-name"
                  for="identity_file"
                  v-if="afterUploadIdentity"
                >
                  {{ regData.national_identity.name }}
                </label>
                <input
                  type="file"
                  name="national_identity"
                  id="identity_file"
                  @change="uploadIdentityFile"
                />
              </div>
            </div>
          </div>
          <!-- END:: NATIONAL IDENTITY -->

          <!-- START:: BUSINESS LOCATION -->
          <div class="col-lg-12">
            <div class="form-group form-group-custom">
              <input
                type="text"
                class="form-control"
                name="location"
                v-model="regData.location"
              />
              <label class="label-form"> {{ $t("business_location") }} </label>
            </div>
          </div>
          <!-- END:: BUSINESS LOCATION -->

          <!-- START:: CITY -->
          <div class="col-lg-6">
            <div class="form-group form-group-custom">
              <select class="form-select" v-model="regData.city">
                <option disabled>{{ $t("choose_city") }}</option>
                <option v-for="city in cities" :key="city.id" :value="city.id">
                  {{ city.name }}
                </option>
              </select>
              <label class="label-form"> {{ $t("city") }} </label>
            </div>
          </div>
          <!-- START:: CITY -->

          <!-- START:: DISTRICT -->
          <div class="col-lg-6">
            <div class="form-group form-group-custom">
              <select class="form-select" v-model="regData.district">
                <option disabled>{{ $t("choose_district") }}</option>
                <option
                  v-for="district in districts"
                  :key="district.id"
                  :value="district.id"
                >
                  {{ district.name }}
                </option>
              </select>
              <label class="label-form"> {{ $t("district") }} </label>
            </div>
          </div>
          <!-- END:: DISTRICT -->

          <!-- START:: ACCEPT CHECKBOX -->
          <div class="col-lg-12">
            <div class="checkbox-custom m-0">
              <input
                type="checkbox"
                name="check"
                id="check"
                class="form-check-input"
                v-model="termsAcceped"
                @change="toggleBtnActivation"
              />
              <label for="check"
                >I accept the
                <router-link to="#" class="green-text font-bold"
                  >Terms & Conditions</router-link
                >
                of Use.</label
              >
            </div>
          </div>
          <!-- END:: ACCEPT CHECKBOX -->

          <!-- START:: SIGNIN REDIRECT LINK -->
          <div class="col-lg-12">
            <div class="register-link">
              <p class="text-center mt-2">
                {{ $t("already_have_account") }}
                <router-link to="/login"> {{ $t("sign_in") }} </router-link>
              </p>
            </div>
          </div>
          <!-- END:: SIGNIN REDIRECT LINK -->

          <!-- START:: SUBMIT BUTTON -->
          <div class="col-lg-12 mt-3">
            <div class="main-btn">
              <button
                type="button"
                :disabled="btnIsDisabled"
                @click="submitForm"
              >
                {{ $t("sign_up") }}
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
</template>

<script>
import axios from "axios";
import LoaderScreen from "../../ui/LoaderScreen.vue";

export default {
  name: "Login",

  components: {
    LoaderScreen,
  },

  data() {
    return {
      isLoading: true,
      isWaiting: false,
      imgSrc: null,
      attatch: "",

      beforeUploadIdentity: true,
      afterUploadIdentity: false,

      beforeUploadLicense: true,
      afterUploadLicense: false,

      visibility: "password",
      yourValue: "",

      //   number
      showNmber: false,
      numbers: {
        number: "+966",
        flag: "",
      },

      termsAcceped: null,
      btnIsDisabled: true,

      //   data
      cities: [],
      districts: [],
      business_types: [],
      regData: {
        user_type: "business_owner",
        business_logo: null,
        name: "",
        phone: "",
        password: "",
        password_confirmation: "",
        email: "",
        business_type_id: "",
        // location: {
        //   address: "",
        //   lat: "",
        //   lng: "",
        // },
        location: "",
        national_identity: null,
        business_license: null,
        city: "",
        district: "",
      },
      data: new FormData(),
    };
  },

  methods: {
    // upload image
    uploadImage(e) {
      this.data.append("business_logo", e.target.files[0]);
      this.regData.business_logo = e.target.files[0];
      this.imgSrc = URL.createObjectURL(this.regData.business_logo);
    },
    // upload File
    uploadIdentityFile(e) {
      this.data.append("national_identity", e.target.files[0]);
      this.regData.national_identity = e.target.files[0];
      this.beforeUploadIdentity = false;
      this.afterUploadIdentity = true;
    },
    uploadLicenseFile(e) {
      this.data.append("business_license", e.target.files[0]);
      this.regData.business_license = e.target.files[0];
      this.beforeUploadLicense = false;
      this.afterUploadLicense = true;
    },
    // Choose Key
    chooseKey(number) {
      this.showNmber = false;
      this.numberVal = number;
      console.log(this.numberVal + this.data.number);
    },
    // Show Password
    showPassword() {
      this.visibility = "text";
    },
    // Hidden Password
    hidePassword() {
      this.visibility = "password";
    },

    // START:: AXIOS GET BUSINESS TYPES
    getBusinessTypes() {
      axios
        .get("home/business_types", {
          headers: {
            "Accept-Language": localStorage.getItem("dashboard_lang"),
            "cache-control": "no-cache",
            "Content-type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          this.business_types = res.data.data;
        });
    },
    // END:: AXIOS GET BUSINESS TYPES

    // START:: AXIOS GET CITIES
    getCites() {
      axios
        .get("cities", {
          headers: {
            "Accept-Language": localStorage.getItem("dashboard_lang"),
            "cache-control": "no-cache",
            "Content-type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          this.cities = res.data.data;
        });
    },
    // END:: AXIOS GET CITIES

    // START:: AXIOS GET DISTRICTS
    getDistricts() {
      axios
        .get("districts", {
          headers: {
            "Accept-Language": localStorage.getItem("dashboard_lang"),
            "cache-control": "no-cache",
            "Content-type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          this.districts = res.data.data;
        });
    },
    // END:: AXIOS GET DISTRICTS

    // START:: HANDLE SUBMIT BUTTON
    toggleBtnActivation() {
      if (this.termsAcceped) {
        this.btnIsDisabled = false;
      } else {
        this.btnIsDisabled = true;
      }
    },
    // END:: HANDLE SUBMIT BUTTON

    // START:: FORM SUBMIT
    submitForm() {
      this.isWaiting = true;

      if (this.data.name == "") {
        this.$iziToast.error({
          message: "Business Name Can't Be Empty",
          position: "bottomCenter",
          rtl: true,
        });
      }

      if (this.data.phone == "") {
        this.$iziToast.error({
          message: "Number Can't Be Empty",
          position: "bottomCenter",
          rtl: true,
        });
      }

      if (this.data.password == "") {
        this.$iziToast.error({
          message: "Password Can't Be Empty",
          position: "bottomCenter",
          rtl: true,
        });
      }

      if (this.data.password_confirmation == "") {
        this.$iziToast.error({
          message: "Password Can't Be Empty",
          position: "bottomCenter",
          rtl: true,
        });
      }

      if (this.data.email == "") {
        this.$iziToast.error({
          message: "Email Can't Be Empty",
          position: "bottomCenter",
          rtl: true,
        });
      }

      if (this.data.business_type == "") {
        this.$iziToast.error({
          message: "You Must Select Business Type",
          position: "bottomCenter",
          rtl: true,
        });
      }

      if (this.data.location == "") {
        this.$iziToast.error({
          message: "Business Location Can't Be Empty",
          position: "bottomCenter",
          rtl: true,
        });
      }

      if (this.data.city == "") {
        this.$iziToast.error({
          message: "You Must Select A City",
          position: "bottomCenter",
          rtl: true,
        });
      }

      if (this.data.district == "") {
        this.$iziToast.error({
          message: "You Must Select A District",
          position: "bottomCenter",
          rtl: true,
        });
      }

      this.data.append("user_type", this.regData.user_type);
      this.data.append("name", this.regData.name);
      this.data.append("phone", this.regData.phone);
      this.data.append("password", this.regData.password);
      this.data.append(
        "password_confirmation",
        this.regData.password_confirmation
      );
      this.data.append("email", this.regData.email);
      this.data.append("business_type_id", this.regData.business_type_id);
      this.data.append("location", this.regData.location);
      this.data.append("city", this.regData.city);
      this.data.append("district", this.regData.district);

      axios
        .post("business_owner/register", this.data)
        .then((res) => {
          this.isWaiting = false;
          if (res.data.status == "success") {
            localStorage.setItem("ver_code", res.data.dev_message);
            localStorage.setItem("ver_phone", this.regData.phone);
            this.$router.push("/verification/user");
          }
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
    // END:: FORM SUBMIT
  },

  mounted() {
    this.isLoading = false;
    this.isWaiting = false;

    // START:: AXIOS GET BUSINESS TYPES
    this.getBusinessTypes();
    // END:: AXIOS GET BUSINESS TYPES

    // START:: AXIOS GET CITIES
    this.getCites();
    // END:: AXIOS GET CITIES

    // START:: AXIOS GET DISTRICTS
    this.getDistricts();
    // END:: AXIOS GET DISTRICTS

    let user_token = localStorage.getItem("user_token");
    if (user_token) {
      this.$router.push("/dashboard");
    }
  },
};
</script>
