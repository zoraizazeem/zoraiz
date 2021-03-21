import "../css/App.css";
import cv from "../media/MYCV.pdf";
import cube from "../media/cubenew.jpg"

import { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
        <div classNmae = "canv2">
        <div  className = "canv" style={{ backgroundImage : `url(${cube})` }}>
        

        <object
        data= {cv}
        type="application/pdf"
        width="500"
        height="678"
      >

        <iframe
          src= {cv}
          width="500"
          height="678"
        >
        <p>This browser does not support PDF!</p>
        </iframe>

      </object>
        
        </div>
        </div>
      
    );
  }
}