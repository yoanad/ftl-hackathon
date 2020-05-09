import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

export default class Person extends Component {
  render() {
    return (
      <div class="container">
        <article class="media">
          <figure class="media-left">
            <div>
              <img
                className="imgPerson"
                src={this.props.image}
                alt={"person"}
              />
            </div>
          </figure>
          <div class="media-content">
            <div class="container">
              <div>{this.props.name}</div>
              <div>
                <strong>{this.props.boldText}</strong>
              </div>
              <div class="content is-small">{this.props.smallText}</div>
              <div class="container">
                {this.props.bio}
                <div>
                  {this.props.email ? (
                    <a href={`mailto:${this.props.email}`}>
                      <FontAwesomeIcon icon={faEnvelopeSquare} size={"2x"} />{" "}
                    </a>
                  ) : null}
                  {this.props.linkedIn ? (
                    <a href={this.props.linkedIn}>
                      <FontAwesomeIcon icon={faLinkedin} size={"2x"} />{" "}
                    </a>
                  ) : null}
                  {this.props.instagram ? (
                    <a href={this.props.instagram}>
                      <FontAwesomeIcon icon={faInstagram} size={"2x"} />{" "}
                    </a>
                  ) : null}
                  {this.props.twitter ? (
                    <a href={this.props.twitter}>
                      <FontAwesomeIcon icon={faTwitterSquare} size={"2x"} />{" "}
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
