<template>
  <div id="app">
    <NavBar />    
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "app",
  components: {
    NavBar
  }
}
</script>


<style lang="scss">
@import "@/assets/scss/main.scss";

</style>
