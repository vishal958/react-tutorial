import { all } from 'redux-saga/effects';

import booksSagas from './books/saga';

export default function* rootSaga() {
  yield all([booksSagas()]);
}
