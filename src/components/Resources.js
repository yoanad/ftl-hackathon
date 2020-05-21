import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";

export default class Resources extends Component {
  track1() {
    return (
      <li>
        <HashLink
          style={{ color: "black", fontWeight: "bold" }}
          to="/#track1"
          smooth={true}
        >
          The Economy, Finance: Create a stock market analysis using Yahoo
          Finance data
        </HashLink>
        <div>
          Our workshop for this track will be held using{" "}
          <a href="https://www.python-course.eu/python3_history_and_philosophy.php">
            Python 3
          </a>
          .
          <ul>
            <li>
              <a href="https://www.coursera.org/specializations/python-3-programming">
                Coursera
              </a>
            </li>
            <li>
              <a href="https://www.python-course.eu/python3_zip_tutorial.php">
                Python Course EU
              </a>
            </li>
            <li>
              <a href="https://www.datacamp.com/">DataCamp</a>
            </li>
            <li>
              <a href="https://medium.com/the-era-of-apis/build-your-own-stock-charts-with-yahoo-finance-api-and-python-917e9f6d6715">
                Build Your Own Stock Charts with Yahoo Finance API and Python
              </a>{" "}
              from Medium.
            </li>
          </ul>
        </div>
      </li>
    );
  }

  track2() {
    return (
      <li>
        <HashLink
          style={{ color: "black", fontWeight: "bold" }}
          to="/#track2"
          smooth={true}
        >
          Individuals and the Media: Analyze COVID-19 Tweets in Real-time
        </HashLink>
        <div>
          Our workshop for this track will be held using{" "}
          <a href="https://developer.twitter.com/en/docs/labs/filtered-stream/quick-start">
            JavaScript (Node.js) with Twitter
          </a>
          . <br />
          <br />
          <div>
            To participate, you are <strong>required to have a</strong>{" "}
            <a href="https://twitter.com/explore">Twitter</a> account. Please
            share it with the organizers on{" "}
            <a href="https://discord.gg/SceNNxY">
              the hackathon's Discord server
            </a>{" "}
            so that we can add you to the{" "}
            <a href="https://developer.twitter.com/">
              Twitter Development Team
            </a>
            , and you'll have access to the relevant credentials.
          </div>
          <ul>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction">
                Introduction to web APIs
              </a>{" "}
              from MDN web docs
            </li>
            <li>
              <a href="https://towardsdatascience.com/real-time-twitter-sentiment-analysis-for-brand-improvement-and-topic-tracking-chapter-1-3-e02f7652d8ff">
                Real-time Twitter Sentiment Analysis for Brand Improvement and
                Topic Tracking
              </a>
              . This link offers a tutorial in Python, however it is a very
              interesting read!
            </li>
            <li>
              <a href="https://www.safe.com/blog/2014/03/twitter-stream-api-map/">
                Using the Twitter Stream API to Visualize Tweets on Google Maps
              </a>
            </li>
          </ul>
        </div>
      </li>
    );
  }

  render() {
    return (
      <section class="section">
        <div className="container">
          <h3 className="title is-3">Resources</h3>
          <div className="content">
            For this hackathon, it is recommended that you have a basic
            understanding of one of the programming languages used. Please find
            below some helpful resources specific to each track.
            <ol type="1">
              {this.track1()}
              <br />
              {this.track2()}
            </ol>
          </div>
        </div>
      </section>
    );
  }
}
