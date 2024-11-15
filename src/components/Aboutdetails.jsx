import React from 'react'
import AboutCard from './AboutCard'

const Aboutdetails = ({Enter}) => {
  // const props
  return (
    <div className=''>

        <h2 className='text-[2vw] font-semibold tracking-[1px]'>{Enter}</h2>
        <div className='grid grid-cols-2'>
            <AboutCard />
        </div>
    </div>
  )
}

export default Aboutdetails