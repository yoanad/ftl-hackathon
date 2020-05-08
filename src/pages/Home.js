import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Speakers from "../components/Speakers";
import Workshops from "../components/Workshops";
import Agenda from "../components/Agenda";
import Yoga from "../components/Yoga";
import Jury from "../components/Jury";
import Prizes from "../components/Prizes";
import Resources from "../components/Resources";
import teaserImg from "../images/teaser.png";
import invensityImg from "../images/invensity.png";

export default class HomePage extends Component {
  initiative() {
    return (
      <div className="container teaser level reverse-columns">
        <div className="section column teaser-text">
          <h3 className="title is-3">
            Introduction to Big Data - COVID-19 and its Global Effects
          </h3>
          <div class="content">
            <p>
              Since the beginning of this year, COVID-19 has made its way around
              the world, severely impacting healthcare, the economy and our
              climate. It has directly affected everyone’s lives, as we either
              stay at home or work essential jobs, and watch in real-time as
              scientists and politicians gain a better understanding of the
              virus.
            </p>
            <p>
              While living in a globalized world has certainly accelerated the
              spread and reach of COVID-19, it has also allowed for a
              collaborative effort among countries for research and reporting.
              To this end, the amount of free, open-source data that has been
              made available to the public provides us with a unique opportunity
              to understand and gain insights to this pandemic.
            </p>
            <p>
              <a href="https://www.femaletechleaders.org/">
                Female Tech Leaders{" "}
              </a>
              therefore is proud to invite you to participate in our first ever
              virtual Hackathon. We will introduce people of all genders and
              professions to COVID-19 and other related datasets, and make sense
              of it!
            </p>
            <a
              className="button is-primary"
              href="https://docs.google.com/forms/d/e/1FAIpQLScKpY8NTCoHA4bewbCyb0B50uxnHLkEtkPE-hYXvR81VRN_lQ/viewform"
            >
              Register as a participant
            </a>
            <a className="button is-dark" href="https://discord.gg/SceNNxY">
              Join the discussion on Discord
            </a>
          </div>
        </div>
        <div className="column teaser-image">
          <img src={teaserImg} alt="A lady writing code" />
        </div>
      </div>
    );
  }

  tracks() {
    return (
      <section className="section">
        <div className="container">
          <h3 className="title is-3">Tracks</h3>
          <div className="content">
            <ol type="1">
              <li id={"track1"} className="title is-4">
                The Economy, Finance: Create a stock market analysis using Yahoo
                Finance data
              </li>
              <div className="content">
                The economy has taken a severe hit in the past couple of months,
                both nationally and internationally. In order to understand how
                the stock market has been affected, we want to conduct an
                analysis of{" "}
                <a href="https://finance.yahoo.com/quote/CSV/history/">
                  Yahoo’s Finance data
                </a>
                . Through the presentation of the available data and some Python
                tools in the form of a YouTube live stream Workshop, we invite
                hackers to delve into the Finance track, and to analyze this
                data.
              </div>

              <li id={"track2"} className="title is-4">
                Individuals and the Media: Analyze COVID-19 Tweets in Real-time
              </li>
              <div className="content">
                Since Twitter’s inception, it has been a leading social platform
                for individuals and institutions to announce anecdotes,
                important news updates, and everything in-between to their
                followers and to the world. In this challenge, we invite hackers
                to use the Twitter API to fetch real-time data and create data
                visualizations and reports. A Workshop demonstrating how to
                fetch data from{" "}
                <a href="https://developer.twitter.com/en/docs/labs/filtered-stream/quick-start">
                  Twitter’s real-time API{" "}
                </a>
                will aid participants in their collection of data by a topic
                they are interested in.
              </div>
              <li className="title is-4">Open</li>
              <div className="content">
                Is there data that you have access to that you would like to
                hack away at yourself? Feel free! We can’t wait to see what your
                group comes up with!
              </div>
            </ol>
          </div>
        </div>
      </section>
    );
  }

