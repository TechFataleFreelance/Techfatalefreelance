import React from "react";
import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Hoverimg(props) {
    

    return (
      
        <motion.div class="relative top-90 border-2 border-solid  w-[20%] h-[70%] rounded-[20px] hover:cursor-pointer hover:drop-shadow-2xl drop-shadow-xl"
       
            initial={{opacity:0, top:90}}
            whileInView={{opacity:1, top:0}}
            whileHover={{scale:1.1}}
            viewport={{once:true}}
            transition={{duration:1.5, ease:"easeIn", delay:props.delay}}
        >

        <motion.img 
        style={props.imgstyle}  
             src={props.source}
            class=" h-[100%] w-[100%] rounded-[20px]"
            >
                
            </motion.img>
        <h1 
       
        class="relative  text-white md:text-[20px] tracking-[3.2px]  font-montserrat lg:text-[16px] break-words text-center flex items-center justify-center bottom-[100%] w-[100%] h-[100%] rounded-[20px] bg-opacity-70 hover:bg-opacity-40 hover:backdrop-blur-md hover:shadow-inner bg-eastern-blue-950" >
            <h1  style={{inlineSize:"250px"}} >{props.text}</h1>
        </h1>
        <button 
        style={{display:props.btndisplay}}
        
        class="absolute bottom-[10%] text-eastern-blue-800 left-[25%] hover:shadow-lg text-md shadow-[0px_0px_8px_1px_white] hover:text-white w-[50%] hover:bg-eastern-blue-600 text-center h-[10%] rounded-[5px] font-montserrat bg-white">CLICK HERE</button>
        </motion.div>
     
    )
}