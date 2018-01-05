/**
 * Created by tengteng on 17/12/27.
 */

import Vue from 'vue';
import Vuex from 'vuex';
import actions from './action';
import getters from './getter';
import mutations from './mutation';
import state from './state';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
});
