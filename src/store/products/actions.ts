import {
  SetError,
  FetchProducts,
  SetProducts,
  SetValue,
  SetFilters,
  SetPage,
  ProductsActionTypes,
} from './actionTypes';
import { Product, ProductsQuery } from '../../models/Product';
import { SearchFilter } from '../../app/SearchBar/SearchBar'


export const setValueAction = (searchValue: string): SetValue => ({
  type: ProductsActionTypes.SET_VALUE,
  payload: { searchValue }
});

export const setPaginationAction = (
  pageNumber: number
): SetPage => ({
  type: ProductsActionTypes.SET_PAGE,
  payload: {
    page: pageNumber,
  }
});

export const setFilteresAction = (
  filters: SearchFilter,
): SetFilters => ({
  type: ProductsActionTypes.SET_FILTERS,
  payload: filters,
});

export const fetchProductsAction = (
  searchParams: ProductsQuery
): FetchProducts => ({
  type: ProductsActionTypes.FETCH_PRODUCTS,
  payload: searchParams
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