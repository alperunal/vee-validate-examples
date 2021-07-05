<template>
  <ValidationProvider
    rules="required|min_value:2000"
    v-slot="{ errors }"
  >
    <label>Enter the amount:</label>
    <input
      class="input"
      type="number"
      placeholder="amount"
      :value="amount"
      @input="onChange('amount', parseInt($event.target.value), 10)"
    />
    <Error
      :errors="errors"
    />
  </ValidationProvider>
</template>

<script>
import Error from '@/components/shared/Error.vue';

export default {
  name: 'Amount',
  components: {
    Error,
  },
  props: {
    amount: Number,
  },
  methods: {
    onChange(name, value) {
      this.$emit('handleChange', name, value);
    },
  },
};
</script>
