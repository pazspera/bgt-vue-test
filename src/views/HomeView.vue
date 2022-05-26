<template>
  <div class="home">
    <TestComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import TestComponent from "@/components/TestComponent.vue";

export default {
  name: "HomeView",
  components: {
    TestComponent,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";
.home {
  background-color: $gray-light;
}
</style>
