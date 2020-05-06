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
              <a
              className="button is-primary"
              href="https://docs.google.com/forms/d/e/1FAIpQLScKpY8NTCoHA4bewbCyb0B50uxnHLkEtkPE-hYXvR81VRN_lQ/viewform">
              Register as a participant
              </a>
              <a target="_blank" rel="noopener noreferrer" className="button" href="https://docs.google.com/document/d/19zO-lmoBbs2vjGYzTn5dCXPMTnEd6nIyARHrtqZL-Iw/edit?usp=sharing">
                Submit idea
              </a>
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
            <HashLink class="navbar-item" to="/#yoga" smooth={true}>
              Yoga
            </HashLink>
            <HashLink class="navbar-item" to="/#jury" smooth={true}>
              Jury
            </HashLink>
            <HashLink class="navbar-item" to="/#prizes" smooth={true}>
              Prizes
            </HashLink>
            <HashLink class="navbar-item" to="/#partner" smooth={true}>
              Partner
            </HashLink>
            <a target="_blank" rel="noopener noreferrer" class="navbar-item" href="https://docs.google.com/document/d/19zO-lmoBbs2vjGYzTn5dCXPMTnEd6nIyARHrtqZL-Iw/edit?usp=sharing">
              Ideas
            </a>
          </div>
          {userControls}
        </div>
      </nav>
    );
  }
}
