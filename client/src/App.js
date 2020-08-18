import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import Login from './components/Login/Login';

import Register from './components/Register/Register';
import Admin from './components/Admin/Admin';

import HomePage from './components/HomePage/HomePage';

import configStore from './store/config_store';

const store = configStore;

const App = () => {
  
  return (
    <Provider store = { store }>
    <Router>
      <Route path = '/' exact component = { Login } />
      <Route path = '/Register' exact component = { Register } />
      <Route path = "/admin" component = { Admin } />
      <Route path = "/homepage" component = { HomePage } />
    </Router>
    </Provider>
  );
}

export default App;
