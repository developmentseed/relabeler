import {
    createStore,
    combineReducers,
    applyMiddleware
  } from 'redux';

  import thunk from 'redux-thunk';
  import { apiMiddleware } from 'redux-api-middleware';
//   import reducer from '../reducers/reducer';
//   import stylesheetReducer from '../reducers/stylesheetReducer';
//   import filterReducer from '../reducers/filterReducer';
  
  const initialState = {};
  const store = createStore(
    combineReducers({
    //   stylesheet: stylesheetReducer,
    //   filter: filterReducer,
    //   reducer
    }),
    initialState,
    applyMiddleware(
      thunk,
      apiMiddleware
    )
  );
  
  export default store