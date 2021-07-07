<template>
  <ValidationProvider
    rules="required"
    v-slot="{ errors }"
    ref="contactPhone"
  >
    <label>Phone number:</label>
    <input
      class="input"
      type="tel"
      :value="getContactPhone"
      @input="onChange($event.target.value)"
      placeholder="06xxxxxxxx"
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
  name: 'ContactPhone',
  components: {
    Error,
  },
  props: {
    getRef: Function,
  },
  computed: {
    ...mapGetters(['getContactPhone']),
  },
  methods: {
    ...mapActions(['setContactPhone']),
    onChange(value) {
      this.$store.dispatch('setContactPhone', value);
    },
  },
  mounted() {
    if (this.getRef) {
      this.getRef(this.$refs.contactPhone);
    }
  },
};
</script>
