import { apiClient } from './client';
import { Product, ApiResponse } from './types';

/**
 * Product API service for handling all product-related API calls
 */
export const productsApi = {
  /**
   * Fetch all products
   */
  async getAllProducts(): Promise<ApiResponse<Product[]>> {
    return apiClient.get<Product[]>('/products/all');
  },

  /**
   * Get a specific product by ID
   */
  async getProductById(productId: string): Promise<ApiResponse<Product>> {
    return apiClient.get<Product>(`/products/${productId}`);
  },

  /**
   * Create a new product
   */
  async createProduct(productData: Omit<Product, '_id'>): Promise<ApiResponse<Product>> {
    return apiClient.post<Product, Omit<Product, '_id'>>('/products/create', productData);
  },

  /**
   * Add stock to a product
   */
  async addStock(productId: string, quantity: number): Promise<ApiResponse<{ success: boolean }>> {
    return apiClient.post<{ success: boolean }, { quantity: number }>(
      `/products/${productId}/stock/add`,
      { quantity }
    );
  },

  /**
   * Remove stock from a product
   */
  async removeStock(productId: string, quantity: number): Promise<ApiResponse<{ success: boolean }>> {
    return apiClient.post<{ success: boolean }, { quantity: number }>(
      `/products/${productId}/stock/remove`,
      { quantity }
    );
  },

  /**
   * Update a product
   */
  async updateProduct(productId: string, productData: Partial<Product>): Promise<ApiResponse<Product>> {
    return apiClient.put<Product, Partial<Product>>(
      `/products/${productId}`,
      productData
    );
  },

  /**
   * Delete a product
   */
  async deleteProduct(productId: string): Promise<ApiResponse<{ success: boolean }>> {
    return apiClient.delete<{ success: boolean }>(`/products/${productId}`);
  }
};