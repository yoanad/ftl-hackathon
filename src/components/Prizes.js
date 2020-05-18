import React, { Component } from "react";
import Person from "./Person";
import prizeAI from "../images/a-i-head.png";

export default class Prizes extends Component {
  invensityPrizeTitle() {
    return (
      <div>
        Artificial Intelligence training session with{" "}
        <a
          href="https://www.invensity.com/"
          style={{ color: "black", textDecoration: "underline" }}
        >
          INVENSITY GmbH
        </a>
      </div>
    );
  }
  invensityPrizeDesc() {
    return (
      <div class="content">
        <p>
          Artificial Intelligence will revolutionize the products and processes of the industry and also the whole society.
          Johannes Schürmann, AI expert from INVENSITY, provides a general introduction into the topic.
        </p>
        <p>
          The training Artificial Intelligence will enable the participants to have a basic understanding of what is AI,
          and what not, and to understand the technical basics. Also, ethical questions and an outlook into the future will
          be discussed.
        </p>
      </div>
    );
  }
  render() {
    return (
      <div class="content">
        <section class="section">
          <div class="container">
            <h3 className="title is-3">Prizes</h3>
          </div>
          <Person
            name="Winning Team"
            boldText={this.invensityPrizeTitle()}
            image={prizeAI}
            smallText={`Date: TBD ${"\u2022"} Duration: 4 hours`}
            bio={this.invensityPrizeDesc()}
          />
        </section>
      </div>
    );
  }
}
