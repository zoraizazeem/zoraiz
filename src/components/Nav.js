import "../css/App.css";
import { Component } from "react";


export default class Nav extends Component {
  render() {
    return (
      <ul>
        <li>
          <a class="active" href="/">
            About Me
          </a>
        </li>
        <li>
          <a href="projects">Projects</a>
        </li>
        <li>
          <a href="links">Links</a>
        </li>
        <li >
          <a href= 'resume' >Résumé</a>
        </li>

      </ul>
    );
  }
};


