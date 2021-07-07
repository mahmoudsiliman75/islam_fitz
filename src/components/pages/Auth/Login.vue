<template>
  <div class="Login-page">
    <!-- Content Tabs -->
    <form @submit.prevent="submitForm">
      <div class="form-tab">
        <div class="row">
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
                v-model="logData.username"
                placeholder="5XXXXXXXXXXXXX"
                name="mobile"
              />
              <label class="label-form"> {{ $t("mobile_number") }} </label>
            </div>
          </div>
          <!-- END:: MOBILE NUMBER -->

          <!-- START:: PASSWORD -->
          <div class="col-lg-12">
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
                v-model="logData.password"
              />
              <label class="label-form"> {{ $t("password") }} </label>
            </div>
          </div>
          <!-- END:: PASSWORD -->

          <!-- START:: REMEMBER ME -->
          <!-- <div class="col-lg-12">
            <div class="checkbox-custom">
              <input
                type="checkbox"
                name="check"
                id="check"
                class="form-check-input"
              />
              <label for="check"> {{ $t("remember_me") }} </label>
            </div>
          </div> -->
          <!-- END:: REMEMBER ME -->

          <!-- START:: SIGN IN BUTTON -->
          <div class="col-lg-12">
            <div class="main-btn">
              <button>
                {{ $t("sign_in") }}
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                  v-if="isWaiting"
                ></span>
              </button>
            </div>
          </div>
          <!-- END:: SIGN IN BUTTON -->

          <div class="register-link">
            <p>
              {{ $t("have_acc_question") }}
              <router-link to="/register"> {{ $t("sign_up") }} </router-link>
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      isWaiting: false,

      visibility: "password",
      yourValue: "",
      //   number
      showNmber: false,
      numbers: {
        number: "+966",
        flag: "",
      },
      //   data
      logData: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    chooseKey(number) {
      this.showNmber = false;
      this.numberVal = number;
      console.log(this.numberVal + this.data.number);
    },
    showPassword() {
      this.visibility = "text";
    },
    hidePassword() {
      this.visibility = "password";
    },

    submitForm() {
      this.isWaiting = true;

      if (this.logData.username == "") {
        this.$iziToast.error({
          message: "Username Can't Be Empty",
          position: "bottomCenter",
          rtl: true,
        });
      }

      if (this.logData.password == "") {
        this.$iziToast.error({
          message: "Passsword Can't Be Empty",
          position: "bottomCenter",
          rtl: true,
        });
      }

      axios
        .post("login", this.logData, {
          headers: {
            "Accept-Language": localStorage.getItem("dashboard_lang"),
            "cache-control": "no-cache",
            "Content-type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          this.isWaiting = false;
          if (res.data.status == "success") {
            // localStorage.setItem("user_data", res.data.data);
            localStorage.setItem("user_name", res.data.data.fullname);
            localStorage.setItem("user_phone", res.data.data.phone);
            localStorage.setItem("user_img", res.data.data.image);
            localStorage.setItem("user_email", res.data.data.email);
            localStorage.setItem(
              "business_type",
              res.data.data.business_type.name
            );
            localStorage.setItem("user_token", res.data.data.token);
            this.$router.replace("/dashboard");
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
  },

  mounted() {
    this.isWaiting = false;

    let user_token = localStorage.getItem("user_token");
    if (user_token) {
      this.$router.push("/dashboard");
    }
  },
};
</script>
