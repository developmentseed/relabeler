import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import HttpsRedirect from 'react-https-redirect';

import store from './store';
import App from './App';

ReactDOM.render(
  <HttpsRedirect>
    <Provider store={store}>
      <BrowserRouter basename='/relabeler'>
        <Switch>
          <Route exact component={App} path='/' />
        </Switch>
      </BrowserRouter>
    </Provider>
  </HttpsRedirect>,
  document.getElementById('root')
);
