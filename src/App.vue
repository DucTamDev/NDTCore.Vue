<script setup lang="ts">
  import { RouterView } from 'vue-router';
</script>

<template>
  <div class="app-wrapper">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
  .app-wrapper {
    background-color: $background-color;
  }
</style>
