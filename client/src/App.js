import React, { useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Admin from './components/Admin/Admin';

import { AuthContext } from "./context/auth";

import PrivateRoute from './PrivateRoute';
import HomePage from './components/HomePage/HomePage';


const App = (props) => {
  const exisitingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(exisitingTokens);

  const setTokens = (data) => {
    localStorage.setItem("Tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value = { { authTokens, setAuthTokens: setTokens }}>
    <Router>
      <Route path = '/' exact component = { Login } />
      <Route path = '/Register' exact component = { Register } />
      
      <PrivateRoute path = "/admin" component = { Admin } />
      <Route path = "/homepage" component = { HomePage } />
      
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
