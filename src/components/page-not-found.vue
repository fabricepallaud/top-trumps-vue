<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageNotFound',
});
</script>

<style scoped lang="scss">
.not-found {
  i {
    font-size: 20px;
    margin-right: 8px;
  }
  .title {
    letter-spacing: 0px;
    font-weight: normal;
    font-size: 24px;
    text-transform: none;
  }
}
</style>

<template>
  <div class="content-container">
    <div class="content-title-group not-found">
      <i class="fas fa-exclamation-triangle" aria-hidden="true"></i> &nbsp;
      <span class="title">These aren't the bits you're looking for</span>
    </div>
  </div>
</template>
