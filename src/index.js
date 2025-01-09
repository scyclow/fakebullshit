import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, } from "react-router-dom";

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
