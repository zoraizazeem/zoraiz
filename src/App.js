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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Education from "./components/Education";
import Work from "./components/Work";
import email from "./media/email.svg";

class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
            <Route path="/education" component={Education} />
            <Route path="/work" component={Work} />
          </Switch>
        </div>
      </Router>
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
                <p class="subtitle">Intersts: Quantitative analysis, coputational simulatiytng and artificial intelligence.
          Energy,  sustainable , renewable and economically viable.</p>
                <p class="subtitle">Applying physical, mathematical and statistical moxelling and understanding to complex systems, such as renewable energy and financial modelling.
                </p>

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
                <img  src={Github} id="GenericLogo"/>
              </div>
              <div class="column">
                <img src={LinkedIn} id = "GenericLogo" />
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


