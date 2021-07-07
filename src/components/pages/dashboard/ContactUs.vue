<template>
  <div class="contact_us">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-6">
          <div class="contact_card_wraper">
            <!-- START:: LOADER -->
            <transition name="fade" mode="in-out">
              <LoaderScreen v-if="isLoading" />
            </transition>
            <!-- END:: LOADER -->

            <!-- START:: CONTACT MAP -->
            <div class="map_wraper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1709.4045349943094!2d31.39547087435002!3d31.031568758866324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1624522249469!5m2!1sar!2seg"
                height="250"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
            <!-- END:: CONTACT MAP -->

            <!-- START:: CONTACT TITLE -->
            <div class="title_wraper">
              <h3>{{ $t("reach_out_to_us") }}</h3>
            </div>
            <!-- END:: CONTACT TITLE -->

            <!-- START:: CONTACT FORM -->
            <div class="contact_form">
              <form @submit.prevent="submitForm">
                <div class="form-group form-group-custom my-4">
                  <input
                    type="text"
                    name="fullName"
                    class="form-control"
                    v-model="contactData.name"
                  />
                  <label class="label-form"> {{ $t("full_name") }} </label>
                </div>

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
                          class="
                            d-flex
                            align-items-center
                            justify-content-start
                          "
                        >
                          <img
                            src="../../../assets/images/flags/ar.png"
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
                            src="../../../assets/images/flags/ar.png"
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
                            src="../../../assets/images/flags/ar.png"
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
                    v-model="contactData.phone"
                    placeholder="5XXXXXXXXXXXXX"
                    name="mobile"
                  />
                  <label class="label-form"> {{ $t("mobile_number") }} </label>
                </div>

                <div class="form-group form-group-custom my-4">
                  <textarea
                    name="message"
                    rows="7"
                    class="form-control"
                    v-model="contactData.message"
                  ></textarea>
                  <label class="label-form"> {{ $t("your_Message") }} </label>
                </div>

                <div class="col-lg-12">
                  <div class="main-btn">
                    <button>
                      {{ $t("send") }}
                      <span
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                        v-if="isWaiting"
                      ></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <!-- END:: CONTACT FORM -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LoaderScreen from "../../ui/LoaderScreen.vue";

export default {
  name: "contact-us",

  components: {
    LoaderScreen,
  },

  data() {
    return {
      isLoading: true,
      isWaiting: false,

      //   number
      showNmber: false,
      numbers: {
        number: "+966",
        flag: "",
      },
      //   data
      contactData: {
        name: "",
        phone: "",
        message: "",
      },
    };
  },

  methods: {
    submitForm() {
      this.isWaiting = true;
      axios
        .post("contact_us", this.contactData)
        .then((res) => {
          this.isWaiting = false;
          if (res.data.status == "success") {
            this.$iziToast.success({
              message: "Your Message Sent Successfuly",
              position: "bottomCenter",
              rtl: true,
            });
          }
          this.contactData.name = "";
          this.contactData.phone = "";
          this.contactData.message = "";
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
    this.isLoading = false;
    this.isWaiting = false;

    let user_token = localStorage.getItem("user_token");
    if (!user_token) {
      this.$router.push("/login");
    }
  },
};
</script>
