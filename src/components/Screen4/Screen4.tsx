import { Cell } from "./components/Cell"

import Image from 'next/image';
const imagePath = "/images/Screen4images/";
const CompanyCell = ({ logo, text, altText }: { logo: string, text: string, altText: string }) => {
    return (
        <div className="flex flex-col items-center text-center p-4 mt-10">
            <div className="relative flex justify-center items-center w-32 h-32">
                <Image src={logo} alt={altText} layout="fill" objectFit="contain" />
            </div>
            <div className="mt-2 flex flex-col items-center text-center p-4">
                <p className="text-sm text-[#383838]">{text}</p>
            </div>
        </div>
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
  ];

  return (
    <div>
      <div className=" flex flex-col items-center text-center p-4 px-64   bg-white">
      <h1 className="text-6xl font-elegant text-deep-ocean mt-10 leading-tight text-gray-600">
      Shaping the future of tech. <br />Expanding possibilities. <br />
      We deliver innovative solutions tailored for the ever-evolving business landscape.
 </h1>
    <p className="text-lg mt-4  text-gray-600 italic">
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
