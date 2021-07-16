<template>
  <div :class="{ 'form-group--error': $v.contractType.$error }">
    <label>Select contract type:</label>
    <select
      class="select"
      :value="contractType"
      @change="contractType = $event.target.value; $v.contractType.$reset();"
      @blur="$v.contractType.$touch()"
    >
      <option value="" disabled hidden>Select</option>
      <option value="permanent">Permanent</option>
      <option value="temporary">Temporary</option>
    </select>
    <div class="error" v-if="$v.contractType.$dirty && !$v.contractType.required">Field is required</div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'ContractType',
  computed: {
    contractType: {
      get() {
        return this.$store.state.contractType;
      },
      set(value) {
        this.$store.dispatch('setContractType', value);
      },
    },
  },
  props: {
    assignRef: Function,
  },
  mounted() {
    if (this.assignRef) {
      this.assignRef('contractType', this.$v);
    }
  },
  validations: {
    contractType: {
      required,
    },
  },
};
</script>
