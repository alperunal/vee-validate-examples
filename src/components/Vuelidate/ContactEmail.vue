<template>
  <div :class="{ 'form-group--error': $v.contactEmail.$error }">
    <label>E-mail:</label>
    <input
      class="input"
      type="email"
      :value="contactEmail"
      @input="contactEmail = $event.target.value; $v.contactEmail.$reset();"
      @blur="$v.contactEmail.$touch()"
      placeholder="abc@abc.com"
    />
    <div class="error" v-if="$v.contactEmail.$dirty && !$v.contactEmail.required">Field is required</div>
    <div class="error" v-if="$v.contactEmail.$dirty && !$v.contactEmail.email">Must be a valid e-mail address</div>
  </div>
</template>

<script>
import {
  email, requiredIf,
} from 'vuelidate/lib/validators';

export default {
  name: 'ContactEmail',
  computed: {
    contactEmail: {
      get() {
        return this.$store.state.contactEmail;
      },
      set(value) {
        this.$store.dispatch('setContactEmail', value);
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
      this.assignRef('contactEmail', this.$v);
    }
  },
  validations: {
    contactEmail: {
      required: requiredIf(this?.getContactMethod === 'email'),
      email,
    },
  },
};
</script>
