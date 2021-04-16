import "../css/App.css";
import { Component } from "react";
import cube from "../media/cubenew.jpg";
import Liverpool from "../media/LiverpoolLogo.png";
import Leeds from "../media/LeedsLogo.png";
import "../css/all.min.css";

export default class LiverpoolMedia extends Component {
    render() {
        return (
            <div className="canv2">
                <div className="canv" style={{ backgroundImage: `url(${cube})` }}>
                    
                </div>
            </div>

        );
    }
}
