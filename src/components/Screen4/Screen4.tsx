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
          className="flex flex-col items-center text-center p-4 mt-10"
        >
            <div className="relative flex justify-center items-center w-32 h-32">
                <Image src={logo} alt={altText} layout="fill" objectFit="contain" />
            </div>
            <div className="mt-2 flex flex-col items-center text-center p-4">
                <p className="text-sm text-[#383838]">{text}</p>
            </div>
        </motion.div>
    );
};

export const Screen4 = () => {
  const companies = [
    {
      logo: `${imagePath}Spotify.svg`,
      text: 'Stream millions of songs and podcasts.',
      altText: 'Spotify',
    },
    {
      logo: `${imagePath}Sony.svg`,
      text: 'Electronics and entertainment.',
      altText: 'Sony',
    },
    {
      logo: `${imagePath}Revolut.svg`,
      text: 'Digital banking and financial services.',
      altText: 'Revolut',
    },
    {
      logo: `${imagePath}Loreal.svg`,
      text: 'Beauty and cosmetics.',
      altText: 'Loreal',
    },
    {
        logo: `${imagePath}JD-sports.svg`,
        text: 'Retailer of sports fashion and sneakers.',
        altText: 'JD-sports',
      },
      {
        logo: `${imagePath}Segro.svg`,
        text: 'Real estate services.',
        altText: 'Segro',
      },
      {
        logo: `${imagePath}Nissan.svg`,
        text: 'Car tech and EVs.',
        altText: 'Nissan',
      },
      {
        logo: `${imagePath}Allianz.svg`,
        text: 'Insurance and financial products.',
        altText: 'Allianz',
      },
      {
        logo: `${imagePath}Hp.svg`,
        text: 'Computing and printing tech.',
        altText: 'Hp',
      },
      {
        logo: `${imagePath}Walmart.svg`,
        text: 'Retail innovation and online shopping.',
        altText: 'Walmart',
      },
      {
        logo: `${imagePath}Dropbox.svg`,
        text: 'Secure cloud storage and file sharing.',
        altText: 'Dropbox',
      },
      {
        logo: `${imagePath}Bayer.svg`,
        text: 'Crop and healthcare tech.',
        altText: 'Bayer',
      },
      {
        logo: `${imagePath}ValeBrasil.svg`,
        text: 'Efficient mining and resource extraction.',
        altText: 'ValeBrasil',
      },
      {
        logo: `${imagePath}DHL.svg`,
        text: 'Shipping and logistics.',
        altText: 'DHL',
      },
      {
        logo: `${imagePath}Tecnifibre.svg`,
        text: 'Tennis and squash equipment.',
        altText: 'Tecnifibre',
      },
      {
        logo: `${imagePath}HBO.svg`,
        text: 'Premium television and streaming.',
        altText: 'HBO',
      },
      {
          logo: `${imagePath}CDProject.svg`,
          text: 'Game development and distribution.',
          altText: 'CDProject',
        },
        {
          logo: `${imagePath}Starbucks.svg`,
          text: 'Specialty coffee and tea.',
          altText: 'Starbucks',
        },
        {
          logo: `${imagePath}Y-Combinator.svg`,
          text: 'Startup accelerator and funding.',
          altText: 'Y-Combinator',
        },
        {
          logo: `${imagePath}Pearson.svg`,
          text: 'Educational materials and services.',
          altText: 'Pearson',
        },
  ];

  return (
    <div>
      <div className=" flex flex-col items-center text-center p-4 px-64   bg-white">
        <h1 className="text-6xl font-elegant text-deep-ocean mt-10 leading-tight text-gray-600">
          Imagine Innovate Implement 
        </h1>
        <p className="text-lg mt-10  text-gray-600 italic">
          Trusted by industry leaders, see who we’ve helped thrive.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-4 bg-white w-screen px-64 mb">
          {companies.map((company, index) => (
            <CompanyCell key={index} logo={company.logo} text={company.text} altText={company.altText} />
          ))}
      </div>
    </div>
  );
};
