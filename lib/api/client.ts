import { ApiResponse } from './types';

/**
 * Base API Client for making requests to the backend
 */
export class ApiClient {
  private baseUrl: string;

  constructor() {
    // Read from environment variable, with fallback
    this.baseUrl = `http://${process.env.FASTAPI_SERVER_URL || 'localhost/api'}`;
  }

  /**
   * Make a GET request to the API
   */
  async get<T>(endpoint: string, cache: RequestCache = 'default'): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache,
        next: { revalidate: 3600 }, // Cache for 1 hour by default
      });

      const data = await response.json();
      
      return {
        data: response.ok ? data : undefined,
        error: response.ok ? undefined : data.error || 'Unknown error occurred',
        status: response.status,
      };
    } catch (error) {
      console.error(`API GET Error (${endpoint}):`, error);
      return {
        error: error instanceof Error ? error.message : 'Network error',
        status: 500,
      };
    }
  }

  /**
   * Make a POST request to the API
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async post<T, R = any>(endpoint: string, body: R): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      
      return {
        data: response.ok ? data : undefined,
        error: response.ok ? undefined : data.error || 'Unknown error occurred',
        status: response.status,
      };
    } catch (error) {
      console.error(`API POST Error (${endpoint}):`, error);
      return {
        error: error instanceof Error ? error.message : 'Network error',
        status: 500,
      };
    }
  }

  /**
   * Make a PUT request to the API
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async put<T, R = any>(endpoint: string, body: R): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      
      return {
        data: response.ok ? data : undefined,
        error: response.ok ? undefined : data.error || 'Unknown error occurred',
        status: response.status,
      };
    } catch (error) {
      console.error(`API PUT Error (${endpoint}):`, error);
      return {
        error: error instanceof Error ? error.message : 'Network error',
        status: 500,
      };
    }
  }

  /**
   * Make a DELETE request to the API
   */
  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      
      return {
        data: response.ok ? data : undefined,
        error: response.ok ? undefined : data.error || 'Unknown error occurred',
        status: response.status,
      };
    } catch (error) {
      console.error(`API DELETE Error (${endpoint}):`, error);
      return {
        error: error instanceof Error ? error.message : 'Network error',
        status: 500,
      };
    }
  }
}

// Create a singleton instance to be used throughout the app
export const apiClient = new ApiClient();