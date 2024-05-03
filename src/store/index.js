import { createStore } from 'vuex';
import list from './list';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  modules: {
    list,
  },
  plugins: [
    createPersistedState({
      paths: ['list']
    })
  ]
});

export default store;
