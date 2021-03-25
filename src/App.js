import cube from "./media/cubenew.jpg";
import "./css/App.css";
import { Component } from "react";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import ProfilePic from "./media/ZORAIZ.png";
import Background from "./components/Background";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
            <Route path="/background" component={Background} />
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
              <img class="is-rounded" src={ProfilePic} />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default App;


