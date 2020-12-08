import api from '../../config/api';
import { API_PRODUCT_URI } from '../../constants/api';
import { ProductsQuery } from '../../models/Product'

export const fetchProductsApi = (params: ProductsQuery) => {
  const { searchTerm: search, active, promo, page, limit } = params
  console.log('fetching')
  return api.get(API_PRODUCT_URI, {
    params: {
      search,
      active: active ? true : undefined,
      promo: promo ? true : undefined,
      page,
      limit
    }
  }
  )
};
