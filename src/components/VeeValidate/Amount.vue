<template>
  <ValidationProvider
    rules="required|min_value:2000"
    v-slot="{ errors }"
    ref="amount"
  >
    <label>Enter the amount:</label>
    <input
      class="input"
      type="number"
      placeholder="amount"
      :value="getAmount"
      @input="onChange(parseInt($event.target.value, 10))"
    />
    <Error
      :errors="errors"
    />
  </ValidationProvider>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Error from '@/components/shared/Error.vue';

export default {
  name: 'Amount',
  components: {
    Error,
  },
  props: {
    getRef: Function,
  },
  computed: {
    ...mapGetters(['getAmount']),
  },
  methods: {
    ...mapActions(['setAmount']),
    onChange(value) {
      this.$store.dispatch('setAmount', value);
    },
  },
  mounted() {
    if (this.getRef) {
      this.getRef(this.$refs.amount);
    }
  },
};
</script>
