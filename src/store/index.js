import { createStore } from "vuex";

export default createStore({
  state: {
    toggle: false
  },
  mutations: {
    change(state, step) {
      state.toggle = step
    }
  },
  actions: {},
  modules: {},
});
