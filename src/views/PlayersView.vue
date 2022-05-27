<template>
  <div class="players">
    <HeroSection title="Jugadores" bgClass="playersBg"/>
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Soy la vista de Players</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroSection from "@/components/HeroSection.vue";

export default {
  name: "BoardGamesView",
  components: {
    HeroSection,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";
.players {
  background-color: $gray-light;
}
</style>
