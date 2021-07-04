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
            <ValidationProvider
              rules="required"
              v-slot="{ errors }"
            >
              <label>Contact method:</label>
              <div>
                <input
                  type="radio"
                  name="contact-method"
                  id="email"
                  value="email"
                  v-model="contact.method"
                />
                <label for="email">E-mail</label>
                <input
                  type="radio"
                  name="contact-method"
                  id="phone"
                  value="phone"
                  v-model="contact.method"
                />
                <label for="phone">Phone</label>
              </div>
              <Error
                :errors="errors"
              />
            </ValidationProvider>
          </div>
          <div class="form-group" v-if="contact.method === 'email'">
            <ValidationProvider
              rules="required"
              v-slot="{ errors }"
            >
              <label>E-mail:</label>
              <input
                class="input"
                type="email"
                v-model="contact.email"
                placeholder="abc@abc.com"
              />
              <Error
                :errors="errors"
              />
            </ValidationProvider>
          </div>
          <div class="form-group" v-if="contact.method === 'phone'">
            <ValidationProvider
              rules="required"
              v-slot="{ errors }"
            >
              <label>Phone number:</label>
              <input
                class="input"
                type="tel"
                v-model="contact.phone"
                placeholder="06xxxxxxxx"
              />
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
import Error from '@/components/Error.vue';

export default {
  name: 'VeeValidate',
  components: {
    Error,
  },
  methods: {
    handleSubmit(form) {
      console.log('form', form);
    },
  },
  data() {
    return {
      contractType: '',
      contact: {
        method: null,
        email: null,
        phone: null,
      },
      amount: null,
      termsAndConditions: false,
      subscribe: false,
    };
  },
};
</script>

<style>

</style>
