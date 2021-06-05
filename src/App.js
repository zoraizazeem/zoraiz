import cube from "./media/cubenew.jpg";
import "./css/App.css";
import { Component } from "react";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import ProfilePic from "./media/ZORAIZ.png";
import Github from "./media/github-logo.svg";
import LinkedIn from "./media/LinkedIn.png";
import phone from "./media/call.svg";
import { HashRouter, Route, Link } from 'react-router-dom';
import Education from "./components/Education";
import Work from "./components/Work";
import email from "./media/email.svg";
import ReadingList from "./components/ReadingList";
import Certifications from "./components/Certifications";
import bulma from './media/bulma.png';
import react from './media/react.png';

class App extends Component {
  render() {
    return (

      <HashRouter basename="/">
        <div className="App">
          <Nav />


          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/education" component={Education} />
          <Route path="/work" component={Work} />
          <Route path="/readinglist" component={ReadingList} />
          <Route path="/certifications" component={Certifications} />
          <Route exact path="/" component={Home} />


        </div>
      </HashRouter>
    );
  }
}

const Home = () => (
  <div id="page-container">
    <div id="content-wrap">
      <div className="canv2">
        <div className="canv" style={{ backgroundImage: `url(${cube})` }}>
          <div class="columns">
            <div class="column is-one-quarter">
              <div class="px-5 py-5">
                <figure class="image is-256x256">
                  <img src={ProfilePic} id="ProfPic" />
                </figure>

              </div>
              <div class="container is-max-desktop" id="border">

                <div class="tile is-ancestor">
                  <div class="tile is-child box">
                    <p class="title">
                      Hi 👋, I'm Zoraiz Azeem.
                    </p>
                    <p class="subtitle has-text-grey-light">
                      ("Zuh-Raise  As-eem")
                    </p>
                    <p class="title">
                      You can call me Ray, for short.
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <div class="column">
              <div class="container is-max-desktop" id="border">

                <div class="tile is-ancestor">
                  <div class="tile is-child box">
                    <p class="title">Professional In Data Science and Trained Chemist</p>
                    <p class="subtitle has-text-grey">
                      Experience in research and business.</p>
                    <p class="subtitle">  My passions are in probabalistic-AI and statistical modelling. Specific interests in
                    energy and finance.</p>
                    <p class="subtitle">Strengths: Quantitative analysis, software and database development. Business intelligence, consumer data and business valuation. Data visualisation, pattern recognition and machine learning.</p>


                  </div>
                </div>
              </div>
              <div class="container is-max-desktop" id="border">
                <div class="tile is-ancestor">
                  <div class="tile is-child box">

                    <p class="subtitle"><i>Applying physical and statistical modelling techniques to understand and solve complex problems.</i></p>

                  </div>
                </div>
              </div>

              <div class="container is-max-desktop" id="border">
                <div class="tile is-ancestor">
                  <div class="tile is-child box">

                    <p class="title is-3">
                      All My Links:
                </p>
                    <div class="columns">
                      <div class="column">
                        <a href="https://github.com/zoraizazeem"><img src={Github} id="GithubLogo" /></a>
                      </div>
                      <div class="column">
                        <a href="https://www.linkedin.com/in/ray-azeem/"><img src={LinkedIn} id="GenericLogo" /></a>
                      </div>
                      <div class="column">
                        <img src={phone} id="GenericLogo" />
                      </div>
                      <div class="column">
                        <img src={email} id="GenericLogo" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
    <footer id="footer">
      <p class="subtitle">This webiste was built by me, using React <img src={react} id="footerpics"></img> and Bulma CSS <img src={bulma} id="footerpics"></img>.
          </p>

    </footer>
  </div>
);

export default App;


