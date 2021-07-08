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
          <router-link to="/"> Home </router-link>
        </li>

        <li class="nav_item">
          <router-link to="/about"> About Us </router-link>
        </li>

        <li class="nav_item">
          <router-link to="/before_and_after"> Before And After </router-link>
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
