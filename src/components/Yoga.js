import React, { Component } from "react";
import Person from "./Person";
import asalImg from "../images/asalYoga.jpg";

export default class Yoga extends Component {
  render() {
    return (
      <div class="content">
        <section class="section">
          <div class="container">
            <h3 className="title is-3">Yoga Trainer</h3>
          </div>
          <Person
            name="Asal"
            talkTitle="Yoga Trainer"
            image={asalImg}
            timeSlot="Saturday May 23 @ 18:00-18:45 CET"
            linkedIn={false}
            link={"https://www.instagram.com/asal_az/"}
          />
        </section>
      </div>
    );
  }
}
