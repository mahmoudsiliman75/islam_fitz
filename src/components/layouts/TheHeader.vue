<template>
  <header>
    <h1>The Header</h1>
    <Scratch />
  </header>
</template>

<script>
import Scratch from "../ui/ScratchShape.vue";

export default {
  name: "Header",

  components: {
    Scratch,
  },
};
</script>
