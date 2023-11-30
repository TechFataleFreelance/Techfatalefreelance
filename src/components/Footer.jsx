import React from "react";


export default function Footer() {
    return (
        <>
            <footer class="  w-full h-[50%] bottom-0 rounded-sm bg-white">
                <div class="flex mt-[2%] text-gray-600 font-montserrat text-[14px] items-center  w-full h-[10%] border-t-[#8a9093] bg-transparent">
                    <p> <span class=" -500 font-bold">All Clients</span> are Required to sign a contract upon agreement of the website project
                        <br></br>
                       
                      for <span  class="text-[13px] text-eastern-blue-700 hover:cursor-pointer underline underline-offset-[3px]">contract details</span>  click here 
                        
                    </p>
                </div>
                <div class=" w-full h-[82%] border-t-[#8a9093] border-t-[1px] bg-transparent"></div>
                <div class=" w-full h-[8%] border-t-[#8a9093] border-t-[1px] bg-transparent"></div>
            </footer>
        </>
    )
}