<template>
  <div :class="{ 'form-group--error': $v.termsAndConditions.$error }">
    <input
      type="checkbox"
      :checked="termsAndConditions"
      @change="termsAndConditions = $event.target.checked; $v.termsAndConditions.$reset();"
      @blur="$v.termsAndConditions.$touch()"
      id="termsandconditions"
    />
    <label for="termsandconditions">
      I agree with the terms and conditions.
    </label>
    <div class="error" v-if="$v.termsAndConditions.$dirty && (!$v.termsAndConditions.required || !$v.termsAndConditions.checked)">Field is required</div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'TermsAndConditions',
  computed: {
    termsAndConditions: {
      get() {
        return this.$store.state.termsAndConditions;
      },
      set(value) {
        this.$store.dispatch('setTermsAndConditions', value);
      },
    },
  },
  props: {
    assignRef: Function,
  },
  mounted() {
    if (this.assignRef) {
      this.assignRef('termsAndConditions', this.$v);
    }
  },
  validations: {
    termsAndConditions: {
      required,
      checked: (val) => val === true,
    },
  },
};
</script>
