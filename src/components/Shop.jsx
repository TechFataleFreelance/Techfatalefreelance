import React from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {



  return (
  <>
   <div class=" w-full h-full bg-eastern-blue-600">
      <div class="absolute  tracking-[4px] flex flex-col  top-[16%]  bg-orange-200 w-full h-[84%]">
        <div class="w-full bg-[url('src/assets/pexels-andrew-neel-7932264.jpg')] bg-center bg-cover  h-full ">
          <div class="flex items-center justify-center  hover:backdrop-blur-md transition-all h-full">
            <Link path to ='/products' class="w-[50%]" ><h1 class="font-brownsugar bg-eastern-blue-600 font-extrabold hover:scale-105 transition-all  text-[25px] p-[2%] text-center w-full cursor-pointer rounded-lg drop-shadow-xl active:bg-white">All Products</h1></Link>
          </div>
        </div>
        <div class="w-full bg-[url('src/assets/pexels-tranmautritam-370470.jpg')] bg-center bg-cover  h-full ">
          <div class="flex items-center justify-center  z-2 hover:backdrop-blur-md transition-all h-full">
            <Link  path to ='/websites'  class="w-[50%]"><h1 class="font-brownsugar bg-eastern-blue-600 font-extrabold hover:scale-105 transition-all  text-[25px] p-[2%] text-center w-full cursor-pointer rounded-lg drop-shadow-xl active:bg-white">Websites</h1></Link>
          </div>
        </div>
        <div class="w-full bg-[url('src/assets/pexels-dada-design-12277023.jpg')] bg-center bg-cover  h-full ">
          <div class="flex items-center justify-center  z-2 hover:backdrop-blur-md transition-all h-full">
            <Link  path to ='/services'  class="w-[50%]"><h1 class="font-brownsugar bg-eastern-blue-600 font-extrabold hover:scale-105 transition-all  text-[25px] p-[2%] text-center w-full cursor-pointer rounded-lg drop-shadow-xl active:bg-white">Services</h1></Link>
          </div>
        </div>
      </div>
      
    </div>
   
  </>
   
  )
}

export default Shop