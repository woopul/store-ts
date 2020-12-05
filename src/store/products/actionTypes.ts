import { setProductsAction } from './actions';
import { Product } from './../../models/Product';

export enum ProductsActionTypes {
  SET_PRODUCTS = 'SET_PRODUCTS',
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  SET_ERROR = 'SET_ERROR'
}

export interface FetchProducts {
  type: typeof ProductsActionTypes.FETCH_PRODUCTS,
  payload: {
    searchTerm?: string;
  };
}

export interface SetProducts {
  type: typeof ProductsActionTypes.SET_PRODUCTS,
  payload: {
    products: Product[];
  };
}

export interface SetError {
  type: typeof ProductsActionTypes.SET_ERROR,
  payload: {
    error: string;
  };
}

export type ProductsActions =
  | SetProducts
  | FetchProducts
  | SetError
