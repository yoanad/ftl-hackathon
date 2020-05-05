import React, { Component } from "react";
import { auth } from "../services/firebase";
import { Link } from "react-router-dom";
import { signOut } from "../helpers/auth";
import { HashLink } from "react-router-hash-link";

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
        <div class="navbar-end">
          <div class="navbar-item">
            <button className="button is-primary" onClick={this.signOut}>
              Signout
            </button>
          </div>
        </div>
      );
    } else {
      userControls = (
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <Link className="button is-primary" to="/signup">
                Sign up
              </Link>
              <Link className="button is-light" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-menu">
          <div class="navbar-start">
            <HashLink class="navbar-item" to="/#initiative" smooth={true}>
              Initiative
            </HashLink>
            <HashLink class="navbar-item" to="/#tracks" smooth={true}>
              Tracks
            </HashLink>
            <HashLink class="navbar-item" to="/#speakers" smooth={true}>
              Speakers
            </HashLink>
            <HashLink class="navbar-item" to="/#agenda" smooth={true}>
              Agenda
            </HashLink>
            <HashLink class="navbar-item" to="/#jury" smooth={true}>
              Jury
            </HashLink>
            {isLoggedIn ? (
              <HashLink class="navbar-item" to="/ideas" smooth={true}>
                Ideas
              </HashLink>
            ) : null}
          </div>
          {userControls}
        </div>
      </nav>
    );
  }
}
