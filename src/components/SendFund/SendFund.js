import React from 'react'
import { Button, Container } from 'reactstrap'
import sendfund from "../../assets/images/sendfund1.png"
import './sendFund.css'


function SendFund() {
  return (
    <section>
        <div className="send">
       
      <div className='send-text'>
      <p className='send-title'>Send Funds</p>
      <p>Remit taxes</p>
      <p>Buy utilities</p>
      <Button className='send-btn'> Get Started</Button>

      </div>
      </div>
    </section>
  )
}

export default SendFund