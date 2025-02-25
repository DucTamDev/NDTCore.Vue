import { defineStore } from 'pinia';
import { inject } from 'vue';
import ProductService from '@modules/product/services/product.service';
import type { ILogger } from '@core/types/logger/ILogger';
import type { Product } from '@modules/product/models/Product';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [] as Array<Product>,
    isLoading: false,
    error: ''
  }),
  actions: {
    async fetchProducts() {
      this.isLoading = true;
      this.error = '';
      try {
        const logger = inject('$logger') as ILogger;
        const productService = new ProductService(logger);

        const response = await productService.fetchProducts();
        this.products = response;
      } catch (err) {
        this.error = 'Failed to fetch products';
      } finally {
        this.isLoading = false;
      }
    }
  }
});
