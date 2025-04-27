import { apiClient } from './client';
import { DeliveryRequest, DeliveryResponse, ApiResponse } from './types';

/**
 * Delivery API service for handling all delivery-related API calls
 */
export const deliveryApi = {
  /**
   * Request a delivery service
   */
  async requestDelivery(
    serviceName: string, 
    deliveryData: Omit<DeliveryRequest, 'service_name'>
  ): Promise<ApiResponse<DeliveryResponse>> {
    return apiClient.post<DeliveryResponse, Omit<DeliveryRequest, 'service_name'>>(
      `/delivery/${serviceName}/request`,
      deliveryData
    );
  },

  /**
   * Get delivery status by tracking ID
   */
  async getDeliveryStatus(trackingId: string): Promise<ApiResponse<DeliveryResponse>> {
    return apiClient.get<DeliveryResponse>(`/delivery/status/${trackingId}`);
  },

  /**
   * Get all available delivery services
   */
  async getAvailableServices(): Promise<ApiResponse<string[]>> {
    return apiClient.get<string[]>('/delivery/services');
  },

  /**
   * Cancel a delivery request
   */
  async cancelDelivery(trackingId: string): Promise<ApiResponse<{ success: boolean }>> {
    return apiClient.post<{ success: boolean }, { tracking_id: string }>(
      '/delivery/cancel',
      { tracking_id: trackingId }
    );
  }
};