import React, { useState } from 'react'
import './Details.css'
import Graph from '../Graph/Graph'
import Points from '../TodayPoints/Points'
import Ranges from '../Ranges/Ranges'
import Categories from '../Categories/Categories'

const Details = () => {
  return (
    <>
    <div className='row'>
        <div className='col-sm-4 col-md-auto'>
            <div className='row box m-4'>
                <Points />
            </div>
            <div className='row box m-4'>
                <Ranges />
            </div>
        </div>
        <div className='col-sm-8 box m-4'>
            <Graph />
        </div>
    </div>
    <div className='line'></div>
    <div className='md-n5 row col-md-auto'>
        <Categories />
    </div>
    </>
  )
}

export default Details
