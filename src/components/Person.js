import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
export default class Person extends Component {
  render() {
    return (
      <div class="container">
        <article class="media">
          <figure class="media-left">
            <p class="image is-128x128">
              <img class="is-rounded" src={this.props.image} alt={"person"}/>
            </p>
          </figure>
          <div class="media-content">
            <div class="container">
              <div>{this.props.name}</div>
              <div>
                <strong>{this.props.talkTitle}</strong>
              </div>
              <div>{this.props.timeSlot}</div>
              <div>
              <div>{this.props.bio}</div>
             <a href={this.props.link}>{this.props.linkedIn ? <FontAwesomeIcon icon={faLinkedin} size={"2x"}/> : <FontAwesomeIcon icon={faInstagram} size={"2x"}/>}</a>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
