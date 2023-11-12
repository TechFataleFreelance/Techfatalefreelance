import React from "react";
import { motion } from 'framer-motion'

const Home = () => {
const slide = {
    duration:2,
    delay:0.5,
    ease:"easeInOut"
}

    return (
        <div class=" overflow-hidden flex flex-col items-center justify-center w-full h-full bg-eastern-blue-600">
            <div class="font-brownsugar text-9xl flex flex-row" >
                <motion.h1 
                animate={{x:[-800, 20, 0]}}
                transition={slide}
                class=" text-white pr-[45px]">TECH</motion.h1>
                <motion.div
                animate={{x:[800, -20, 0]}}
                transition={slide}
                >FATALE</motion.div>
            </div>
            <motion.h2 
            animate={{opacity:[0,1], y:[25,0]}}
            transition={{duration:1.5, delay:2.2}}
            class=" mt-[2%] tracking-[8px] text-sm font-montserrat text-white">FREELANCE</motion.h2>
        </div>
    )
}

export default Home