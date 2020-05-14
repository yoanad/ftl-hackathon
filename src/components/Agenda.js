import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";

const diamondSymbol = ` \u25C6 `;
const actionDiamondSymbol = ` \u25C8 `;

export default class Agenda extends Component {
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
  friday() {
    return (
      <div class="content">
        <article className="message is-primary">
          <div className="message-header">
            <p>Friday May 22, 2020</p>
          </div>
          <div className="message-body">
            <p>19:00 - 20:00{diamondSymbol} <strong>Introduction</strong>: YouTube Livestream</p>
            <p>
              23:55{actionDiamondSymbol} <strong>Deadline</strong> to submit team name and members, and chosen track
            </p>
          </div>
        </article>
      </div>
    );
  }
  saturday() {
    return (
      <div class="content">
        <article className="message is-dark">
          <div className="message-header">
            <p>Saturday May 23, 2020</p>
          </div>
          <div className="message-body">
            <p>10:00 - 10:30{diamondSymbol} <strong>Welcome</strong> to Official Day 1: YouTube LiveStream</p>
            <p>
              10:30 - 11:30{diamondSymbol}
              <HashLink
                style={{ color: "black", fontWeight: "bold" }}
                to="/#track1"
                smooth={true}
              >
                Yahoo Finance dataset
              </HashLink>
            </p>
            <p>
              11:30 - 12:30{diamondSymbol}
              <HashLink
                style={{ color: "black", fontWeight: "bold" }}
                to="/#track2"
                smooth={true}
              >
                Twitter Stream API
              </HashLink>
            </p>
            <p>
              14:00 - 15:00{actionDiamondSymbol}
              <HashLink
                style={{ color: "black", fontWeight: "bold" }}
                to="/#empowerYourself"
                smooth={true}
              >
                Empower yourself - unlock your potential
              </HashLink>
            </p>
            <p>17:00 - 18:00{diamondSymbol} Mid-session presentation</p>
            <p>18:00 - 18:45{actionDiamondSymbol}
            <HashLink
                style={{ color: "black", fontWeight: "bold" }}
                to="/#yoga"
                smooth={true}
              >
                Yoga session
              </HashLink></p>
          </div>
        </article>
      </div>
    );
  }
  sunday() {
    return (
      <div class="content">
        <article className="message is-primary">
          <div className="message-header">
            <p>Sunday May 24, 2020</p>
          </div>
          <div className="message-body">
            <p>11:00{actionDiamondSymbol} <strong>Submission</strong></p>
            <p>11:15 - 14:00{diamondSymbol} Judging</p>
            <p>12:15 - 13:15{actionDiamondSymbol}<HashLink
                style={{ color: "auto", fontWeight: "bold" }}
                to="/#ux"
                smooth={true}
              >
                How to blend observations and data for better User Experience
              </HashLink></p>
            <p>14:00 - 15:00{diamondSymbol} Present winners and top groups</p>
            <p style={{ textAlign: "center"}}>Wrap-up! Thank you!</p>
          </div>
        </article>
      </div>
    );
  }

  render() {
    return (
      <section class="section">
        <div className="container">
          <h3 className="title is-3">Agenda</h3>
          <div className="content">
            {this.timezoneWarning()}
            {this.friday()}
            {this.saturday()}
            {this.sunday()}
          </div>
        </div>
      </section>
    );
  }
}
