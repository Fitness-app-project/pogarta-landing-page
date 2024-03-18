'use client'
import { motion } from "framer-motion";
import Image from "next/image"
import bg from "/public/images/bgwhite.svg"
import SPM from "/public/images/Sic_Parvis_Magna.svg"

export const Screen1 = () => {
    return (
      <div className="w-full h-screen1 flex flex-col justify-center items-center text-[#D9B55E] ">
        <motion.div
          initial={{ x: '-20vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
          className=" absolute z-0 w-full h-screen1 mr-24 "

        >
          <Image src={bg} layout="fill" objectFit="cover" alt="background" className="z-0 opacity-10 " />
        </motion.div>
        <Image src={SPM} alt="Sic Parvis Magna" className="z-10 mb-5" />
        <p className="text-lg tracking-widest text-[#747474] z-10">
          From small beginnings come great things
        </p>
      </div>
    );
};