import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Landing from './components/pages/Landing';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/pages/auth/Register';
import Login from './components/pages/auth/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <div className='container'>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
