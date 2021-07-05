<template>
  <ValidationProvider
    rules="required"
    v-slot="{ errors }"
  >
    <label>Select contract type:</label>
    <select
      class="select"
      :value="contractType"
      @change="onChange('contractType', $event.target.value)"
    >
      <option value="" disabled hidden>Select</option>
      <option value="permanent">Permanent</option>
      <option value="temporary">Temporary</option>
    </select>
    <Error
      :errors="errors"
    />
  </ValidationProvider>
</template>

<script>
import Error from '@/components/shared/Error.vue';

export default {
  name: 'ContractType',
  components: {
    Error,
  },
  props: {
    contractType: String,
  },
  methods: {
    onChange(name, value) {
      this.$emit('handleChange', name, value);
    },
  },
};
</script>
