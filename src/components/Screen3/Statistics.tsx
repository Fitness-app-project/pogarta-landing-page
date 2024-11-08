"use client"

import { motion } from 'framer-motion' 
import { isDesktop } from 'react-device-detect'

export const Statistics = () => {

    return (
        <div className={`${isDesktop ? "flex justify-evenly items-center gap-16 mt-32 sm:mt-12" : ""}`}>

                <div className={`${isDesktop ? "flex flex-col items-center gap-2" : "flex flex-col items-center gap-5"}`}>
                    <motion.span
                        initial={{ scale: 2 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className={`${isDesktop ? "font-bold text-[60px] leading-[73px] text-[#DBB75F]" : "font-bold text-[60px] leading-[43px] text-[#DBB75F]"}`}
                    >
                        20
                    </motion.span>
                    <p className={`${isDesktop ? "font-normal text-[18px] leading-[24px] tracking-widest text-white text-center uppercase" : "font-normal text-[20px] leading-[24px] tracking-widest text-white text-center uppercase pb-10"}`}>
                        Portfolio companies
                    </p>
                    <p className={`${isDesktop ? "leading-[24px]" : "leading-[24px]"}`}></p>
                </div>
                
                <div className={`${isDesktop ? "flex flex-col items-center gap-2" : "flex flex-col items-center gap-5"}`}>
                    <motion.span
                        initial={{ scale: 2 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className={`${isDesktop ? "font-bold text-[60px] leading-[73px] text-[#DBB75F]" : "font-bold text-[60px] leading-[43px] text-[#DBB75F]"}`}
                    >
                        350
                    </motion.span>
                    <p className={`${isDesktop ? "font-normal text-[18px] leading-[24px] tracking-widest text-white text-center uppercase" : "font-normal text-[20px] leading-[24px] tracking-widest text-white text-center uppercase pb-[3.5rem]"}`}>
                    People involved <br />in our projects
                    </p>
                </div>

                <div className={`${isDesktop ? "flex flex-col items-center gap-2" : "flex flex-col items-center gap-5"}`}>
                    <motion.span
                        initial={{ scale: 2 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className={`${isDesktop ? "font-bold text-[60px] leading-[73px] text-[#DBB75F]" : "font-bold text-[60px] leading-[43px] text-[#DBB75F]"}`}
                    >
                        7
                    </motion.span>
                    <p className={`${isDesktop ? "font-normal text-[18px] leading-[24px] tracking-widest text-white text-center uppercase" : "font-normal text-[20px] leading-[24px] tracking-widest text-white text-center uppercase pb-10"}`}>
                    Months to launch <br />a new venture
                    </p>
                </div>

            </div>
    )
}