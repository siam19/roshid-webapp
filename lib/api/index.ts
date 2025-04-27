// Re-export all API modules for easy importing
export * from './types';
export * from './client';
export * from './products';
export * from './delivery';
export * from './page';

// You can also create named exports for convenience
import { productsApi } from './products';
import { deliveryApi } from './delivery';
import { pageApi } from './page';

// Export a single API object that combines all APIs
export const api = {
  products: productsApi,
  delivery: deliveryApi,
  page: pageApi,
};