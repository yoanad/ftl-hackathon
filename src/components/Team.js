import React, { Component } from "react";
import Person from "./Person";
import aeishImg from "../images/aeish.jpeg";
import ashmiImg from "../images/ashmi.jpg";
import emilyImg from "../images/emily.jpg";
import kristinaImg from "../images/kristina.jpg";
import patriciaImg from "../images/patricia.jpg";
import yoanaImg from "../images/yoana.jpg";
import yoannaImg from "../images/yoanna.jpeg";

export default class Team extends Component {
    norbertBio() {
        return (
            <div>
                I support people on their journey to face their fears and bring their potential and strengths into the world.
            </div>
        )
    }
    katrinBio() {
        return (
            <div>
                I help to unleash potential of people and organizations. My focus is on
                personal development topics like communication, conflict and leadership.
                I’m a mother of 2 kids and well connected to earth.
            </div>
        );
    }
    janBio() {
        return (
            <div>
                Jan has over 12 years of professional experience in the field of product
                design as a UX Designer and UX Manager. He transforms the experience
                delivered to users by positioning UX design as an integral aspect of
                strategic product planning. As a Lead UX Designer at Inveox, he designs
                for the healthcare industry by creating more personalized experiences
                for patients. Jan has graduated from the SWPS University of Social
                Sciences and Humanities with a Master's Degree in Social Psychology of
                the Internet and Communication. He has launched and now coordinates the
                User Experience & Business Design postgraduate studies at the Tischner
                European University in Kraków. Apart from that, Jan is also a guest
                lecturer at the UX Design and Internet Analysis studies at the Białystok
                University of Technology.
            </div>
        );
    }
    render() {
        return (
            <div class="content">
                <section class="section">
                    <div class="container">
                        <h3 className="title is-3">Team</h3>
                    </div>
                    <div class="container">
                    <div class="columns">
                        <div class="column">
                            <Person
                                boldText="Ashmi"
                                image={ashmiImg}
                                smallText="Software Developer"
                                email={"ashmi@femaletechleaders.org"}
                                linkedIn={"https://www.linkedin.com/in/ashmi-banerjee/"}
                            />
                        </div>
                        <div className="column">
                            <Person
                                boldText="Aeishwarya"
                                image={aeishImg}
                                smallText="Electrical Engineer"
                                email={"aeish@femaletechleaders.org"}
                                linkedIn={"https://www.linkedin.com/in/aeishb/"}
                            />
                        </div>
                        <div className="column">
                            <Person
                                boldText="Emily"
                                image={emilyImg}
                                smallText="Full-Stack Developer"
                                email={"emily@femaletechleaders.org"}
                                linkedIn={"https://www.linkedin.com/in/emilyharason/"}
                            />
                        </div>

                    </div>
                    <div className="columns">
                        <div className="column">
                            <Person
                                boldText="Kristina"
                                image={kristinaImg}
                                smallText="Quality Assurance Engineer"
                                email={"kristina@femaletechleaders.org"}
                                linkedIn={"https://www.linkedin.com/in/kristina-skoryk-0bb147123/"}
                            />
                        </div>
                        <div className="column">
                            <Person
                                boldText="Patricia"
                                image={patriciaImg}
                                smallText="Data Scientist"
                                email={"patricia@femaletechleaders.org"}
                                linkedIn={"https://www.linkedin.com/in/patricia-goldberg/"}
                            />
                        </div>
                        <div className="column">
                            <Person
                                boldText="Yoana"
                                image={yoanaImg}
                                smallText="Software Developer"
                                email={"yoana@femaletechleaders.org"}
                                linkedIn={"https://www.linkedin.com/in/yoana-dimova-04b13482/"}
                            />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <Person
                                boldText="Yoanna"
                                image={yoannaImg}
                                smallText="Student"
                                email={"yoanna@femaletechleaders.org"}
                                linkedIn={"https://www.linkedin.com/in/yoanna-borisova/"}
                            />
                        </div>
                        <div className="column">
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        );
    }
}
