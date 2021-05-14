import "../css/App.css";
import { Component } from "react";
import cube from "../media/cubenew.jpg";
import UniGron from "../media/UniGron.png";
import YellowLabel from "../media/newyl.jpg";
import "../css/all.min.css";
import XJTLU from "../media/XJTLU.jpeg"

export default class Work extends Component {
    render() {
        return (
            <div className="canv2">
                <div className="canv" style={{ backgroundImage: `url(${cube})` }}>
                    <div class="container is-max-desktop" id="border">
                        <div class="tile is-ancestor">
                            <div class="tile is-child box">
                                <div class="columns">
                                    <div class="column is-one-fifth">

                                        <figure >
                                            <h4 class="title is-4">YellowLabelCo.</h4>
                                            <a href="https://www.ebay.co.uk/usr/yellowlabel3">
                                                <img src={YellowLabel} id="LeedsLogo" />
                                            </a>
                                        </figure>
                                        <p class="is-size-5">2020-2021     <i class="fas fa-calendar-alt"></i></p>
                                    </div>
                                    <div class="column">
                                        <p class="title"><span class="has-text-danger">Proprietor & Co-Founder </span>  @ YellowLabelCo.</p>

                                        <ul class="b">

                                            <li>We are an e-commerce brand providing fabric accessories (principally reusable facemasks).</li>
                                            <li>You can see our stores on <a href="https://www.etsy.com/uk/shop/YellowLabelCo">Etsy</a> & <a href="https://www.ebay.co.uk/usr/yellowlabel3">eBay</a>. (5 star rated and 99.8% positive feedback).</li>
                                            <li>Celebrating £50,000 p.a. revenue.</li>
                                            <hr />
                                            Some responsibilities included:
                                            <ul class="b">
                                                <li>Branding.</li>
                                                <li>Customer satisfaction.</li>
                                                <li>Production.</li>
                                                <li>Balance sheet & business analytics, using web scraping and pandas (with Python).</li>
                                            </ul>



                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container is-max-desktop" id="border">
                        <div class="tile is-ancestor">
                            <div class="tile is-child box">
                                <div class="columns">
                                    <div class="column is-one-fifth">
                                        <figure >
                                            <h4 class="title is-4">University of Groningen</h4>
                                            <a href="https://en.wikipedia.org/wiki/University_of_Groningen">

                                                <img src={UniGron} id="LiverpoolLogo" />
                                            </a>
                                        </figure>
                                        <p class="is-size-5">March 2020   <i class="fas fa-calendar-alt"></i></p>
                                    </div>
                                    <div class="column">
                                        <p class="title"><span class="has-text-danger">Global Sustainability Business Challenge</span> @ Groningen</p>

                                        <ul class="b">


                                            <li>Working with a multidisciplinary group of students to provide innovative solutions for sustainable business. </li>
                                            <li>Gave insight into scientific methods for tackling sustainability.</li>
                                            <li>Some partnered employers: PwC, Santander and IBM.</li>
                                            <li>Challenge typically hosted by the University of Groningen, unfortunately restricted due to Covid-19 pandemic & UCU strikes.</li>

                                            <a href="https://en.wikipedia.org/wiki/Sustainable_business">Principles of sustainable business.</a>
                                            <br />
                                            <a href="https://www.liverpool.ac.uk/careers/employer-connections/connectionsinaction/amsterdamsustainablebusinesschallenge/">The previous year.</a>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="container is-max-desktop" id="border">
                        <div class="tile is-ancestor">
                            <div class="tile is-child box">
                                <div class="columns">
                                    <div class="column is-one-fifth">
                                        <figure >
                                            <h4 class="title is-4">XJTLU</h4>
                                            <a href="https://en.wikipedia.org/wiki/Xi'an_Jiaotong-Liverpool_University">

                                                <img src={XJTLU} id="LiverpoolLogo" />
                                            </a>
                                        </figure>
                                        <p class="is-size-5">Jun - Aug 2019     <i class="fas fa-calendar-alt"></i></p>
                                        <h6 class="subtitle is-5">Suzhou, China <i class="fas fa-compass"></i></h6>
                                    </div>
                                    <div class="column">
                                        <p class="title"><span class="has-text-danger">Researcher</span> @ XJTLU</p>

                                        <ul class="b">
                                            <li>Research on a photocatalytic (a reaction catalysed by light) process to produce hydrogen, principally for hydrogen fuel.</li>
                                            <li>Dissertation Title: <a href="https://www.dropbox.com/s/127s5noila7rd3q/Dissertation.pdf?dl=0">Ni/Ni(OH)2 Composites for Solar-to-Hydrogen: Synthesis, Characterization and System Optimization</a></li>
                                            <hr />
                                            Some responsibilities included:
                                            <ul class="b">
                                                <li>Collaborating with other scientists investigating the same process. </li>
                                                <li>Communicating with and presenting to a research group.</li>
                                                <li>Investigating a physical process and reporting findings in a dissertation.</li>

                                            </ul>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="container is-max-desktop" id="border">
                        <div class="tile is-ancestor">
                            <div class="tile is-child box">
                                <p class="title"><span class="has-text-danger">PAL Leader & Peer Mentor & Casual Worker</span> @ University of Liverpool</p>
                                <ul class="b">


                                    <li>Peer Assisted Learning: Leading tutorials arranged to help underclassman with undergraduate chemistry.</li>
                                    <li>Peer Mentor: Providing guidance and support to other students struggling with their work load and mental health etc.</li>
                                    <li>Casual Worker (paid position): Greeter for physial science departments for various events (open days etc.)</li>


                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        );
    }
}
