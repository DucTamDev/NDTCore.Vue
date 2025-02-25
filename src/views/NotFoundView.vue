<template>
  <div class="notfound-view">
    <div class="d-flex flex-column justify-content-between align-items-center">
      <div class="d-flex flex-column align-items-center gap-6 px-4 my-8">
        <NotFoundImage />
        <h1 class="va-h1 text-center sm:text-5xl text-4xl">Page not found</h1>

        <p class="text-center">
          The page you are looking for might have been removed had its name changed or is
          temporarily unavailable.
        </p>

        <div class="d-flex flex-column">
          <router-link to="/" class="btn btn-info">Go back to Home</router-link>
        </div>
      </div>
    </div>
    <div />
  </div>
</template>

<script setup lang="ts">
  import NotFoundImage from '@shared/components/NotFoundImage.vue';
</script>

<style lang="scss" scoped></style>
