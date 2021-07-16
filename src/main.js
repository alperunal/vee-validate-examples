import Vue from 'vue';
import store from './store';
import VeeValidate from './views/VeeValidate.vue';
import Vuelidate from './views/Vuelidate.vue';
import './style.css';

Vue.config.productionTip = false;
const libs = ['vee-validate', 'vuelidate'];
const validationLibrary = libs[1];

(async () => {
  if (validationLibrary === 'vee-validate') {
    await import('@/plugins/vee-validate');

    new Vue({
      render: (h) => h(VeeValidate),
      store,
    }).$mount('#app');
  } else {
    await import('@/plugins/vuelidate');

    new Vue({
      render: (h) => h(Vuelidate),
      store,
    }).$mount('#app');
  }
})();
