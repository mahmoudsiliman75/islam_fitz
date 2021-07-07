<template>
  <div class="appAuth">
    <header-site></header-site>
    <section id="authSite">
      <div class="container">
        <div class="crud-auth padding-all-15">
          <div class="tabs-auth">
            <!-- Links tabs -->
            <ul class="d-flex justify-content-between mb-4">
              <li>
                <router-link tag="a" to="/login">
                  {{ $t("sign_in") }}
                </router-link>
              </li>
              <li>
                <router-link tag="a" to="/register">
                  {{ $t("sign_up") }}
                </router-link>
              </li>
            </ul>
            <transition name="slither" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderSite from "@/components/pages/Header/HeaderSite";
export default {
  name: "Login",
  data() {
    return {
      mainText: "mainText",
      visibility: "password",
      yourValue: "",
      //   number
      showNmber: false,
      numberVal: "011",
      //   data
      data: {
        number: "",
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
  },
  components: {
    HeaderSite,
  },
};
</script>
