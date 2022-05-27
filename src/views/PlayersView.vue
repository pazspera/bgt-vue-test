<template>
  <div class="players">
    <HeroSection :title="heroTitle" :bg-class="bgClass" />
    <SingleFieldForm :url="this.playerURL" />
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
import SingleFieldForm from "@/components/SingleFieldForm.vue";

export default {
  name: "BoardGamesView",
  components: {
    HeroSection,
    SingleFieldForm,
  },
  data() {
    return {
      playerURL: "https://628a91d1e5e5a9ad3225e467.mockapi.io/bgtPlayers",
      heroTitle: "Jugadores",
      bgClass: "playersBg",
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";
.players {
  background-color: $gray-light;
}
</style>
