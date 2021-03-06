import Vue from 'vue';
import Vuex from 'vuex';

import { app } from './modules/app';
import { sunRiseSunSet } from './modules/sunRiseSunSet';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    version: ''
  },
  modules: {
    app,
    sunRiseSunSet
  }
});
