import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navbar() {
    const [show, setShow] = useState({top:[-200,0]})
    const [display, setDisplay] = useState("hidden")
    const [transition, setTransition] =useState({duration:1, delay:.8})
    const [display2, setDisplay2]=useState("")
 

    const hover = {
        scale: 1.08,
    }
   
    const handleHover = () => {
        setDisplay("visible")
    }
    const handleHoverleave =() => {
        setDisplay("hidden")
    }

    const controlNavbar = () => {
   
        if(window.scrollY>0){
            setShow({top:-300})
            setTransition({duration:0.18})
            setDisplay2("none")
         
            
        }else{
            setShow({top:0})
            setDisplay2("flex")
         
        }
    }
    useEffect(()=> {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll',
            controlNavbar)
        }
    }, [])

    return (


        <>
            <motion.nav
                animate={show}
                style={{opacity:[0,1]}}
                transition={transition}
                class=" fixed top-0 font-extrabold tracking-[5px]  text-[18px] font-montserrat border-solid border-0 border-black w-full bg-transparent h-[10%] flex justify-center items-center">
                <motion.ul
                class=" overflow-hidden text-white  min-w-full min-h-full border-solid border-0 border-blue flex items-center justify-evenly" >
                    <motion.li
                        whileHover={hover}
                        transition={{ duration: .25 }}
                        class= "hover:text-black"
                    >
                        <NavLink path to='/'>Home</NavLink>
                    </motion.li>
                    <motion.li
                
                    >
                        <div onMouseEnter={handleHover} onMouseLeave={handleHoverleave} class="mt-[118px] h-[8%] w-full flex items-center flex-col border-0 border-black border-solid ">
                            <motion.div 
                            whileHover={hover}
                            class=" hover:text-black" >
                                <NavLink path to='/shop'>Shop</NavLink>
                            </motion.div>
                          
                            <motion.div
            
                            style={{visibility:display, display:display2}}
                             class=" shadow-[inset_0px_0px_3px_1.5px] text-white shadow-black p-[8px] tracking-[2px] mt-[5px]   border-0 rounded-[10px] text-[18px] bg-sky-800 flex w-[150px] h-[120px] items-center flex-col ">
                                <motion.div
                               
                                whileHover={{scale:1.03}}
                                class=" pb-[10px] hover:text-black"
                                >
                                    <NavLink path to="/templates"  style={{display:"none"}}>Templates</NavLink>
                                </motion.div>
                                <motion.div
                                whileHover={{scale:1.03}}
                                class="hover:text-black pb-[10px]"
                                >
                                    <NavLink path to="/">Services</NavLink>
                                </motion.div>
                                <motion.div
                                whileHover={{scale:1.03}}
                                class="hover:text-black pb-[10px]"
                                >
                                    <NavLink path to="/">Deals</NavLink>
                                </motion.div>
                            </motion.div>
                        </div>
                        
                    </motion.li>
                    <motion.li
                        whileHover={hover}
                        transition={{ duration: .25 }}
                        class= "hover:text-black"
                    >
                        <NavLink path to='/about'>About</NavLink>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.05 }}
                        transition={{ ease: "circIn", duration: .05 }}
                    >
                        <Link class=" text-black drop-shadow-lg rounded-lg bg-gradient-to-r from-eastern-blue-300 via-eastern-blue-200 to-eastern-blue-100 p-[10px] hover:bg-gradient-to-l from-eastern-blue-300 via-eastern-blue-200 to-eastern-blue-100 hover:rounded-[20px] transition-all ease-in-out" path to='/contact'>Contact</Link>
                    </motion.li>

                </motion.ul>
            </motion.nav>
        </>
    )
}

