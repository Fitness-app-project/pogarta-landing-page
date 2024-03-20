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
                <p className=" text-[#383838] text-xs ">{text}</p>
            </div>
        </motion.div>
    );
};

export const Screen4 = () => {
  const companies = [
    {
      logo: `${imagePath}Spotify.svg`,
      text: 'Internal analytics dashboard for tracking user engagement and music trends.',
      altText: 'Spotify',
    },
    {
      logo: `${imagePath}Sony.svg`,
      text: 'Cross-departmental collaboration platform to streamline project management.',
      altText: 'Sony',
    },
    {
      logo: `${imagePath}Revolut.svg`,
      text: 'Fraud detection system to enhance security and user trust.',
      altText: 'Revolut',
    },
    {
      logo: `${imagePath}Loreal.svg`,
      text: 'Market insight tool for analyzing beauty trends and consumer preferences.',
      altText: 'Loreal',
    },
    {
        logo: `${imagePath}JD-sports.svg`,
        text: 'Inventory optimization system for efficient stock management.',
        altText: 'JD-sports',
      },
      {
        logo: `${imagePath}Segro.svg`,
        text: 'Property management software to centralize operations and analytics.',
        altText: 'Segro',
      },
      {
        logo: `${imagePath}Nissan.svg`,
        text: 'Sustainable innovation tracker to monitor and promote eco-friendly practices.',
        altText: 'Nissan',
      },
      {
        logo: `${imagePath}Allianz.svg`,
        text: 'Risk management database to refine insurance product offerings.',
        altText: 'Allianz',
      },
      {
        logo: `${imagePath}Hp.svg`,
        text: 'Internal tech support portal to improve employee IT assistance.',
        altText: 'Hp',
      },
      {
        logo: `${imagePath}Walmart.svg`,
        text: 'Retail analytics platform for optimizing sales strategies.',
        altText: 'Walmart',
      },
      {
        logo: `${imagePath}Dropbox.svg`,
        text: 'Enhanced security monitoring tools for safeguarding user data.',
        altText: 'Dropbox',
      },
      {
        logo: `${imagePath}Bayer.svg`,
        text: 'R&D collaboration platform for accelerating product development.',
        altText: 'Bayer',
      },
      {
        logo: `${imagePath}ValeBrasil.svg`,
        text: 'Resource extraction analytics tool for operational efficiency.',
        altText: 'ValeBrasil',
      },
      {
        logo: `${imagePath}DHL.svg`,
        text: 'Logistics optimization software to improve delivery routes and times.',
        altText: 'DHL',
      },
      {
        logo: `${imagePath}Tecnifibre.svg`,
        text: 'Product development feedback loop to enhance equipment innovation.',
        altText: 'Tecnifibre',
      },
      {
        logo: `${imagePath}HBO.svg`,
        text: 'Content performance analytics to guide production and marketing.',
        altText: 'HBO',
      },
      {
          logo: `${imagePath}CDProject.svg`,
          text: 'Game development workflow tool to streamline creation processes.',
          altText: 'CDProject',
        },
        {
          logo: `${imagePath}Starbucks.svg`,
          text: 'Sustainability tracking system for eco-friendly business practices.',
          altText: 'Starbucks',
        },
        {
          logo: `${imagePath}Y-Combinator.svg`,
          text: 'Internal networking platform to foster startup collaboration.',
          altText: 'Y-Combinator',
        },
        {
          logo: `${imagePath}Pearson.svg`,
          text: 'E-learning content management system to streamline course creation.',
          altText: 'Pearson',
        },
         {
          logo: `${imagePath}Duolingo.svg`,
          text: 'Language proficiency tracking system to enhance user learning experience.',
          altText: 'Duolingo',
        },
        {
          logo: `${imagePath}Rolex.svg`,
          text: 'Luxury brand authenticity verification platform to ensure product integrity.',
          altText: 'Rolex',
        },
        {
          logo: `${imagePath}DJI.svg`,
          text: 'Flight data analysis tool for optimizing drone performance and safety.',
          altText: 'DJI',
        },
        {
          logo: `${imagePath}Bitget.svg`,
          text: 'Cryptocurrency market trend analysis tool for optimized trading strategies.',
          altText: 'Bitget',
        },
        {
          logo: `${imagePath}StanfordMedicine.svg`,
          text: 'Patient data analytics platform to improve treatment outcomes and research.',
          altText: 'Stanford Medicine',
        },        
  ];

  return (
    <div>
      <div className=" flex flex-col items-center text-center p-4    bg-white">
        <h1 className="text-6xl font-elegant text-deep-ocean mt-10 leading-tight text-gray-600">
          Imagine Innovate Implement 
        </h1>
        <p className="text-lg mt-10  text-gray-600 italic">
          Trusted by industry leaders, see who we’ve helped thrive. <br /> What have we done?
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
