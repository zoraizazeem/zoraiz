import '../css/App.css'
import { Component } from 'react'
import cube from '../media/cubenew.jpg'
import bulma from '../media/bulma.png'
import react from '../media/react.png'

export default class Projects extends Component {
  render() {
    return (
      <div id="page-container">
        <div id="content-wrap">
          <div className='canv2'>

            <div className='canv' style={{ backgroundImage: `url(${cube})` }}>
              <div class="tile is-ancestor">
                <div class="tile is-child notification is-info">
                  <p class="subtitle">
                    ✏️ I have documented my various personal projects and they are available on the following blog site :
                    </p>

                </div>
              </div>
              <button class="button is-danger">Go To Blog</button>

            </div>
          </div>
        </div>
        <footer id="footer">
          <p class="subtitle">This webiste was built by me, using React <img src={react} id="footerpics"></img> and Bulma CSS <img src={bulma} id="footerpics"></img>.
          </p>

        </footer>
      </div >
    )
  }
}
