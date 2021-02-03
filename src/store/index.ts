import { createStore } from 'vuex';
import heroesModule from './modules/heroes';
import villainsModule from './modules/villains';
import battleModule from './modules/battle';
import type { RootState } from './modules/types';

export * from './modules/mutation-types';

const store = createStore({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    heroes: heroesModule,
    villains: villainsModule,
    battle: battleModule,
  },
  actions: {},
  mutations: {},
  state() {
    return {} as RootState;
  },
});

export default store;
