import Vue from 'vue';
import Vuex from 'vuex';

import user from './user';
import angel from './angel';

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      user,
      angel,
    },
  });

  return Store;
}
