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

                                        <p>Lorem ipsum in ornare or vestibulum Etiam finibus odio quis feugiat facilisis.</p>
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
                                        <p class="is-size-5">2019     <i class="fas fa-calendar-alt"></i></p>
                                        <h6 class="subtitle is-5">L69 3BX<i class="fas fa-compass"></i></h6>
                                    </div>
                                    <div class="column">
                                        <p class="title"><span class="has-text-danger">Researcher</span> @ XJTLU</p>

                                        <p>Lorem ipsum dolor massa sem. Etiam finibus odio quis
                                        Lorem ipsum dolor massa sem. Etiam finibus odio quis Lorem ipsum do
                                        lor massa sem. Etiam finibus odio quis Lorem ipsum dolor massa sem. Etiam finibus odio quis Lorem i
                                        psum dolor massa sem. Etiam finibus odio quis Lorem ipsum dolor massa sem. Etiam finibus odio quis feu
                                         giat facilisis.</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="container is-max-desktop" id="border">
                        <div class="tile is-ancestor">
                            <div class="tile is-child box">
                                <p class="title"><span class="has-text-danger">PAL Leader & Peer Mentor </span> @ University of Liverpool</p>
                                <p>Lorem ipsum dolor massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        );
    }
}
