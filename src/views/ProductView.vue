<template>
  <div class="product">
    <h1>This is an product page</h1>
  </div>
</template>

<script setup lang="ts">
  import ProductComponent from '@/modules/product/components/Product.vue';
</script>

<style>
  @media (min-width: 1024px) {
    .product {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>
