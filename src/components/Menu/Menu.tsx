"use client"

import { motion } from "framer-motion"
import PogartaSvg from "/public/images/Pogarta.svg"
import Image from "next/image"


export const Menu = () => {

    return (
        <div className="w-full h-full flex justify-between items-center py-6">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center z-10"
            >
                <Image 
                    alt="Logo"
                    src={PogartaSvg}
                    width={100}
                    height={100}
                    style={{ transform: "scale(2)", translate: "40px" }}
                />
            </motion.div>
            <div className="flex justify-evenly items-center gap-12 text-xl ">
                <button className="tracking-widest  ">Home</button>
                <button className="tracking-widest ">Portfolio</button>
                <button className="tracking-widest  ">About us</button>
                <button className="tracking-widest ">Contact</button>
            </div>
        </div>
    )
}