import { createStore, applyMiddleware } from 'redux'
const reduxSaga = require('redux-saga');
const createSagaMiddleware = reduxSaga.default || reduxSaga;
import logger from 'redux-logger'
import reducers from './reducers'
import rootSaga from './sagas'
import async_storage from './async_storage/index'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  // middlewares.push(logger)
}

const rootStore = createStore(reducers, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export const store = rootStore

export const asyncStorage = async_storage