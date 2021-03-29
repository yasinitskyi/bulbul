import { createStore } from 'vuex';

export default createStore({
  state: {
    isActive: false
  },
  mutations: {
    toggleMenu(state, payload) {
      state.isActive = !state.isActive;
    }
  },
  actions: {
  },
  modules: {
  }
});
