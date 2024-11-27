<template>
  <div class="product">
    <h1>This is an product component</h1>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useProductStore } from '@modules/product/store/product.store';
  const productStore = useProductStore();

  onMounted(() => {
    productStore.fetchProducts();
  });
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
