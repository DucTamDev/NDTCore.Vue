import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type RawAxiosRequestHeaders
} from 'axios';
import { addHttpInterceptor } from '@/core/interceptors/request';

class BaseService {
  private http!: AxiosInstance;
  private baseURL: string = '';
  private headers: RawAxiosRequestHeaders = {};
  private config: AxiosRequestConfig = {};

  constructor(baseURL: string) {
    this.baseURL = baseURL;

    this.initialize();
  }

  private initialize() {
    this.config = this.defaultConfig();
    this.http = axios.create(this.config);
    addHttpInterceptor(this.http);
  }

  // Method to create default AxiosRequestConfig
  private defaultConfig(): AxiosRequestConfig {
    return {
      baseURL: `${this.baseURL}`,
      headers: this.headers,
      timeout: 10000 // Set a default timeout (optional)
    };
  }

  // Merge config with default this.config
  private mergeConfig(config: AxiosRequestConfig): AxiosRequestConfig {
    return Object.assign({}, this.config, config);
  }

  // GET request method
  protected async get<T>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
    const finalConfig = this.mergeConfig(config);
    const response = await this.http.get<T>(url, finalConfig);
    return response.data;
  }

  // POST request method
  protected async post<T>(url: string, data: any, config: AxiosRequestConfig = {}): Promise<T> {
    const finalConfig = this.mergeConfig(config);
    const response = await this.http.post<T>(url, data, finalConfig);
    return response.data;
  }

  // PUT request method
  protected async put<T>(url: string, data: any, config: AxiosRequestConfig = {}): Promise<T> {
    const finalConfig = this.mergeConfig(config);
    const response = await this.http.put<T>(url, data, finalConfig);
    return response.data;
  }

  // DELETE request method
  protected async delete<T>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
    const finalConfig = this.mergeConfig(config);
    const response = await this.http.delete<T>(url, finalConfig);
    return response.data;
  }
}

export default BaseService;
