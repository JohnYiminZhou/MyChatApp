import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Test from './components/Test/Test';


const App = () => {
  return (
    <Router>
      <Route path = '/' exact component = { Login } />
      <Route path = '/Register' exact component = { Register } />
      <Route path = '/Test' exact component = { Test } />
    </Router>

  );
}

export default App;