  timezoneWarning() {
    return (
      <div class="box">
        <h3 style={{ textAlign: "center" }}>
          <span class="tag is-warning is-large">Attention!</span>
        </h3>
        <p style={{ textAlign: "center" }}>
          Female Tech Leaders is an organization based in{" "}
          <strong>Munich, Germany</strong>, therefore all times below are in{" "}
          <a href="https://www.timeanddate.com/time/zones/cest">
            Central European Summer Time
          </a>
          .
        </p>
      </div>
    );
  }

  agenda() {
    return (
      <section class="section">
        <div className="container">
          <h3 className="title is-3">Agenda</h3>
          <div className="content">
            {this.timezoneWarning()}
            <article className="message is-primary">
              <div className="message-header">
                <p>Friday May 22, 2020</p>
              </div>
              <div className="message-body">
                <p>19:00 - 20:00 - Introduction: YouTube Livestream</p>
                <p>
                  23:55 - Deadline to submit team name and members, and chosen
                  track
                </p>
              </div>
            </article>

            <article className="message is-dark">
              <div className="message-header">
                <p>Saturday May 23, 2020</p>
              </div>
              <div className="message-body">
                <p>
                  10:00 - 10:30 - Welcome to Official Day 1: YouTube LiveStream
                </p>
                <p>10:30 - 11:30 - Workshop #1: Yahoo Finance dataset</p>
                <p>11:30 - 12:30 - Workshop #2: Twitter Stream API</p>
                <p>14:00 - 15:00 - Speaker #1</p>
                <p>17:00 - 18:00 - Mid-session presentation</p>
                <p>18:00 - 18:45 - Yoga session</p>
              </div>
            </article>

            <article className="message is-primary">
              <div className="message-header">
                <p>Sunday May 24, 2020</p>
              </div>
              <div className="message-body">
                <p>11:00 - Submission</p>
                <p>11:15 - 12:15 - Speaker #2 + Judging</p>
                <p>12:15 - 13:15 - Speaker #3 + Final pitch</p>
                <p>14:00 - 15:00 - Present winners and top groups</p>
                <p>Wrap-up! Thank you!</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  }

  partner() {
    return (
      <section class="section">
        <div className="container">
          <h3 className="title is-3">Partner</h3>
          <div className="content">
            <p>
              Thank you{" "}
              <a href="https://www.invensity.com/?lang=en">Invensity</a> for
              your cooperation!
            </p>
            <p>
            INVENSITY is an international technology and innovation consulting
            company with offices in Germany, USA, Philippines and Spain.
            INVENSITY uses its Academy and Technology Hub to provide an ongoing
            outstanding level of service to renowned companies in several
            industries like automotive, defense, aerospace, health care, and
            energy. INVENSITY´s core specialties are Systems and Software
            Engineering, Data Systems, Cyber Security, Analytics & Sensorics,
            Artificial Intelligence, and more.</p>
          </div>
          <div>
            <img src={invensityImg} alt="Invensity logo" />
          </div>
        </div>
      </section>
    );
  }

  render() {
    return (
      <div>
        <Header />
        <section className="Home">
          <div className="container welcome-container">
            <h1 className="title is-1 welcome-title">
              Welcome to <br />
              FTL's first online hackathon!
            </h1>
          </div>
          <div id={"initiative"}>{this.initiative()}</div>
          <div id={"tracks"}>{this.tracks()}</div>
          <div id={"agenda"}>
            <Agenda />
          </div>
          <div id={"workshops"}>
            <Workshops />
          </div>
          <div id={"speakers"}>
            <Speakers />
          </div>
          <div id={"yoga"}>
            <Yoga />
          </div>
          <div id={"jury"}>
            <Jury />
          </div>
          <div id={"prizes"}>
            <Prizes />
          </div>
          <div id={"resources"}>
            <Resources />
          </div>
          <div id={"partner"}>{this.partner()}</div>
        </section>
        <Footer />
      </div>
    );
  }
}
