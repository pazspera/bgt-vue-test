<template>
  <div class="boardgames">
    <HeroSection :title="heroTitle" :bg-class="bgClass" />

    <div class="container my-5">
      <div class="row">
        <div class="col">
          <h2>{{ boardgameFormTitle }}</h2>
          <form @submit.prevent autocomplete="off">
            <div class="mb-3">
              <label for="game-name" class="form-label">Nombre del Juego</label>
              <input type="text" id="game-name" class="form-control" name="game-name" required>
            </div>
            <div class="mb-3">
              <button class="btn btn__secondary reset me-3">Reset</button>
              <input type="submit" value="Enviar" class="btn btn__secondary">
            </div>
          </form>
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
  data() {
    return {
      boardgamesURL: "https://628a91d1e5e5a9ad3225e467.mockapi.io/bgtBoardgames",
      heroTitle: "Juegos",
      bgClass: "boardGamesBg",
      boardgameFormTitle: "Agregar juego",
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";
.boardgames {
  background-color: $gray-light;
}
</style>
