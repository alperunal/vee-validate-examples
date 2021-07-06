import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';
import store from './store';
import VeeValidate from './views/VeeValidate.vue';

import './style.css';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule],
  });
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(VeeValidate),
  store,
}).$mount('#app');
