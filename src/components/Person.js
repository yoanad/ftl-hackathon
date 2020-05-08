import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
export default class Person extends Component {
  render() {
    return (
      <div class="container">
        <article class="media">
          <figure class="media-left">
            {this.props.image2 ? (
              // Two people
              <div class="columns">
                <img
                  className="imgPerson"
                  src={this.props.image}
                  alt={"first person"}
                />
                <img
                  className="imgPerson imgSecondPerson"
                  src={this.props.image2}
                  alt={"second person"}
                />
              </div>
            ) : (
              // One person
              <div>
                <img
                  className="imgPerson"
                  src={this.props.image}
                  alt={"person"}
                />
              </div>
            )}
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
                {this.props.link ? (
                  <div>
                      <a href={this.props.link}>
                        {this.props.linkedIn ? (
                            <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
                        ) : (
                            <FontAwesomeIcon icon={faInstagram} size={"2x"} />
                        )}
                      </a>
                      &nbsp;
                      <a href={this.props.link}> <FontAwesomeIcon icon={faTwitterSquare} size={"2x"}/>
                      </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
