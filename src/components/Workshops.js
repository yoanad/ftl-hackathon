import React, { Component } from "react";
import Person from "./Person";
import workshopImg from "../images/workshop1.png";
import uxImg from "../images/ux_design.png";

export default class Workshops extends Component {
  norbertKatrinTalkDesc() {
    return (
      <div>
        Join Katrin and Norbert in this workshop to explore why it’s so much
        more fun and powerful to focus on your strengths than on your
        weaknesses… and how to let them flourish in your life.
      </div>
    );
  }
  janDesc() {
    return (
      <div>
        In Jan’s presentation, he will tell you about the qualitative and
        quantitative approaches in product design. He will also provide some
        tips on how to merge those two strategies to create more usable digital
        products.
      </div>
    );
  }
  render() {
    return (
      <div class="content">
        <section class="section">
          <div class="container">
            <h3 className="title is-3">Workshops</h3>
          </div>
          <div id={"empowerYourself"} class="content">
            <Person
              name="Norbert Distler and Katrin Scharpf"
              boldText="Empower yourself - unlock your potential"
              image={workshopImg}
              smallText={"Saturday May 23, 14:00-15:00 CEST"}
              bio={this.norbertKatrinTalkDesc()}
            />
          </div>
          <div id={"ux"} class="content">
            <Person
              name="Jan Binczyk"
              boldText="How to blend observations and data for better User Experience"
              image={uxImg}
              smallText="Sunday May 24, 12:00-13:00 CEST"
              bio={this.janDesc()}
            />
          </div>
        </section>
      </div>
    );
  }
}
