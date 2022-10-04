import React, { useState } from 'react'
import { Button } from 'reactstrap'
import './navbar.css'
import logo from "../../assets/images/taxit.png"
import slach from "../../assets/images/navbarslach.png"




function Navbar(props) {

  return (
    <div className='navbar'>
      <div className='left-bar'>
        <ul>
          <img src={logo} className='logo'></img>
          <li className={`li ${props.navStatus === "business" ? "nav-active" : ""}`}><a href="#Businesses" onClick={() => {
            props.setTaxStatus("business")
            props.setNavStatus("business")
          }}>For Businesses</a></li>
          <li className={`li ${props.navStatus === "individual" ? "nav-active" : ""}`} ><a href="#Individuals" onClick={() => {
            props.setTaxStatus("individual")
            props.setNavStatus("individual")

          }}>For Individuals</a></li>

        </ul>

      </div>

      <div className='right-bar'>
        <ul>

          <li><a href="#About">About us</a></li>
          <li><a href="#Content">Contact</a></li>


          <li><img src={slach} className='slach'></img></li>
          <li><a href="#Login">Login</a></li>

          <li><a href="#CreateAccount" className='section-btn'>Create free account</a></li>

        </ul>

      </div>

    </div>
  )
}

export default Navbar