import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import{Slide} from 'react-awesome-reveal'
function Banner() {
  return (
    <Slide triggerOnce>
    <div className='bg-red-500 grid grid-cols-2 m-6 p-6'>
         {/* first column */}
        <div>
           {/* first row */}
            <div><p className='text-white text-3xl font-bold '>Unlock the saving</p></div> 
            {/* second row */}
            <div><p className='text-2xl text-white font-semibold'>Flat 50% off on everything</p>
            <button className='bg-white px-4 py-2 text-red-500 flex item-center mt-4 hover:bg-red-300 hover:text-black  '>Shop Now <FaRegArrowAltCircleRight className='animate-bounce ms-2' /></button>
            </div>
        </div>
        {/* second column */}
        <div>
            <div><p className='text-white font-bold text-8xl'>Flat <span className='underline'>50%</span>off</p></div>
            <div><p className='text-white'>Available on our all store</p></div>
        </div>
    </div>
    </Slide>

  )
}

export default Banner