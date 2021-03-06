<script lang="ts">
import { defineComponent, SetupContext } from 'vue';
import ButtonFooter from '@/components/button-footer.vue';
import CardContent from '@/components/card-content.vue';
import { Hero } from '@/store/modules/models';

const captains = console;

interface Props {
  heroes: Array<Hero>;
}

export default defineComponent({
  name: 'HeroList',
  props: {
    heroes: {
      type: Array as () => Array<Hero>,
      default: () => [],
    },
  },
  components: {
    CardContent,
    ButtonFooter,
  },
  setup(props: Props, { emit }: SetupContext) {
    function deleteHero(hero: Hero) {
      emit('deleted', hero);
      captains.log(`You tried to delete ${hero.name}`);
    }
    function selectHero(hero: Hero) {
      captains.log(`You tried to select ${hero.name}`);
      emit('selected', hero);
    }

    return { deleteHero, selectHero };
  },
});
</script>
<style lang="scss">
/**
* To apply these animations:
* 1. Uncomment the styles
* 2. Convert the <ul> into a <transition-group tag="ul" name="list-complete" class="list" mode="out-in">
* 3. Add class="list-complete-item" to the <li>
**/
.list-complete-item {
  transition: all 700ms;
  // display: inline-block;
  margin-top: 10px !important;
}

.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
// .list-complete-leave-active {
//   position: absolute;
// }

.list-item {
  // display: block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 700ms;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>

<template>
  <ul class="list">
    <li v-for="(hero, index) in heroes" :key="hero.id" role="presentation">
      <div class="card">
        <CardContent
          :name="hero.name"
          :description="hero.description"
          :speed="hero.speed"
          :strength="hero.strength"
          :intelligence="hero.intelligence"
        />
        <footer class="card-footer">
          <ButtonFooter
            class="delete-item"
            iconClasses="fas fa-trash"
            label="Delete"
            :dataId="hero.id"
            :dataIndex="index"
            :item="hero"
            @clicked="deleteHero"
          />
          <ButtonFooter
            class="edit-item"
            iconClasses="fas fa-edit"
            label="Edit"
            :dataId="hero.id"
            :dataIndex="index"
            :item="hero"
            @clicked="selectHero"
          />
        </footer>
      </div>
    </li>
  </ul>
</template>
