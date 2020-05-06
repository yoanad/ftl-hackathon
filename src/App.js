import React, { Component } from 'react';
import './App.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bulma-social/bin/bulma-social.min.css';

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from './pages/Home';
import Ideas from './pages/Ideas';
import { auth } from './services/firebase';

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to='/ideas' />}
    />
  )
}

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
          <PublicRoute path="/ideas" authenticated={this.state.authenticated} component={Ideas}></PublicRoute>
        </Switch>
      </Router>
    );
  }
}