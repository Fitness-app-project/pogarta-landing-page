"use client"
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { isDesktop, isMobile } from 'react-device-detect';
// import Typewriter from './components/Typewriter';
import { TypeAnimation } from 'react-type-animation';
import { Content } from './Content';
import { Statistics } from './Statistics';

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

    const scrollValue = useTransform(scrollYProgress, [0, 0.2], ['100%', '0%'])

    const clipPathVal = useMotionTemplate`inset(0% ${scrollValue} 0% 0%)`
  
    return (
      <span className="relative block" ref={contentRef}>
        <motion.span
            style={{ clipPath: clipPathVal }}
            className={` ${isMobile ? "highlighted-text absolute left-0 z-0 text-2xl font-normal leading-[40px] tracking-wide text-white" : "highlighted-text absolute left-0 z-0 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-normal leading-[78px] tracking-wide text-white "}  `}
            data-text={content}
        />
        <span className={` ${isMobile ? "text-2xl leading-[40px] tracking-wide text-[#747474]" : "text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-normal leading-[78px] tracking-wide text-[#747474] }"} `}>
            {content}
        </span>
      </span>
    );
  }

export const Screen3 = () => {


    return (
      <div className="top-0 z-50">
        <div id="about" className={`w-screen ${isDesktop ? "h-[180vh] py-12" : "h-auto py-6"} sm:px-12 md:px-24 lg:px-32 xl:px-40 2xl:px-64 screen3-background`} style={{ borderTopLeftRadius: isDesktop ? '3vh' : '0', borderTopRightRadius: isDesktop ? '3vh' : '0', marginTop: isDesktop ? '0vh' : '10vh' }}>

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
              icon={1}
            />
            {isDesktop && (
              <div className="mt-24 xl:mt-48"></div>
            )}
            <Content 
              sequence={sequence2}            
              text1='Our expertise from launching and scaling various tech ventures enables us to assist early-stage startups and their founders.'
              text2='Collaboratively, we expedite startup growth, propelling them towards international triumph.'
              icon={2}
            />
<div className="min-h-16"></div>
          <div className={`${isMobile ? 'flex items-center gap-10 mt-[42px] sm:mt-20 md:mt-32 lg:mt-40 xl:mt-48' : 'flex items-center gap-10 mt-30 sm:mt-20 md:mt-32 lg:mt-40 xl:mt-48'}`}>
                <h3 className={`${isMobile ? "w-screen text-center font-medium text-[27px] leading-[80px] text-white pb-5" : "w-screen text-center font-medium text-[30px] xl:text-[40px] leading-[80px] text-white"}`}>Our portfolio in numbers</h3>
                {/* <button className="btn buttonBgTransparent border-none w-[300px] h-[60px] text-[#747474]" style={{ borderRadius: "50px" }}>
                    Our projects
                    <FaLongArrowAltRight size={32} />
                </button> */}
            </div>

            <Statistics />

            
        </div>
      </div>
    )
}