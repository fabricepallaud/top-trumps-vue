<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardContent',
  props: {
    name: {
      type: String,
      default: () => '',
    },
    description: {
      type: String,
      default: () => '',
    },
    speed: {
      type: String,
      default: () => '',
    },
    strength: {
      type: String,
      default: () => '',
    },
    intelligence: {
      type: String,
      default: () => '',
    },
  },
});
</script>

<template>
  <div class="card-content">
    <div class="content">
      <div class="name">{{ name }}</div>
      <div class="description">{{ description }}</div>
      <div class="power">
        <span>Speed:</span>
        {{ speed }}
      </div>
      <div class="power">
        <span>Strength:</span>
        {{ strength }}
      </div>
      <div class="power">
        <span>Intelligence:</span>
        {{ intelligence }}
      </div>
    </div>
  </div>
</template>
