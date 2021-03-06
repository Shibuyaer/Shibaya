import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import token from "./modules/token"
import list from "./modules/list"
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    token,
    list
  },
  plugins: [createPersistedState()],
});
