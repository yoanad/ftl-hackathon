import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import norbertImg from "../images/norbert.jpeg";
import deepaImg from "../images/deepa.jpeg";
import janImg from "../images/jan.jpeg";

export default class Speakers extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* Norbert */}
        <section class="section">
          <div class="container">
            <article class="media">
              <figure class="media-left">
                <p class="image is-128x128">
                  <img class="is-rounded" src={norbertImg} alt="Norbert" />
                </p>
              </figure>
              <div class="media-content">
                <div class="container">
                  <p>Saturday May 23 @ 14:00-15:00 CET</p>
                  <br />
                  <p>
                    <strong>Strength Orientation</strong> {"\u2022"} Norbert
                    Distler
                  </p>
                  <a href="https://www.linkedin.com/in/norbert-distler-47900b5/">
                    LinkedIn
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
        {/* Deepa */}
        <section class="section">
          <div class="container">
            <article class="media">
              <figure class="media-left">
                <p class="image is-128x128">
                  <img class="is-rounded" src={deepaImg} alt="Deepa" />
                </p>
              </figure>
              <div class="media-content">
                <div class="container">
                  <p>Sunday May 24 @ xxx CET</p>
                  <br />
                  <p>
                    <strong>?</strong> {"\u2022"} Deepa Gautam-Nigge
                  </p>
                  <a href="https://www.linkedin.com/in/deepa-gautam-nigge-45235633/">
                    LinkedIn
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
        {/* Jan */}
        <section class="section">
          <div class="container">
            <article class="media">
              <figure class="media-left">
                <p class="image is-128x128">
                  <img class="is-rounded" src={janImg} alt="Jan" />
                </p>
              </figure>
              <div class="media-content">
              <div class="container">
                  <p>Sunday May 24 @ xxx CET</p>
                  <br />
                  <p>
                    <strong>?</strong> {"\u2022"} Jan Binczyk
                  </p>
                  <a href="https://www.linkedin.com/in/jan-binczyk/">
                    LinkedIn
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
