import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import News from './components/News'
import Navbar from './components/CustomNavbar'
import Login from './components/Login'
import HackerSignup from './components/HackerSignup'
import OrganizationSignup from './components/OrganizationSignup'

import './App.css';

{ /* components */ }
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          { /* render navbar */}
          <Navbar />

          { /* routing for endpoint */}
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/news' component={News} />
          <Route path='/login' component={Login} />
          <Route path='/signup-hacker' component={HackerSignup} />
          <Route path='/signup-organization' component={OrganizationSignup} />
        </div>
      </Router>
    );
  }
}

{ /* export the component */ }
export default App;
