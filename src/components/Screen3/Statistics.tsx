"use client"

import { motion } from 'framer-motion' 
import { isDesktop } from 'react-device-detect'

export const Statistics = () => {

    return (
        <div className={`${isDesktop ? "flex justify-evenly items-center gap-16 mt-32 sm:mt-12" : ""}`}>

                <div className="flex flex-col items-center gap-5">
                    <motion.span
                        initial={{ scale: 2 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="font-bold text-[60px] leading-[73px] text-[#DBB75F]"
                    >
                        20
                    </motion.span>
                    <p className="font-normal text-[20px] leading-[24px] tracking-widest text-white text-center uppercase">
                        Portfolio companies
                    </p>
                    <p className="leading-[24px]"></p>
                </div>
                
                <div className="flex flex-col items-center gap-5">
                    <motion.span
                        initial={{ scale: 2 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="font-bold text-[60px] leading-[73px] text-[#DBB75F]"
                    >
                        350
                    </motion.span>
                    <p className="font-normal text-[20px] leading-[24px] tracking-widest text-white text-center uppercase">
                    People involved <br />in our projects
                    </p>
                </div>

                <div className="flex flex-col items-center gap-5">
                    <motion.span
                        initial={{ scale: 2 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="font-bold text-[60px] leading-[73px] text-[#DBB75F]"
                    >
                        7
                    </motion.span>
                    <p className="font-normal text-[20px] leading-[24px] tracking-widest text-white text-center uppercase">
                    Months to launch <br />a new venture
                    </p>
                </div>

            </div>
    )
}