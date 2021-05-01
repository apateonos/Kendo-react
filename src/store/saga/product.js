import { all, fork, call, put, take } from 'redux-saga/effects';
import * as Api from '../../api/product';
import * as types from '../action/type';
import { getProductListApi } from '../action/product';

function* getProductListApiSaga () {
  try {
    const data = yield call(Api.getProductList);
    if (yield data.code === 'errors') throw Error;
    yield put(getProductListApi.success(data));
  } catch (err) {
    yield put(getProductListApi.failure(err));
  }
}

function* watchGetProductListApiSaga() {
  while (true) {
    yield take(types.GET_PRODUCT_LIST['REQUEST']);
    yield fork(getProductListApiSaga);
  }
}

export default function* () {
  yield all([
    fork(watchGetProductListApiSaga)
  ])
}