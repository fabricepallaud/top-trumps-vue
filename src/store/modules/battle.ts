import { ActionContext } from 'vuex';
import { RootState } from './types';
import { State } from './models';
import {
  UPDATE_RESULT,
  UPDATE_HERO_SELECTED,
  UPDATE_VILLAIN_SELECTED,
  UPDATE_POWER_SELECTED,
} from './mutation-types';

export default {
  strict: process.env.NODE_ENV !== 'production',
  state: {
    result: null,
    heroSelected: null,
    villainSelected: null,
    powerSelected: '',
  },
  mutations: {
    [UPDATE_RESULT](state: State, val: number) {
      state.result = val;
    },
    [UPDATE_HERO_SELECTED](state: State, val: number) {
      state.heroSelected = val;
    },
    [UPDATE_VILLAIN_SELECTED](state: State, val: number) {
      state.villainSelected = val;
    },
    [UPDATE_POWER_SELECTED](state: State, val: string) {
      state.powerSelected = val;
    },
  },
  actions: {
    updateResultAction(
      { commit }: ActionContext<State, RootState>,
      val: number
    ) {
      commit(UPDATE_RESULT, val);
    },
    updateHeroSelectedAction(
      { commit }: ActionContext<State, RootState>,
      val: number
    ) {
      commit(UPDATE_HERO_SELECTED, val);
    },
    updateVillainSelectedAction(
      { commit }: ActionContext<State, RootState>,
      val: number
    ) {
      commit(UPDATE_VILLAIN_SELECTED, val);
    },
    updatePowerSelectedAction(
      { commit }: ActionContext<State, RootState>,
      val: number
    ) {
      commit(UPDATE_POWER_SELECTED, val);
    },
  },
  getters: {
    result: (state: State) => state.result,
    heroSelected: (state: State) => state.heroSelected,
    villainSelected: (state: State) => state.villainSelected,
    powerSelected: (state: State) => state.powerSelected,
  },
};
