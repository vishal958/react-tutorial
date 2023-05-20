import { combineReducers } from 'redux';
import Books from './books/reducer';

const appReducer = combineReducers({
  Books,
});

export default function rootReducer(state, action) {
  return appReducer(state, action);
}
