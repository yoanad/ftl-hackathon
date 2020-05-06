import React, { Component } from "react";
import Person from "./Person";
import teaserImg from "../images/teaser.png";
import deepaImg from "../images/deepa.jpg";

export default class Jury extends Component {
  render() {
    return (
      <div class="content">
        <section class="section">
          <div class="container">
            <h3 className="title is-3">Jury</h3>
          </div>
          <Person
            name="Deepa Gautam-Nigge"
            talkTitle="Deepa is heading the SAP Next-Gen Innovation Network in Munich. SAP Next-Gen is a vibrant community for “innovation with purpose” related to the UN Global Goals of sustainability. She is committed to driving future innovation with SAP’s strategic and most innovative customers, high class Universities and their Entrepreneurship Centers, as well as top-notch Start Ups and successful Venture Firms. With more than 19 years of experience in the software industry, Deepa is also deputy chair of the Connected Mobility focus group in the German Digital Economy Association (BVDW) and represents the interests of SAP as a founding partner of Digital Hub Mobility in Munich."
            image={deepaImg}
            linkedIn={true}
            link={"https://www.linkedin.com/in/deepa-gautam-nigge-45235633/"}
          />
          <Person
            name="FTL Hackathons Team"
            talkTitle="Judges"
            image={teaserImg}
            linkedIn={true}
            link={"https://www.linkedin.com/company/female-tech-leaders/"}
          />
        </section>
      </div>
    );
  }
}
