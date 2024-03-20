"use client"
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

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
        <div className="w-screen h-[1600px] items-center bg-[#383838] py-20 px-64">

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
            
            <div className="mt-40 flex w-[900px]">
                <Image
                    alt='Coin'
                    src="/images/coin1.png"
                    width={400}
                    height={400}
                />
                <div className="translate-x-[-80px]">
                    <h3 className="font-normal text-[40px] leading-[80px] tracking-wide">
                        Building new ventures
                    </h3>
                    <p className="font-normal text-[22px] leading-[35px] text-[#B7B7B7]">
                        We create projects from scratch. <br />Our well-coordinated, experienced team,<br /> knowledge and a good plan are the<br /> key to the success of many projects.
                    </p>
                </div>
            </div>


            <div className="mt-40 flex w-[960px]">
                <Image
                    alt='Coin'
                    src="/images/coin2.png"
                    width={400}
                    height={400}
                />
                <div className="translate-x-[-80px]">
                    <h3 className="font-normal text-[40px] leading-[80px] tracking-wide">
                        Scaling-up businesses
                    </h3>
                    <p className="font-normal text-[22px] leading-[35px] text-[#B7B7B7]">
                        Our expertise from launching and scaling various<br /> tech ventures enables us to assist early-stage<br /> startups and their founders. Collaboratively, we<br /> expedite startup growth, propelling them towards<br /> international triumph.
                    </p>
                </div>
            </div>

        </div>
    )
}