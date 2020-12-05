import React from 'react';
import ReactDOM from 'react-dom';
import { AppProviders } from 'providers/AppProviders';
import { Provider } from 'react-redux';
import { App } from './app/App';
import store from './store';
import GlobalStyle from './GlobalStyle';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <AppProviders>
    <GlobalStyle />
      <App />
    </AppProviders>
  </Provider>,
  document.getElementById('root'),
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
