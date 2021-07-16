<template>
  <div class="main">
    <div class="container">
      <h1>Vuelidate Examples</h1>
      <div class="card">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <contact-method />
          </div>
          <div
            class="form-group"
            v-if="getContactMethod === 'email'"
          >
            <contact-email :assignRef="assignRef" />
          </div>
          <div
            class="form-group"
            v-if="getContactMethod === 'phone'"
          >
            <contact-phone :assignRef="assignRef" />
          </div>
          <div
            class="form-group"
          >
            <contract-type :assignRef="assignRef" />
          </div>
          <div
            class="form-group"
          >
            <amount :assignRef="assignRef" />
          </div>
          <div class="form-group">
            <terms-and-conditions :assignRef="assignRef" />
          </div>
          <div class="form-group">
            <subscribe-to-newsletter />
          </div>
          <button
            class="button button--submit"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ContactMethod from '@/components/Vuelidate/ContactMethod.vue';
import ContactEmail from '@/components/Vuelidate/ContactEmail.vue';
import ContactPhone from '@/components/Vuelidate/ContactPhone.vue';
import ContractType from '@/components/Vuelidate/ContractType.vue';
import TermsAndConditions from '@/components/Vuelidate/TermsAndConditions.vue';
import SubscribeToNewsletter from '@/components/Vuelidate/SubscribeToNewsletter.vue';
import Amount from '@/components/Vuelidate/Amount.vue';

export default {
  name: 'Vuelidate',
  components: {
    ContactMethod,
    ContactEmail,
    ContactPhone,
    ContractType,
    TermsAndConditions,
    SubscribeToNewsletter,
    Amount,
  },
  computed: {
    ...mapGetters(['getContactMethod']),
  },
  methods: {
    handleSubmit(form) {
      console.log('form', form);
      console.log(this.$refs.formItems);
      Object.keys(this.$refs.formItems).forEach((key) => {
        this.$refs.formItems[key].$touch();
      });
    },
    assignRef(key, value) {
      this.$refs.formItems[key] = value;
    },
  },
  created() {
    this.$refs.formItems = {};
  },
};
</script>
