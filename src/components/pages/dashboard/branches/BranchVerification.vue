<template>
  <div class="Login-page">
    <header-site v-if="userVerification"></header-site>
    <dashboard-header v-if="branchVerification"></dashboard-header>

    <section id="authSiteWraper">
      <div class="container">
        <!-- Content Tabs -->
        <form @submit.prevent="submitForm">
          <div class="form-tab crud-auth padding-all-15">
            <div class="row">
              <div class="col-lg-12">
                <div class="text-form-input">
                  <h3>{{ $t("verification_code") }}</h3>
                  <p>{{ $t("verify_your_number") }}</p>
                </div>
                <div class="form-group form-group-custom">
                  <input
                    type="tel"
                    class="form-control text-center"
                    name="mobile"
                    style="letter-spacing: 2rem"
                    v-model="verData.code"
                  />
                  <label class="label-form"> {{ ver_phone }} </label>
                </div>
              </div>

              <div class="col-lg-12">
                <div class="countdown">
                  <h6>{{ "0 : " + timerCount }}</h6>
                  <p>
                    {{ $t("didn’t_receive") }},
                    <button type="button" @click="resendCode">
                      {{ $t("resend") }}
                    </button>
                  </p>
                </div>
              </div>

              <div class="col-lg-12">
                <div class="main-btn m-0">
                  <button>{{ $t("verify") }}</button>
                </div>
              </div>
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
import DashboardHeader from "../../headerDashboard/DashboardHeader.vue";

export default {
  name: "Branch Verification",
  components: {
    HeaderSite,
    DashboardHeader,
  },

  data() {
    return {
      isWaiting: false,

      timerCount: 60,
      ver_phone: localStorage.getItem("new_branch_phone"),
      verData: {
        code: "",
        phone: localStorage.getItem("new_branch_phone"),
        device_token: "7485996",
        type: "ios",
      },
    };
  },

  computed: {
    userVerification() {
      return this.$route.path.includes("/user");
    },
    branchVerification() {
      return this.$route.path.includes("/branch");
    },
  },

  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        }
      },
      immediate: true,
    },
  },

  methods: {
    submitForm() {
      this.isWaiting = true;

      axios
        .post("verify", this.verData, {
          headers: {
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
          if (res.data.status == "success") {
            this.$router.replace(`/branches`);
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

    resendCode() {
      axios
        .post(
          "send_code",
          { phone: this.ver_phone },
          {
            headers: {
              "Accept-Language": localStorage.getItem("dashboard_lang"),
              "cache-control": "no-cache",
              "Content-type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          this.$iziToast.success({
            message: res.data.message,
            position: "bottomCenter",
            rtl: true,
          });
        })
        .catch((error) => {
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
  },
};
</script>
