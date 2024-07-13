// import React from 'react'
import React, {useState} from 'react';
import { useEffect } from 'react';

function TopStrip() {
    const [showSecondMsg,setShowSecondMsg]= useState(false); 

    useEffect(()=>{
     const  intervalId= setInterval(()=>{
           setShowSecondMsg((prev) => !prev);
        },2000);
        return () => clearInterval(intervalId);
    },[]);

  return (
    <div className="bg-black font-thin h-36 text-3xl tracking-wider text-white text-center py-10">
        { showSecondMsg ? (<p>End of Season Sale</p>):(
            <p>Get 30% off on your first order use code : 'FIRST30'</p>
        )}
        </div>
  )
}

export default TopStrip