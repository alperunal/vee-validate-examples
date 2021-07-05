<template>
  <ValidationProvider
    rules="required"
    v-slot="{ errors }"
  >
    <label>E-mail:</label>
    <input
      class="input"
      type="email"
      :value="contactEmail"
      @input="onChange('contactEmail', $event.target.value)"
      placeholder="abc@abc.com"
    />
    <Error
      :errors="errors"
    />
  </ValidationProvider>
</template>

<script>
import Error from '@/components/shared/Error.vue';

export default {
  name: 'ContactEmail',
  components: {
    Error,
  },
  props: {
    contactEmail: String,
  },
  methods: {
    onChange(name, value) {
      this.$emit('handleChange', name, value);
    },
  },
};
</script>
