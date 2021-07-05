<template>
  <ValidationProvider
    rules="required"
    v-slot="{ errors }"
  >
    <input
      type="checkbox"
      :value="subscribeToNewsletter"
      @change="onChange('subscribeToNewsletter', $event.target.checked)"
      id="subscribe"
    />
    <label for="subscribe">Subscribe to newsletter.</label>
    <Error
      :errors="errors"
    />
  </ValidationProvider>
</template>

<script>
import Error from '@/components/shared/Error.vue';

export default {
  name: 'SubscribeToNewsletter',
  components: {
    Error,
  },
  props: {
    subscribeToNewsletter: Boolean,
  },
  methods: {
    onChange(name, value) {
      this.$emit('handleChange', name, value);
    },
  },
};
</script>
