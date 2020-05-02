import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        
        this.authenticated = this.props.authenticated;
    }

    render() {
        return (
        <div className="home">
            <Header/>
            <section>
            <div className="jumbotron jumbotron-fluid py-5">
                <div className="container text-center py-5">
                <h1 className="display-4">
                    Welcome FTL's first online hackathon!
                </h1>
                <p className="lead">{this.authenticated}</p>
                <div className="mt-4">
                    <div style={{ padding: "5px 15px 5px 15px" }}>
                    <h3>INITIATIVE</h3>
                    <div>
                        <p>
                        Since the beginning of this year, COVID-19 has made its
                        way around the world, severely impacting healthcare, the
                        economy and our climate. It has directly affected
                        everyone’s lives, as we either stay at home or work
                        essential jobs, and watch in real-time as scientists and
                        politicians gain a better understanding of the virus.
                        </p>
                        <p>
                        While living in a globalized world has certainly
                        accelerated the spread and reach of COVID-19, it has also
                        allowed for a collaborative effort among countries for
                        research and reporting. To this end, the amount of free,
                        open-source data that has been made available to the
                        public provides us with a unique opportunity to understand
                        and gain insights to this pandemic.
                        </p>
                        <p>
                        Female Tech Leaders therefore is proud to invite you to
                        participate in our first ever virtual Hackathon. We will
                        introduce people of all genders and professions to
                        COVID-19 and other related datasets, and make sense of it!
                        Join us, for an “Introduction to Big Data: COVID-19 and
                        Today’s Global Economy”.
                        </p>
                    </div>
                    <div>
                        <h3>TRACKS</h3>
                        <ul>
                        <li>
                            The Economy, Finance: Create a stock market analysis
                            using Yahoo Finance data
                            <ul>
                            <li>
                                The economy has taken a severe hit in the past
                                couple of months, both nationally and
                                internationally. In order to understand how the
                                stock market has been affected, we want to conduct
                                an analysis of Yahoo’s Finance Data. Through the
                                presentation of the available data and some Python
                                tools in the form of a YouTube live stream Workshop,
                                we invite hackers to delve into the Finance track,
                                and to analyze this data.
                            </li>
                            <li>
                                <a href="https://finance.yahoo.com/quote/CSV/history/">
                                Yahoo Finance CSV
                                </a>
                            </li>
                            <li>
                                <a href="https://towardsdatascience.com/free-stock-data-for-python-using-yahoo-finance-api-9dafd96cad2e">
                                Using Python with Yahoo Finance
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li>
                            Individuals and the Media: Analyze COVID-19 Tweets in
                            Real-time
                            <ul>
                            <li>
                                Since Twitter’s inception, it has been a leading
                                social platform for individuals and institutions to
                                announce anecdotes, important news updates, and
                                everything in-between to their followers and to the
                                world. In this challenge, we invite hackers to use
                                the Twitter API to fetch real-time data and create
                                data visualizations and reports. A Workshop
                                demonstrating how to fetch data from Twitter’s
                                real-time API will aid participants in their
                                collection of data by a topic they are interested
                                in.
                            </li>
                            <li>
                                <a href="https://developer.twitter.com/en/docs/labs/covid19-stream/overview">
                                Twitter COVID-19 Stream Documentation
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li>
                            Open
                            <ul>
                            <li>
                                Is there data that you have access to that you would
                                like to hack away at yourself? Feel free! We can’t
                                wait to see what your group comes up with!
                            </li>
                            </ul>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
        );
    }
}
