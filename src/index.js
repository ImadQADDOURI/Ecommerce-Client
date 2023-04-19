
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM  from 'react-dom';
import { render } from '@testing-library/react';
import {BrowserRouter } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/


ReactDOM.render(
  <Provider store={store}>
<BrowserRouter>
<App />
</BrowserRouter>

  </Provider>

,document.getElementById('root')

);
