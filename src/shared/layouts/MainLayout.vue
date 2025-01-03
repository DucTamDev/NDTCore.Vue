<template>
  <div class="main-layout">
    <Header />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
  import Header from '@/shared/components/header/Header.vue';
  import Footer from '@/shared/components/footer/Footer.vue';
</script>

<style scoped></style>
