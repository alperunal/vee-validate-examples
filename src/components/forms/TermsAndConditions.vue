<template>
  <ValidationProvider
    :rules="{ required: { allowFalse: false } }"
    v-slot="{ errors }"
  >
    <input
      type="checkbox"
      :value="getTermsAndConditions"
      @change="onChange($event.target.checked)"
      id="termsandconditions"
    />
    <label for="termsandconditions">
      I agree with the terms and conditions.
    </label>
    <Error
      :errors="errors"
    />
  </ValidationProvider>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Error from '@/components/shared/Error.vue';

export default {
  name: 'TermsAndConditions',
  components: {
    Error,
  },
  computed: {
    ...mapGetters(['getTermsAndConditions']),
  },
  methods: {
    ...mapActions(['setTermsAndConditions']),
    onChange(value) {
      this.$store.dispatch('setTermsAndConditions', value);
    },
  },
};
</script>
