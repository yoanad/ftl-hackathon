import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signin, signInWithGoogle, signInWithGitHub } from "../helpers/auth";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Login.scss";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleSignIn = this.googleSignIn.bind(this);
    this.githubSignIn = this.githubSignIn.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async githubSignIn() {
    try {
      await signInWithGitHub();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div className="Login">
        <Header />
        <section>
          <div className="container">
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input
                    class="input"
                    type="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                    value={this.state.password}
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>

              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-primary">Submit</button>
                </div>
              </div>
              {this.state.error ? (
                <p class="help is-danger">{this.state.error}</p>
              ) : null}
            </form>
            <br />
            <div class="field alternative-login">
              <p>You can also log in with any of these services:</p>
              <button
                className="button is-google"
                type="button"
                onClick={this.googleSignIn}
              >
                <span class="icon">
                  <i class="fab fa-google"></i>
                </span>
                <span>Sign in with Google</span>
              </button>
              <button
                className="button is-github"
                type="button"
                onClick={this.githubSignIn}
              >
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Sign in with GitHub</span>
              </button>
            </div>
            <hr />
            <p>
              Don't have an account? <Link to="signup">Sign up</Link>
            </p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}