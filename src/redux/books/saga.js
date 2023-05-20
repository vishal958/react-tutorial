import { all, takeLatest } from 'redux-saga/effects';
import actions from './actions';
import getBooks from './sagas';

export default function* rootSaga() {
  yield all([yield takeLatest(actions.GET_BOOKS, getBooks)]);
}
