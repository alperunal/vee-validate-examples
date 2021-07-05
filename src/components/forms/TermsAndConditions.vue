<template>
  <ValidationProvider
    :rules="{ required: { allowFalse: false } }"
    v-slot="{ errors }"
  >
    <input
      type="checkbox"
      :value="termsAndConditions"
      @change="onChange('termsAndConditions', $event.target.checked)"
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
import Error from '@/components/shared/Error.vue';

export default {
  name: 'TermsAndConditions',
  components: {
    Error,
  },
  props: {
    termsAndConditions: Boolean,
  },
  methods: {
    onChange(name, value) {
      this.$emit('handleChange', name, value);
    },
  },
};
</script>
