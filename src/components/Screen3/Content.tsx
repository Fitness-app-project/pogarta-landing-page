"use client"

import Image from "next/image"
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { isDesktop, isMobile } from "react-device-detect"

interface IProps {
    sequence: (string | number)[]
    text1: string
    text2: string
    icon: number
}

export const Content: React.FC<IProps> = ({ sequence, text1, text2, icon }) => {

    return (
        <div className={`md:mt-16 xl:mt-32 flex xl:w-[900px] relative ${isDesktop ? "h-[20vh]" : "w-screen h-[250px]"}`}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 3 }}
                viewport={{ once: true }}
                className='absolute left-[-140px] lg:left-[-80px] xl:left-0 '
            >
                <Image
                    alt='Coin'
                    src={`/images/coin${icon}.png`}
                    width={400}
                    height={400}
                    className="scale-[0.4] md:scale-75 xl:scale-100 justify-center self-center text-center "
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 3 }}
                viewport={{ once: true }}
                className="pl-[110px] md:pl-[200px] lg:pl-[250px] xl:pl-[320px]"
            >

                <h3 className={`  ${isMobile ? "h-[60px] font-normal text-[25px] leading-[2rem] tracking-wide pt-10":'font-normal text-[35px] xl:text-[40px] leading-[3.5rem] tracking-wide h-[8rem]'}`}>
                    Building{" "} <br />
                    <TypeAnimation
                        sequence={sequence}
                        wrapper="span"
                        speed={20}
                        deletionSpeed={90}
                        repeat={Infinity}
                        cursor={false}
                    />
                </h3>

                <p className={`${isMobile ? "font-normal text-[16px] md:text-[22px] leading-[25px] text-[#B7B7B7] pr-4 pt-12" : "font-normal text-[16px] md:text-[22px] leading-[35px] text-[#B7B7B7] pr-4"}`}>
                    <TypeAnimation
                        sequence={[ text1 ]}
                        wrapper="span"
                        speed={50}
                        cursor={false}
                    />

                    <br />
                    
                    <TypeAnimation
                        sequence={[ text2 ]}
                        wrapper="span"
                        speed={50}
                        cursor={false}
                    />
                </p>
            </motion.div>
        </div>
    )
}