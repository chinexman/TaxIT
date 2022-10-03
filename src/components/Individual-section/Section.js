import React from 'react'
import { Link } from "react-router-dom";

import {Row,Col,Container,Button} from 'reactstrap'
import './section.css'
import topmidpic from "../../assets/images/topmidpic.png"
import leftbottompic from "../../assets/images/leftbottompic.png"
import rightpic from "../../assets/images/rightpic.png"
import leftpic from "../../assets/images/leftpic.png"
import bottompic from "../../assets/images/bottompic.png"
import central from "../../assets/images/central.png"
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
        <Col lg="6" className="landingspace">
          <div className="text-dark-50 landingtext">
            <h2 className="text-white font-weight-semibold mb-3 section-title">
            Secure & seamless online transactions
            </h2>
            <p className="text-white section-text ">
            Providing you with the best online payment experience
                        </p>

            <div className="d-flex justify-content-center align-item-center gap-2 mt-4">
            
              <Button className='section-btn' style={{marginLeft:"-250px"}}>
                Create free account
              </Button>
             
            </div>
          </div>
        </Col>
        <Col lg="6" md="6" sm="8" className="homepic">
        <img
        className=" topmidpic"
        src={ topmidpic }

        alt="Header Avatar"
      />
      <img
        className="outerleftbottompic"
        src={ outerleftbottompic }

        alt="Header Avatar"
      />
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
      /> 
       <img
      className=" central"
      src={ central }

      alt="Header Avatar"
    />
       
        </Col>
      </Row>
    </Container>
  </section>
</React.Fragment>
  )
}

export default Section