<template>
  <div class="HeaderDashboard">
    <button class="btn open_menu" @click="showMobileMenu">
      <i class="fas fa-ellipsis-h fa-lg"></i>
    </button>

    <!-- START:: SMALL SCREENS MENU -->
    <div class="small_screens_menu">
      <div class="btn_wraper">
        <button class="btn text-danger close_menu" @click="hideMobileMenu">
          <i class="far fa-times-circle fa-2x"></i>
        </button>
      </div>
      <ul>
        <li>
          <router-link to="/"> Home </router-link>
        </li>
      </ul>
    </div>
    <!-- END:: SMALL SCREENS MENU -->

    <!-- START:: UPPER MENU -->
    <div class="container-fluid">
      <div class="row justify-content-end py-2 pe-5">
        <div class="col-lg-6 d-flex align-items-center justify-content-end">
          <!-- START:: NOTIFICATIONS MENU -->
          <!-- <div class="notification_wraper mx-2">
            <div class="dropdown">
              <button
                class="btn dropdown-toggle"
                type="button"
                id="notifications_deopdown"
                data-bs-toggle="dropdown"
                data-bs-auto-close="false"
                aria-expanded="false"
                data-bs-reference="parent"
                @click="toogleBadge"
              >
                <span class="icon">
                  <i class="fas fa-bell fa-lg"></i>
                </span>

                <span class="badge rounded-circle" v-if="dropDownIsHidden">
                  5
                </span>
              </button>

              <ul
                class="dropdown-menu"
                aria-labelledby="notifications_deopdown"
              >
                <li>
                  Notifications
                  <span class="badge rounded-circle"> 5 </span>
                </li>

                <li class="d-flex">
                  <div class="notification_icon">
                    <img src="../../../assets/images/logos/logo.png" />
                  </div>

                  <div class="notification_body">
                    Lorem, ipsum dolor sit amet consectetur.
                  </div>
                </li>

                <li class="d-flex">
                  <div class="notification_icon">
                    <img src="../../../assets/images/logos/logo.png" />
                  </div>

                  <div class="notification_body">
                    Lorem, ipsum dolor sit amet consectetur.
                  </div>
                </li>
              </ul>
            </div>
          </div> -->
          <!-- END:: NOTIFICATIONS MENU -->

          <!-- START:: LANGUAGE MENU -->
          <div class="lang_wraper mx-2">
            <div class="dropdown">
              <button
                class="btn dropdown-toggle"
                type="button"
                id="lang_deopdown"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <span class="icon">
                  <img
                    src="../../../assets/images/flags/en.png"
                    v-if="lang == 'en'"
                  />
                  <img
                    src="../../../assets/images/flags/ar.png"
                    v-if="lang == 'ar'"
                  />
                </span>
              </button>

              <form class="dropdown-menu" aria-labelledby="lang_deopdown">
                <div class="form-group">
                  <div class="form-check">
                    <input
                      type="radio"
                      class="form-check-input"
                      id="english_radio"
                      name="lang"
                      value="en"
                      @click="getLang"
                    />
                    <label class="form-check-label" for="english_radio">
                      <div class="lang_icon">
                        <img src="../../../assets/images/flags/en.png" />
                      </div>

                      <div class="lang_body">English</div>
                    </label>
                  </div>
                </div>

                <div class="form-group">
                  <div class="form-check">
                    <input
                      type="radio"
                      class="form-check-input"
                      id="arabic_radio"
                      name="lang"
                      value="ar"
                      @click="getLang"
                    />
                    <label class="form-check-label" for="arabic_radio">
                      <div class="lang_icon">
                        <img src="../../../assets/images/flags/ar.png" />
                      </div>

                      <div class="lang_body">Arabic</div>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- END:: LANGUAGE MENU -->

          <!-- START:: USER MENU -->
          <div class="user_avatar mx-3">
            <div class="dropdown">
              <button
                class="btn dropdown-toggle"
                type="button"
                id="user_dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img :src="img" alt="user" />
              </button>

              <ul class="dropdown-menu" aria-labelledby="user_dropdown">
                <li>
                  <div class="user_icon">
                    <img :src="img" alt="user" />
                  </div>

                  <div class="user_body">
                    <div class="name">{{ name }}</div>

                    <div class="phone">{{ phone }}</div>

                    <div class="btn_wraper">
                      <router-link to="/edit_profile">
                        Edit Profile
                      </router-link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- END:: USER MENU -->
        </div>
      </div>
    </div>
    <!-- END:: UPPER MENU -->

    <!-- START:: SIDE MENU -->
    <side-menu></side-menu>
    <!-- END:: SIDE MENU -->
  </div>
</template>

<script>
import sideMenu from "./sideMenu.vue";

export default {
  name: "HeaderDashboard",
  components: { sideMenu },
  data() {
    return {
      dropDownIsHidden: true,
      lang: "",

      name: "",
      phone: "",
      img: "",
    };
  },

  methods: {
    showMobileMenu(e) {
      e.target.parentNode.nextElementSibling.style.left = "0";
    },

    hideMobileMenu(e) {
      console.log(e.target.parentNode.parentNode);
      e.target.parentNode.parentNode.style.left = "-300px";
    },

    toogleBadge() {
      this.dropDownIsHidden = !this.dropDownIsHidden;
    },

    setLocale(locale) {
      this.$i18n.locale = locale;
    },

    getLang(e) {
      if (e.target.value == "en") {
        localStorage.setItem("dashboard_lang", "en");
        this.$i18n.locale = localStorage.getItem("dashboard_lang");
        this.lang = localStorage.getItem("dashboard_lang");
        location.reload();
      } else if (e.target.value == "ar") {
        localStorage.setItem("dashboard_lang", "ar");
        this.$i18n.locale = localStorage.getItem("dashboard_lang");
        this.lang = localStorage.getItem("dashboard_lang");
        location.reload();
      }
    },
  },

  mounted() {
    // START:: GET LANG FROM LOCAL STORAGE
    this.lang = localStorage.getItem("dashboard_lang");
    // END:: GET LANG FROM LOCAL STORAGE

    // START:: GET USER DATA FROM LOCALSTORAGE
    let user_name = localStorage.getItem("user_name");
    let user_phone = localStorage.getItem("user_phone");
    let user_img = localStorage.getItem("user_img");
    if (user_name && user_phone && user_img) {
      this.name = user_name;
      this.phone = user_phone;
      this.img = user_img;
    }
    // END:: GET USER DATA FROM LOCALSTORAGE
  },
};
</script>
