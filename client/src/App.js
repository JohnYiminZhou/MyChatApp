import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Test from './components/Test/Test';
import Chat from './components/Test/Chat/Chat';
import Dashboard from './components/Test/Dashboard/Dashboard';


const App = () => {
  return (
    <Router>
      <Route path = '/' exact component = { Login } />
      <Route path = '/Register' exact component = { Register } />
      <Route path = '/Test' exact component = { Test } />
      <Route path = '/Chat' exact component = { Chat } />
      <Route path = '/Dashboard' exact component = { Dashboard} />
    </Router>

  );
}

export default App;
