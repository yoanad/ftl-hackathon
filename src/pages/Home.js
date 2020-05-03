import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import teaserImg from "../images/teaser.png";
import "./Home.scss";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.authenticated = this.props.authenticated;
  }

  render() {
    return (
      <div>
        <Header />
        <section className="Home">
          <div className="container">
            <h1 className="title is-1 welcome-title">
              Welcome to <br/>FTL's first online hackathon!
            </h1>
          </div>
          <div className="container teaser">
            <div className="teaser-text">
              <h2 className="title is-2">Initiative</h2>
              <div>
                <p>
                  Since the beginning of this year, COVID-19 has made its way
                  around the world, severely impacting healthcare, the economy
                  and our climate. It has directly affected everyone’s lives, as
                  we either stay at home or work essential jobs, and watch in
                  real-time as scientists and politicians gain a better
                  understanding of the virus.
                </p>
                <p>
                  While living in a globalized world has certainly accelerated
                  the spread and reach of COVID-19, it has also allowed for a
                  collaborative effort among countries for research and
                  reporting. To this end, the amount of free, open-source data
                  that has been made available to the public provides us with a
                  unique opportunity to understand and gain insights to this
                  pandemic.
                </p>
                <p>
                  Female Tech Leaders therefore is proud to invite you to
                  participate in our first ever virtual Hackathon. We will
                  introduce people of all genders and professions to COVID-19
                  and other related datasets, and make sense of it! Join us, for
                  an “Introduction to Big Data: COVID-19 and Today’s Global
                  Economy”.
                </p>
                <a
                  className="button is-primary"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScKpY8NTCoHA4bewbCyb0B50uxnHLkEtkPE-hYXvR81VRN_lQ/viewform"
                >
                  Register as a participant
                </a>
                <a
                  className="button is-outlined is-secondary"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeyQuo5D3YgYvpS4HQqLgDNguGRRA_94ZKchA5FEqiBEczMdw/viewform"
                >
                  Apply to be a speaker
                </a>
              </div>
            </div>
            <div className="teaser-image">
              <img src={teaserImg} alt="A lady writing code" />
            </div>
          </div>
          <div className="container challenges">
            <h3 className="title is-3">Tracks</h3>
            <div className="content">
              <ul>
                <li>
                  <h4 className="title is-4">
                    The Economy, Finance: Create a stock market analysis using
                    Yahoo Finance data
                  </h4>
                  <ul>
                    <li>
                      The economy has taken a severe hit in the past couple of
                      months, both nationally and internationally. In order to
                      understand how the stock market has been affected, we want
                      to conduct an analysis of Yahoo’s Finance Data. Through
                      the presentation of the available data and some Python
                      tools in the form of a YouTube live stream Workshop, we
                      invite hackers to delve into the Finance track, and to
                      analyze this data.
                    </li>
                    <li>
                      <a href="https://finance.yahoo.com/quote/CSV/history/">
                        Yahoo Finance CSV
                      </a>
                    </li>
                    <li>
                      <a href="https://towardsdatascience.com/free-stock-data-for-python-using-yahoo-finance-api-9dafd96cad2e">
                        Using Python with Yahoo Finance
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4 className="title is-4">
                    Individuals and the Media: Analyze COVID-19 Tweets in
                    Real-time
                  </h4>
                  <ul>
                    <li>
                      Since Twitter’s inception, it has been a leading social
                      platform for individuals and institutions to announce
                      anecdotes, important news updates, and everything
                      in-between to their followers and to the world. In this
                      challenge, we invite hackers to use the Twitter API to
                      fetch real-time data and create data visualizations and
                      reports. A Workshop demonstrating how to fetch data from
                      Twitter’s real-time API will aid participants in their
                      collection of data by a topic they are interested in.
                    </li>
                    <li>
                      <a href="https://developer.twitter.com/en/docs/labs/covid19-stream/overview">
                        Twitter COVID-19 Stream Documentation
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4 className="title is-4">Open</h4>
                  <ul>
                    <li>
                      Is there data that you have access to that you would like
                      to hack away at yourself? Feel free! We can’t wait to see
                      what your group comes up with!
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
