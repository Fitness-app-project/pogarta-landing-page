'use client'
import { motion } from "framer-motion";
import { useEffect } from "react";
import CountUp from 'react-countup';
import { isDesktop, isMobile } from "react-device-detect";

const array = [
    { end: 7, color: '#886A38', text: 'Years of Experience' }, 
    { end: 40, color: '#8D6F3B', text: 'Completed Projects' },
    { end: 25, color: '#766749', text: 'Clients Worldwide' },
    { end: 30, color: '#C0A56F', text: 'Specialists' }
]

export const Screen2 = () => {

    return (
        <div 
            className={`w-screen ${isDesktop ? "h-[230px]" : "h-[460px]"} flex justify-center z-10`}
            style={{ borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'}}
        >           
            <div 
                className={`
                    ${isDesktop && "w-screen flex justify-evenly text-white bg-[#000000] bg-opacity-10 h-[230px] z-1 "}
                    ${isMobile && "w-screen h-[320px] grid grid-cols-2 text-white bg-[#000000] bg-opacity-10 px-8 translate-y-[4vh] pt-4"}
                `}
            >
                {array.map((item, index) => (
                    <motion.div
                        initial={{ scale: 1 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px 2px #DBB75F", borderRadius: "15px" }}
                        className={`
                            ${isDesktop && "flex inset-0 items-center gap-8 w-[280px] h-[20vh] px-2 m-auto z-10 transition-all duration-200 ease-in-out rounded-lg mb-[5vh] flex-col text-center justify-center"}
                            ${isMobile && "flex items-center gap-2 h-[80px] w-[20vh] z-10 transition-all duration-200 ease-in-out flex-col "}
                        `}
                        key={index}
                    >
                        <span className={` ${isDesktop ? "text-l font-bold lg:text-7xl mb-[-2vh]":"text-[35px] font-bold"}`} style={{ color: item.color }}>
                            <CountUp end={item.end} duration={2.5} />+
                        </span>
                        <span className={`sm:text-l md:text-xl lg:text-2xl font-semibold ${isDesktop ? "" : "text-center flex flex-col items-center justify-center h-full"}`} style={{ display: 'flex' }}>
  {item.text}
</span>

                    </motion.div>
                ))}
            </div>
        </div>
    );
};
