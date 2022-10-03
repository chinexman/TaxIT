import React from 'react'
import { Link } from "react-router-dom";

import {Row,Col,Container,Button} from 'reactstrap'
import './section.css'
import topmidpic from "../../assets/images/topmidpic.png"
import leftbottompic from "../../assets/images/leftbottompic.png"
import rightpic from "../../assets/images/rightpic.png"
import businessline from "../../assets/images/businessline.png"
import businesscircle from "../../assets/images/businesscircle.png"
import photo from "../../assets/images/photo.png"
import outerleftbottompic from "../../assets/images/outerleftbottompic.png"



function Section() {
  return (
  //   <section className="section ">

   
  //  <div className='container'>
  //   {/* <Row>
  //    <Col lg='6' md='6' sm='12'> */}
  //   <div className='sectiontext'>
  //   <p className='sectiontitle'>
  //   Secure & seamless online transactions
  //   </p>
  //   <p>Providing you with the best online payment experience</p>
  //   {/* <Button>
  //   Create free account
  //   </Button> */}
  //   </div>

  //    {/* </Col>
  //   <Col lg='6' md='6' sm='12' style={{background:"red"}}  > */}

  //   <div className='sectionimg'>
  //   <img src={landing} width="100%"></img>
  //   </div>
  //     <p></p>
  //   {/* </Col>

  //   </Row> */}
  //  </div>
  //  </section>

  <React.Fragment>
  <section className="section " id="home" style={{backgroundColor: "#060809"}}>


    <Container >
      <Row className="align-items-center reversemobile">
        <Col lg="12" className="landingspace">
          <div className="text-dark-50 businesstext">
            <h2 className="text-white font-weight-semibold mb-3 section-title">
            Manage payroll, compliance & HR in real time            </h2>
            <p className="text-white section-text ">
            Make income tax remittances to the state internal revenue service for your employees.                        </p>

            <div className="d-flex justify-content-center align-item-center gap-2 mt-4">
            
              <Button className='business-btn' >
                Create free account
              </Button>
             
            </div>
          </div>
        </Col>
        <Col lg="12" md="12" sm="12" className="homepic">
         <img
        className="businesscircle"
        src={ businesscircle }

        alt="Header Avatar"
      />
   

      <img
        className="businessline"
        src={ businessline }

        alt="Header Avatar"
      />

         {/*
        <img
      className=" leftbottompic"
      src={ leftbottompic }

      alt="Header Avatar"
    /> 
     <img
    className=" rightpic"
    src={ rightpic }

    alt="Header Avatar"
  /> 
   <img
  className=" leftpic"
  src={ leftpic }

  alt="Header Avatar"
/> 
 <img
        className=" bottompic"
        src={ bottompic }

        alt="Header Avatar"
      />  */}
       <img
      className=" photo"
      src={ photo }

      alt="Header Avatar"
    />
       
        </Col>
      </Row>
    </Container>
  </section>
  <section className="container2"  style={{backgroundColor:"#FFFFFF"}}>
        <Container >
         
           
        </Container>
      </section>
</React.Fragment>
  )
}

export default Section