import "../css/App.css";
import { Component } from "react";
import cube from "../media/cubenew.jpg";
import Liverpool from "../media/LiverpoolLogo.png";
import Leeds from "../media/LeedsLogo.png";
import "../css/all.min.css";
import certifications from "../media/merged.pdf"
import folder from "../media/folder.svg";
import qegs from "../media/qegs.png";
import bulma from '../media/bulma.png';
import react from '../media/react.png';



export default class Education extends Component {
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


                                                <div class="level-left">
                                                    <ul class="b">
                                                        <li>Deferred entry due to the Covid-19 Pandemic</li>
                                                        <li>Computational statistics</li>
                                                        <li>Machine learning & Artificial intelligence</li>

                                                    </ul>
                                                </div>
                                            </div>
                                            <div><img src={folder} title="Transcript and Certificate" id="MediaLogoSmall" /></div>
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

                                                <p class="title"><span class="has-text-danger">BSc (Hons)</span> Chemistry - <span class="has-text-grey">1st Class
                                                </span> </p>

                                                <ul class="b">
                                                    <li><a href="https://twitter.com/hipyliv?lang=en">Member of HiPy (hosted by LivIdea)</a> Learning python and anaconda  for researchers.</li>
                                                    <li>Modelling molecular and energy system.</li>
                                                    <li>Maths for Physicists, working knowledge statistics, series, complex manipulation.</li>
                                                    <li>Maths for quantum mechanics. (including eigenvectors & working knowledge of linear algebra)</li>
                                                    <li>Engineering (intro) (mass/heat transfer, fluid mechanics & project economics)</li>
                                                    <li>Dissertation title : <a href="https://www.dropbox.com/s/0rh4c4ffol0hsx2/CHEM356Dissertation.pdf?dl=0">Synthesis of 3-Hexylthiophene, Using a Ni(dppe)Cl2 Catalyst.
                                                    </a></li>
                                                </ul>


                                            </div>
                                            <div ><a href={certifications} ><img src={folder} title="Transcript and Certificate" id="MediaLogoSmall" /></a></div>
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
                                                    <h4 class="title is-4">QEGS Blackburn</h4>
                                                    <a href="https://en.wikipedia.org/wiki/Queen_Elizabeth%27s_Grammar_School,_Blackburn">

                                                        <img src={qegs} id="LiverpoolLogo" />
                                                    </a>
                                                </figure>
                                                <p class="is-size-5">2015-2017    <i class="fas fa-calendar-alt"></i></p>
                                                {/* A link to the google maps for University of Liverpool */}
                                                <a href="https://www.google.co.uk/maps/place/Blackburn+BB2+6DF/@53.7542194,-2.4982463,17z/data=!3m1!4b1!4m5!3m4!1s0x487b9fd4c49eee83:0x741ecd62771f59d8!8m2!3d53.7533997!4d-2.4959717?hl=en"><p class="is-size-5">BB2 6DF<i class="fas fa-compass"></i></p></a>
                                            </div>

                                            <div class="column">

                                                <p class="title"> <span class="has-text-danger">A - Levels</span> Sixth Form</p>

                                                <ul class="b">
                                                    <li>Grade A A-Level Chemistry</li>
                                                    <li>Grade A A-Level Biology</li>
                                                    <li>Grade B A-Level Maths</li>
                                                    <li>Grade A AS-Level Physics</li>
                                                    <li>AG Campbell Prize for Mathematics (best performance within college for Mathematics)</li>
                                                    <li>Allan Earle Prize for Chemistry (best performance within college for Chemistry)</li>


                                                </ul>


                                            </div>
                                            <div><img src={folder} title="Transcript and Certificate" id="MediaLogoSmall" /></div>
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
