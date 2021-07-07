<template>
  <div class="sideMenu">
    <ul>
      <li>
        <img
          src="../../../assets/images/logos/logo.png"
          alt="logo"
          class="side_menu_logo"
        />
      </li>

      <li>
        <router-link to="/dashboard">
          <span class="link_text">
            {{ $t("home") }}
            <span class="top_shape"></span>
            <span class="bottom_shape"></span>
          </span>

          <span class="link_icon">
            <img src="../../../assets/images/icons/home.png" />
          </span>
        </router-link>
      </li>

      <li>
        <router-link to="/branches">
          <span class="link_text">
            {{ $t("branches") }}
            <span class="top_shape"></span>
            <span class="bottom_shape"></span>
          </span>

          <span class="link_icon">
            <img src="../../../assets/images/icons/store.png" />
          </span>
        </router-link>
      </li>

      <li>
        <router-link to="/about">
          <span class="link_text">
            {{ $t("about_us") }}
            <span class="top_shape"></span>
            <span class="bottom_shape"></span>
          </span>

          <span class="link_icon">
            <img src="../../../assets/images/icons/about.png" />
          </span>
        </router-link>
      </li>

      <li>
        <router-link to="/terms">
          <span class="link_text">
            {{ $t("terms") }}
            <span class="top_shape"></span>
            <span class="bottom_shape"></span>
          </span>

          <span class="link_icon">
            <img src="../../../assets/images/icons/terms.png" />
          </span>
        </router-link>
      </li>

      <li>
        <router-link to="/contact">
          <span class="link_text">
            {{ $t("contact_us") }}
            <span class="top_shape"></span>
            <span class="bottom_shape"></span>
          </span>

          <span class="link_icon">
            <img src="../../../assets/images/icons/contact.png" />
          </span>
        </router-link>
      </li>

      <li>
        <button class="btn" @click="handleSignOut">
          <span class="link_icon">
            <img src="../../../assets/images/icons/sign_out.png" />
          </span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  methods: {
    handleSignOut() {
      localStorage.removeItem("user_data");
      localStorage.removeItem("user_token");
      localStorage.removeItem("user_name");
      localStorage.removeItem("user_phone");
      localStorage.removeItem("user_email");
      localStorage.removeItem("user_img");
      localStorage.removeItem("business_type");
      localStorage.removeItem("ver_code");
      localStorage.removeItem("ver_phone");
      this.$router.replace("/");
    },
  },
};
</script>
