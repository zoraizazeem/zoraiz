import '../css/App.css'
import { Component } from 'react'
import cube from '../media/cubenew.jpg'

export default class Projects extends Component {
  render() {
    return (
      <div className='canv2'>

        <div className='canv' style={{ backgroundImage: `url(${cube})` }}>
          see blog at : https://zoraizazeem.github.io/blog/
        </div>
      </div>
    )
  }
}
