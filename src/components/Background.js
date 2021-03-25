import "../css/App.css";
import { Component } from "react";
import cube from "../media/cubenew.jpg";
import Liverpool from "../media/LiverpoolLogo.png";
import Leeds from "../media/LeedsLogo.png";

export default class Background extends Component {
    render() {
        return (
            <div className="canv2">
                <div className="canv" style={{ backgroundImage: `url(${cube})` }}>
                    <div class="container is-max-desktop" id="border">
                        <div class="tile is-ancestor">
                            <div class="tile is-4 is-vertical is-parent">
                                <div class="tile is-child box">
                                    <p class="title">One</p>
                                    <p>Lorem ipsum in ornare or vestibulum Etiam finibus odio quis feugiat facilisis.</p>
                                </div>
                                <div class="tile is-child box">
                                    <p class="title">Two</p>
                                    <p>Lorem ipsum dolor massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                                </div>
                            </div>
                            <div class="tile is-parent">
                                <div class="tile is-child box">
                                    <p class="title">Three</p>
                                    <p>Lorem ipsum dolor sit amet, consit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                                    <p>Suspendisse varius ligula ina a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
                                    <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        );
    }
}
