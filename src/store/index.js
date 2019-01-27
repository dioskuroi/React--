import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import appSaga from './sagas'

import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && process.env.NODE_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = new createStore(reducer, enhancer)

function runSaga(sagaArr) {
  sagaArr.forEach(saga => sagaMiddleware.run(saga))
}
runSaga(appSaga)

export default store
