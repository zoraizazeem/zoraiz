import cube from "./media/cubenew.jpg";
import "./css/App.css";
import { Component } from "react";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path = "/" exact component = {Home}></Route>
          <Route path="/projects" component = {Projects} />
          <Route path = "/resume" component = {Resume}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

const Home = () => (
  <div className= "canv2">
  <div className = "canv" style={{ backgroundImage : `url(${cube})` }}>
        
      
  </div>
  </div>
);

export default App;
