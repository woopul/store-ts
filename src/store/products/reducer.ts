import {
  ProductsActionTypes,
  ProductsActions
} from './actionTypes';
import { Product } from '../../models/Product'

export interface ProductsState {
  page: number,
  searchTerm: string,
  filters: {
    promo: boolean | undefined,
    active: boolean | undefined,
  },
  error: string;
  loading: boolean;
  list: Product[];
}

const initialState = {
  page: 1,
  searchTerm: '',
  filters: {
    promo: undefined,
    active: undefined,
  },
  error: '',
  loading: true,
  list: []
};

export default (
  state: ProductsState = initialState,
  action: ProductsActions
): ProductsState => {
  console.log(state)
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
      console.log('reducer', action.payload)
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      };

    case ProductsActionTypes.SET_VALUE:
      return {
        ...state,
        searchTerm: action.payload.searchValue
      };
    default:
      return state;
  }
};
