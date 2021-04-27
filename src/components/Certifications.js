import "../css/App.css";
import { Component } from "react";
import cube from "../media/cubenew.jpg";
import Liverpool from "../media/LiverpoolLogo.png";
import Leeds from "../media/LeedsLogo.png";
import "../css/all.min.css";
import transcript from "../media/Transcript.pdf";
import folder from "../media/folder.svg";
import qegs from "../media/qegs.png";
import NYULogo from "../media/NYULogo.jpg";
import IBMLogo from "../media/IBM-Logo.png";

export default class Certifications extends Component {
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
                                            <h4 class="title is-4">NYU</h4>

                                            <a href="https://en.wikipedia.org/wiki/University_of_Leeds">
                                                <img src={NYULogo} id="LeedsLogo" />
                                            </a>
                                        </figure>
                                        <p class="is-size-5">2020    <i class="fas fa-calendar-alt"></i></p>
                                        {/*this code below is the google map location for Univeristy of Leeds*/}
                                    </div>
                                    <div class="column">
                                        <p class="title">Fundamentals of Machine Learning in Finance</p>
                                        <div align ="left"> <h4 class="subtitle is-5"> Projects here included</h4> </div>

                                        <div class="level-left">

                                            <ul class="b">
                                                
                                                <li>Random Forests And Decision Trees.</li>
                                                <li>Eigen Portfolio Construction via PCA.</li>
                                                <li>Data Visualisation with t-SNE.</li>
                                                <li>Absorption via PCA.</li>

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
                                            <h4 class="title is-4">IBM (Coursera)</h4>
                                            <a href="https://en.wikipedia.org/wiki/University_of_Liverpool">

                                                <img src={IBMLogo} id="LeedsLogo" />
                                            </a>
                                        </figure>
                                        <p class="is-size-5">2020     <i class="fas fa-calendar-alt"></i></p>
                                        {/* A link to the google maps for University of Liverpool */}
                                    </div>

                                    <div class="column">

                                        <p class="title">Python for Datascience and AI </p>

                                        <ul class="b">
                                            <li><a href="https://twitter.com/hipyliv?lang=en">Member of HiPy (hosted by LivIdea) Learning python and anaconda  for researchers.</a></li>
                                            <li>Modelling molecular and energy system.</li>
                                            <li>Maths for Physicists, working knowledge statistics, series, complex manipulation.</li>
                                            <li>Maths for quantum mechanics. (including eigenvectors & working knowledge of linear algebra)</li>
                                            <li>Engineering (intro) (mass/heat transfer, fluid mechanics & project economics)</li>
                                        </ul>


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
                                            <h4 class="title is-4">IBM (Coursera)</h4>
                                            <a href="https://en.wikipedia.org/wiki/Queen_Elizabeth%27s_Grammar_School,_Blackburn">

                                                <img src={IBMLogo} id="LeedsLogo" />
                                            </a>
                                        </figure>
                                        <p class="is-size-5">2020    <i class="fas fa-calendar-alt"></i></p>
                                        {/* A link to the google maps for University of Liverpool */}
                                    </div>

                                    <div class="column">

                                        <p class="title"> Databases and SQL for Datascience </p>

                                        <ul class="b">
                                            <li>Grade A A-Level Chemistry</li>
                                            <li>Grade A A-Level Biology</li>
                                            <li>Grade B A-Level Maths</li>
                                            <li>Grade A AS-Level Physics</li>

                                        </ul>


                                    </div>
                                    <div><img src={folder} title="Transcript and Certificate" id="MediaLogoSmall" /></div>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>
            </div>

        );
    }
}
