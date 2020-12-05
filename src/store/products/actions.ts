import {
  SetError,
  FetchProducts,
  SetProducts,
  ProductsActionTypes,
} from './actionTypes';
import { Product } from '../../models/Product';

export const fetchProductsAction = (
  searchTerm?: string
): FetchProducts => ({
  type: ProductsActionTypes.FETCH_PRODUCTS,
  payload: {
    searchTerm
  }
});

export const setProductsAction = (
  products: Product[]
): SetProducts => ({
  type: ProductsActionTypes.SET_PRODUCTS,
  payload: {
    products
  }
});

export const setErrorAction = (error: string): SetError => ({
  type: ProductsActionTypes.SET_ERROR,
  payload: {
    error
  }
});