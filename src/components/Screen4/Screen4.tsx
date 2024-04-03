"use client"

import { motion } from "framer-motion";
import Image from 'next/image';

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
          <motion.div className="relative flex justify-center items-center w-32 h-32" animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
              <Image src={logo} alt={altText} layout="fill" objectFit="contain" />
          </motion.div>

          <div className="mt-2 flex flex-col items-center text-center p-4">
              <p className="text-[#383838] text-xs">{text}</p>
          </div>
      </motion.div>
  );
};

export const Screen4 = () => {
  const companies = [
    {
      logo: `${imagePath}grasstec-group-logo.svg`,
      text: 'Grasstec Group',
      altText: 'grasstec-group-logo',
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
        logo: `${imagePath}Brainnest.jfif`,
        text: 'Brainnest',
        altText: 'Brainnest',
      },
      {
        logo: `${imagePath}inkubator_ilawa.png`,
        text: 'Inkubator Technologiczny w Iławie',
        altText: 'Inkubator Technologiczny w Iławie',
      },
      // {
      //   logo: `${imagePath}inkubator_ilawa.png`,
      //   text: 'Inkubator Technologiczny w Iławie',
      //   altText: 'Inkubator Technologiczny w Iławie',
      // },
      
  ];

  return (
    <div id="portfolio" className=" flex flex-col items-center text-center p-4 screen4-background w-screen h-[180vh]"  style={{ borderTopLeftRadius: '3vh', borderTopRightRadius: '3vh' }}>
      <div className="flex flex-col items-center text-center p-4 bg-white " >
          <h1 className="text-6xl font-elegant text-deep-ocean mt-20 leading-tight text-gray-600">
            Imagine Innovate Implement 
          </h1>
          <p className="text-lg mt-10 text-gray-600  ">
            Trusted by industry leaders, see who we have helped thrive. <br /> Whose potential have we unlocked?
          </p>
        </div>
        <div className="grid grid-cols-3 gap- bg-white w-screen px-64 mb">
            {companies.map((company, index) => (
              <CompanyCell key={index} logo={company.logo} text={company.text} altText={company.altText} />
            ))}
        </div>
    </div>
  );
};