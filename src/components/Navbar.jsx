import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
    const hover = {
        scale:1.08,
    }
    const hoverClass = "hover:text-black"
    
    
       
    return (
        

        <>
            <motion.nav
            animate={{opacity:[0,1]}}
            transition={{delay:2.2, duration:3.5}}
                class="fixed top-0 font-extrabold tracking-[5px]  text-[16px] font-montserrat border-solid border-0 border-black w-full bg-transparent h-[10%] flex justify-center items-center">
                <ul class="text-white  min-w-full min-h-full border-solid border-2 border-transparent flex items-center justify-evenly" >
                    <motion.li
                    whileHover={hover} 
                    transition={{duration:.25}} 
                    class={hoverClass}
                      >
                        <Link path to='/'>Home</Link>
                    </motion.li>
                    <motion.li  
                    whileHover={hover} 
                    transition={{duration:.25}} 
                    class={hoverClass}
                    >
                        <Link path to='/services'>Services</Link>
                    </motion.li>
                    <motion.li 
                    whileHover={hover} 
                    transition={{duration:.25}} 
                    class={hoverClass}
                    >
                        <Link path to='/about'>About</Link>
                    </motion.li>
                    <motion.li 
                    >
                        <Link class="text-black drop-shadow-lg rounded-lg bg-gradient-to-r from-eastern-blue-300 via-eastern-blue-200 to-eastern-blue-100 p-[10px] hover:rounded-[20px] transition-all ease-in-out" path to='/contact'>Contact</Link>
                    </motion.li>
                </ul>
            </motion.nav>
        </>
    )
}

