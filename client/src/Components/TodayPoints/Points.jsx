import React, { useState } from 'react'
import FallImg from '../../assets/down-arrow.svg'
import RaiseImg from '../../assets/up-arrow.svg'
const Points = (props) => {
    const [isFall, setIsFall ] = useState(false);
    const typeOfExchange = "NSE";
    const url = `http://flipr-hackathon1.onrender.com/index/${typeOfExchange}`;
    
    async function getData(url){

        const res = await fetch(url);

        var data = await res.json();
        console.log(data);
    }
    const date = "13 Jan";
    const year = "2023";
    const time = "13:25";
  return (
    <div className='p-1'>
        <h1 className='points'>17,972.15</h1>
        <h3 className='raised-by'>
            <span>
                <img src={isFall ? FallImg : RaiseImg} width="35px"/>
            </span>
            <span style={{color: isFall ? "red" : "green"}}>
                113.95 (0.64%)
            </span>
        </h3>
        <h5 className='as-on'>
            As on
            <span>
                {date}, {year} {time} IST
            </span>
        </h5>
    </div>
  )
}

export default Points
