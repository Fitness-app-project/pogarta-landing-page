'use client'

import { motion } from "framer-motion"
import { isDesktop } from "react-device-detect";
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

export const Menu = () => {
    return (
        <div className={`${isDesktop ? "w-full px-10" : "w-screen px-6 translate-x-[-25px]"} h-[10vh] flex justify-between items-center py-6 relative`}>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center z-10"
            >
            </motion.div>
            <div className="flex justify-evenly items-center gap-12 text-xs md:text-xl">
                {/* <Link to="home" smooth={true} duration={500} className="tracking-widest z-50">
                    <TypeAnimation
                        sequence={["Home"]}
                        wrapper="span"
                        speed={20}
                        cursor={false}
                    />
                </Link> */}
                <Link to="portfolio" smooth={true} duration={500} className="tracking-widest z-50">
                    <TypeAnimation
                        sequence={["Portfolio"]}
                        wrapper="span"
                        speed={20}
                        cursor={false}
                    />
                </Link>
                <Link to="about" smooth={true} duration={500} className="tracking-widest z-50">
                    <TypeAnimation
                        sequence={["About us"]}
                        wrapper="span"
                        speed={20}
                        cursor={false}
                    />
                </Link>
                <Link to="carrier" smooth={true} duration={500} className="tracking-widest z-50">
                    <TypeAnimation
                        sequence={["Carrier"]}
                        wrapper="span"
                        speed={20}
                        cursor={false}
                    />
                </Link>
                <Link to="contact" smooth={true} duration={500} className="tracking-widest z-50">
                    <TypeAnimation
                        sequence={["Contact"]}
                        wrapper="span"
                        speed={20}
                        cursor={false}
                    />
                </Link>
            </div>
        </div>
    )
}