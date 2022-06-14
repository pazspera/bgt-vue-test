<template>
  <div class="boardgames">
    <HeroSection :title="heroTitle" :bg-class="bgClass" />

    <div class="container my-5">
      <div class="row">
        <!-- Form -->
        <div class="col-12">
          <h2>{{ boardgameFormTitle }}</h2>
          <form @submit.prevent autocomplete="off">
            <div class="mb-3">
              <label for="game-name" class="form-label">Nombre del Juego</label>
              <input type="text" id="game-name" class="form-control" name="game-name" required />
            </div>
            <div class="mb-3">
              <button class="btn btn__secondary reset me-3" @click="resetForm">Reset</button>
              <input type="submit" value="Enviar" class="btn btn__secondary" />
            </div>
          </form>
        </div>
        <!-- Data Table -->
        <div class="col-12">
          <div class="my-5">
            <h2>Juegos disponibles</h2>
            <table class="table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="game in boardgames" :key="game.id">
                  <td class="align-middle">{{ game.name }}</td>
                  <td>
                    <button class="edit btn btn__secondary me-3" :data-id="game.id" :data-name="game.name" @click="editGame">Editar</button>
                    <button class="delete btn btn__secondary" :data-id="game.id" :data-name="game.name" @click="deleteGame">Eliminar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import HeroSection from "@/components/HeroSection.vue";

export default {
  name: "BoardGamesView",
  components: {
    HeroSection
  },
  data() {
    return {
      boardgamesURL: "https://628a91d1e5e5a9ad3225e467.mockapi.io/bgtBoardgames",
      heroTitle: "Juegos",
      bgClass: "boardGamesBg",
      boardgameFormTitle: "Agregar juego",
      boardgames: [],
    };
  },
  created() {
    axios.get(this.boardgamesURL).then((result) => {
      this.boardgames = result.data;
    });
  },
  methods: {
    editGame() {
      this.boardgameFormTitle = "Editar juego";
    },
    deleteGame() {
      this.boardgameFormTitle = "Borrar juego";
    },
    resetForm() {
      this.boardgameFormTitle = "Agregar juego";
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
