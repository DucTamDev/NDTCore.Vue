<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';
</script>

<template>
  <div class="home-wrapper">
    <h3>Home page</h3>
    <button type="button" class="btn btn-primary">Primary</button>
  </div>
</template>

<style lang="scss" scoped>
  .home-wrapper {
    width: 100%;

    h3 {
      color: blue;
    }
  }

  @media (min-width: 1024px) {
    .home-wrapper {
      min-height: 80vh;
      display: flex;
      align-items: center;
    }
  }
</style>
