import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Landing/Home'
import About from './components/Landing/About'
import News from './components/Landing/News'
import Navbar from './components/Landing/CustomNavbar'
import HackerSignup from './components/Landing/HackerSignup'
import OrganizationSignup from './components/Landing/OrganizationSignup'
import HackerMain from './components/Hacker/HackerMain'
import HackerBio from './components/Hacker/HackerBio'

import './App.css';

                { /* components */ }
class App extends Component {
  render() {
    return (
      <Router>
              { /* render navbar */ }
        <Navbar />

              { /* routing for endpoint */ }
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/news' component={News} />
        <Route path='/signup-hacker' component={HackerSignup} />
        <Route path='/signup-organization' component={OrganizationSignup} />
        <Route path='/hacker-challenges' component={HackerMain} />
        <Route exact path='/hacker-bio' component={HackerBio} />
      </Router>
    );
  }
}

                { /* export the component */ }
export default App;
