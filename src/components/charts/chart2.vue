<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
  </div>
</template>

<script>
import LineChart from "./LineCharts";

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      datacollection: null,
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [1, 2, 3, 4, 5],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [50, 20, 30, 10, 40],
          },
          {
            label: "Data Two",
            backgroundColor: "#7367f0",
            data: [40, 30, 50, 20, 10],
          },
        ],
      };
    },
  },
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
