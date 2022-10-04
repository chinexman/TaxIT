import React,{useState} from 'react'
import {Row,Col,Container,Button} from 'reactstrap'

import paybil from "../../assets/images/paybill.png"
import paybillcircle from "../../assets/images/paybill-circle.png"
import paybilloutcircle from "../../assets/images/paybill-outcircle.png"
import paybilltop from "../../assets/images/paybill-top.png"
import buyairtime from "../../assets/images/buyairtime.png"
import moneytran from "../../assets/images/moneytransfer.png"
import outerreport from "../../assets/images/outerreport.png"

import './paybil.css'


function PayBil() {

    const [buyairtimedata , setBuyAirtime]=useState(false)
    const [payingbill, setPayBill] = useState(true)
    const [moneytransfer, setMoneyTransfer] = useState(false)

    const [ notactive, setNotActive]=useState(false)

  return (
    <section className="section " id="home" style={{backgroundColor: "#FFFFFF"}}>


    <Container >
      <Row className="align-items-center ">
   
        <Col lg="6" >
            <div className='menu'>
           <div className={`.item-pay ${payingbill ? "active":""}`} onClick={()=>{
            setPayBill(true)
            setBuyAirtime(false)
            setMoneyTransfer(false)

           }}>
                 <div className='item-text'>
                <h3 className='paybill-title'>Pay bills</h3>
                <p className='paybill-text'>Paying your bills has never been so easy.</p>
                </div>
           </div>
           <div className={`item-pay ${buyairtimedata ? "active":""}`}
   onClick={()=>{
    setPayBill(false)
    setBuyAirtime(true)
    setMoneyTransfer(false)
   }}>
                 <div className='item-text'>
                <h3 className='paybill-title'>Buy Airtime & Data</h3>
                <p className='paybill-text'>Never get caught with low airtime and data again!</p>
                </div>
           </div>
           <div className={`item-pay ${moneytransfer ? "active":""}`}
            onClick={()=>{
            setPayBill(false)
            setBuyAirtime(false)
            setMoneyTransfer(true)
           }}>
                 <div className='item-text'>
                <h3 className='paybill-title'>Money Transfer</h3>
                <p className='paybill-text'>Transferring money is now hassle-free.</p>
                </div>
           </div>
           <div className={`item-pay ${payingbill ? "active":""}`}
   onClick={()=>{
    setPayBill(true)
    setBuyAirtime(false)
    setMoneyTransfer(false)
   }}>
                 <div className='item-text'>
                <h3 className='paybill-title'>Pay Toll Fee</h3>
                <p className='paybill-text'>Never worry about getting a toll ticket again.
</p>
                </div>
           </div>

            </div>
         
        </Col>

        {payingbill && <Col lg="6" md="6" sm="8" className="paybill">
        <img
        className=" paybilltop"
        src={ paybilltop }

        alt="Header Avatar"
      />

 <img
        className=" paybil"
        src={ paybil }

        alt="Header Avatar"
      /> 
       <img
        className=" paybillcircle"
        src={ paybillcircle }

        alt="Header Avatar"
      /> 
        <img
        className="paybilloutcircle"
        src={ paybilloutcircle }

        alt="Header Avatar"
      /> 
        </Col>}

{buyairtimedata && <Col lg="6" md="6" sm="8" className="paybill">
        <img
        className=" buyairtime"
        src={ buyairtime }

        alt="Header Avatar"
      />


       <img
        className=" paybillcircle"
        src={ paybillcircle }

        alt="Header Avatar"
      /> 
        <img
        className="paybilloutcircle"
        src={ paybilloutcircle }

        alt="Header Avatar"
      /> 
        </Col>}

        {moneytransfer && <Col lg="6" md="6" sm="8" className="paybill">
        <img
        className=" outerreport"
        src={ outerreport }

        alt="Header Avatar"
      />

 <img
        className=" moneytran"
        src={ moneytran }

        alt="Header Avatar"
      /> 
       <img
        className=" paybillcircle"
        src={ paybillcircle }

        alt="Header Avatar"
      /> 
        <img
        className="paybilloutcircle"
        src={ paybilloutcircle }

        alt="Header Avatar"
      /> 
        </Col>}
       
      </Row>
    </Container>
  </section>
  )
}

export default PayBil
