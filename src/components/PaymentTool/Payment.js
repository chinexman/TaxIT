import React from 'react'
import {Row,Col,Container,Button,Card, CardBody} from 'reactstrap'

import Fast from "../../assets/images/Fast.png"
import user from "../../assets/images/user.png"
import secure from "../../assets/images/secure.png"
import './payment.css'


function Payment() {
  return (
    <React.Fragment>
      <section className="section"  style={{backgroundColor:"#FFFFFF"}}>
        <Container >
          <Row>
            <Col lg="12">
              <div className="text-center mb-5 mt-5">
                <h4  className='text-dark'>Payments tools designed for you</h4>
                <p className="text-dark section-text ">
            Providing you with the best online payment experience
                        </p>
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col lg="12">
              <div className="payment-card">
              
                   
                    <>
                      <Row>
                        <Col md={4}>
                          <Card>
                            <CardBody className="payment-item bg-white">

                            
                          
                           <div className=" payment-content" >
                            <img src={user} className="payment-icon"></img>
                            <h5 className="mb-2 font-weight-bold payment-title">User Friendly</h5>

                            <div className="  mb-1 payment-text">
                            Highly responsive and easy to navigate                                </div>


                           </div>
                            </CardBody>
                          </Card>
                          
                        </Col>
                        <Col md={4}>
                        <Card>
                        <CardBody className="payment-item bg-white">
                                                      
                           <div className=" payment-content" >
                            <img src={secure} className="payment-icon"></img>
                            <h5 className="mb-2 font-weight-bold payment-title">Secure</h5>

                            <div className="  mb-1 payment-text">
                            Your data is secure. It is continuously monitored, audited, and stored in an encrypted form.                               </div>


                           </div>
</CardBody>
                          </Card>
                          </Col>
                          <Col md={4}>
                        <Card>
                        <CardBody className="payment-item bg-white">
                                                     
                        <div className=" payment-content" >
                            <img src={Fast} className="payment-icon"></img>
                            <h5 className="mb-2 font-weight-bold payment-title">Fast</h5>

                            <div className="  mb-1 payment-text">
                            Transacting takes only a few seconds - it's convenient and safe.                           </div>


                           </div>
                             
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    </>
                   

                 

                 
                
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Payment