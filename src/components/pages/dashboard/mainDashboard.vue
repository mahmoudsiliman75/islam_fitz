<template>
  <div id="mainDashboardSection">
    <dashboard-header></dashboard-header>

    <div class="all-content">
      <transition name="slither" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/pages/headerDashboard/DashboardHeader";

export default {
  name: "mainDashboard",
  components: {
    DashboardHeader,
  },
};
</script>
