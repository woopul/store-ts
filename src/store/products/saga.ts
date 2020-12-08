import { all, put, takeLatest } from 'redux-saga/effects';
import { setErrorAction, setProductsAction, setTotalPageNumberAction } from './actions';
import {
  FetchProducts,
  ProductsActionTypes
} from './actionTypes';
import { fetchProductsApi } from './api';

function* fetchProductsSaga({ payload: queryParams }: FetchProducts) {
  try {
    const response = yield fetchProductsApi(queryParams);
    console.log('inside sag', response);
    yield put(setProductsAction(response.data.items));
    yield put(setTotalPageNumberAction(response.data.meta.totalPages));
  } catch {
    yield put(setErrorAction('Something went wrong.'));
  }
}

export default function* productsSaga() {
  yield all([
    takeLatest(ProductsActionTypes.FETCH_PRODUCTS, fetchProductsSaga),
  ]);
}
