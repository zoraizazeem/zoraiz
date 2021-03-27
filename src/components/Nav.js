import "../css/App.css";
import { Component } from "react";
import logo from "../media/brains.ico"

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" >
              <img src={logo} width="30" height="28"></img>

              <div class="pl-2" >
                <h1>   Ray Azeem</h1>
              </div>
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item" href="/">
                Home
              </a>

              <a class="navbar-item" href="education">
                Education
              </a>
              <a class="navbar-item" href="work">
                Work
              </a>
              <a class="navbar-item" href="projects">
                Projects
              </a>
              <a class="navbar-item"> Reading List</a>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  Links
                </a>

                <div class="navbar-dropdown">
                  <a class="navbar-item">
                    GitHub
                  </a>
                  <a class="navbar-item">
                    LinkedIn
                  </a>
                  <a class="navbar-item">
                    Twitter
                  </a>
                  <a class="navbar-item">
                    Reddit
                  </a>
                  <a class="navbar-item">
                    Contact Me
                  </a>
                  <hr class="navbar-divider" />
                  <a class="navbar-item">
                    Report an issue
                  </a>
                </div>
              </div>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a class="button is-primary" href="resume">
                    <strong>Résumé</strong>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </nav>

      </div>
    );
  }
};





