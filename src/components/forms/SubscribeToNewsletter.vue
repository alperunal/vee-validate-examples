<template>
  <ValidationProvider
    v-slot="{ errors }"
  >
    <input
      type="checkbox"
      :value="getSubscribeToNewsletter"
      @change="onChange($event.target.checked)"
      id="subscribe"
    />
    <label for="subscribe">Subscribe to newsletter.</label>
    <Error
      :errors="errors"
    />
  </ValidationProvider>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Error from '@/components/shared/Error.vue';

export default {
  name: 'SubscribeToNewsletter',
  components: {
    Error,
  },
  computed: {
    ...mapGetters(['getSubscribeToNewsletter']),
  },
  methods: {
    ...mapActions(['setSubscribeToNewsletter']),
    onChange(value) {
      this.$store.dispatch('setSubscribeToNewsletter', value);
    },
  },
};
</script>
