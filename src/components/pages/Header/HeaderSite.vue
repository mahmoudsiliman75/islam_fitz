<template>
  <header class="">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-1">
          <div class="logoSite">
            <img src="../../../assets/images/logos/logo.png" alt="" />
          </div>
        </div>
        <!--  -->
        <div class="col-lg-11">
          <div class="nav-bar-site">
            <ul class="d-flex justify-content-end">
              <li>
                <router-link to="/"> {{ $t("home") }} </router-link>
              </li>
              <li>
                <router-link to="/"> {{ $t("about_app") }} </router-link>
              </li>
              <li>
                <router-link to="/">
                  {{ $t("terms_&_conditions") }}
                </router-link>
              </li>
              <li>
                <router-link to="/"> {{ $t("contact_us") }} </router-link>
              </li>

              <li v-if="userExist">
                <router-link to="/dashboard" class="btn-sign-in">
                  {{ $t("dashboard") }}
                </router-link>
              </li>

              <li v-else>
                <router-link to="/login" class="btn-sign-in">
                  {{ $t("sign_in") }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      userExist: "",
    };
  },

  mounted() {
    let user_token = localStorage.getItem("user_token");
    if (user_token) {
      this.userExist = true;
    } else {
      this.userExist = false;
    }
  },
};
</script>
