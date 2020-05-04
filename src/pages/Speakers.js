import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import norbertImg from "../images/norbert.jpeg";

export default class Speakers extends Component {
  render() {
    return (
      <div>
        <Header />
        <section class="content">
          <article class="media">
            <figure class="media-left">
              <p class="image is-128x128">
                <img class="is-rounded" src={norbertImg} alt="Norbert" />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>Norbert is a cool guy</p>
              </div>
            </div>
          </article>
        </section>
        <Footer />
      </div>
    );
  }
}
