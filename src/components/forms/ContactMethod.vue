<template>
  <ValidationProvider
    rules="required"
    v-slot="{ errors }"
  >
    <label>Contact method:</label>
    <div>
      <input
        type="radio"
        name="contact-method"
        id="email"
        :value="contactMethod"
        @change="onChange('contactMethod', 'email')"
      />
      <label for="email">E-mail</label>
      <input
        type="radio"
        name="contact-method"
        id="phone"
        :value="contactMethod"
        @change="onChange('contactMethod', 'phone')"
      />
      <label for="phone">Phone</label>
    </div>
    <Error
      :errors="errors"
    />
  </ValidationProvider>
</template>

<script>
import Error from '@/components/shared/Error.vue';

export default {
  name: 'ContactMethod',
  components: {
    Error,
  },
  props: {
    contactMethod: String,
  },
  methods: {
    onChange(name, value) {
      this.$emit('handleChange', name, value);
    },
  },
};
</script>
