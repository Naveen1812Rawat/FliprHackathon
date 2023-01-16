import React, { useState } from 'react'
import './Navbar.css'
const Navbar = () => {
  const [ StockExchange, setStockExchange] = useState("");
  const handleExchange = ()=>{
    const type = document.getElementById("stock-exchange").value;
    {type === "NSE" ? setStockExchange("NIFTY 50") : setStockExchange("SENSEX")}
  }
  return (
    <>
      <div className='nav-components'>
        <select onClick={handleExchange} id="stock-exchange" className='nav-butn'>
          <option value="NSE" name="NSE">NSE</option>
          <option value="BSE" name="BSE">BSE</option>
        </select>
        <button className='nav-butn'>Future</button>
        <button className='nav-butn'>Options</button>
      </div>
      <div className='stock-exchange'>
        <h1>{StockExchange}</h1>
      </div>
      <hr className='line1' />
    </>
  )
}

export default Navbar
