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
                                            <h4 class="title is-4">NYU <span class="has-text-grey" > (via Coursera.org)</span></h4>
                                            

                                            <a href="https://www.coursera.org/">
                                                <img src={NYULogo} id="LeedsLogo" />
                                            </a>
                                        </figure>
                                        <p class="is-size-5">2020    <i class="fas fa-calendar-alt"></i></p>
                                        {/*this code below is the google map location for Univeristy of Leeds*/}
                                    </div>
                                    <div class="column">
                                        <p class="title">Fundamentals of Machine Learning in Finance</p>
                                        <div align ="left"> <h4 class="title is-5"> Weekly projects included:</h4> </div>

                                        <div class="level-left">

                                            <ul class="b">
                                                
                                                <li>Decision trees and random forests.</li>
                                                <li>Eigen portfolio construction via PCA.</li>
                                                <li>Data visualisation with t-SNE.</li>
                                                <li>Stock analysis with absoprtion ratios and PCA.</li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div><a href="https://coursera.org/share/06cb9c18a23602e6ee3ffd6d807fc94e"><img src={folder} title="Transcript and Certificate" id="MediaLogoSmall" /></a></div>
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
                                            <h4 class="title is-4">IBM <span class="has-text-grey" > (via Coursera.org)</span></h4>
                                            <a href="https://www.coursera.org/">

                                                <img src={IBMLogo} id="LeedsLogo" />
                                            </a>
                                        </figure>
                                        <p class="is-size-5">2020     <i class="fas fa-calendar-alt"></i></p>
                                        {/* A link to the google maps for University of Liverpool */}
                                    </div>

                                    <div class="column">

                                        <p class="title">Python for Datascience and AI </p>

                                        <ul class="b">
                                            
                                            <li>Bringing Python knowledge to a professional level.</li>
                                            <li>Python functions, objects, classes, decorators and function wrappers.</li>
                                        </ul>


                                    </div>
                                    <div><a href="https://coursera.org/share/e8ffa4abef12df3c67f7364a7dfe5389"><img src={folder} title="Transcript and Certificate" id="MediaLogoSmall" /></a></div>
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
                                            <h4 class="title is-4">IBM <span class="has-text-grey" > (via Coursera.org)</span></h4>
                                            <a href="https://www.coursera.org/">

                                                <img src={IBMLogo} id="LeedsLogo" />
                                            </a>
                                        </figure>
                                        <p class="is-size-5">2020    <i class="fas fa-calendar-alt"></i></p>
                                        {/* A link to the google maps for University of Liverpool */}
                                    </div>

                                    <div class="column">

                                        <p class="title"> Databases and SQL for Datascience </p>

                                        <ul class="b">
                                            <li>Creating and accessing a database instances on cloud (IBM Watson)</li>
                                            <li>Write SQL statements.</li>
                                            <li>Filter, sort, group results, use built-in functions, access multiple tables.</li>
                                            <li>Access databases from Jupyter using Python and work with real world datasets.</li>
                                            

                                        </ul>


                                    </div>
                                    <div><a href="https://coursera.org/share/7e21d967554777e49811a75afda55c32"><img src={folder} title="Transcript and Certificate" id="MediaLogoSmall" /></a></div>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>
            </div>

        );
    }
}
