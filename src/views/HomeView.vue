<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';
</script>

<template>
  <div class="home-view"></div>
</template>

<style lang="scss" scoped>
  .home-view {
    width: 100%;

    h3 {
      color: blue;
    }
  }

  @media (min-width: 1024px) {
    .home-view {
      display: flex;
      align-items: center;
    }
  }
</style>
