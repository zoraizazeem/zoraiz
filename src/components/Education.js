import "../css/App.css";
import { Component } from "react";
import cube from "../media/cubenew.jpg";
import Liverpool from "../media/LiverpoolLogo.png";
import Leeds from "../media/LeedsLogo.png";
import "../css/all.min.css";

export default class Education extends Component {
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
                                            <h4 class="title is-4">University of Leeds</h4>

                                            <a href="https://en.wikipedia.org/wiki/University_of_Leeds">
                                                <img src={Leeds} id="LeedsLogo" />
                                            </a>
                                        </figure>
                                        <p class="is-size-5">2021-2022     <i class="fas fa-calendar-alt"></i></p>
                                        {/*this code below is the google map location for Univeristy of Leeds*/}
                                        <a href="https://www.google.co.uk/maps/place/Woodhouse,+Leeds+LS2+9JT/@53.8075651,-1.5462999,14z/data=!4m5!3m4!1s0x48795eaa03220899:0xd4873e6855755dc5!8m2!3d53.8079744!4d-1.5533337" ><p class="is-size-5">LS2 9JT    <i class="fas fa-compass"></i></p>   </a>
                                    </div>
                                    <div class="column">
                                        <p class="title"><span class="has-text-danger">MSc </span> Data Science and Analytics</p>

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
                                            <h4 class="title is-4">University of Liverpool</h4>
                                            <a href="https://en.wikipedia.org/wiki/University_of_Liverpool">

                                                <img src={Liverpool} id="LiverpoolLogo" />
                                            </a>
                                        </figure>
                                        <p class="is-size-5">2017-2020     <i class="fas fa-calendar-alt"></i></p>
                                        {/* A link to the google maps for University of Liverpool */}
                                        <a href="https://www.google.com/maps/place/Liverpool+L69+3BX/@53.3804582,-2.978819,17z/data=!3m1!4b1!4m5!3m4!1s0x487b21233dbace2f:0x3a1c88d066f16dfa!8m2!3d53.3803315!4d-2.9764308"><p class="is-size-5">L69 3BX<i class="fas fa-compass"></i></p></a>
                                    </div>
                                    <div class="column">
                                        <p class="title"><span class="has-text-danger">BSc (Hons)</span> Chemistry</p>

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
                                <p class="title">Queen Elizabeth's Grammar School</p>
                                <p>Lorem ipsum dolor massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                            </div>
                        </div>
                    </div>
                    <div class="container is-max-desktop" id="border">
                        <div class="tile is-ancestor">
                            <div class="tile is-child box">
                                <p class="title">Hollins Technology College</p>
                                <p>Lorem ipsum dolor massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                            </div>
                        </div>
                    </div>
                    <div class="container is-max-desktop" id="border">
                        <div class="tile is-ancestor">
                            <div class="tile is-child box">
                                <p class="title">Sacred Heart RC Primary School</p>
                                <p>Lorem ipsum dolor massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
