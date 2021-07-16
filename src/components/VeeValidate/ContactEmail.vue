<template>
  <ValidationProvider
    rules="required"
    v-slot="{ errors }"
    ref="contactEmail"
  >
    <label>E-mail:</label>
    <input
      class="input"
      type="email"
      :value="getContactEmail"
      @input="onChange($event.target.value)"
      placeholder="abc@abc.com"
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
  name: 'ContactEmail',
  components: {
    Error,
  },
  props: {
    getRef: Function,
  },
  computed: {
    ...mapGetters(['getContactEmail']),
  },
  methods: {
    ...mapActions(['setContactEmail']),
    onChange(value) {
      this.$store.dispatch('setContactEmail', value);
    },
  },
  mounted() {
    if (this.getRef) {
      this.getRef(this.$refs.contactEmail);
    }
  },
};
</script>
