'use client'
import { motion } from "framer-motion";
import Image from "next/image"
import bg from "/public/images/bgwhite.svg"
import SPM from "/public/images/Sic_Parvis_Magna.svg"
import AnimatedBackground from "@/components/Screen1/components/AnimatedBackground";

// const AnimatedBackground = ({ delay = 0 }) => (
//   <motion.div
//     initial={{ x: '-110vw' }}
//     animate={{ x: '110vw' }}
//     transition={{ duration: 15, repeat: Infinity, delay }}
//     className="absolute z-0 w-full h-screen1 mr-24 "
//   >
//     <Image src={bg} layout="fill" objectFit="cover" alt="background" className="z-0 opacity-10 " />
//   </motion.div>
// );

export const Screen1 = () => {
    return (
      <div className="w-full h-screen1 flex flex-col justify-center items-center text-[#D9B55E] ">
        <AnimatedBackground />

        <motion.div 
          animate={{ y: ["0%", "1%", "0%"] }}
          transition={{ yoyo:Infinity ,duration: 2, repeat: Infinity }}
          className="z-10 mb-5"
        >
          <Image src={SPM} alt="Sic Parvis Magna" />
        </motion.div>
        <p className="text-lg tracking-widest text-[#747474] z-10">
          From small beginnings come great things
        </p>
      </div>
    );
};