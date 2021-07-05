<template>
  <div class="main">
    <div class="container">
      <h1>VeeValidate v3 Examples</h1>
      <div class="card">
        <ValidationObserver
          v-slot="{ pristine, invalid }"
          @submit.prevent="handleSubmit"
          tag="form"
        >
          <div class="form-group">
            <contact-method :contactMethod="contactMethod" @handleChange="handleChange" />
          </div>
          <div class="form-group" v-if="contactMethod === 'email'">
            <contact-email :contactEmail="contactEmail" @handleChange="handleChange" />
          </div>
          <div class="form-group" v-if="contactMethod === 'phone'">
            <contact-phone :contactPhone="contactPhone" @handleChange="handleChange" />
          </div>
          <div class="form-group">
            <ValidationProvider
              rules="required"
              v-slot="{ errors }"
            >
              <label>Select contract type:</label>
              <select
                class="select"
                v-model="contractType"
              >
                <option value="" disabled hidden>Select</option>
                <option value="permanent">Permanent</option>
                <option value="temporary">Temporary</option>
              </select>
              <Error
                :errors="errors"
              />
            </ValidationProvider>
          </div>
          <div class="form-group">
            <ValidationProvider
              rules="required|min_value:2000"
              v-slot="{ errors }"
            >
              <label>Enter the amount:</label>
              <input
                class="input"
                type="number"
                placeholder="amount"
                v-model="amount"
              />
              <Error
                :errors="errors"
              />
            </ValidationProvider>
          </div>
          <div class="form-group">
            <ValidationProvider
              :rules="{ required: { allowFalse: false } }"
              v-slot="{ errors }"
            >
              <input
                type="checkbox"
                v-model="termsAndConditions"
                id="termsandconditions"
              />
              <label for="termsandconditions">I agree with the terms and conditions.</label>
              <Error
                :errors="errors"
              />
            </ValidationProvider>
          </div>
          <div class="form-group">
            <ValidationProvider
              rules="required"
              v-slot="{ errors }"
            >
              <input
                type="checkbox"
                v-model="subscribe"
                id="subscribe"
              />
              <label for="subscribe">Subscribe to newsletter.</label>
              <Error
                :errors="errors"
              />
            </ValidationProvider>
          </div>
          <button
            class="button button--submit"
            type="submit"
            :disabled="pristine || invalid"
          >
            Submit
          </button>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import Error from '@/components/shared/Error.vue';
import ContactMethod from '../components/forms/ContactMethod.vue';
import ContactEmail from '../components/forms/ContactEmail.vue';
import ContactPhone from '../components/forms/ContactPhone.vue';

export default {
  name: 'VeeValidate',
  components: {
    Error,
    ContactMethod,
    ContactEmail,
    ContactPhone,
  },
  methods: {
    handleSubmit(form) {
      console.log('form', form);
    },
    handleChange(key, value) {
      console.log(key, value);
      this[key] = value;
      console.log(JSON.stringify(this.$data, null, 2));
    },
  },
  data() {
    return {
      contractType: '',
      contactMethod: null,
      contactEmail: null,
      contactPhone: null,
      amount: null,
      termsAndConditions: false,
      subscribe: false,
    };
  },
};
</script>

<style>

</style>
