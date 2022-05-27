<template>
  <div class="boardgames">
    <HeroSection title="Juegos" bg-class="boardGamesBg" />
    <SingleFieldForm :url="this.boardgamesURL" />
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Soy la vista de Boardgames</h2>
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
      boardgamesURL: "https://628a91d1e5e5a9ad3225e467.mockapi.io/bgtBoardgames"
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";
.boardgames {
  background-color: $gray-light;
}
</style>
