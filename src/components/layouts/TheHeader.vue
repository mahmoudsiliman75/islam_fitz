<template>
  <header>
    <div class="logo_wraper">
      <router-link to="/">
        <img src="../../assets/images/logo/logo.png" alt="Site Logo" />
      </router-link>
    </div>

    <div class="menu_wraper">
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
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
