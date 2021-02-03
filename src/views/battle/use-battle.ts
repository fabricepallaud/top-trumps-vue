import store from '@/store';

export function useBattle() {
  return {
    updateResultAction,
    updateHeroSelectedAction,
    updateVillainSelectedAction,
    updatePowerSelectedAction,
  };

  async function updateResultAction(val: number | null) {
    await store.dispatch('updateResultAction', val);
  }

  async function updateHeroSelectedAction(val: number | null) {
    await store.dispatch('updateHeroSelectedAction', val);
  }

  async function updateVillainSelectedAction(val: number | null) {
    await store.dispatch('updateVillainSelectedAction', val);
  }

  async function updatePowerSelectedAction(val: string) {
    await store.dispatch('updatePowerSelectedAction', val);
  }
}
