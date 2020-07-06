import React, {Component} from "react";
import MapSection from "../components/Map";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare} from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faInstagram,
    faTwitterSquare,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
export default class Contact extends Component {

    render() {
        const location = {
            address: 'Kaufingerstraße 15, 80331 München.',
            lat: 48.137973,
            lng: 11.571793,
        } // our location object from earlier
        return (
            <div class="content">
                <section class="section">
                    <div class="container">
                        <h3 className="title is-3" style={{color: "black"}}>Contact</h3>
                        <article class="media">
                            <figure class="media-left">
                                <div><MapSection location={location} zoomLevel={17}/></div>
                            </figure>
                            <div class="rows">
                                <div className="row">
                                    <div className="column"><a href={`mailto:hack@femaletechleaders.org`}>
                                        <FontAwesomeIcon icon={faEnvelopeSquare} size={"3x"}
                                                         style={{color: "#ec8c94"}}/> &nbsp;
                                        <a href={`mailto:hack@femaletechleaders.org`}style={{color: "black", marginTop:"10px"}}>
                                            hack@femaletechleaders.org
                                        </a>
                                    </a></div>
                                    {/*<div className="column"><a href={`mailto:hack@femaletechleaders.org`}>*/}
                                    {/*    <FontAwesomeIcon icon={faInstagram} size={"3x"}*/}
                                    {/*                     style={{color: "#ec8c94"}}/> &nbsp;*/}
                                    {/*</a></div>*/}
                                    {/*<div className="column"><a href={`mailto:hack@femaletechleaders.org`}>*/}
                                    {/*    <FontAwesomeIcon icon={faLinkedin} size={"3x"}*/}
                                    {/*                     style={{color: "#ec8c94"}}/> &nbsp;*/}
                                    {/*</a></div>*/}
                                    {/*<div className="column"><a href={`mailto:hack@femaletechleaders.org`}>*/}
                                    {/*    <FontAwesomeIcon icon={faTwitterSquare} size={"3x"}*/}
                                    {/*                     style={{color: "#ec8c94"}}/> &nbsp;*/}
                                    {/*</a></div>*/}
                                    {/*<div className="column"><a href={`mailto:hack@femaletechleaders.org`}>*/}
                                    {/*    <FontAwesomeIcon icon={faFacebook} size={"3x"}*/}
                                    {/*                     style={{color: "#ec8c94"}}/> &nbsp;*/}

                                    {/*</a></div>*/}
                                </div>
                            </div>
                        </article>
                    </div>

                </section>
            </div>
        );
    }

}

