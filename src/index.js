import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma';

import App from './AppContainer';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import reducers from './reducers'
import sagas from './sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

let composeEnhancers = compose

if (process.env.NODE_ENV === 'development') {
  const composeWithDevToolsExtension =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  if (typeof composeWithDevToolsExtension === 'function') {
    composeEnhancers = composeWithDevToolsExtension
  }
}

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(sagas)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
