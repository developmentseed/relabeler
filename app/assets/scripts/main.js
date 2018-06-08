/* global mapboxgl */
'use strict'

import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import config from './config'
import reducer from './reducers'

mapboxgl.accessToken = config.mbToken

const logger = createLogger({
  level: 'info',
  collapsed: true,
  predicate: (getState, action) => {
    return (config.environment !== 'production')
  }
})

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    logger
  )
)

// Components
import App from './views/app'

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.querySelector('#app-container'))
