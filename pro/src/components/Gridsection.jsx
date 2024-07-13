import React from 'react';
import largeImage from './../assets/fitSection/bigmenimge.jpg';
import all_products from '../assets/all_product';


function Gridsection() {
    const topFourItems = all_products.slice(6,10);
    console.log(topFourItems)
  return (
    <div className='max-w-7xl mx-auto mt-14 p-2'>
        <h1 className='text-center landing-wide font-medium'>STYLISH PICKS FOR EVERY OCCATION</h1>
    {/* grid section */}
    <div className='grid grid-cols-4 grid-rows-2'>
        {/* large section */}
        <div className='col-span-2 row-span-2'>
        <div className='overflow-hidden relative'>
            <img className='w-full h-full object-cover hover:scale-110 transition-all ease-in-out delay-200' src={largeImage} alt='men image'/>
            <button className='absolute insert-0 text-white text-lg w-full h-full opacity-0 hover:opacity-100 transition-opacity ease-linear delay-200 bg-black bg-opacity-50'>View Details</button>
        </div>
        </div> 
    {/* section 2 */}
{topFourItems.map((product,index)=>(
     <div className='overflow-hidden relative'>
     <img className='w-full h-full object-cover hover:scale-110 transition-all ease-in-out delay-200' src={product.image}/>
     <button className='absolute insert-0 text-white text-lg w-full h-full opacity-0 hover:opacity-100 transition-opacity ease-linear delay-200 bg-black bg-opacity-50'>View Details</button>
 </div>
))}
    </div>
    </div>
  )
}

export default Gridsection