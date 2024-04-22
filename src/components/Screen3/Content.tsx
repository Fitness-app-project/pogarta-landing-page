"use client"

import Image from "next/image"
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { isDesktop, isMobile } from "react-device-detect"

interface IProps {
    sequence: (string | number)[]
    text1: string
    text2: string
}

export const Content: React.FC<IProps> = ({ sequence, text1, text2 }) => {

    return (
        <div className={`md:mt-16 xl:mt-32 flex xl:w-[900px] relative ${isDesktop ? "h-[20vh]" : "w-screen h-[400px]"}`}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 3 }}
                viewport={{ once: true }}
                className='absolute left-[-120px] lg:left-[-80px] xl:left-0'
            >
                <Image
                    alt='Coin'
                    src="/images/coin1.png"
                    width={400}
                    height={400}
                    className="scale-50 md:scale-75 xl:scale-100"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 3 }}
                viewport={{ once: true }}
                className="pl-[130px] md:pl-[200px] lg:pl-[250px] xl:pl-[320px] pt-[30px]"
            >

                <h3 className={`font-normal text-[35px] xl:text-[40px] leading-[80px] tracking-wide ${isMobile && "h-[160px]"}`}>
                    Building{" "}
                    <TypeAnimation
                        sequence={sequence}
                        wrapper="span"
                        speed={20}
                        deletionSpeed={90}
                        repeat={Infinity}
                        cursor={false}
                    />
                </h3>

                <p className={`font-normal text-[16px] md:text-[22px] leading-[35px] text-[#B7B7B7] pr-4`}>
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