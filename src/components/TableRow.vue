<template>
  <tr>
    <td class="align-middle">{{ row.name }}</td>
    <td>
      <button class="edit btn btn__secondary me-3" :data-id="row.id" :data-name="row.name">Editar</button>
      <button class="delete btn btn__secondary" :data-id="row.id" :data-name="row.name">Eliminar</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    row: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";
</style>
