<template>
  <div class="boardgames">
    <HeroSection :title="heroTitle" :bg-class="bgClass" />

    <div class="container my-5">
      <div class="row">
        <!-- Form -->
        <div class="col-12">
          <h2>{{ boardGameFormTitle }}</h2>
          <form @submit.prevent autocomplete="off">
            <div class="mb-3">
              <label for="game-id" class="form-label">Id</label>
              <input type="text" name="game-id" class="form-control" v-model="inputBoardGame.id" />
              <p class="my-3">{{ inputBoardGame.id }}</p>
            </div>
            <div class="mb-3">
              <label for="game-name" class="form-label">Nombre *</label>
              <input type="text" id="game-name" class="form-control" name="game-name" v-model="inputBoardGame.name" required />
              <div class="form-text">Campo requerido</div>
              <p class="my-3">{{ inputBoardGame.name }}</p>
            </div>
            <div class="mb-3">
              <label for="game-boardGameGeekId" class="form-label">Board Game Geek Id</label>
              <input type="text" class="form-control" name="game-boardGameGeekId" v-model="inputBoardGame.boardGameGeekId" />
              <p class="my-3">{{ inputBoardGame.boardGameGeekId }}</p>
            </div>
            <div class="mb-3">
              <label for="game-description" class="form-label">Descripción</label>
              <input type="text" class="form-control" name="game-description" v-model="inputBoardGame.description" />
              <p class="my-3">{{ inputBoardGame.description }}</p>
            </div>
            <div class="mb-3">
              <label for="game-image" class="form-label">Imagen</label>
              <input type="text" class="form-control" name="game-image" v-model="inputBoardGame.image" />
              <p class="my-3">{{ inputBoardGame.image }}</p>
            </div>
            <div class="mb-3">
              <button class="btn btn__secondary reset me-3">Reset</button>
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
              <tbody v-if="boardGames">
                <tr v-for="boardGame in boardGames" :key="boardGame.id">
                  <td class="align-middle">{{ boardGame.name }}</td>
                  <td>
                    <button class="edit btn btn__secondary me-3">Editar</button>
                    <button class="delete btn btn__secondary">Eliminar</button>
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
      boardGameFormTitle: "Agregar juego",
      boardGames: null,
      inputBoardGame: {
        id: "",
        name: "",
        boardGameGeekId: "",
        Description: "",
        Image: "",
      },
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
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";
.boardgames {
  background-color: $gray-light;
}
</style>
