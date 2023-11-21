import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Carousel2(props) {

    const carouselDiv = useRef();

    const handleRight = () => {
        carouselDiv.current.scrollLeft += props.scrollValue
    }

    const handleLeft = () => {
        carouselDiv.current.scrollLeft -= props.scrollValue
    }

    const itemArray = []

    return (
        <>
            <img onClick={handleRight} src="src/assets/next-page-24.png" style={{marginTop:props.buttonHeight}} class='absolute cursor-pointer w-[5%] active:scale-[85%] right-0' alt="" />
            <img onClick={handleLeft} src="src/assets/next-page-24.png" style={{marginTop:props.buttonHeight}} class='absolute w-[5%] rotate-180 active:scale-[85%] cursor-pointer left-[0%]' alt="" />
                <div class="flex items-center bg-transparent w-full h-[100%]">
                    <div ref={carouselDiv}  className=" overflow-y-visible text-white no-scrollbar w-full  bg-transparent h-[50%] scroll-smooth  overflow-x-auto whitespace-nowrap ">
                        {props.children}
                   </div>
                </div>
                
                
            
        </>
    )
}