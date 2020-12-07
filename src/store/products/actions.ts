import {
  SetError,
  FetchProducts,
  SetProducts,
  SetValue,
  SetFilters,
  SetPage,
  SetTotalPages,
  ProductsActionTypes,
} from './actionTypes';
import { Product, ProductsQuery } from '../../models/Product';
import { SearchFilter } from '../../app/SearchBar/SearchBar'


export const setValueAction = (searchValue: string): SetValue => ({
  type: ProductsActionTypes.SET_VALUE,
  payload: { searchValue }
});

export const setPageNumberAction = (
  pageNumber: number
): SetPage => ({
  type: ProductsActionTypes.SET_PAGE,
  payload: {
    page: pageNumber,
  }
});

export const setTotalPageNumberAction = (
  totalPages: number
): SetTotalPages => ({
  type: ProductsActionTypes.SET_TOTAL_PAGES,
  payload: {
    totalPages
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