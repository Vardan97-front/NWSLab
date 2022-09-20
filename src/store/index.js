import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers/index';
import watcher from './saga/index';

const composeEnhancers = compose;

const saga = createSagaMiddleware();

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(saga)),
);

saga.run(watcher);

export default store;