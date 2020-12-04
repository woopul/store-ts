import React from 'react';
import ReactDOM from 'react-dom';
import { AppProviders } from 'providers/AppProviders';
import { App } from './app/App';
import GlobalStyle from './GlobalStyle';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <AppProviders>
  <GlobalStyle />
    <App />
  </AppProviders>,
  document.getElementById('root'),
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
