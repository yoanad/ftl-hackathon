import React, {Component} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collaborations from "../components/Collaborations";
import Contact from "../components/Contact";
import Team from "../components/Team";
import teaserImg from "../images/teaser.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default class HomePage extends Component {

  initiative() {
    return (
        <div className="container teaser level reverse-columns">
          <div className="section column teaser-text">
            {/*<h3 className="title is-3">*/}
            {/*  Introduction to Big Data {"\u2022"} COVID-19 and its Global Effects*/}
            {/*</h3>*/}
            <div class="content">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            { <a
              className="button is-primary"
              href="https://docs.google.com/presentation/d/15xQziiW22bpXhwP8vMLa7YIy7SsnFOx579KqeY0y2H0/edit?usp=sharing"
            >
             Download Slide-deck
            </a> }
          </div>
        </div>
        <div className="column teaser-image">
          <img src={teaserImg} alt="A lady writing code" />
        </div>
      </div>
    );
  }

  tracks() {
    return (
      <section className="section">
        <div className="container">
          <h3 className="title is-3">Tracks</h3>
          <div className="content">
            <ol type="1">
              <li id={"track1"} className="title is-4">
                The Economy, Finance: Create a stock market analysis using Yahoo
                Finance data
              </li>
              <div className="content">
                The economy has taken a severe hit in the past couple of months,
                both nationally and internationally. In order to understand how
                the stock market has been affected, we want to conduct an
                analysis of{" "}
                <a href="https://finance.yahoo.com/quote/CSV/history/">
                  Yahoo’s Finance data
                </a>
                . Through the presentation of the available data and some Python
                tools in the form of a YouTube live stream Workshop, we invite
                hackers to delve into the Finance track, and to analyze this
                data.
              </div>

              <li id={"track2"} className="title is-4">
                Individuals and the Media: Analyze COVID-19 Tweets in Real-time
              </li>
              <div className="content">
                Since Twitter’s inception, it has been a leading social platform
                for individuals and institutions to announce anecdotes,
                important news updates, and everything in-between to their
                followers and to the world. In this challenge, we invite hackers
                to use the Twitter API to fetch real-time data and create data
                visualizations and reports. A Workshop demonstrating how to
                fetch data from{" "}
                <a href="https://developer.twitter.com/en/docs/labs/filtered-stream/quick-start">
                  Twitter’s real-time API{" "}
                </a>
                will aid participants in their collection of data by a topic
                they are interested in.
              </div>
              <li className="title is-4">Open</li>
              <div className="content">
                Is there data that you have access to that you would like to
                hack away at yourself? Feel free! We can’t wait to see what your
                group comes up with!
              </div>
            </ol>
          </div>
        </div>
      </section>
    );
  }


  render() {

    return (
      <div>
        <Header />
        <section className="Home">
          <div className="container welcome-container">
            <h1 className="title is-1 welcome-title">
              Welcome to <br/></h1>
            <h1 className="title is-1 welcome-title" style={{color: "#ec8c94", fontWeight: "bold"}}> Female Tech
              Leaders </h1>
            <h1 className="title is-1 welcome-title">Hackathons!
            </h1>
          </div>
          <div id={"initiative"}>{this.initiative()}</div>
          <div id={"team"}>
            <Team/>
          </div>
          {/*<div id={"collaboration"}>*/}
          {/*  <Collaborations/>*/}
          {/*</div>*/}
          <div id={"contact"}>
            <Contact/>
          </div>

        </section>
        <Footer/>
      </div>
    );
  }
}
