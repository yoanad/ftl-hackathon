import React, { Component } from "react";
import Person from "./Person";
import norbertImg from "../images/norbert.jpg";
import katrinImg from "../images/katrin.png";
import janImg from "../images/jan.jpg";

export default class Speakers extends Component {
  norbertBio() {
    return (
      <div>
        I support people on their journey to face their fears and bring their potential and strengths into the world.
      </div>
    )
  }
  katrinBio() {
    return (
      <div>
        I help to unleash potential of people and organizations. My focus is on
        personal development topics like communication, conflict and leadership.
        I’m a mother of 2 kids and well connected to earth.
      </div>
    );
  }
  janBio() {
    return (
      <div>
        Jan has over 12 years of professional experience in the field of product
        design as a UX Designer and UX Manager. He transforms the experience
        delivered to users by positioning UX design as an integral aspect of
        strategic product planning. As a Lead UX Designer at Inveox, he designs
        for the healthcare industry by creating more personalized experiences
        for patients. Jan has graduated from the SWPS University of Social
        Sciences and Humanities with a Master's Degree in Social Psychology of
        the Internet and Communication. He has launched and now coordinates the
        User Experience & Business Design postgraduate studies at the Tischner
        European University in Kraków. Apart from that, Jan is also a guest
        lecturer at the UX Design and Internet Analysis studies at the Białystok
        University of Technology.
      </div>
    );
  }
  render() {
    return (
      <div class="content">
        <section class="section">
          <div class="container">
            <h3 className="title is-3">Speakers</h3>
          </div>
          <Person
            boldText="Norbert Distler"
            image={norbertImg}
            smallText="Coach, Psychologist, Facilitator and big yoga fan for more than 15 years"
            bio={this.norbertBio()}
            linkedIn={true}
            link={"https://www.linkedin.com/in/norbert-distler-47900b5/"}
          />
          <Person
            boldText="Katrin Scharpf"
            image={katrinImg}
            smallText="Coach and Facilitator"
            bio={this.katrinBio()}
            linkedIn={true}
            link={"https://www.linkedin.com/in/norbert-distler-47900b5/"}
          />
          <Person
            boldText="Jan Bińczyk"
            image={janImg}
            smallText="Lead UX Designer, Inveox"
            bio={this.janBio()}
            linkedIn={true}
            link={"https://www.linkedin.com/in/jan-binczyk/"}
          />
        </section>
      </div>
    );
  }
}
