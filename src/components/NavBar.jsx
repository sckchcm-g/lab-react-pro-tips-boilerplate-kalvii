import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
export class NavBar extends Component {
  render() {
    return (
        <div className='navbar'>
        <div>
            <div className="home"><Link to="/" className='homing'>Kalvium ❤️</Link></div>
        </div>
        <div className='nav'>
            {/* <div className="about"><Link to="/Aboutus" >About</Link></div> */}
            <div className="contact"><Link to="/contact" >Contact</Link></div>
            <div className='register'><Link to="/register" >Register</Link></div>
        </div>
        </div>
    )
  }
}

export default NavBar