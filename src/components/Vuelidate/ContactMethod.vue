<template>
  <div :class="{ 'form-group--error': $v.contactMethod.$error }">
    <label>Contact method:</label>
    <div>
      <input
        type="radio"
        name="contact-method"
        id="email"
        value="email"
        :checked="contactMethod === 'email'"
        @change="contactMethod = 'email'; $v.contactMethod.$reset();"
        @blur="$v.contactMethod.$touch();"
      />
      <label for="email">E-mail</label>
      <input
        type="radio"
        name="contact-method"
        id="phone"
        value="phone"
        :checked="contactMethod === 'phone'"
        @change="contactMethod = 'phone'; $v.contactMethod.$reset();"
        @blur="$v.contactMethod.$touch();"
      />
      <label for="phone">Phone</label>
    </div>
    <div class="error" v-if="$v.contactMethod.$dirty && !$v.contactMethod.required">Field is required</div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'ContactMethod',
  computed: {
    contactMethod: {
      get() {
        return this.$store.state.contactMethod;
      },
      set(value) {
        this.$store.dispatch('setContactMethod', value);
      },
    },
  },
  validations: {
    contactMethod: {
      required,
    },
  },
};
</script>
