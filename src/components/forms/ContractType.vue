<template>
  <ValidationProvider
    rules="required"
    v-slot="{ errors }"
    ref="contractType"
  >
    <label>Select contract type:</label>
    <select
      class="select"
      :value="getContractType"
      @change="onChange($event.target.value)"
    >
      <option value="" disabled hidden>Select</option>
      <option value="permanent">Permanent</option>
      <option value="temporary">Temporary</option>
    </select>
    <Error
      :errors="errors"
    />
  </ValidationProvider>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Error from '@/components/shared/Error.vue';

export default {
  name: 'ContractType',
  components: {
    Error,
  },
  props: {
    getRef: Function,
  },
  computed: {
    ...mapGetters(['getContractType']),
  },
  methods: {
    ...mapActions(['setContractType']),
    onChange(value) {
      this.$store.dispatch('setContractType', value);
    },
  },
  mounted() {
    if (this.getRef) {
      this.getRef(this.$refs.contractType);
    }
  },
};
</script>
