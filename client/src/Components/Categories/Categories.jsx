import React, { useState } from 'react'

const Categories = () => {
    const [ isActive, setIsActive ] = useState(true);
  return (
    <div className='box'>
      <div className='heading-options'>
        <button className='nav-butn' onClick={()=>{
            setIsActive(true)
        }}>OVERVIEW</button>
        <button className='nav-butn'>CHART</button>
        <button className='nav-butn'>TECHNICALS</button>
        <button className='nav-butn'>NEWS</button>
        <button className='nav-butn'>CONTRIBUTION</button>
        <button className='nav-butn'>COMPONENTS</button>
        <button className='nav-butn'>FORUM</button>
      </div>
    </div>
  )
}

export default Categories
