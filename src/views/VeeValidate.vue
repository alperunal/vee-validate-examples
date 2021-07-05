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
            <contract-type :contractType="contractType" @handleChange="handleChange" />
          </div>
          <div class="form-group">
            <amount :amount="amount" @handleChange="handleChange" />
          </div>
          <div class="form-group">
            <terms-and-conditions :termsAndConditions="termsAndConditions" @handleChange="handleChange" />
          </div>
          <div class="form-group">
            <subscribe-to-newsletter :subscribeToNewsletter="subscribeToNewsletter" @handleChange="handleChange" />
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
import ContactMethod from '../components/forms/ContactMethod.vue';
import ContactEmail from '../components/forms/ContactEmail.vue';
import ContactPhone from '../components/forms/ContactPhone.vue';
import ContractType from '../components/forms/ContractType.vue';
import TermsAndConditions from '../components/forms/TermsAndConditions.vue';
import SubscribeToNewsletter from '../components/forms/SubscribeToNewsletter.vue';
import Amount from '../components/forms/Amount.vue';

export default {
  name: 'VeeValidate',
  components: {
    ContactMethod,
    ContactEmail,
    ContactPhone,
    ContractType,
    TermsAndConditions,
    SubscribeToNewsletter,
    Amount,
  },
  methods: {
    handleSubmit(form) {
      console.log('form', form);
    },
    handleChange(key, value) {
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
      subscribeToNewsletter: false,
    };
  },
};
</script>

<style>

</style>
