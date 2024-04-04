'use client'
import { motion } from "framer-motion";
import Image from "next/image"
import SPM from "/public/images/Sic_Parvis_Magna.svg"
// import AnimatedBackground from "@/components/Screen1/components/AnimatedBackground";
import bg from "/public/images/bgwhite.svg"
import Lottie from 'react-lottie';
import pogartaLogo from '../../../public/gifs/pogartaIkona.json';
import pogartaLogo2 from '../../../public/gifs/pogartaText.json';
import { BackgroundAnimation } from "../Screen7/Background";
import AnimatedLogoBackground from "./components/Background";
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
    <div className="absolute">
      <Lottie options={defaultOptions} height={height} width={width}/></div>
  );
}
const Logo2 = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true, 
    animationData: pogartaLogo2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
    
  };
  const height = '88vh'
  const width = `calc(${height} * 1.8824)`;
  return (
    <div id="home">
      <Lottie options={defaultOptions} height={height} width={width}/>
      </div>
  );
}
export const Screen1 = () => {

    return (
      
<div className="w-screen h-[70vh] flex flex-col justify-center items-center text-[#D9B55E] z-10">
{/* <AnimatedBackground /> */}
{/* <div className='w-screen h-[110vh] absolute'>
                <BackgroundAnimation />
            </div>        */}
            <div className='w-screen h-[110vh] absolute opacity-[0.5] z-10'>
            {/* <AnimatedLogoBackground width={2500} height={862}/> */}
            <BackgroundAnimation/>
            </div>
            
             <Image src={bg} layout="fill" objectFit="cover" alt="background" className="z-20 mt-1 opacity-20" />
             {/* <div className="absolute w-[200vh] bg-[#fff] "> */}
             <Logo/>
             {/* </div> */}
        <motion.div 
          animate={{ y: ["0%", "1%", "0%"] }}
          transition={{ yoyo:Infinity ,duration: 2, repeat: Infinity }}
          className="z-0 mb-5"
        >
          {/* <Image src={SPM} alt="Sic Parvis Magna" /> */}
          <Logo2/>
        </motion.div>
        <p className="absolute bottom-[22vh] text-lg tracking-widest text-[#747474] z-10">
          From small beginnings come great things
        </p>
      </div>
    );
};