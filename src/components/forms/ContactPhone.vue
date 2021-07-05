<template>
  <ValidationProvider
    rules="required"
    v-slot="{ errors }"
  >
    <label>Phone number:</label>
    <input
      class="input"
      type="tel"
      :value="contactPhone"
      @input="onChange('contactPhone', $event.target.value)"
      placeholder="06xxxxxxxx"
    />
    <Error
      :errors="errors"
    />
  </ValidationProvider>
</template>

<script>
import Error from '@/components/shared/Error.vue';

export default {
  name: 'ContactPhone',
  components: {
    Error,
  },
  props: {
    contactPhone: String,
  },
  methods: {
    onChange(name, value) {
      console.log(name, value);
      this.$emit('handleChange', name, value);
    },
  },
};
</script>
