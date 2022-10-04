import React from 'react'
import { Row, Col, Container, Button } from 'reactstrap'

import paybil from "../../assets/images/paybill.png"
import apple from "../../assets/images/Groupapple.png"
import google from "../../assets/images/googleplaygoogle.png"
import cover from "../../assets/images/cover.png"
import glass from "../../assets/images/glass.png"
import hotmobile from "../../assets/images/hotmobile.png"



import './transaction.css'


function Transaction() {
    return (
        <section className="section " id="home" >


            <Container >
                <Row className="align-items-center ">


                    <Col lg="6" md="6" sm="8" >
                        <div className='transation-img'>
                            <img
                                className="cover"
                                src={cover}

                                alt="Header Avatar"
                            />
                            <img
                                className="glass"
                                src={glass}

                                alt="Header Avatar"
                            />
                            <img
                                className="hotmobile"
                                src={hotmobile}

                                alt="Header Avatar"
                            />
                        </div>
                    </Col>
                    <Col lg="6" className="landingspace">

                        <div className="text-dark-50 mb-3 transaction-text">
                            <p className="text-dark font-weight-semibold mb-2 transaction-title ">
                                Transact on the go
                            </p>
                            <p className="text-dark">
                                Stay on top of your business with our easy-to-use app
                            </p>

                            <div className="d-flex justify-content-center align-item-center gap-2 mt-2">

                                <Button className='transact-btn mb-3' >
                                    Get Started
                                </Button>

                            </div>
                            <div className='d-flex'>
                                <img src={apple} ></img>
                                <img src={google} className="google"></img>
                            </div>
                        </div>
                    </Col>



                </Row>
            </Container>
        </section>
    )
}

export default Transaction
