import "../css/App.css";
import { Component } from "react";
import cube from "../media/cubenew.jpg";

import "../css/all.min.css";
import bulma from '../media/bulma.png'
import react from '../media/react.png'

export default class ReadingList extends Component {
    render() {
        return (
            <div id="page-container">
                <div id="content-wrap">
                    <div className="canv2">
                        <div className="canv" style={{ backgroundImage: `url(${cube})` }}>
                            <div class="container is-max-desktop" id="border">
                                <div class="tile is-ancestor">
                                    <div class="tile is-child box">
                                        <div class="columns">

                                            <div class="column">
                                                <p class="title"><span class="has-text-danger">Deep Learning</span>  by Aaron Courville, Ian Goodfellow, and Yoshua Bengio</p>

                                                <p>This book requires no other knowledge (aside from basic undergraduate mathematics and infinitesimal calculus).
                                                    For myself the first couple chapters were a nice refresher on linear algebra and probability theory.
                                                    This book illustrated the mathematics behind auto encoders, CNNs, optimisation etc. Goodfellow et al work through each topic
                                                    methodically and from the raw basics making it an exceptionally easy read. This book also introduced me to the interesting research
                                                    behind the GANNs, highly recommend.
                                                </p>
                                                Rating : <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="container is-max-desktop" id="border">
                                <div class="tile is-ancestor">
                                    <div class="tile is-child box">
                                        <div class="columns">

                                            <div class="column">
                                                <p class="title"><span class="has-text-danger">Investment Valuation: Tools and Techniques for Determining the Value of Any Asset</span>  by Aswath Damodaran</p>

                                                <p>Aswath Damodaran is professor at the stern school of business at NYU, and is respected in the field of value theory.
                                                    Value theory typically employs fundamental analysis, and is routinely used as a tool by analysts for stock (specifically equity securities) when making stock recommendations.
                                                    This book is very informationally dense, and the various analysis methods are first described mathematically and then immediately described in an illustration where a real stock example is given, on companies such as Boeing and Home depot.
                                                    The only criticism for this book is the fact that this book tends to repeat itself. For example there is a lot of repetition as the FCFE, multi-factor models (Chen, Roll, Rors 1986)  are mentioned multiple times before a true in-depth introduction is given in later chapters, which leads to some confusion.
                                                </p>
                                                Rating : <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half" aria-hidden="true"></i>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="container is-max-desktop" id="border">
                                <div class="tile is-ancestor">
                                    <div class="tile is-child box">
                                        <div class="columns">

                                            <div class="column">
                                                <p class="title"><span class="has-text-danger">Nuclear Energy
                                                    Selected Entries from the Encyclopedia of Sustainability Science and Technology</span>  by Nicholas Tsoulfanidis</p>

                                                <p>"Nuclear Energy" gives the reader a great introduction to general relativity and shows how instrumental this tool is to calculate reactivity metrics of nuclear reactors. The explanation is relatively (haha) simplistic using rudimentary mechanics (i.e. using  p, m , v ) equations. The book also includes a useful derivation of the E=mc^2, again connecting this derivation to how uranium feedstock (having a mass) leads to a release of energy, hence E ≈ m.
                                                    This book also covers Gen IV reactors, and provides informative diagrams that illustrates the engineering that drives such large scale and complex projects. The economics of reactors is also covered and this topic elucidates why there is a rate limit of nuclear growth (projects routinely cost in the billions). Aside from that a great text book, and great reading material to put you to sleep.
                                                </p>
                                                Rating : <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                <footer class="footer">
                    <div class="content has-text-centered">
                        <p class="subtitle">This webiste was built by me, using React <img src={react} id="footerpics"></img> and Bulma CSS <img src={bulma} id="footerpics"></img>.
                        </p>
                    </div>
                </footer>
            </div>

        );
    }
}
