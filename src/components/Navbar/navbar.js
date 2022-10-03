import React,{useState} from 'react'
import { Button } from 'reactstrap'
import './navbar.css'
import logo from "../../assets/images/taxit.png"
import slach from "../../assets/images/navbarslach.png"


// import { ReactComponent as Taxit  } from '../../assets/images/logos/eye-ope';


function Navbar(props) {
console.log(props)
  // const [navStatus, setNavStatus] = useState('individual')
  //  const [taxStatus, setTaxStatus] = useState('individual')


  return (
    <div className='navbar'>
   <div className='left-bar'>
    <ul>
  <img src={logo} className='logo'></img>
  <li className={`li ${props.navStatus==="business"? "nav-active":""}`}><a href="#Businesses" onClick={()=>{props.setTaxStatus("business")
  props.setNavStatus("business")
console.log("business going")}}>For Businesses</a></li>
  <li className={`li ${props.navStatus==="individual"? "nav-active":""}`} ><a href="#Individuals" onClick={()=>{props.setTaxStatus("individual")
    props.setNavStatus("individual")

console.log("individual going")}}>For Individuals</a></li>
  {/* <li className='li '><a href="#Individuals" className='link'>For Individuals</a></li> */}

  {/* <Button className="li">good</Button> */}
  </ul>
    {/* <Button className="li active">good</Button> */}

   </div>

  <div className='right-bar'>
    <ul>
     
  <li><a href="#About">About us</a></li>
  <li><a href="#Content">Contact</a></li>


      <li><img src={slach} className='slach'></img></li>
      <li><a href="#Login">Login</a></li>

      <li><a href="#CreateAccount"  className='section-btn'>Create free account</a></li>
    {/* <Button>good</Button> */}

    </ul>

  </div>
 
    </div>
  )
}

export default Navbar