import { all } from 'redux-saga/effects';
import productsSaga from './products/saga';

export default function* rootSaga() {
  yield all([productsSaga()]);
}
