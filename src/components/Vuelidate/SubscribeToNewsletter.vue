<template>
  <div>
    <input
      type="checkbox"
      :checked="subscribeToNewsletter"
      @change="subscribeToNewsletter = $event.target.checked"
      id="subscribe"
    />
    <label for="subscribe">Subscribe to newsletter.</label>
  </div>
</template>

<script>
export default {
  name: 'SubscribeToNewsletter',
  computed: {
    subscribeToNewsletter: {
      get() {
        return this.$store.state.subscribeToNewsletter;
      },
      set(value) {
        this.$store.dispatch('setSubscribeToNewsletter', value);
        this.$v.subscribeToNewsletter.$touch();
      },
    },
  },
};
</script>
