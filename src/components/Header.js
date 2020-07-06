import React, { Component } from "react";
import { auth } from "../services/firebase";
import { HashLink } from "react-router-hash-link";
import logo from "../images/ftllogo.png";

export default class Header extends Component {
  constructor(props) {
    super(props);

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
                href={"/#initiative"} // add this for accessibility!
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
            <HashLink class="navbar-item" to="/#team" smooth={true}>
              Team
            </HashLink>
            <HashLink class="navbar-item" to="/#archive" smooth={true}>
              Events Archive
            </HashLink>
            <HashLink class="navbar-item" to="/#collaborations" smooth={true}>
              Collaborations
            </HashLink>
            <HashLink class="navbar-item" to="/#contact" smooth={true}>
              Contact
            </HashLink>
          </div>
          <div class="navbar-end">

          </div>
        </div>
      </nav>
    );
  }
}
