import React from 'react'
import ProductList from './ProductList'

const All = () => {
  return (
    <div className=' w-full flex bg-gradient-to-b from-[#a2b8cd] to-[#a9c1d6]'>
      <div className='mt-[10%] w-full'>
        <h1 className="absolute left-3 font-semibold text-white text-[14px] top-[21.5%] animate-bounce border-b-[0px]">Promo Code: <span className='text-yellow-400'>TECHM8</span> for <span>25%</span> off your 1st website!</h1>
        <h1 className=" font-brownsugar text-black font-extrabold text-[45px] h-[70px] text-center"></h1>
        <ProductList/>  
      </div> 
      
    </div>
    
   
  )
}

export default All