import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// views
import Login from 'views/login/Login';
import Register from 'views/register/Register';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
