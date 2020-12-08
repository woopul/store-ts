import { Product, ProductsQuery } from './../../models/Product';
import { SearchFilter } from '../../app/SearchBar/SearchBar'


export enum ProductsActionTypes {
  SET_PRODUCTS = 'SET_PRODUCTS',
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  SET_ERROR = 'SET_ERROR',
  SET_VALUE = 'SET_VALUE',
  SET_FILTERS = 'SET_FILTERS',
  SET_PAGE = 'SET_PAGE',
  SET_TOTAL_PAGES = 'SET_TOTAL_PAGES',
  SET_LIMIT = 'SET_LIMIT',
}

export interface FetchProducts {
  type: typeof ProductsActionTypes.FETCH_PRODUCTS,
  payload: ProductsQuery;
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

export interface SetValue {
  type: typeof ProductsActionTypes.SET_VALUE,
  payload: {
    searchValue: string;
  };
}

export interface SetPage {
  type: typeof ProductsActionTypes.SET_PAGE,
  payload: {
    page: number;
  };
}

export interface SetTotalPages {
  type: typeof ProductsActionTypes.SET_TOTAL_PAGES,
  payload: {
    totalPages: number
  };
}

export interface SetFilters {
  type: typeof ProductsActionTypes.SET_FILTERS,
  payload: SearchFilter
}

export interface SetLimit {
  type: typeof ProductsActionTypes.SET_LIMIT,
  payload: { limit: number }
}

export type ProductsActions =
  | SetProducts
  | FetchProducts
  | SetError
  | SetValue
  | SetPage
  | SetFilters
  | SetTotalPages
  | SetLimit
