"use client"
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
// import Typewriter from './components/Typewriter';
import Typewriter from "react-ts-typewriter";

const content = [
    "We build new ventures and non-standard",
    "solutions based on our knowledge and",
    "satisfaction of many customers."
]

const ContentLine = ({ content }: { content: string }) => {
    const contentRef = useRef<any>()

    const { scrollYProgress } = useScroll({
        target: contentRef,
        offset: ["end center", "start start"]
    })

    const scrollValue = useTransform(scrollYProgress, [0, 0.15], ['100%', '0%'])

    const clipPathVal = useMotionTemplate`inset(0% ${scrollValue} 0% 0%)`
  
    return (
      <span className="relative overflow-hidden block" ref={contentRef}>
        <motion.span
            style={{ clipPath: clipPathVal }}
            className="highlighted-text absolute left-0 z-0 text-6xl font-normal leading-[78px] tracking-wide text-white"
            data-text={content}
        />
        <span className="text-6xl font-normal leading-[78px] tracking-wide text-[#747474]">
            {content}
        </span>
      </span>
    );
  }

export const Screen3 = () => {


    return (
        <div id="about" className="w-screen h-[1600px] items-center py-20 px-64 screen3-background">

            <div>
                <p>
                    {content.map((item: string) => (
                        <ContentLine
                            key={item}
                            content={item}
                        />
                    ))}
                </p>
            </div>
            
            <div className="mt-32 flex w-[900px] relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 3 }}
                    viewport={{ once: true }}
                    className='absolute'
                >
                    <Image
                        alt='Coin'
                        src="/images/coin1.png"
                        width={400}
                        height={400}
                    />
                </motion.div>
                <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 3 }}
  viewport={{ once: true }}
  className="pl-[320px] pt-[30px]"
>
  <h3 className="font-normal text-[40px] leading-[80px] tracking-wide">
    <Typewriter cursor={false} text="Building  " />
    <Typewriter  delay={700} loop={true} cursor={false} text={["initiatives", "startups", "innovations", "ventures", "enterprises", "incubations", "launches", "creations", "developments", "businesses"]} />

  </h3>
  <p className="font-normal text-[22px] leading-[35px] text-[#B7B7B7]">
    <Typewriter  cursor={false} text="We create projects from scratch." />
    <br />
    <Typewriter text="Our well-coordinated, experienced team, knowledge and a good plan are the key to the success of many projects." />
</p>
</motion.div>
            </div>


            <div className="mt-32 flex w-[960px]">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 3 }}
                    viewport={{ once: true }}
                    className='absolute'
                >
                    <Image
                        alt='Coin'
                        src="/images/coin2.png"
                        width={400}
                        height={400}
                    />
                </motion.div>
                
                <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 3 }}
  viewport={{ once: true }}
  className="pl-[320px] pt-[30px]"
>
  <h3 className="font-normal text-[40px] leading-[80px] tracking-wide">
  <Typewriter cursor={false} text="Scaling-up " />
  <Typewriter  delay={700}loop={true} cursor={false} text={["enterprises", "innovations", "solutions", "partnerships", "collaborations", "initiatives", "ventures", "creations", "developments", "projects"]} />
</h3>
  <p className="font-normal text-[22px] leading-[35px] text-[#B7B7B7]">
  <Typewriter cursor={false} text="Our expertise from launching and scaling various
tech ventures enables us to assist early-stage
startups and their founders."/>
<br />
<Typewriter text="Collaboratively, we
expedite startup growth, propelling them towards
international triumph." />
  </p>
</motion.div>
            </div>

            <div className='flex items-center gap-10 mt-32'>
                <h3 className="font-medium text-[40px] leading-[80px] text-white">Our portfolio in numbers</h3>
                {/* <button className="btn buttonBgTransparent border-none w-[300px] h-[60px] text-[#747474]" style={{ borderRadius: "50px" }}>
                    Our projects
                    <FaLongArrowAltRight size={32} />
                </button> */}
            </div>

            <div className="flex justify-evenly items-center mt-12 gap-16">

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

        </div>
    )
}