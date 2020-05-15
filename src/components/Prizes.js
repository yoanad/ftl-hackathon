import React, { Component } from "react";
import Person from "./Person";
import prizeAI from "../images/a-i-head.png";

export default class Prizes extends Component {
  invensityLink() {
    return (
      <div>
        Artificial Intelligence workshop with{" "}
        <a
          href="https://www.invensity.com/"
          style={{ color: "black", textDecoration: "underline" }}
        >
          INVENSITY GmbH
        </a>{" "}
        and your Team
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
            name="First Prize"
            boldText={this.invensityLink()}
            image={prizeAI}
            smallText={`Date: TBD ${"\u2022"} Duration: 4 hours`}
          />
        </section>
      </div>
    );
  }
}
