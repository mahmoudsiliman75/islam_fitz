<template>
  <div class="Aw-Charts">
    <chart2></chart2>
  </div>
</template>
<script>
import chart2 from "../charts/chart2.vue";
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["chartdata", "options"],
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
  components: {
    chart2,
  },
};
</script>
