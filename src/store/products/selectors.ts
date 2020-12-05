import { AppState } from '../rootReducer';

export const selectProductsError = (state: AppState) =>
  state.products.error;
export const selectProductsLoading = (state: AppState) =>
  state.products.loading;
export const selectProductsList = (state: AppState) => state.products.list;
