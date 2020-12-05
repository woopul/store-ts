import { fetchProductsAction } from './actions';
import api from '../../config/api';
import { API_PRODUCT_URI } from '../../constants/api';

export const fetchProductsApi = (searchTerm?: string, limit?: number, page?: number, promo?: boolean, active?: boolean ) =>
  api.get(API_PRODUCT_URI, {
    params: {
      search: searchTerm,
      limit,
      page,
      promo,
      active
    }
  });
