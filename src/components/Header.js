import React, { Component } from "react";
import { auth } from "../services/firebase";
import { signOut } from "../helpers/auth";
import { HashLink } from "react-router-hash-link";
import logo from "../images/ftllogo.png";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
    this.handleBurgerClick = this.handleBurgerClick.bind(this);

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

  handleBurgerClick(event) {
    event.target.classList.toggle('is-active');
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  }

  render() {
    return (
      
      <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <img src={logo} alt="FTL logo" height="50"/>
            </a>

            <a role="button"
                class="navbar-burger burger"
                onClick={this.handleBurgerClick}
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarMenu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

        <div id="navbar-menu" onClick={this.handleBurgerClick} class="navbar-menu">
          <div class="navbar-start">
            <HashLink class="navbar-item" to="/#initiative" smooth={true}>
              Initiative
            </HashLink>
            <HashLink class="navbar-item" to="/#tracks" smooth={true}>
              Tracks
            </HashLink>
            <HashLink class="navbar-item" to="/#agenda" smooth={true}>
              Agenda
            </HashLink>
            <HashLink class="navbar-item" to="/#workshops" smooth={true}>
              Workshops
            </HashLink>
            <HashLink class="navbar-item" to="/#speakers" smooth={true}>
              Speakers
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
            <HashLink class="navbar-item" to="/#resources" smooth={true}>
              Resources
            </HashLink>
            <HashLink class="navbar-item" to="/#partner" smooth={true}>
              Partners
            </HashLink>
            <a target="_blank" rel="noopener noreferrer" class="navbar-item" href="https://docs.google.com/document/d/19zO-lmoBbs2vjGYzTn5dCXPMTnEd6nIyARHrtqZL-Iw/edit?usp=sharing">
              Ideas
            </a>
          </div>
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
        </div>
      </nav>
    );
  }
}
