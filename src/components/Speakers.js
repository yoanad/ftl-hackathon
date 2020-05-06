import React, { Component } from "react";
import Person from "./Person";
import norbertImg from "../images/norbert.jpeg";
import deepaImg from "../images/deepa.jpeg";
import janImg from "../images/jan.jpeg";

export default class Speakers extends Component {
  render() {
    return (
      <div class="content">
        <section class="section">
        <div class="container"><h3 className="title is-3">Speakers</h3></div>
        <Person
          name="Norbert Distler"
          talkTitle="Strength Orientation"
          image={norbertImg}
          timeSlot="Saturday May 23 @ 14:00-15:00 CET"
          linkedIn={true}
          link={"https://www.linkedin.com/in/norbert-distler-47900b5/"}
        />
        <Person
          name="Deepa Distler"
          talkTitle="??"
          image={deepaImg}
          timeSlot="Sunday May 24 @ 11:15-12:15 CET"
          linkedIn={true}
          link={"https://www.linkedin.com/in/deepa-gautam-nigge-45235633/"}
        />
        <Person
          name="Jan Binczyk"
          talkTitle="??"
          image={janImg}
          timeSlot="Sunday May 24 @ 12:15-13:15 CET"
          linkedIn={true}
          link={"https://www.linkedin.com/in/jan-binczyk/"}
        />
        </section>
      </div>
    );
  }
}
