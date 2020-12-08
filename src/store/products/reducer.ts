import {
  ProductsActionTypes,
  ProductsActions
} from './actionTypes';
import { Product } from '../../models/Product'

export interface ProductsState {
  error: string;
  filters: {
    promo: boolean | undefined,
    active: boolean | undefined,
  },
  limit: number,
  links: {
    first: string
    last: string
  }
  list: Product[];
  loading: boolean;
  totalPages: number | null;
  page: number,
  searchTerm: string,
}

const initialState = {
  error: '',
  filters: {
    promo: undefined,
    active: undefined,
  },
  limit: 10,
  links: {
    first: '',
    last: '',
  },
  list: [],
  loading: true,
  page: 1,
  searchTerm: '',
  totalPages: null,
};

export default (
  state: ProductsState = initialState,
  action: ProductsActions
): ProductsState => {
  switch (action.type) {
    case ProductsActionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        list: [],
        loading: true
      };

    case ProductsActionTypes.SET_PRODUCTS:
      return {
        ...state,
        loading: false,
        list: action.payload.products
      };

    case ProductsActionTypes.SET_LIMIT:
      return {
        ...state,
        limit: action.payload.limit
      };

    case ProductsActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
        list: [],
        loading: false
      };

    case ProductsActionTypes.SET_VALUE:
      return {
        ...state,
        searchTerm: action.payload.searchValue
      };

    case ProductsActionTypes.SET_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      };

    case ProductsActionTypes.SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload.totalPages
      };

    case ProductsActionTypes.SET_PAGE:
      return {
        ...state,
        page: action.payload.page
      };

    default:
      return state;
  }
};
