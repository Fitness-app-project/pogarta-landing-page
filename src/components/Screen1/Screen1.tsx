'use client'
import { motion } from "framer-motion";
import Image from "next/image"
import SPM from "/public/images/Sic_Parvis_Magna.svg"
import AnimatedBackground from "@/components/Screen1/components/AnimatedBackground";
import bg from "/public/images/bgwhite.svg"
import Lottie from 'react-lottie';
import pogartaLogo from '../../../public/gifs/pogartaIkona.json';
import pogartaLogo2 from '../../../public/gifs/pogartaText.json';
import { BackgroundAnimation } from "../Screen7/Background";
import AnimatedLogoBackground from "./components/Background";
import pogartaLogo3 from "../../../public/pogartaLogoSquare.png";
import { useState, useEffect } from "react";
import { isDesktop } from "react-device-detect";
// const AnimatedBackground = ({ delay = 0 }) => (
//   <motion.div
//     initial={{ x: '-110vw' }}
//     animate={{ x: '110vw' }}
//     transition={{ duration: 15, repeat: Infinity, delay }}
//     className="absolute z-0 w-full h-screen1 mr-24 "
//   >
//     <Image src={bg} layout="fill" objectFit="cover" alt="background" className="z-0 opacity-10 " />
//   </motion.div>
// );
const Logo = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true, 
    animationData: pogartaLogo,
    rendererSettings: {
      // preserveAspectRatio: 'xMidYMid slice'
    }
    
  };
  
  const height = '90vh'
  const width = `240vh`;
  return (
    <div className="absolute ">
      <Lottie options={defaultOptions} height={height} width={width}/></div>
  );
}

const Logo2 = () => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    },1500);

    return () => clearTimeout(timer);
  }, []);

  if (!showLogo) {
    return null; 
  }

  const defaultOptions = {
    loop: false,
    autoplay: true, 
    animationData: pogartaLogo2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const height = '88vh';
  const width = `calc(${height} * 1.8824)`;

  return (
    <div id="home">
      <Lottie options={defaultOptions} height={height} width={width}/>
    </div>
  );
}
export const Screen1 = () => {
  const logoVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      x: '0vw',
      y: '0vh',
    },
    visible: {
      scale: 1,
      opacity: 1,
      x: '0vw',
      y: '0vh',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        delay: 1 
      },
    },
    move: {
      x: '-46vw',
      y: '-40vh',
      scale: [1,0.12],
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
        
      },
    }
  };

  const [animation, setAnimation] = useState('hidden');

  useEffect(() => {
    setAnimation('visible');
    const timer = setTimeout(() => {
      setAnimation('move');
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

    return (    
      <div className={`w-screen ${isDesktop ? "h-[70vh]" : "h-[55vh]"} flex flex-col justify-center items-center text-[#D9B55E] z-10`}>
        {/* <AnimatedBackground /> */}
        {/* <div className='w-screen h-[110vh] absolute'>
          <BackgroundAnimation />
        </div>        */}
        <div className='w-screen h-[110vh] absolute opacity-[0.5] z-10'>
          {/* <AnimatedLogoBackground width={2500} height={862}/> */}
          <BackgroundAnimation/>
        </div>
            
        <Image src={bg} layout="fill" objectFit="cover" alt="background" className={`z-20 mt-1 opacity-20 ${isDesktop ? "" : "hidden"}`} />
        

        {isDesktop && (
          <motion.div
            className='flex justify-center items-center absolute'
            variants={logoVariants}
            initial={animation}
            animate={animation}
          >
          {/* test */}
            <Image src={pogartaLogo3} alt='Logo' width={500} height={500} />
          </motion.div>
        )}
             
          {isDesktop ? (
            <motion.div
              animate={{ y: ["0%", "1%", "0%"] }}
              transition={{ yoyo: Infinity, duration: 2, repeat: Infinity }}
              className="z-0 mb-5"
            >
              <Logo2 />
            </motion.div >
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 2.35 }}
              className="w-screen"
            >
              <h1 className="text-white font-semibold tracking-widest text-[50px] text-center">
                POGARTA
              </h1>
            </motion.div>
          )}
          
          
        
        <p className={`${isDesktop && "absolute"} bottom-[28vh] sm:text-base md:text-lg md:tracking-widest text-[#747474] z-10`}>
          From small beginnings come great things
        </p>
      </div>
    );
};