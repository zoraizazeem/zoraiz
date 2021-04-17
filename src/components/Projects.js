import '../css/App.css'
import { Component } from 'react'
import cube from '../media/cubenew.jpg'

export default class Projects extends Component {
  render() {
    return (
      <div className='canv2'>

        <div className='canv' style={{ backgroundImage: `url(${cube})` }}></div>
      </div>
    )
  }
}
