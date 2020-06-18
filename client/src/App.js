import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Admin from './components/Admin/Admin';

import { AuthContext } from "./context/auth";

import PrivateRoute from './PrivateRoute';


const App = () => {
  return (
    <AuthContext.Provider value = {false}>
    <Router>
      <Route path = '/' exact component = { Login } />
      <Route path = '/Register' exact component = { Register } />
      
      <PrivateRoute path = "/admin" component = { Admin } />
    
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
