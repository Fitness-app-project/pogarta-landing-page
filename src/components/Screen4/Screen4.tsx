import { Cell } from "./components/Cell"

import Image from 'next/image';
const imagePath = "/images/Screen4images/";
// Define a new component for the company logos and descriptions
const CompanyCell = ({ logo, text, altText }: { logo: string, text: string, altText: string }) => {
    return (
        <div className="flex flex-col items-center text-center p-4">
            <div className="relative flex justify-center items-center w-24 h-24">
                <Image src={logo} alt={altText} layout="fill" objectFit="contain" />
            </div>
            <div className="mt-2 flex flex-col items-center text-center p-4">
                <p className="text-sm text-gray-600">{text}</p>
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

    
    // ...add all other companies similarly
  ];

  return (
    <div className="grid grid-cols-5 gap-4 bg-white w-screen px-64">
      {companies.map((company, index) => (
        <CompanyCell key={index} logo={company.logo} text={company.text} altText={company.altText} />
      ))}
    </div>
  );
};
