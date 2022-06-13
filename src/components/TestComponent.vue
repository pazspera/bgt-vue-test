<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Soy el test component, estoy en el Home</h1>

        <p>Board game list</p>
        <ul>
          <li v-for="boardGame in boardGames" :key="boardGame.id">
            {{ boardGame.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boardGames: null,
    };
  },
  methods: {
    async fetchData() {
      try {
        fetch(`/api/boardgame/all`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((messages) => {
            console.log("messages: ", messages);
            this.boardGames = messages;
          });
      } catch (err) {
        console.error("err", err);
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style></style>
