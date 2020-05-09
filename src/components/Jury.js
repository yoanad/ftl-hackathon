import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
import Person from "./Person";
import deepaImg from "../images/deepa.jpg";
import ftlLogoImg from "../images/official_logo.png";

export default class Jury extends Component {
  ftlTeam() {
    return (
      <div>
        Members from the{" "}
        <HashLink
          style={{ color: "black", fontWeight: "bold", textDecorationLine: "underline" }}
          to="/#team"
          smooth={true}
        >
          Team
        </HashLink>{" "}
        will also be involved in the judging!
      </div>
    );
  }
  deepaBio() {
    return (
      <div>
        <p>
          Deepa is heading the SAP Next-Gen Innovation Network in Munich. SAP
          Next-Gen is a vibrant community for “innovation with purpose” related
          to the UN Global Goals of sustainability. She is committed to driving
          future innovation with SAP’s strategic and most innovative customers,
          high class Universities and their Entrepreneurship Centers, as well as
          top-notch Start Ups and successful Venture Firms.
        </p>
        <p>
          With more than 19 years of experience in the software industry, Deepa
          is also deputy chair of the Connected Mobility focus group in the
          German Digital Economy Association (BVDW) and represents the interests
          of SAP as a founding partner of Digital Hub Mobility in Munich.
        </p>
      </div>
    );
  }
  render() {
    return (
      <div class="content">
        <section class="section">
          <div class="container">
            <h3 className="title is-3">Jury</h3>
          </div>
          <Person
            boldText="Deepa Gautam-Nigge"
            bio={this.deepaBio()}
            image={deepaImg}
            linkedIn={
              "https://www.linkedin.com/in/deepa-gautam-nigge-45235633/"
            }
            twitter={"https://twitter.com/DGN_MUC"}
          />
          <br />
          <br />
          <Person
            boldText="FTL Hackathons Team"
            bio={this.ftlTeam()}
            image={ftlLogoImg}
            linkedIn={"https://www.linkedin.com/company/female-tech-leaders/"}
            twitter={"https://twitter.com/FTL_Munich"}
          />
        </section>
      </div>
    );
  }
}
