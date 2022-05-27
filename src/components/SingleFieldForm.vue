<template>
  <div class="container">

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SingleFieldForm",
  props: {
      url: {
          type: String,
          required: true
      }
  },
  created() {
      console.log(this.url);
      axios.get(this.url).then((result) => {
          console.log(result.data);
      })
  }
};
</script>

<style></style>
