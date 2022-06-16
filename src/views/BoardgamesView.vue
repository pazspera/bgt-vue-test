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
              <input type="text" id="game-name" class="form-control" name="game-name" data-id="" data-name="" required />
            </div>
            <div class="mb-3">
              <button class="btn btn__secondary reset me-3" @click="resetForm">Reset</button>
              <input type="submit" value="Enviar" class="btn btn__secondary" @click="postPutGame" />
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
              <tbody v-if="boardGames">
                <tr v-for="boardGame in boardGames" :key="boardGame.id">
                  <td class="align-middle">{{ boardGame.name }}</td>
                  <td>
                    <button class="edit btn btn__secondary me-3" :data-id="boardGame.id" :data-name="boardGame.name" @click="editGame">Editar</button>
                    <button class="delete btn btn__secondary" :data-id="boardGame.id" :data-name="boardGame.name" @click="deleteGame">Eliminar</button>
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
// @ is an alias to /src
import HeroSection from "@/components/HeroSection.vue";
let gameName = document.getElementById("game-name");

export default {
  name: "BoardGamesView",
  components: {
    HeroSection,
  },
  data() {
    return {
      boardGamesURL: "/api/boardgame/all",
      heroTitle: "Juegos",
      bgClass: "boardGamesBg",
      boardgameFormTitle: "Agregar juego",
      boardGames: null,
    };
  },
  mounted() {
    this.getBoardGames();
  },
  methods: {
    async getBoardGames() {
      try {
        fetch(this.boardGamesURL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((json) => {
            this.boardGames = json;
            console.log("boardGames:", this.boardGames);
          });
      } catch (error) {
        console.log(error);
      }
    },
    editGame(e) {
      this.boardgameFormTitle = "Editar juego";
      // Guarda el input game-name en una variable y le asigna
      // los valores que están en el btn del juego a editar
      console.log(gameName);
      gameName.value = e.target.dataset.name;
      gameName.dataset.id = e.target.dataset.id;
      gameName.dataset.name = e.target.dataset.name;
    },
    deleteGame() {
      this.boardgameFormTitle = "Borrar juego";
    },
    resetForm() {
      this.boardgameFormTitle = "Agregar juego";
      gameName.value = "";
      gameName.dataset.id = "";
      gameName.dataset.name = "";
    },
    postPutGame() {},
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";
.boardgames {
  background-color: $gray-light;
}
</style>
