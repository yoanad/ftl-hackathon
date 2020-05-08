import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";

export default class Resources extends Component {
  render() {
    return (
      <section class="section">
        <div className="container">
          <h3 className="title is-3">Resources</h3>
          <div className="content">
            For this hackathon, it is recommended that you have a basic
            understanding of one of the programming languages used.
            <ol type="1">
              <li>
                <HashLink
                  style={{ color: "black", fontWeight: "bold" }}
                  to="/#track1"
                  smooth={true}
                >
                  The Economy, Finance: Create a stock market analysis using
                  Yahoo Finance data
                </HashLink>
                <p>
                  Our workshop for this track will be held using <a href="https://www.python-course.eu/python3_history_and_philosophy.php">Python 3</a>.
                  <ul>
                    <li><a href="https://www.coursera.org/specializations/python-3-programming">Coursera</a></li>
                    <li><a href="https://www.python-course.eu/python3_zip_tutorial.php">Python Course EU</a></li>
                    <li><a href="https://www.datacamp.com/">DataCamp</a></li>
                    <li>...and many more!</li>
                  </ul>
                </p>
              </li>
              <br />
              <li>
                <HashLink to="/#track2" smooth={true}>
                  Second Track
                </HashLink>
                : Individuals and the Media: Analyze COVID-19 Tweets in
                Real-time
                <p>Track 2 will be in JavaScript and Node.js.</p>
              </li>
            </ol>
          </div>
        </div>
      </section>
    );
  }
}
