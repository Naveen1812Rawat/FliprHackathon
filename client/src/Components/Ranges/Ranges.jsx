import React from 'react'

const Ranges = () => {
    const DayLow = 1774.25;
    const DayHigh = 1774.25;
    const WeekLow = 1774.25;
    const WeekHigh = 1774.25;
  return (
    <div className="p-2">
      <div className='day-range'>
            <h1>Day Range</h1>
            <div className='DayPoints'>
                <p>{DayLow}</p>
                <p>{DayHigh}</p>
            </div>
            <div className='DayPoints'>
                <p style={{color: "red"}}>L</p>
                <hr className='line' />
                <p style={{color: "green"}}>H</p>
            </div>
        </div>
        <div className='day-range'>
            <h1>52 Week Range</h1>
            <div className='DayPoints'>
                <p>{WeekLow}</p>
                <p>{WeekHigh}</p>
            </div>
            <div className='DayPoints' style={{marginBottom: "20px"}}>
                <p style={{color: "red"}}>L</p>
                <hr className='line' />
                <p style={{color: "green"}}>H</p>
            </div>
        </div>
        <div className='day-range'>
            <h1 className='return-heading'>Returns</h1>
            <span style={{display: "flex"}}>
                <select className='return-option'>
                    <option value="YTD">YTD</option>
                </select>
                <p style={{color: "green", margin: "0px 10px"}}>3.55%</p>
            </span>
        </div>
    </div>
  )
}

export default Ranges
