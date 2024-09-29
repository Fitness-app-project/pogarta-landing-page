"use client"

import { motion, useViewportScroll, useTransform } from "framer-motion";
import Image from 'next/image';
import { isDesktop } from "react-device-detect";
import { useRef, useEffect, useState } from 'react';

const imagePath = "/images/Screen4images/";

const CompanyCell = ({ logo, text, altText }: { logo: string, text: string, altText: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.2, transition: { duration: 0.3 }, zIndex: 2 }}
      className="flex flex-col items-center text-center p-4 mt-10"
    >
      <motion.div
        className="relative flex justify-center items-center w-32 h-32"
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={logo} alt={altText} layout="fill" objectFit="contain" />
      </motion.div>

      <div className="mt-2 flex flex-col items-center text-center p-4">
        <p className="text-[#383838] text-xs">{text}</p>
      </div>
    </motion.div>
  );
};

export const Screen4 = () => {
  const screenRef = useRef<HTMLDivElement>(null);
  const [offsetTop, setOffsetTop] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const { scrollY } = useViewportScroll();

  useEffect(() => {
    const updateMeasurements = () => {
      if (screenRef.current) {
        const rect = screenRef.current.getBoundingClientRect();
        setOffsetTop(window.scrollY + rect.top);
        setScreenHeight(rect.height);
        setWindowHeight(window.innerHeight);
      }
    };

    updateMeasurements();
    window.addEventListener('resize', updateMeasurements);
    window.addEventListener('scroll', updateMeasurements);

    return () => {
      window.removeEventListener('resize', updateMeasurements);
      window.removeEventListener('scroll', updateMeasurements);
    };
  }, []);

  const startFade = offsetTop + screenHeight - windowHeight*.9;
  const endFade = offsetTop + screenHeight *0.6;

  const opacity = useTransform(scrollY, [startFade, endFade], [0, 1]);

  const companies = [
    {
      logo: `${imagePath}grasstec-group-logo.svg`,
      text: 'Grasstec Group',
      altText: 'grasstec-group-logo',
    },
    {
      logo: `${imagePath}SAP-Climate.png`,
      text: 'SAP climate',
      altText: 'SAP climate',
    },
    {
      logo: `${imagePath}solbeg-logo.svg`,
      text: 'Solbeg',
      altText: 'solbeg-logo',
    },
    {
      logo: `${imagePath}logo-TTSW.svg`,
      text: 'Transition Technologies-Software',
      altText: 'logo-TTSW',
    },
    {
      logo: `${imagePath}adk-construction-group.jpg`,
      text: 'ADK Construction Group',
      altText: 'ADK Construction Group',
    },
    {
      logo: `${imagePath}2000x2000-square-white.png`,
      text: 'Paidwork',
      altText: 'Paidwork',
    },
    {
      logo: `${imagePath}nokia logo.svg`,
      text: 'Nokia',
      altText: 'Nokia',
    },
    {
      logo: `${imagePath}crowd_design_logo.png`,
      text: 'Crowd Design',
      altText: 'Crowd Design',
    },
    {
      logo: `${imagePath}logo_new-1-4-e1643880844828-300x192.png`,
      text: 'Internet Media Polska',
      altText: 'INTERNET MEDIA POLSKA',
    },
    // {
    //   logo: `${imagePath}bema_napis.svg`,
    //   text: 'Leśny Park Bema',
    //   altText: 'Leśny Park Bema',
    // },
    {
      logo: `${imagePath}webtom.png`,
      text: 'Webtom',
      altText: 'webtom',
    },
    {
      logo: `${imagePath}Kobylin.svg`,
      text: 'ROD miejski w Kobylinie',
      altText: 'ROD miejski w Kobylinie',
    },
    {
      logo: `${imagePath}Cruzzie.webp`,
      text: 'Cruzzie',
      altText: 'Cruzzie Inc.',
    },
    {
      logo: `${imagePath}Brainnest.jpeg`,
      text: 'Brainnest',
      altText: 'Brainnest',
    },
    {
      logo: `${imagePath}inkubator_ilawa.png`,
      text: 'Inkubator Technologiczny w Iławie',
      altText: 'Inkubator Technologiczny w Iławie',
    },
    {
      logo: `${imagePath}Pracownia Otwarta Dzika Śliwka.png`,
      text: 'Pracownia Otwarta Dzika Śliwka',
      altText: 'Pracownia Otwarta Dzika Śliwka',
    },
    {
      logo: `${imagePath}Gyms buddy.svg`,
      text: 'Gyms buddy',
      altText: 'Gyms buddy',
    },
    //  {
    //   logo: `${imagePath}inkubator_ilawa.png`,
    //   text: 'Inkubator Technologiczny w Iławie',
    //   altText: 'Inkubator Technologiczny w Iławie',
    // },
      
      
  ];

  return (
    <div
      ref={screenRef}
      id="portfolio"
      className={`relative flex flex-col items-center text-center p-4 screen4-background w-screen ${isDesktop ? "h-auto" : "h-auto"} ${isDesktop ? "pb-[30vh]" : "0"}`}
      style={{ borderTopLeftRadius: isDesktop ? '3vh' : '0', borderTopRightRadius: isDesktop ? '3vh' : '0' }}
    >
      <div className="flex flex-col items-center text-center p-4 bg-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-6xl font-bold md:font-normal font-elegant text-deep-ocean mt-8 xl:mt-20 leading-tight text-gray-600">
          Imagine Innovate Implement
        </h1>
        <p className="text-base xl:text-lg mt-6 xl:mt-10 text-gray-600">
          Trusted by industry leaders, see who we have helped thrive. <br /> Whose potential have we unlocked?
        </p>
      </div>
      <div className="w-screen grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:px-64">
        {companies.map((company, index) => (
          <CompanyCell key={index} logo={company.logo} text={company.text} altText={company.altText} />
        ))}
      </div>
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-[#212121] pointer-events-none"
        style={{ opacity }}
      />
    </div>
  );
};
