import React, {Component} from "react";
import Person from "./Person";
import prizeAI from "../images/a-i-head.png";
import prizeFTL from "../images/logo_instagram.png";
import socialMedia from "../images/social_media2.png";

export default class Prizes extends Component {
    invensityPrizeTitle() {
        return (
            <div>
                Artificial Intelligence training session with{" "}
                <a
                    href="https://www.invensity.com/"
                    style={{color: "black", textDecoration: "underline"}}
                >
                    INVENSITY GmbH
                </a>
            </div>
        );
    }

    socialMediaPromotionTitle() {
        return (
            <div>
                Social Media Promotion by {" "}
                <a
                    href="https://www.femaletechleaders.org/"
                    style={{color: "#fb41b9", textDecoration: "underline"}}
                >
                    Female Tech Leaders
                </a>
            </div>
        );
    }

    participationCertiTitle() {
        return (
            <div>
                Participation Certificate from {" "}
                <a
                    href="https://www.femaletechleaders.org/"
                    style={{color: "#fb41b9", textDecoration: "underline"}}
                >
                    Female Tech Leaders
                </a>
            </div>
        );
    }

    invensityPrizeDesc() {
        return (
            <div class="content">
                <p>
                    Artificial Intelligence will revolutionize the products and processes of the industry and also the
                    whole society.{" "}
                    <a href="https://www.linkedin.com/in/johannes-schuermann/" alt="Johannes Schürmann LinkedIn">Johannes
                        Schürmann</a>,
                    AI expert from INVENSITY, provides a general introduction into the topic.
                </p>
                <p>
                    The training Artificial Intelligence will enable the participants to have a basic understanding of
                    what is AI,
                    and what not, and to understand the technical basics. Also, ethical questions and an outlook into
                    the future will
                    be discussed.
                </p>
            </div>
        );
    }

    socialMediaPrizeDesc() {
        return (
            <div class="content">
                <p>
                    The best 3 projects will be promoted by Female Tech Leaders on their social media.
                </p>
            </div>
        );
    }

    participationCertiDesc() {
        return (
            <div class="content">
                <p>
                    Every member, from the teams making successful project submissions, will receive a participation
                    certificate from Female Tech Leaders.
                </p>
            </div>
        );
    }

    render() {
        return (
            <div class="content">
                <section class="section">
                    <div class="container">
                        <h3 className="title is-3">Prizes</h3>
                    </div>
                    <Person
                        name={`Winning Team`}
                        boldText={this.invensityPrizeTitle()}
                        image={prizeAI}
                        smallText={`Date: TBD ${"\u2022"} Duration: 4 hours`}
                        bio={this.invensityPrizeDesc()}
                    />
                    <br/><br/>
                    <Person
                        name={`Top 3 teams`}
                        boldText={this.socialMediaPromotionTitle()}
                        image={socialMedia}
                        bio={this.socialMediaPrizeDesc()}
                    />
                    <Person
                        name={`Everyone`}
                        boldText={this.participationCertiTitle()}
                        image={prizeFTL}
                        bio={this.participationCertiDesc()}
                    />
                </section>
            </div>
        );
    }
}
