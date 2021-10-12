export default {
    namespaced: true,
    state: {
      list: "",
    },
    mutations: {
      getList(state, payload) {
        if (payload) {
          state.list = payload;
        }
      },
    },
    actions: {},
  };
  