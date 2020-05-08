import React, { Component } from "react";
import Person from "./Person";
import asalImg from "../images/asal.jpg";

export default class Yoga extends Component {
  asalBio() {
    return (
      <div>
        Asal is a yoga teacher in Toronto. She has always been passionate about
        anything relating to health and wellness. Her mission is to help others
        make positive changes in their lives and most importantly feel good with
        the practice of yoga.
      </div>
    );
  }
  render() {
    return (
      <div class="content">
        <section class="section">
          <div class="container">
            <h3 className="title is-3">Yoga Trainer</h3>
          </div>
          <Person
            boldText="Asal Azghadi"
            image={asalImg}
            smallText="Saturday May 23, 18:00-18:45 CEST"
            bio={this.asalBio()}
            linkedIn={false}
            link={"https://www.instagram.com/asal_az/"}
            twitter = {true}
            link={"https://twitter.com/"}
          />
        </section>
      </div>
    );
  }
}
