import React from 'react';
import './App.css';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages'
import SigninPage from './pages/signin';
import LoggedinPage from './pages/userLogin';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/userLogin' component={LoggedinPage} exact />
      </Switch>
      
    </Router>
  );
}

export default App;
