<template>
  <div class="home">
    <HeroSection title="Board Game Tracker" />
    <TestComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroSection from "@/components/HeroSection.vue";
import TestComponent from "@/components/TestComponent.vue";

export default {
  name: "HomeView",
  components: {
    TestComponent,
    HeroSection,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";
.home {
  background-color: $gray-light;
}
</style>
