import React, { Component } from "react";
import Person from "./Person";
import teaserImg from "../images/teaser.png";

export default class Jury extends Component {
  render() {
    return (
      <div class="content">
        <section class="section">
          <div class="container">
            <h3 className="title is-3">Jury</h3>
          </div>
          <Person
            name="FTL Hackathons Team"
            boldText="Judges"
            image={teaserImg}
            linkedIn={true}
            link={"https://www.linkedin.com/company/female-tech-leaders/"}
          />
        </section>
      </div>
    );
  }
}
