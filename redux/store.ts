import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './combinedReducers';
import combinedSagas from './combinedSagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(combinedSagas);

export default store;

export type AppDispatch = typeof store.dispatch;

