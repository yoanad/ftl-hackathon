import React, { Component } from 'react';
import './App.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bulma-social/bin/bulma-social.min.css';

import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import Home from './pages/Home';
import { auth } from './services/firebase';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true,
    };
  }

  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false,
        });
      }
    })
  }

  render() {
    return this.state.loading === true ? <h2>Loading...</h2> : (
      <Router>
        <Switch>
          <Route exact path="/" authenticated={this.state.authenticated} component={Home}></Route>
        </Switch>
      </Router>
    );
  }
}