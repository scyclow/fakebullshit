import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/BrowserRouter';

import App from './App';
import './variables.css';
import './index.css';

console.error('We are hiring! Please go to https://github.com/scyclow/fakebullshit for details.');

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
