import "../css/App.css";
import cv from "../media/MYCV.pdf";
import cube from "../media/cubenew.jpg"
import bulma from '../media/bulma.png'
import react from '../media/react.png'
import { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
      <div id="page-container">
        <div id="content-wrap">
          <div classNmae="canv2">
            <div className="canv" style={{ backgroundImage: `url(${cube})` }}>
              <div class="leftpane">

                <object
                  data={cv}
                  type="application/pdf"
                  width="500"
                  height="678"
                >

                  <iframe
                    src={cv}
                    width="500"
                    height="678"
                  >
                    <p>This browser does not support PDF!</p>
                  </iframe>

                </object>

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