import { AppState } from '../rootReducer';

export const selectProductsError = (state: AppState) =>
  state.products.error;
export const selectProductsLoading = (state: AppState) =>
  state.products.loading;
export const selectProductsList = (state: AppState) => state.products.list;

export const selectProductsFilters = (state: AppState) => state.products.filters;
export const selectProductsPage = (state: AppState) => state.products.page;
export const selectProductsTotalPages = (state: AppState) => state.products.totalPages;
export const selectProductsSearchTerm = (state: AppState) => state.products.searchTerm;
export const selectProductsPerPageLimit = (state: AppState) => state.products.limit;
