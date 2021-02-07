import { shallowMount } from '@vue/test-utils';
import BattlePowers from '@/views/battle/battle-powers.vue';
import store from '@/store';

describe('BattlePowers', () => {
  it('updates store variable powerSelected with power clicked by user', async () => {
    const wrapper = shallowMount(BattlePowers, {});

    await wrapper.findAll('.power')[1].trigger('click');

    expect(store.getters['powerSelected']).not.toBe('');
  });
});
