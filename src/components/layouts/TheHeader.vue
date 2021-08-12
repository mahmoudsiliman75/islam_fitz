<template>
  <header>
    <div class="logo_wraper">
      <router-link to="/">
        <img src="../../assets/images/logo/logo.png" alt="Site Logo" />
      </router-link>
    </div>

    <!-- START:: LARGE SCREENS MENU -->
    <div class="menu_wraper">
      <button class="small_screens_menu_open" @click="openSmallMenu">
        <i class="fas fa-ellipsis-h fa-2x"></i>
      </button>

      <ul>
        <li class="nav_item">
          <router-link to="/"> الرئيسية </router-link>
        </li>

        <li class="nav_item">
          <router-link to="/about"> من نحن </router-link>
        </li>

        <li class="nav_item">
          <router-link to="/before_and_after"> قبل و بعد </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/faqs"> الأسئلة الشائعة </router-link>
        </li>

        <li class="nav-item">
          <a href="#"> المدونة </a>
        </li>
      </ul>
    </div>
    <!-- END:: LARGE SCREENS MENU -->

    <!-- START:: SMALL SCREENS MENU -->
    <div class="small_screens_menu_wraper" :class="{ open: isOpend }">
      <button class="small_screens_menu_close" @click="closeSmallMenu">
        <i class="fas fa-times fa-lg"></i>
      </button>

      <ul>
        <li class="nav_item">
          <button class="btn" type="button" @click="closeSmallMenu">
            <router-link to="/"> الرئيسية </router-link>
          </button>
        </li>

        <li class="nav_item">
          <button class="btn" type="button" @click="closeSmallMenu">
            <router-link to="/about"> من نحن </router-link>
          </button>
        </li>

        <li class="nav_item">
          <button class="btn" type="button" @click="closeSmallMenu">
            <router-link to="/before_and_after"> قبل و بعد </router-link>
          </button>
        </li>

        <li class="nav_item">
          <button class="btn" type="button" @click="closeSmallMenu">
            <router-link to="/faqs"> الأسئلة الشائعة </router-link>
          </button>
        </li>

        <li class="nav_item">
          <button class="btn" type="button" @click="closeSmallMenu">
            <a href="#"> المدونة </a>
          </button>
        </li>
      </ul>
    </div>
    <!-- END:: SMALL SCREENS MENU -->
  </header>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      isOpend: false,
    };
  },

  methods: {
    openSmallMenu() {
      this.isOpend = true;
    },

    closeSmallMenu() {
      this.isOpend = false;
    },
  },
};
</script>
