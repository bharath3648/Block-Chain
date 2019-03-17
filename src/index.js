import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';
import Payment from './components/Payment';
import UsersList from './components/UsersList';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/payment" exact component={Payment} />
        <Route path="/users-list" exact component={UsersList} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
  );
