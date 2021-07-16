<template>
  <div :class="{ 'form-group--error': $v.amount.$error }">
    <label>Enter the amount:</label>
    <input
      class="input"
      type="number"
      placeholder="amount"
      :value="amount"
      @input="amount = parseInt($event.target.value, 10); $v.amount.$reset();"
      @blur="$v.amount.$touch()"
    />
    <div class="error" v-if="$v.amount.$dirty && !$v.amount.required">Field is required</div>
    <div class="error" v-if="$v.amount.$dirty && (!$v.amount.minValue || !$v.amount.maxValue)">
      Amount should be between 1000 and 7500
    </div>
  </div>
</template>

<script>
import {
  required, numeric, minValue, maxValue,
} from 'vuelidate/lib/validators';

export default {
  name: 'Amount',
  computed: {
    amount: {
      get() {
        return this.$store.state.amount;
      },
      set(value) {
        this.$store.dispatch('setAmount', value);
      },
    },
  },
  props: {
    assignRef: Function,
  },
  mounted() {
    if (this.assignRef) {
      this.assignRef('amount', this.$v);
    }
  },
  validations: {
    amount: {
      required,
      minValue: minValue(1000),
      maxValue: maxValue(7500),
      numeric,
    },
  },
};
</script>
