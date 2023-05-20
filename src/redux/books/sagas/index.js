import { put, call } from 'redux-saga/effects';
import actions from '../actions';

export default function* getBooks(action) {
  try {
    const response = yield call(getBooksApi);
    // yield put(actions.setBooks(response));
    if (response.status === 200) {
      yield put(actions.setBooks(response));
    } else {
      yield put(actions.bookFailure(response));
    }
  } catch (err) {
    yield put(actions.bookFailure(err));
  }
}

function getBooksApi() {
  console.log('saga called');
  return new Promise((resolve, reject) => {
    resolve({ data: 'SAGA_CALLED' });
  });
}
