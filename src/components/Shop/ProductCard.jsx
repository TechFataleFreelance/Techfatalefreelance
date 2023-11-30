import {motion } from 'framer-motion';
import React from 'react';


const ProductCard = (props) => {
  return (
   <>
            <motion.div
            whileInView={{opacity:[0,1]}} 
            whileHover={{boxShadow: '0px 0px 15px 1px black'}}
            transition={{duration:0.44}}
            key={props.key} className='hover:cursor-pointer rounded-[25px] h-[555px] w-[450px]'>
                 <img src={props.image} alt="Product Image" className=" w-full h-[50%]"/>
                 <h1 className=' font-montserrat tracking-wider text-[19px] mt-[5%] text-center'>{props.name}</h1>
                 <h2 className=' text-[18px] text-white mt-[15px] flex items-center justify-center tracking-wide bg-black bg-opacity-25 font-semibold'>${props.price}</h2>
                 <p className="font-montserrat text-[14px] p-[10px] flex h-[20%] mt-[15px]  justify-center  text-center">{props.description}</p>
                 <div className='w-full flex items-center justify-center'>
                    <motion.a whileHover={{scale:1.1}} target='_blank' href={props.pay} className=" hover:drop-shadow-lg active:text-white active:bg-eastern-blue-800 font-extrabold text-[#a2b8cd] bg-loblolly-900 font-montserrat tracking-wider text-[18px] p-[2%] rounded-[10px]">Checkout</motion.a>
                 </div>
                
            </motion.div>
   </>
  )
}

export default ProductCard