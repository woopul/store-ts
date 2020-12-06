import { useSelector } from 'react-redux';
import { all, put, select, takeLatest } from 'redux-saga/effects';
import { Product } from '../../models/Product';
import { setErrorAction, setProductsAction } from './actions';
import {
  FetchProducts,
  SetProducts,
  ProductsActionTypes
} from './actionTypes';
import { fetchProductsApi } from './api';

function* fetchProductsSaga({ payload: queryParams }: FetchProducts) {
  try {
    const response = yield fetchProductsApi(queryParams);
    console.log('inside sag', response);
    yield put(setProductsAction(response.data.items));
  } catch {
    yield put(setErrorAction('Something went wrong.'));
  }
}

export default function* productsSaga() {
  yield all([
    takeLatest(ProductsActionTypes.FETCH_PRODUCTS, fetchProductsSaga),
  ]);
}
