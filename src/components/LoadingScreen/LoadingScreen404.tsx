import { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { useGlitch, GlitchHandle } from 'react-powerglitch';

const LoadingScreen = ({ onFinish }: { onFinish: () => void }) => {
  const glitch: GlitchHandle = useGlitch({
    playMode: 'manual',
    timing: {
      duration: 1000, 
      iterations: 1, 
    },
    slice: {
      count: 4, 
      velocity: 20,
      minHeight: 0.12,
      maxHeight: 0.15,
      hueRotate: true,
    },
    shake: false,
    pulse: false, 
  });

  useEffect(() => {
    const glitchStart = setTimeout(() => {
      glitch.startGlitch(); 
    }, 2800);

    const glitchStop = setTimeout(() => {
      glitch.stopGlitch();
    }, 4000); 

    const transitionTimeout = setTimeout(() => {
      const firstDiv = document.getElementById('first-div');
      const secondDiv = document.getElementById('second-div');

      if (firstDiv && secondDiv) {
        firstDiv.style.display = 'none';
        secondDiv.style.display = 'block';
        secondDiv.style.opacity = '1';
      }
    }, 3800);

    const finishTimeout = setTimeout(() => {
      const textElement = document.getElementById('joke-text');
      if (textElement) {
        textElement.style.opacity = '0';
      }
      setTimeout(onFinish, 500);
    }, 8000);

    return () => {
      clearTimeout(glitchStart);
      clearTimeout(glitchStop);
      clearTimeout(transitionTimeout);
      clearTimeout(finishTimeout);
      glitch.stopGlitch();
    };
  }, [onFinish, glitch]);

  return (
    <div className="w-full h-full relative bg-white">
      <div
        id="first-div"
        className="flex justify-center items-start min-h-[100vh] pt-[15vh] bg-white"
        ref={glitch.ref} 
      >
        <div className="flex justify-center items-start max-w-4xl px-[5vh]">
          <div className="flex-grow text-start">
            <div className="text-6xl font-bold">
              <span className="text-blue-600">G</span>
              <span className="text-red-600">o</span>
              <span className="text-yellow-600">o</span>
              <span className="text-blue-600">g</span>
              <span className="text-green-600">l</span>
              <span className="text-red-600">e</span>
            </div>

            <div className="mt-4 text-lg text-gray-500">
              <span className="font-bold">
                <a className="text-black">404.</a>
              </span>{' '}
              That’s an error.
            </div>

            <div className="mt-2 text-black">
              The requested URL 'pogarta.com' was not found on this server. <br />
              <a className="text-gray-500">That’s all we know.</a>
            </div>
          </div>

          <div className="ml-6">
            <img
              src="/images/errorRobot.png"
              alt="Broken robot"
              className="w-40 h-40"
            />
          </div>
        </div>
      </div>

      <div
        id="second-div"
        className="flex flex-col justify-center items-center h-[100vh] w-screen bg-white absolute top-0 left-0"
        style={{ display: 'none' }}
      >
        <div className="flex justify-start items-start h-[100vh] w-full pt-[22vh] pl-[3vh] bg-[#222222]">
          <div id="joke-text" className="transition-opacity duration-500">
            <TypeAnimation
              sequence={[
                4500,
                "Just joking... together We'll reach Your goal without any issues!",
                5000,
              ]}
              speed={80}
              wrapper="h1"
              className="text-[200px] text-[#fff] font-droid tracking-tight"
              style={{
                transform: 'scaleY(1.5)',
                letterSpacing: '-0.05em',
                lineHeight: '0.8',
              }}
              cursor={true}
              repeat={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
