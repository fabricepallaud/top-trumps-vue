<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  SetupContext,
  toRefs,
  watch,
} from 'vue';
import ButtonFooter from '@/components/button-footer.vue';
import { Villain } from '@/store/modules/models';

interface Props {
  villain: Villain;
}

interface ComponentState {
  addMode: boolean;
  editingVillain: Villain;
}

export default defineComponent({
  name: 'VillainDetail',
  props: {
    villain: {
      type: Object as PropType<Villain>,
      default: () => new Villain(''),
    },
  },
  components: { ButtonFooter },
  setup(props: Props, { emit }: SetupContext) {
    const { villain } = toRefs(props);
    const state: ComponentState = reactive({
      addMode: false,
      editingVillain: { ...villain.value },
    });

    watch(villain, (/* newValue, oldValue */) => {
      if (villain.value && villain.value.id) {
        state.editingVillain = { ...villain.value };
        state.addMode = false;
      } else {
        state.editingVillain = {
          id: '',
          name: '',
          description: '',
          speed: '',
          strength: '',
          intelligence: '',
        };
        state.addMode = true;
      }
    });

    function clear() {
      emit('unselect');
    }

    function saveVillain() {
      emit('save', state.editingVillain);
      clear();
    }

    return { ...state, clear, saveVillain };
  },
});
</script>

<template>
  <div class="card edit-detail">
    <header class="card-header">
      <p class="card-header-title">{{ editingVillain.name }}</p>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="field" v-if="editingVillain.id">
          <label class="label" for="id">id</label>
          <input
            class="input"
            name="id"
            placeholder="e.g. VillainColleen"
            readonly
            type="text"
            v-model="editingVillain.id"
          />
        </div>
        <div class="field">
          <label class="label" for="name">name</label>
          <input
            class="input"
            name="name"
            placeholder="e.g. Colleen"
            type="text"
            v-model="editingVillain.name"
          />
        </div>
        <div class="field">
          <label class="label" for="description">description</label>
          <input
            class="input"
            name="description"
            placeholder="dance fight!"
            type="text"
            v-model="editingVillain.description"
          />
        </div>
        <div class="field">
          <label class="label" for="speed">speed</label>
          <input
            class="input"
            name="speed"
            placeholder="e.g. 5"
            type="text"
            v-model="editingVillain.speed"
          />
        </div>
        <div class="field">
          <label class="label" for="strength">strength</label>
          <input
            class="input"
            name="strength"
            placeholder="e.g. 5"
            type="text"
            v-model="editingVillain.strength"
          />
        </div>
        <div class="field">
          <label class="label" for="intelligence">intelligence</label>
          <input
            class="input"
            name="description"
            placeholder="e.g. 5"
            type="text"
            v-model="editingVillain.intelligence"
          />
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <ButtonFooter
        class="card-footer-item"
        label="Cancel"
        :className="'cancel-button'"
        :iconClasses="'fas fa-undo'"
        :item="editingVillain"
        @clicked="clear"
      ></ButtonFooter>
      <ButtonFooter
        class="card-footer-item"
        :className="'save-button'"
        :iconClasses="'fas fa-save'"
        :item="editingVillain"
        label="Save"
        @clicked="saveVillain"
      ></ButtonFooter>
    </footer>
  </div>
</template>
