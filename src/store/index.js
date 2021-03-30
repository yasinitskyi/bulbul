import { createStore } from 'vuex';

export default createStore({
  state: {
    isActive: false,
    pics: [],
  },
  mutations: {
    toggleMenu(state) {
      state.isActive = !state.isActive;
    },
    savePics(state, payload) {
      state.pics.push(...payload);
    }
  },
  actions: {
    async pullPics({commit}) {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json()).then(data => commit('savePics', data));
      } catch {
        alert('no data');
      }
    }
  },
  modules: {
  }
});
