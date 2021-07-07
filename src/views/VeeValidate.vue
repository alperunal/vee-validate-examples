<template>
  <div class="main">
    <div class="container">
      <h1>VeeValidate v3 Examples</h1>
      <div class="card">
        <ValidationObserver
          v-slot="{ pristine, invalid }"
          @submit.prevent="handleSubmit"
          tag="form"
          ref="observer"
        >
          <div class="form-group">
            <contact-method :getRef="getRef('contactMethod')" />
          </div>
          <div
            class="form-group"
            v-if="getContactMethod === 'email'"
          >
            <contact-email :getRef="getRef('contactEmail')" />
          </div>
          <div
            class="form-group"
            v-if="getContactMethod === 'phone'"
          >
            <contact-phone :getRef="getRef('contactPhone')" />
          </div>
          <div
            class="form-group"
            v-if="($refs.contactEmail && $refs.contactEmail.flags.validated) || ($refs.contactPhone && $refs.contactPhone.flags.validated)"
          >
            <contract-type :getRef="getRef('contractType')" />
          </div>
          <div
            class="form-group"
            v-if="$refs.contractType && $refs.contractType.flags.validated"
          >
            <amount :getRef="getRef('amount')" />
          </div>
          <div class="form-group">
            <terms-and-conditions />
          </div>
          <div class="form-group">
            <subscribe-to-newsletter />
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
import { mapGetters } from 'vuex';
import ContactMethod from '@/components/forms/ContactMethod.vue';
import ContactEmail from '@/components/forms/ContactEmail.vue';
import ContactPhone from '@/components/forms/ContactPhone.vue';
import ContractType from '@/components/forms/ContractType.vue';
import TermsAndConditions from '@/components/forms/TermsAndConditions.vue';
import SubscribeToNewsletter from '@/components/forms/SubscribeToNewsletter.vue';
import Amount from '@/components/forms/Amount.vue';

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
  computed: {
    ...mapGetters(['getContactMethod']),
  },
  methods: {
    handleSubmit(form) {
      console.log('form', form);
      console.log(this.$refs.observer);
    },
    getRef(key) {
      return (ref) => {
        this.$refs[key] = ref;
      };
    },
  },
};
</script>
