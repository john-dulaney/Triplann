// Funtionality Imports
import React, { Component } from 'react';
import createHistory from "history/createBrowserHistory"
import { browserHistory, Router, Route } from 'react-router';

// Browser Component imports
import palm from './Common/palm.png';
import NavBar from './Common/navbar';
import Login from './Common/loginForm';
import DisplayCheckList from './Checklist/DisplayCheckList';

// styles
import './App.css';


// Class Begin
class App extends Component {
  render() {
    return (
      <div className="App">
            <NavBar />
        <header className="App-header">
          <img src={palm} className="App-logo" alt="logo" />
          <h1 className="App-title">Whats up idiot? Welcome to Triplann.</h1>
        </header>

        <p className="App-intro">
        I drink your milkshake timothy dalton funny walk mexican casual style Fallen eyebrow basil fawlty sam elliott, funny walk great dictator casual style wario mexican middle eastern despot burt reynolds timothy dalton Fallen eyebrow I drink your milkshake casual style sam elliott basil fawlty, timothy dalton!
        </p>

      <Router>
          <Route path="/" component={App}>
            <Route path="Login" component={Login} />
            <Route path="ViewMyChecklist" component={DisplayCheckList} />
          </Route>
        <Route path="/login" component={Login} />
      </Router>

      </div>
    );
  }
}


export default App;