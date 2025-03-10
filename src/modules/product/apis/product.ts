import BaseService from '@/core/services/base';
import type { Product } from '@modules/product/models/Product';

class ProductApi extends BaseService {
  constructor() {
    const productURL = import.meta.env.VITE_PRODUCT_API_BASE_URL;
    super(productURL);
  }

  // Fetch all products
  fetchProducts() {
    return this.get<Product[]>('/product');
  }

  // Fetch a single product by ID
  fetchProductById(id: number) {
    return this.get<Product>(`/product/${id}`);
  }

  // Create a new product
  createProduct(data: Product) {
    return this.post<Product>('/product/', data);
  }

  // Create new list product
  createProducts(data: Product[]) {
    return this.post<Product>('/product/news', data);
  }

  // Update an existing product
  updateProduct(id: number, data: any) {
    return this.put(`/product/${id}`, data);
  }

  // Delete a product
  deleteProduct(id: number) {
    return this.delete(`/product/${id}`);
  }
}

export default new ProductApi();
