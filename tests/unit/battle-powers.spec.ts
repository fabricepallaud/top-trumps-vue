import { shallowMount } from '@vue/test-utils';
import BattlePowers from '@/views/battle/battle-powers.vue';
import { ActionContext } from 'vuex';
import { RootState } from '@/store/modules/types';
import { State } from '@/store/modules/models';
import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';

const store = createStore({
  modules: {
    heroes: {
      state() {
        return {
          heroes: [
            {
              "id": "HeroAslaug",
              "name": "Aslaug",
            },
          ],
        }
      },
      namespaced: true
    },
    villains: {
      state() {
        return {
          villains: [
            {
              "id": "VillainMadelyn",
              "name": "Madelyn",
            },
          ]
        }
      },
      namespaced: true
    },
    battle: {
      state() {
        return {
          powerSelected: '',
        }
      },
      mutations: {
        UPDATE_POWER_SELECTED(state: State, val: string) {
          state.powerSelected = val;
        },
      },
      actions: {
        updatePowerSelectedAction(
          { commit }: ActionContext<State, RootState>,
          val: number
        ) {
          commit('UPDATE_POWER_SELECTED', val);
        },
      },
      getters: {
        powerSelected: (state: State) => state.powerSelected,
      },
      namespaced: true
    }
  },  
});

describe('BattlePowers', () => {
  it('updates store variable powerSelected with power clicked by user', async () => {
    const wrapper = shallowMount(BattlePowers, {});

    await wrapper.findAll('.button')[0].trigger('click');

    expect(store.getters['battle/powerSelected']).toBeTruthy();
  });
});
