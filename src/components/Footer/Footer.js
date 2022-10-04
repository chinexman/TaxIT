import React from 'react'
import './footer.css'
import instangram from "../../assets/images/instangram.png"
import facebook from "../../assets/images/facebook.png"
import twitter from "../../assets/images/twitter.png"
import logo from "../../assets/images/taxit.png"





function Footer() {
  return (
    <div className='footer'>

      <div className='left-footer'>
        <img src={logo} width="100px" className='space' ></img>
        <div className='icon'>
          <img src={instangram}></img>
          <img src={facebook}></img>
          <img src={twitter}></img>
        </div>
        <p>2015-2022 Taxaide Technologies Limited. All rights reserved</p>
      </div>
      <div className='right-footer'>
        <div className='about us'>
          <p className='footer-weight'>About us</p>
          <p>About</p>
          <p>Legal & privacy</p>
          <p className='text-white'>.</p>
        </div>
        <div className='Products'>
          <p className='footer-weight'>Products</p>
          <p>TBook®</p>
          <p>TaxiTWithhold®</p>
          <p>TaxiTPayroll®</p>
        </div>
      </div>
    </div>
  )
}

export default Footer