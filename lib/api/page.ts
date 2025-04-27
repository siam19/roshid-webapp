import { apiClient } from './client';
import { Page, ApiResponse } from './types';

/**
 * Page API service for handling all page-related API calls
 */
export const pageApi = {
  /**
   * Create a new page
   */
  async createPage(pageData: Omit<Page, '_id'>): Promise<ApiResponse<Page>> {
    return apiClient.post<Page, Omit<Page, '_id'>>('/page/create', pageData);
  },

  /**
   * Get a specific page by ID
   */
  async getPageById(pageId: string): Promise<ApiResponse<Page>> {
    return apiClient.get<Page>(`/page/${pageId}`);
  },

  /**
   * Get a page by slug
   */
  async getPageBySlug(slug: string): Promise<ApiResponse<Page>> {
    return apiClient.get<Page>(`/page/slug/${slug}`);
  },

  /**
   * Update a page
   */
  async updatePage(pageId: string, pageData: Partial<Page>): Promise<ApiResponse<Page>> {
    return apiClient.put<Page, Partial<Page>>(`/page/${pageId}`, pageData);
  },

  /**
   * Delete a page
   */
  async deletePage(pageId: string): Promise<ApiResponse<{ success: boolean }>> {
    return apiClient.delete<{ success: boolean }>(`/page/${pageId}`);
  },

  /**
   * Get all pages (potentially with filters)
   */
  async getAllPages(options: { publishedOnly?: boolean } = {}): Promise<ApiResponse<Page[]>> {
    const queryParams = new URLSearchParams();
    
    if (options.publishedOnly) {
      queryParams.append('published_only', 'true');
    }
    
    const queryString = queryParams.toString();
    const endpoint = queryString ? `/page/all?${queryString}` : '/page/all';
    
    return apiClient.get<Page[]>(endpoint);
  }
};