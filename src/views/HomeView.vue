<template>
  <div class="home">
    <HeroSection :title="heroTitle" :bg-class="bgClass" />
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
  data() {
    return {
      heroTitle: "Board Game Tracker",
      bgClass: "indexBg",
    };
  },
  mounted() {
    document.title = "Home - Board Game Tracker"
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";
.home {
  background-color: $gray-light;
}
</style>
