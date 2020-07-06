import React, { Component } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faLinkedin, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <div className="columns is-centered">
              <a href={`mailto:hack@femaletechleaders.org`}>
                <FontAwesomeIcon icon={faInstagram} size={"2x"}
                                 style={{color: "#ec8c94"}}/> &nbsp;
              </a> &nbsp;
              <a href={`mailto:hack@femaletechleaders.org`}>
                <FontAwesomeIcon icon={faLinkedin} size={"2x"}
                                 style={{color: "#ec8c94"}}/> &nbsp;
              </a>
              <a href={`mailto:hack@femaletechleaders.org`}>
                <FontAwesomeIcon icon={faTwitterSquare} size={"2x"}
                                 style={{color: "#ec8c94"}}/> &nbsp;
              </a> &nbsp;
              <a href={`mailto:hack@femaletechleaders.org`}>
                <FontAwesomeIcon icon={faFacebook} size={"2x"}
                                 style={{color: "#ec8c94"}}/> &nbsp;

              </a>

            </div>

          </p>
          <p>
            <strong>
              Last updated: July 2020
            </strong>{" "}
            by{" "}
            <a target="_blank" rel="noopener noreferrer" href="https://www.femaletechleaders.org/team" style={{color: "#ec8c94"}}>
              FTL Hackathons Team
            </a>
            .
          </p>
        </div>
      </footer>
    );
  }
}
