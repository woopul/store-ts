import {
  ProductsActionTypes,
  ProductsActions
} from './actionTypes';
import { Product } from '../../models/Product'

export interface ProductsState {
  error: string;
  loading: boolean;
  list: Product[];
}

const initialState = {
  error: '',
  loading: true,
  list: []
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

    case ProductsActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
        list: [],
        loading: false
      };
    default:
      return state;
  }
};
