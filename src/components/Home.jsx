import React from "react";
import { motion } from 'framer-motion'
import Hoverimg from "./Home/Hoverimg";
import Carousel from "./Home/Carousel";

const Home = () => {
    const slide = {
        duration: 2,
        delay: 0.5,
        ease: "easeInOut"
    }
    return (
        <>
            <div class="snap-center overflow-hidden flex flex-col items-center justify-center w-full h-[100vh] bg-eastern-blue-600">
                <motion.div
                    class=" font-brownsugar text-9xl flex flex-row" >
                    <motion.h1
                        animate={{ x: [-800, 20, 0] }}
                        transition={slide}
                        class=" text-white pr-[45px]">TECH</motion.h1>
                    <motion.div
                        animate={{ x: [800, -20, 0] }}
                        transition={slide}
                    >FATALE</motion.div>
                </motion.div>
                <motion.h2
                    animate={{ opacity: [0, 1], y: [25, 0] }}
                    transition={{ duration: 1.5, delay: 2.2 }}
                    class=" mt-[2%] tracking-[8px] text-sm font-montserrat text-white">FREELANCE</motion.h2>
            </div>
            <div class="h-[75%] bg-gradient-to-b from-eastern-blue-600 from-5% to-white">

            </div>
            <div class="snap-center w-full h-[100vh] bg-white flex flex-col">
                <div class="relative p-[15px] drop-shadow-[0px_0px_8px_15px] text-eastern-blue-800 text-center text-[20px] font-extrabold tracking-[8px] bg-white font-montserrat h-50 w-full border-0 border-solid">
                    <h1>WEBSITE DEVELOPING</h1>
                    <br></br>
                    <h1>&</h1>
                    <br></br>
                    <h1>HOSTING+</h1>
                </div>
                <div class="bg-gradient-to-b from-white to-eastern-blue-600 border-solid w-full h-full flex justify-evenly items-center ">
                    <Hoverimg source="src/assets/pexels-mikael-blomkvist-6483581.jpg" btndisplay="none" text="SEND ME YOUR INSPIRATION PICTURES, MOCKUPS, COLOR PALLETS, ETC. AND LET ME BUILD YOUR FULLY CUSTOMIZED WEBSITE" delay="0" ></Hoverimg>
                    <Hoverimg source="src/assets/pexels-mikael-blomkvist-6483591.jpg" text="CHECKOUT MY WEBSITE PRICES AND DEALS! " delay=".2"></Hoverimg>
                    <Hoverimg source="src/assets/pexels-mikael-blomkvist-6483581.jpg" text="BE WITH YOUR WEBSITE FOR EVERY STEP OF THE PROCESS THROUGH ONE-ON-ONE MEETINGS PRE-SCHEDULED WITH ME!" imgstyle={{ rotateY: 180 }} btndisplay="none" delay=".4"></Hoverimg>
                </div>
            </div>
            <div class="h-[30%] bg-gradient-to-b from-eastern-blue-600 from-0% to-white">

</div>
            <div class=" flex border-0 h-full w-full bg-white ">
                <div class=" flex items-center h-full bg-opacity-25 bg-eastern-blue-600 w-[40%]">
                    <motion.img initial={{x:-500, opacty:0}} viewport={{once:true}} whileInView={{ x:0, opacity:1}} transition={{duration:2, type:'spring', delay:1.8}} src="src/assets/pexels-anna-nekrashevich-8534178(1).jpg" class="  w-[80%] drop-shadow-2xl rounded-[25px] ml-[45px]"></motion.img >
                </div>
                <div class=" flex items-center flex-col h-full w-[60%] bg-white  ">
                    <h1 style={{ inlineSize: '750px' }} class=" font-montserrat tracking-widest text-center mt-[1.8%] text-[20px]">Why Choose me over Content Management Systems like <span class="text-cyan-800">Wordpress</span>?</h1>
                    <div  class="pb-[2%] flex w-full  mt-[8px] items-top bg-transparent justify-center">
                        <motion.h2 whileHover={{boxShadow: "0px 0px 20px 2px grey ", scale:1.02}} style={{ inlineSize: '750px' }} class="rounded-[20px] p-[2%] text-center text-white tracking-wide text-[15px] font-montserrat w-[full] shadow-[inset_0_0_20px_2px] bg-eastern-blue-600 mt-[2px]"  >While I like Wordpress and its capabilities and have used it before to build websites in the past, the customization of raw coded websites is unmatchable. Also, the plugins tend to
                            pile up and become unmanageable. <br></br><br></br> With <span class="text-emerald-300 ">raw coded</span> websites, the stress of updating plugins, downloading themes, and constantly worrying if your site is still live, is over.  <br></br><br></br>
                            <h1 class="text-black">What I use to Build your Website:</h1>
                            <li><a href="https://react.dev/" class=" text-blue-800 underline" target="_blank">React.js</a> - for functionaliity  </li>
                            <li><a href="https://tailwindcss.com/" target="_blank" class="text-pink-700 underline">Tailwind CSS</a> - for Stylng</li>
                            <li><a href="https://www.netlify.com/" target="_blank" class="text-purple-700 underline">Netlify </a>+ <a href="https://github.com/" target="_blank" class="text-green-800 underline">Github</a> - for Hosting</li>
                            <br></br>
                            <h3>These tools allow me to develop websites that are fully customiizable, fast-loading, and user-friendly. Your job, however isn't to worry about these tools, your job
                                is to successfully run your buisness, leave the website developement/hosting to <span class="text-pink-200">me</span>!</h3>
                            <br></br>
                            <h1 class="text-black">Types of Websites I Build:</h1>
                            <li><a href="" class=" text-yellow-300 " target="_blank">Buisness Websites</a></li>
                            <li><a href="" class=" text-yellow-300 " target="_blank">Ecommerce</a> (small-medium buisnesses)</li>
                            <li><a href="" class=" text-yellow-300 " target="_blank">Organization/club websites</a></li>
                        </motion.h2>
                    </div>
                    <Carousel/>
                </div>

            </div>
        </>

    )
}

export default Home