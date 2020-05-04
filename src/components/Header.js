import React, { Component } from "react";
import { auth } from "../services/firebase";
import { Link } from "react-router-dom";
import { signOut } from "../helpers/auth";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);

    this.state = {
      authenticated: false,
    };
  }

  async componentDidMount() {
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
    });
  }

  async signOut() {
    try {
      await signOut();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    const isLoggedIn = this.state.authenticated;
    let userControls;

    if (isLoggedIn) {
        userControls = (
        <li>
          <button onClick={this.signOut}>Signout</button>
        </li>
      );
    } else {
        userControls = (
        <li>
          <Link className="button is-primary is-small" to="/login">Login</Link>
        </li>
      );
    }

    return (
      <div class="tabs">
        <ul>
          <li class="is-active">
            <a>Home</a>
          </li>
          <li>
            <Link to="/ideas">Ideas</Link>
          </li>
          <li>
            <a>Apply</a>
          </li>
          <li>
            <a>Call for speakers</a>
          </li>
          <li>
            <Link to="/speakers">Speakers</Link>
          </li>
          <li>
            <a href="https://www.femaletechleaders.org/what-we-do">About FTL</a>
          </li>
          {userControls}
        </ul>
      </div>
    );
  }
}
