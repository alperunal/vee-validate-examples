<template>
  <div :class="{ 'form-group--error': $v.contactPhone.$error }">
    <label>Phone number:</label>
    <input
      class="input"
      type="tel"
      :value="contactPhone"
      @input="contactPhone = $event.target.value; $v.contactPhone.$reset();"
      @blur="$v.contactPhone.$touch()"
      placeholder="06xxxxxxxx"
    />
    <div class="error" v-if="$v.contactPhone.$dirty && !$v.contactPhone.required">Field is required</div>
    <div class="error" v-if="$v.contactPhone.$dirty && !$v.contactPhone.minLength || !$v.contactPhone.maxLength">
      Phone number must have 10 numbers.
    </div>
  </div>
</template>

<script>
import {
  maxLength, minLength, numeric, requiredIf,
} from 'vuelidate/lib/validators';

export default {
  name: 'ContactPhone',
  computed: {
    contactPhone: {
      get() {
        return this.$store.state.contactPhone;
      },
      set(value) {
        this.$store.dispatch('setContactPhone', value);
      },
    },
    contactMethod: {
      get() {
        return this.$store.state.contactMethod;
      },
    },
  },
  props: {
    assignRef: Function,
  },
  mounted() {
    if (this.assignRef) {
      this.assignRef('contactPhone', this.$v);
    }
  },
  validations: {
    contactPhone: {
      required: requiredIf(this?.contactMethod === 'phone'),
      minLength: minLength(10),
      maxLength: maxLength(10),
      numeric,
    },
  },
};
</script>
