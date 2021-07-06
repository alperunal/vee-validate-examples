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
        :value="getContactMethod"
        @change="onChange('email')"
      />
      <label for="email">E-mail</label>
      <input
        type="radio"
        name="contact-method"
        id="phone"
        :value="getContactMethod"
        @change="onChange('phone')"
      />
      <label for="phone">Phone</label>
    </div>
    <Error
      :errors="errors"
    />
  </ValidationProvider>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Error from '@/components/shared/Error.vue';

export default {
  name: 'ContactMethod',
  components: {
    Error,
  },
  computed: {
    ...mapGetters(['getContactMethod']),
  },
  methods: {
    ...mapActions(['setContactMethod']),
    onChange(value) {
      this.$store.dispatch('setContactMethod', value);
    },
  },
};
</script>
