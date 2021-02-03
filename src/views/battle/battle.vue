<script lang="ts">
import { computed, defineComponent, onMounted, reactive, toRefs } from 'vue';

import store from '@/store';
import { useHeroes } from '@/views/heroes/use-heroes';
import { useVillains } from '@/views/villains/use-villains';
import { Hero, Villain } from '@/store/modules/models';
import CardContent from '@/components/card-content.vue';
import { useBattle } from './use-battle';
import BattlePowers from './battle-powers.vue';

const captains = console;

interface ComponentState {
  errorMessage: string;
  title: string;
  heroes: Hero[];
  villains: Villain[];
  pickCardButtonCaption: string;
  userCardSectionTitle: string;
  heroSelected: number | null;
  villainSelected: number | null;
  powerSelectedCaption: string;
  powerSelected: string;
  result: number | null;
  resultMessages: Array<string>;
}

export default defineComponent({
  name: 'Battle',
  components: {
    CardContent,
    BattlePowers,
  },
  setup() {
    const { getHeroesAction } = useHeroes();

    const { getVillainsAction } = useVillains();

    const {
      updateResultAction,
      updateHeroSelectedAction,
      updateVillainSelectedAction,
    } = useBattle();

    const state: ComponentState = reactive({
      errorMessage: '',
      title: 'Battle',
      heroes: computed(() => store.getters.heroes as Hero[]),
      villains: computed(() => store.getters.villains as Villain[]),
      result: computed(() => store.getters.result as any),
      heroSelected: computed(() => store.getters.heroSelected as any),
      villainSelected: computed(() => store.getters.villainSelected as any),
      pickCardButtonCaption: 'Pick a card',
      userCardSectionTitle: 'Your card:',
      computerCardSectionTitle: "Computer's card:",
      powerSelectedCaption: '-wise',
      powerSelected: computed(() => store.getters.powerSelected as any),
      resultMessages: [
        'your card is stronger!',
        "computer's card is stronger!",
        "it's a draw!",
      ],
    });

    onMounted(() => {
      reset();
      getHeroes();
      getVillains();
    });

    async function getHeroes() {
      state.errorMessage = '';
      try {
        await getHeroesAction();
      } catch (error) {
        captains.error(error);
        state.errorMessage = 'Unauthorized';
      }
    }

    async function getVillains() {
      state.errorMessage = '';
      try {
        await getVillainsAction();
      } catch (error) {
        captains.error(error);
        state.errorMessage = 'Unauthorized';
      }
    }

    function selectHero() {
      updateHeroSelectedAction(Math.floor(Math.random() * state.heroes.length));
    }

    function selectVillain() {
      updateVillainSelectedAction(
        Math.floor(Math.random() * state.villains.length)
      );
    }

    function reset() {
      updateHeroSelectedAction(null);
      updateVillainSelectedAction(null);
      updateResultAction(null);
    }

    return {
      ...toRefs(state),
      getHeroes,
      selectHero,
      selectVillain,
      reset,
    };
  },
});
</script>

<template>
  <!-- prettier-ignore -->
  <div class="content-container">
    <div class="content-title-group">
      <h2 class="title">{{ title }}</h2>
      <button
        class="button refresh-button"
        @click="reset"
        aria-label="refresh"
      >
        <i class="fas fa-sync" aria-hidden="true"></i>
      </button>
    </div>

    <button
      v-if="heroSelected === null"
      @click="selectHero"
      class="button is-medium"
    >
      {{ pickCardButtonCaption }}
    </button>

    <div v-else class="userCard">
      <div class="block">
        <h2>{{ userCardSectionTitle }}</h2>
        <div class="card">
          <CardContent
            :name="heroes[heroSelected].name"
            :description="heroes[heroSelected].description"
            :speed="heroes[heroSelected].speed"
            :strength="heroes[heroSelected].strength"
            :intelligence="heroes[heroSelected].intelligence"
          />
        </div>
      </div>

      <div class="block">
        <BattlePowers />
      </div>
    </div>

    <div v-if="villainSelected !== null">
      <div class="block computerCard">
        <h2>{{ computerCardSectionTitle }}</h2>
        <div class="card">
          <CardContent
            :name="villains[villainSelected].name"
            :description="villains[villainSelected].description"
            :speed="villains[villainSelected].speed"
            :strength="villains[villainSelected].strength"
            :intelligence="villains[villainSelected].intelligence"
          />
        </div>
      </div>
    </div>

    <div v-if="result !== null" class="result">
      <span class="caption">{{ powerSelected }}</span>{{ powerSelectedCaption }},
      <span class="winner">{{ resultMessages[result] }}</span>
    </div>
  </div>
</template>
