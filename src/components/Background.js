import "../css/App.css";
import { Component } from "react";
import cube from "../media/cubenew.jpg";

export default class Background extends Component {
  render() {
    return (
        <div className= "canv2">
            <div className = "canv" style={{ backgroundImage : `url(${cube})` }}>
                <div class = "columns">
                    <div class = "column is-one-quarter">
                        <div class = "px-5 py-5">
                            <figure class="image is-256x256">
                            <img class="is-rounded" src= {ProfilePic}/>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
  }
}
