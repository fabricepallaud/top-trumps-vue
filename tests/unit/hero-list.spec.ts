import { shallowMount } from '@vue/test-utils';
import HeroList from '@/views/heroes/hero-list.vue';
import { data } from '../mocks/db';

describe('HeroList', () => {
  it('renders list of heroes', () => {
    const wrapper = shallowMount(HeroList, {
      propsData: { heroes: data.heroes },
    });

    const items = wrapper.findAll('li');

    expect(items).toHaveLength(5);
  });

  it('allows selection of hero', async () => {
    const wrapper = shallowMount(HeroList, {
      propsData: { heroes: data.heroes },
    });

    const editFirst = wrapper.findAll('li')[0].find('.edit-item');
    await editFirst.trigger('clicked');

    expect(wrapper.emitted('selected')).toBeTruthy();
  });

  it('allows deletion of hero', async () => {
    const wrapper = shallowMount(HeroList, {
      propsData: { heroes: data.heroes },
    });

    const deleteFirst = wrapper.findAll('li')[0].find('.delete-item');
    await deleteFirst.trigger('clicked', data.heroes[0]);

    expect(wrapper.emitted('deleted')).toBeTruthy();
  });
});
