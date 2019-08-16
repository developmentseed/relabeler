import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import reducers from '../reducers';

const initialState = {};
const store = createStore(
  combineReducers({
    ...reducers
  }),
  initialState,
  applyMiddleware(thunk, apiMiddleware)
);

export default store;
