// ==|== Imports ===================================================================================
import { createStore } from 'vuex';
import Service from '../services';

// ==|== Store =====================================================================================
export default createStore({
  // ==|== State ===================================================================================
  state: {
    contact: null,
    social: null
  },

  // ==|== Actions =================================================================================
  actions: {
    fetchContact({ commit }) {
      return Service.getContact().then((response) => {
        commit('SET_CONTACT', response.data);
      });
    },
    fetchSocial({ commit }) {
      return Service.getSocial().then((response) => {
        commit('SET_SOCIAL', response.data);
      });
    }
  },

  // ==|== Mutations ===============================================================================
  mutations: {
    SET_CONTACT(state, value) {
      state.contact = value;
    },
    SET_SOCIAL(state, value) {
      state.social = value;
    }
  },

  // ==|== Getters =================================================================================
  getters: {}
});
