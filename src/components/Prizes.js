import React, { Component } from "react";
import Person from "./Person";
import teaserImg from "../images/teaser.png";

export default class Prizes extends Component {
  invensityLink() {
    return (
      <div>
        Training day with <a href="https://www.invensity.com/" style={{ color: "black", textDecoration: "underline" }}>INVENSITY GmbH</a> and your Team
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
            image={teaserImg}
            smallText="Date/Time: TBD"
            linkedIn={true}
            link={"https://www.linkedin.com/company/invensity/"}
          />
        </section>
      </div>
    );
  }
}
