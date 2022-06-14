<template>
  <div>
    <h2>{{ title }}</h2>
    <form>
      <div class="mb-3">
        <label for=""></label>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SingleFieldForm",
  props: {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  created() {
    console.log(this.title);
    console.log(this.url);
    axios.get(this.url).then((result) => {
      console.log(result.data);
    });
  },
};
</script>

<style></style>
