import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Carousel(props) {

    const carouselDiv = useRef();

    const handleRight = () => {
        carouselDiv.current.scrollLeft += 800
    }

    const handleLeft = () => {
        carouselDiv.current.scrollLeft -= 800
    }

    return (
        <>
            <h1 className=" text-black font-montserrat tracking-widest font-extrabold text-[22px] text-center mb-[1%]">Articles:
            <img onClick={handleRight} src="src/assets/next-page-24.png" class='absolute cursor-pointer w-[5%] active:scale-[85%] right-0 mt-[3%] ' alt="" />
            <img onClick={handleLeft} src="src/assets/next-page-24.png" class='absolute w-[5%] rotate-180 active:scale-[85%] cursor-pointer left-[40%] mt-[3%]' alt="" />
            </h1>

            <div className=" w-full h-full bg-transparent ">
                <div ref={carouselDiv}  className="overflow-y-visible text-white no-scrollbar bg-transparent h-full scroll-smooth pt-[1.5%] cursor-default  text-center overflow-x-auto whitespace-nowrap ">
              
                    <a target="_blank" href="https://blog.techliance.com/benefits-of-reactjs/"><motion.img alt="React.js-article about why it's better for business" whileHover={{scale:1.02, boxShadow:' 0px  0px 9px 0.5px black'}} src='src/assets/Screenshot 2023-11-17 at 5.51.48 PM.png' class="w-[16%]  ml-[11%] mr-[15%] hover:cursor-pointer shadow-md rounded-[15px] inline"></motion.img></a>
                    <a target="_blank" href="https://www.linkedin.com/pulse/why-do-businesses-select-react-js-web-development-mateen-rathore"><motion.img alt='linked in article about why React.js is  better for buisness' whileHover={{scale:1.02, boxShadow:' 0px  0px 9px 0.5px black'}} src='src/assets/Screenshot 2023-11-17 at 6.16.54 PM.png' class="w-[16%] mr-[15%] hover:cursor-pointer shadow-md rounded-[15px] inline"></motion.img></a>
                    <a target="_blank" href="https://kissdigital.com/blog/fast-flexible-and-versatile-why-is-react-js-a-business-friendly-technology"><motion.img whileHover={{scale:1.02, boxShadow:' 0px  0px 9px 0.5px black'}} src='src/assets/Screenshot 2023-11-17 at 11.42.18 PM.png' class="w-[16%] h-[85%]  mr-[15%] hover:cursor-pointer shadow-md rounded-[15px] inline"></motion.img></a>

                    <a target="_blank" href="https://www.linkedin.com/pulse/13-reasons-serious-business-owners-shouldnt-use-wordpress-duque"><motion.img alt="React.js-article about why it's better for business" whileHover={{scale:1.02, boxShadow:' 0px  0px 9px 0.5px black'}} src='src/assets/Screenshot 2023-11-17 at 11.53.37 PM.png' class="w-[16%] h-[85%] mr-[15%] hover:cursor-pointer shadow-md rounded-[15px] inline"></motion.img></a>
                    <a target="_blank" href="https://www.linkedin.com/pulse/5-reasons-use-tailwind-saurav-rajak"><motion.img alt='linked in article about why React.js is  better for buisness' whileHover={{scale:1.02, boxShadow:' 0px  0px 9px 0.5px black'}} src='src/assets/Screenshot 2023-11-17 at 11.59.32 PM.png' class=" w-[16%] mr-[15%] h-[85%] hover:cursor-pointer shadow-md rounded-[15px] inline"></motion.img></a>
                    <a target="_blank" href="https://www.linkedin.com/pulse/benefits-challenges-reactjs-josh-backer"><motion.img whileHover={{scale:1.02, boxShadow:' 0px  0px 9px 0.5px black'}} src='src/assets/Screenshot 2023-11-18 at 12.12.46 AM.png' class="w-[16%]  mr-[15%] hover:cursor-pointer shadow-md rounded-[15px] h-[85%] inline"></motion.img></a>
                    
                    
                </div>
                
                
            </div>
            
        </>
    )
}