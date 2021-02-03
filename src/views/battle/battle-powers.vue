<script lang="ts">
import store from '@/store';
import { computed, defineComponent, reactive, toRefs } from 'vue';
import { Hero, Villain } from '@/store/modules/models';
import { useBattle } from './use-battle';

interface ComponentState {
  heroes: Hero[];
  villains: Villain[];
  heroSelected: number | null;
  villainSelected: number | null;
  powerSectionTitle: string;
  powerSelected: string;
  result: number | null;
  powers: Array<string>;
}

export default defineComponent({
  name: 'BattlePowers',
  setup() {
    const {
      updateResultAction,
      updateVillainSelectedAction,
      updatePowerSelectedAction,
    } = useBattle();

    const state: ComponentState = reactive({
      heroes: computed(() => store.getters.heroes as Hero[]),
      villains: computed(() => store.getters.villains as Villain[]),
      heroSelected: computed(() => store.getters.heroSelected as any),
      villainSelected: computed(() => store.getters.villainSelected as any),
      powerSelected: computed(() => store.getters.powerSelected as any),
      result: computed(() => store.getters.result as any),
      powerSectionTitle: 'Which power do you want to play?',
      powers: ['speed', 'strength', 'intelligence'],
    });

    function selectVillain() {
      updateVillainSelectedAction(
        Math.floor(Math.random() * state.villains.length)
      );
    }

    function comparePower(val: string) {
      if (!state.result) {
        updatePowerSelectedAction(val);
        selectVillain();
        if (state.heroSelected !== null && state.villainSelected !== null) {
          const powerComparison =
            (state.heroes[state.heroSelected] as any)[val] -
            (state.villains[state.villainSelected] as any)[val];
          if (powerComparison > 0) {
            updateResultAction(0);
          } else if (powerComparison < 0) {
            updateResultAction(1);
          } else {
            updateResultAction(2);
          }
        }
      }
    }

    return {
      ...toRefs(state),
      selectVillain,
      comparePower,
    };
  },
});
</script>

<template>
  <!-- prettier-ignore -->
  <div class="content-container">
    <h2>{{ powerSectionTitle }}</h2>
    <div class="buttons are-medium" :class="{ 'pointer-none': result != null }">
      <button
        v-for="(power, i) in powers" :key="i" 
        @click="comparePower(power)"
        class="button"
      >
        {{ power }}
      </button>
    </div>
  </div>
</template>
