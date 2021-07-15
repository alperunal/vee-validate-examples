import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as types from './types';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    contractType: null,
    contactMethod: null,
    contactEmail: null,
    contactPhone: null,
    amount: null,
    termsAndConditions: false,
    subscribeToNewsletter: false,
  },
  getters: {
    getContractType: (state) => state.contractType,
    getContactMethod: (state) => state.contactMethod,
    getContactEmail: (state) => state.contactEmail,
    getContactPhone: (state) => state.contactPhone,
    getAmount: (state) => state.amount,
    getTermsAndConditions: (state) => state.termsAndConditions,
    getSubscribeToNewsletter: (state) => state.subscribeToNewsletter,
  },
  actions: {
    setContractType({ commit }, contractType) {
      commit(types.SET_CONTRACT_TYPE, contractType);
    },
    setContactMethod({ commit }, contactMethod) {
      commit(types.SET_CONTACT_METHOD, contactMethod);
    },
    setContactEmail({ commit }, contactEmail) {
      commit(types.SET_CONTACT_EMAIL, contactEmail);
    },
    setContactPhone({ commit }, contactPhone) {
      commit(types.SET_CONTACT_PHONE, contactPhone);
    },
    setAmount({ commit }, amount) {
      commit(types.SET_AMOUNT, amount);
    },
    setTermsAndConditions({ commit }, termsAndConditions) {
      commit(types.SET_TERMS_AND_CONDITIONS, termsAndConditions);
    },
    setSubscribeToNewsletter({ commit }, subscribeToNewsletter) {
      commit(types.SET_SUBSCRIBE_TO_NEWSLETTER, subscribeToNewsletter);
    },
  },
  mutations: {
    [types.SET_CONTRACT_TYPE](state, contractType) {
      state.contractType = contractType;
    },
    [types.SET_CONTACT_METHOD](state, contactMethod) {
      state.contactMethod = contactMethod;
    },
    [types.SET_CONTACT_EMAIL](state, contactEmail) {
      state.contactEmail = contactEmail;
    },
    [types.SET_CONTACT_PHONE](state, contactPhone) {
      state.contactPhone = contactPhone;
    },
    [types.SET_AMOUNT](state, amount) {
      state.amount = amount;
    },
    [types.SET_TERMS_AND_CONDITIONS](state, termsAndConditions) {
      state.termsAndConditions = termsAndConditions;
    },
    [types.SET_SUBSCRIBE_TO_NEWSLETTER](state, subscribeToNewsletter) {
      state.subscribeToNewsletter = subscribeToNewsletter;
    },
  },
  plugins: [createPersistedState({ storage: window.sessionStorage })],
});

export default store;
