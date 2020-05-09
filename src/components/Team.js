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
                                smallText="Student, Media Informatics"
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
