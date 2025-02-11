import { Product } from '@modules/product/models/Product';
import ProductApi from '@modules/product/apis/product.api';
// import { mockProducts } from '@mocks/product/product.mock';
import type { ILogger } from '@/core/types/logger/ILogger';

class ProductService {
  private products: Product[] = [];
  private logger: ILogger;

  constructor(logger: ILogger) {
    this.logger = logger;
  }

  // Fetch all products
  public async fetchProducts(): Promise<Product[]> {
    try {
      const products: Product[] = await ProductApi.fetchProducts();
      this.products = products;

      this.logger?.info('{Products fetched successfully', this.products.length);

      return products;
    } catch (error: any) {
      this.logger?.error(`Function ${this.fetchProducts.name} fetching failed`);

      this.products = [];

      return this.products;
    }
  }
}

export default ProductService;
