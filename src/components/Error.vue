<template>
  <ul>
    <li
      v-for="error in errors"
      :key="error"
    >{{ error }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    errors: {
      type: Array,
    },
  },
};
</script>
