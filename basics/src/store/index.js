import Vue from "vue";
import Vuex from "vuex";
import {vuexfireMutations} from 'vuexfire';

Vue.use(Vuex);

const store = new Vuex.Store({
  mutations:{
    ...vuexfireMutations,
  },
})


export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});
