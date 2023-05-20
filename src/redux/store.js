import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const bindMiddleWare = (middlewares) => {
  return applyMiddleware(...middlewares);
};

const store = createStore(rootReducer, bindMiddleWare(middlewares));

sagaMiddleware.run(rootSaga);
export default store;
