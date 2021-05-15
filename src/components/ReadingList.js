import "../css/App.css";
import { Component } from "react";
import cube from "../media/cubenew.jpg";
import Liverpool from "../media/LiverpoolLogo.png";
import YellowLabel from "../media/newyl.jpg";
import "../css/all.min.css";
import XJTLU from "../media/XJTLU.jpeg"

export default class ReadingList extends Component {
    render() {
        return (
            <div className="canv2">
                <div className="canv" style={{ backgroundImage: `url(${cube})` }}>
                    <div class="container is-max-desktop" id="border">
                        <div class="tile is-ancestor">
                            <div class="tile is-child box">
                                <div class="columns">

                                    <div class="column">
                                        <p class="title"><span class="has-text-danger">Deep Learning</span>  by Aaron Courville, Ian Goodfellow, and Yoshua Bengio</p>

                                        <p>I consider this the bible for anyone who wants to sink into "real" machine learning.
                                        I saw myself reaching into the notorious "tutorial hell", and wanting to see the real gears of deep learning research.
                                        This book requires no other knowledge (aside from basic undergraduate mathematics and infinitesimal calculus).
                                        For myself the first couple chapters were a nice refresher on linear algebra and probability theory.
                                        This book illustrated the mathematics behind auto encoders, CNNs, optimisation etc. Goodfelow et al work through each topic
                                        methodically and from the raw basics making it an exceptionally easy read. This book also introduced me to the interesting research
                                        behind the GANNs, highly recommend.
                                        </p>
                                        Rating : <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>


        );
    }
}