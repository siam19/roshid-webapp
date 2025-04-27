// Product types
export interface Product {
  _id: string;
  store_id: string;
  availability: boolean;
  price: number;
  content: {
    name: string;
    description: string;
    images: string[];
  };
  delivery_method: string;
  stock_id?: string;
}

// Stock types
export interface StockItem {
  _id: string;
  product_id: string;
  quantity: number;
  created_at: string;
}

// Delivery types
export interface DeliveryRequest {
  service_name: string;
  order_id: string;
  pickup_address: string;
  delivery_address: string;
  items: Array<{
    product_id: string;
    quantity: number;
  }>;
}

export interface DeliveryResponse {
  tracking_id: string;
  estimated_delivery: string;
  status: string;
}

// Page types
export interface Page {
  _id: string;
  title: string;
  slug: string;
  content: string;
  published: boolean;
}

// API Response types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}