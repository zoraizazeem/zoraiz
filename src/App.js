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
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Education from "./components/Education";
import Work from "./components/Work";
import email from "./media/email.svg";
import ReadingList from "./components/ReadingList";
import Certifications from "./components/Certifications";

class App extends Component {
  render() {
    return (

      <HashRouter basename ="/">
        <div className="App">
          <Nav />
          
            <Route exact path="/"  component={Home}></Route>
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
            <Route path="/education" component={Education} />
            <Route path="/work" component={Work} />
            <Route path="/readinglist" component={ReadingList} />
            <Route path="/certifications" component={Certifications} />

          
        </div>
      </HashRouter>
    );
  }
}

const Home = () => (


  <div className="canv2">
    <div className="canv" style={{ backgroundImage: `url(${cube})` }}>
      <div class="columns">
        <div class="column is-one-quarter">
          <div class="px-5 py-5">
            <figure class="image is-256x256">
              <img src={ProfilePic} id="ProfPic" />
            </figure>

          </div>
        </div>
        <div class="column">
          <div class="container is-max-desktop" id="border">
            <div class="tile is-ancestor">
              <div class="tile is-child box">
                <p class="title">Professional In Data Science and Trained Chemist</p>
                <p class="subtitle">

                  Interests (Research): Quantitative analysis, computational simulations and artificial intelligence. Renewable and sustainable energy.</p>
                <p class="subtitle"> professional with experience in research. Passionate about probabalistic-AI and statistical modelling. Specific interests vary (as DS can be a very broad topic) but
                focused on renewable energy and sustainable finance.</p>
                <p class="subtitle">Work: Business intelligence, consumer data and business valuation.</p>
                <p class="subtitle">Applying physical and statistical modelling techniques to help understand to complex systems. Domain specific knowledge in energy and finance.</p>

              </div>
            </div>
          </div>
          <div class="container is-max-desktop" id="border">
            <div class="tile is-ancestor">
              <div class="tile is-child box">

                <p class="title is-1">
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

);

export default App;


