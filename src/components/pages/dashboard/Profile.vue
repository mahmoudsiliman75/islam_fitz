<template>
  <div class="profile">
    <form
      @submit.prevent="submitForm"
      class="d-flex justify-content-center align-items-center"
    >
      <div class="form-tab">
        <div class="row">
          <!-- START:: LOGO -->
          <div class="col-lg-12">
            <div class="form-group">
              <div class="upload-block uplaod-user">
                <label class="text-center mb-3 fs-18">
                  {{ $t("business_profile") }}
                </label>
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
          <!-- END:: LOGO -->

          <!-- START:: NAME -->
          <div class="col-lg-12">
            <div class="form-group form-group-custom">
              <input
                type="text"
                name="businessName"
                class="form-control"
                v-model="editData.name"
              />
              <label class="label-form"> {{ $t("business_name") }} </label>
            </div>
          </div>
          <!-- END:: NAME -->

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
                v-model="editData.phone"
                placeholder="5XXXXXXXXXXXXX"
                name="mobile"
              />
              <label class="label-form"> {{ $t("mobile_number") }} </label>
            </div>
          </div>
          <!-- END:: MOBILE NUMBER -->

          <!-- START:: EMAIL -->
          <div class="col-lg-12">
            <div class="form-group form-group-custom">
              <input
                type="email"
                class="form-control"
                name="email"
                v-model="editData.email"
              />
              <label class="label-form"> {{ $t("email") }} </label>
            </div>
          </div>
          <!-- END:: EMAIL -->

          <div class="toggeler_wraper" @click="toggleEditPassword">
            <div class="btn">
              <u v-if="changePass"> {{ $t("cancel_change_password") }} </u>
              <u v-else> {{ $t("change_password") }} </u>
            </div>
          </div>

          <transition name="fade" mode="in-out" v-if="changePass">
            <div class="wraper">
              <div class="row">
                <!-- START:: CURRENT PASSWORD -->
                <div class="col-lg-12">
                  <div class="form-group form-group-custom">
                    <input
                      :type="visibility"
                      name="password"
                      class="form-control"
                      v-model="editData.current_password"
                    />
                    <label class="label-form">
                      {{ $t("current_password") }}
                    </label>
                  </div>
                </div>
                <!-- END:: CURRENT PASSWORD -->

                <!-- START:: NEW PASSWORD -->
                <div class="col-lg-6">
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
                      v-model="editData.new_password"
                    />
                    <label class="label-form"> {{ $t("new_password") }} </label>
                  </div>
                </div>
                <!-- END:: NEW PASSWORD -->

                <!-- START:: CONFIRM PASSWORD -->
                <div class="col-lg-6">
                  <div class="form-group form-group-custom">
                    <input
                      :type="visibility"
                      name="password"
                      class="form-control"
                      v-model="editData.confirm_password"
                    />
                    <label class="label-form">
                      {{ $t("confirm_password") }}
                    </label>
                  </div>
                </div>
                <!-- START:: CONFIRM PASSWORD -->
              </div>
            </div>
          </transition>

          <!-- START:: SUBMIT BUTTON -->
          <div class="col-lg-12 mt-3">
            <div class="main-btn">
              <button>{{ $t("save") }}</button>
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

export default {
  name: "profile",
  data() {
    return {
      imgSrc: null,
      attatch: "",
      beforeUpload: true,
      afterUpload: false,
      // currentPassVisibility: "password",
      visibility: "password",
      yourValue: "",
      changePass: false,
      //   number
      showNmber: false,
      numbers: {
        number: "+966",
        flag: "",
      },

      //   data
      editData: {
        business_logo: null,
        name: localStorage.getItem("user_name"),
        phone: localStorage.getItem("user_phone"),
        email: localStorage.getItem("user_email"),
        current_password: "",
        new_password: "",
        confirm_password: "",
      },

      data: new FormData(),
    };
  },
  methods: {
    toggleEditPassword() {
      this.changePass = !this.changePass;
    },
    // upload image
    uploadImage(e) {
      this.data.append("business_logo", e.target.files[0]);
      this.editData.business_logo = e.target.files[0];
      this.imgSrc = URL.createObjectURL(this.editData.business_logo);
    },

    // Choose Key
    chooseKey(number) {
      this.showNmber = false;
      this.numberVal = number;
      console.log(this.numberVal + this.data.number);
    },
    // Show Password
    showPassword() {
      // this.currentPassVisibility = "text";
      this.visibility = "text";
    },
    // Hidden Password
    hidePassword() {
      // this.currentPassVisibility = "password";
      this.visibility = "password";
    },

    submitForm() {
      this.data.append("name", this.editData.name);
      this.data.append("phone", this.editData.phone);
      this.data.append("email", this.editData.email);
      this.data.append("current_password", this.editData.current_password);
      this.data.append("new_password", this.editData.new_password);

      axios
        .post("business_owner/shop_description/update", this.data, {
          headers: {
            "Accept-Language": localStorage.getItem("dashboard_lang"),
            "cache-control": "no-cache",
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("user_token")}`,
            Accept: "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("user_name", res.data.data.business_name);
          localStorage.setItem("user_phone", res.data.data.mobile_number);
          localStorage.setItem("user_email", res.data.data.email);
          localStorage.setItem("user_img", res.data.data.business_logo);
          if (res.data.status != "fail") {
            location.reload();
          }
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
};
</script>
