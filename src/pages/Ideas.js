import React, { Component } from "react";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Idea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: auth().currentUser,
      ideas: [],
      content: "",
      readError: null,
      writeError: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    this.setState({ readError: null });
    try {
      db.ref("ideas").on("value", (snapshot) => {
        let ideas = [];
        snapshot.forEach((snap) => {
            ideas.push(snap.val());
        });
        this.setState({ ideas });
      });
    } catch (error) {
      this.setState({ readError: error.message });
    }
  }

  handleChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ writeError: null });
    try {
      await db.ref("ideas").push({
        content: this.state.content,
        timestamp: Date.now(),
        uid: this.state.user.uid
      });
      this.setState({ content: '' });
    } catch (error) {
      this.setState({ writeError: error.message });
    }
  }

  render() {
    return (
      <div class="content">
        <Header />
        <section class="section">
          <div class="container">
            <h3 className="title is-3">Ideas</h3>
            <div className="ideas">
              {this.state.ideas.map((idea) => {
                return <p key={idea.timestamp}>Idea creator: {idea.creator}</p>;
              })}
            </div>
            <h1>Submit new idea</h1>
            <form onSubmit={this.handleSubmit}>
              <input
                onChange={this.handleChange}
                value={this.state.content}
              ></input>
              {this.state.error ? <p>{this.state.writeError}</p> : null}
              <button type="submit">Send</button>
            </form>
            <div>
              Logged in as: <strong>{this.state.user.email}</strong>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
