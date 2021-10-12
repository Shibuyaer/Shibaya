export default {
  namespaced: true,
  state: {
    token: "",
  },
  mutations: {
    getToken(state, payload) {
      if (payload) {
        state.token = payload;
      }
    },
  },
  actions: {},
};
