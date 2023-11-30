import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef} from 'react'

export default function Navbar() {
    const [show, setShow] = useState({top:[-200,0]})

    const [transition, setTransition] =useState({duration:1, delay:.8})
    const [dropdownAnimation, setdropdownAnimation] = useState()
    const shopTab = useRef()
    const shopNav =useRef()

    const hover = {
        scale: 1.08,
    }
   
    const  handleHover = () => {
        shopTab.current.style.display ="inline"
        shopTab.current.style.width ="100vw"
        shopTab.current.style.height ="60px"
        shopTab.current.style.transition ="width 1s ease .4 "
        setdropdownAnimation({opacity:[0, 1]})
        
    }

    const handleHoverleave = () => {
        shopTab.current.style.width ="0%"
        shopTab.current.style.height ="0%"
        shopTab.current.style.display ="none"
        
        setdropdownAnimation()
    }



    const controlNavbar = () => {
   
        if(window.scrollY>0){
            setShow({top:-300})
            setTransition({duration:0.18})
       
         
            
        }else{
            setShow({top:0})
            
         
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
                        <NavLink onMouseOver={handleHoverleave} path to='/'>Home</NavLink>
                    </motion.li>
                    <motion.li
                    ref={shopNav}
                     whileHover={hover}
                     transition={{ duration: .25 }}
                     class= "hover:text-black rounded-tr-xl hover:pt-[5px] pl-[5px]  cursor-pointer flex items-center justify-center"
                    >
                        <NavLink onMouseOver={handleHover}  path to='/shop'>Shop</NavLink>
                        
                    </motion.li>
                    <motion.div onMouseOver={handleHover} onMouseLeave={handleHoverleave} animate={dropdownAnimation} style={{display:'none'}}  ref={shopTab} class=" absolute top-[66px] w-[0%] right-[0%] h-[0%]  bg-white">
                        <ul class=" flex justify-center items-center  text-eastern-blue-600">
                            <li class="mt-[1%] mr-[8%] hover:text-black cursor-pointer"><NavLink path to='/products'>All Products</NavLink></li>
                            <li class="mt-[1%] mr-[8%] hover:text-black cursor-pointer"><NavLink path to='/websites'>Websites</NavLink></li>
                            <li class="mt-[1%] mr-[8%] hover:text-black cursor-pointer"> <NavLink path to='/services'>Services</NavLink></li>
                           
                           
                        </ul>
                    </motion.div>
                    <motion.li
                        whileHover={hover}
                        transition={{ duration: .25 }}
                        class= "hover:text-black"
                    >
                        <NavLink onMouseOver={handleHoverleave} path to='/about'>About</NavLink>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.05 }}
                        transition={{ ease: "circIn", duration: .05 }}
                    >
                        <Link onMouseOver={handleHoverleave} class=" text-black drop-shadow-lg rounded-lg bg-gradient-to-r from-eastern-blue-300 via-eastern-blue-200 to-eastern-blue-100 p-[10px] hover:bg-gradient-to-l from-eastern-blue-300 via-eastern-blue-200 to-eastern-blue-100 hover:rounded-[20px] transition-all ease-in-out" path to='/contact'>Contact</Link>
                    </motion.li>

                </motion.ul>
            </motion.nav>
        </>
    )
}

