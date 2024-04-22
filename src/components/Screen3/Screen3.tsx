"use client"
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { isDesktop, isMobile } from 'react-device-detect';
// import Typewriter from './components/Typewriter';
import { TypeAnimation } from 'react-type-animation';
import { Content } from './Content';

const content = [
    "We build new ventures and non-standard",
    "solutions based on our knowledge and",
    "satisfaction of many customers."
]

const sequence1 = [
  "initiatives",
  750,
  "startups",
  750,
  "innovations",
  750,
  "ventures",
  750,
  "enterprises",
  750,
  "incubations",
  750,
  "launches",
  750,
  "creations",
  750,
  "developments",
  750,
  "businesses",
  750,
]

const sequence2 = [
  "enterprises",
  750,
  "innovations",
  750,
  "solutions",
  750,
  "partnerships",
  750,
  "collaborations",
  750,
  "initiatives",
  750,
  "ventures",
  750,
  "creations",
  750,
  "developments",
  750,
  "projects",
  750,
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
      <span className="relative block" ref={contentRef}>
        <motion.span
            style={{ clipPath: clipPathVal }}
            className="highlighted-text absolute left-0 z-0 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-normal leading-[78px] tracking-wide text-white"
            data-text={content}
        />
        <span className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-normal leading-[78px] tracking-wide text-[#747474]">
            {content}
        </span>
      </span>
    );
  }

export const Screen3 = () => {


    return (
      <div className="top-0 z-50">

        <div id="about" className={`w-screen h-[180vh] py-20 sm:px-12 md:px-24 lg:px-32 xl:px-40 2xl:px-64 screen3-background`} style={{ borderTopLeftRadius: isDesktop ? '3vh' : '0', borderTopRightRadius: isDesktop ? '3vh' : '0' }}>

            <div>
              {isDesktop ? (
                content.map((item: string) => (
                    <ContentLine
                        key={item}
                        content={item}
                    />
                ))
              ) : (
                <div className='w-screen px-5'>
                  <ContentLine 
                    key={content[0]}
                    content={content.join(" ")}
                  />
                </div>
              )}
            </div>

            <Content 
              sequence={sequence1}
              text1="Crafting Visions into reality."
              text2="Our expert team transforms bold ideas into tangible successes, across a spectrum of ventures and innovations."
            />

            <Content 
              sequence={sequence2}            
              text1='Our expertise from launching and scaling various tech ventures enables us to assist early-stage startups and their founders.'
              text2='Collaboratively, we expedite startup growth, propelling them towards international triumph.'
            />

            <div className='hidden sm:flex items-center gap-10 sm:mt-48 md:mt-64 lg:mt-32'>
                <h3 className="font-medium text-[40px] leading-[80px] text-white">Our portfolio in numbers</h3>
                {/* <button className="btn buttonBgTransparent border-none w-[300px] h-[60px] text-[#747474]" style={{ borderRadius: "50px" }}>
                    Our projects
                    <FaLongArrowAltRight size={32} />
                </button> */}
            </div>

            <div className="hidden sm:flex justify-evenly items-center gap-16 mt-52 sm:mt-12">

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

      </div>
    )
}