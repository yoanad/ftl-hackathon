import React, { Component } from "react";
import Person from "../components/Person";
import teaserImg from "../images/teaser.png";

export default class Prizes extends Component {
  render() {
    return (
      <div class="content">
        <section class="section">
        <div class="container"><h3 className="title is-3">Prizes</h3></div>
        <Person
          name="First Prize"
          talkTitle="Training day with Invensity and your Team"
          image={teaserImg}
          timeSlot="Date/Time: TBD"
          linkedIn={"https://www.linkedin.com/company/invensity/"}
        />
        </section>
      </div>
    );
  }
}
