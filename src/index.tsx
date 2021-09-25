import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Global } from './styles';

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
