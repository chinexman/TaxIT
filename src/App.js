import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar'
import Individual_Section from './components/Individual-section/Section'
import Business_Section from './components/Business-section/Section'
import Payment from './components/PaymentTool/Payment'
import PayBil from './components/PayBill/PayBil'
import Transaction from './components/Transaction/Transaction'
import SendFund from './components/SendFund/SendFund'
import Footer from './components/Footer/Footer'


function App() {

  const [navStatus, setNavStatus] = useState('individual')
  const [taxStatus, setTaxStatus] = useState('individual')
    console.log(taxStatus)
  return (
    <div className="App">
     
      <Navbar navStatus ={navStatus} setNavStatus={setNavStatus} taxStatus={taxStatus} setTaxStatus={setTaxStatus} />
     { taxStatus === "individual" && <>  
     <Individual_Section />
      <Payment />
      <PayBil />
      <Transaction />
      <SendFund />
      <Footer />
      </>
    }
     { taxStatus === "business" && <>  
     <Business_Section />
      <Payment />
      <PayBil />
      <Transaction />
      <SendFund />
      <Footer />
      </>
    }
    </div>
  );
}

export default App;
