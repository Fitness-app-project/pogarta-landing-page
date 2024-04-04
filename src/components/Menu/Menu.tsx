'use client'

import { motion } from "framer-motion"
import PogartaSvg from "/public/images/Pogarta.svg"
import Image from "next/image"
import { Link } from 'react-scroll';
import Typewriter from "react-ts-typewriter";

export const Menu = () => {
    return (
<div className="w-full h-[10vh] flex justify-between items-center py-6 pr-10">            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center z-10"
            >
                {/* <Image 
                    alt="Logo"
                    src={PogartaSvg}
                    width={100}
                    height={100}
                    style={{ transform: "scale(2)", translate: "40px" }}
                /> */}
            </motion.div>
            <div className="flex justify-evenly items-center gap-12 text-xl ">
    <Link to="home" smooth={true} duration={500} className="tracking-widest z-50">
        <Typewriter text="Home" speed={200}cursor={false} />
    </Link>
    <Link to="portfolio" smooth={true} duration={500} className="tracking-widest z-50">
        <Typewriter text="Portfolio" speed={200}cursor={false} />
    </Link>
    <Link to="about" smooth={true} duration={500} className="tracking-widest z-50">
        <Typewriter text="About us" speed={200}cursor={false} />
    </Link>
    <Link to="carrier" smooth={true} duration={500} className="tracking-widest z-50">
        <Typewriter text="Carrier" speed={200} cursor={false}/>
    </Link>
    <Link to="contact" smooth={true} duration={500} className="tracking-widest z-50">
        <Typewriter text="Contact" speed={200} cursor={false} />
    </Link>
</div>
        </div>
    )
}