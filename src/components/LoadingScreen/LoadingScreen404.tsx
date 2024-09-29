import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [showError, setShowError] = useState(true);
  const [showJoking, setShowJoking] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const jokeTimeout = setTimeout(() => {
      setShowError(false);
      setShowJoking(true);
    }, 3500);

    const finishTimeout = setTimeout(() => {
      setFadeOut(true);
    }, 7500);

    return () => {
      clearTimeout(jokeTimeout);
      clearTimeout(finishTimeout);
    };
  }, [onFinish]);

  return (
    <motion.div
      className="flex flex-col justify-center items-center h-[100vh] w-screen bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => fadeOut && onFinish()}
    >
      {showError && (
        <div className="flex justify-center items-start max-w-4xl px-[5vh] pb-[40vh]"> {/* Zmniejszenie paddingu */}
          <div className="flex-grow">
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
      )}

      {showJoking && (
        <div className="flex justify-start items-start h-[100vh] w-full pt-[20vh] pl-[3vh] bg-[#222222]">
          <TypeAnimation
            sequence={[
              "Just joking... together We'll reach Your goal without any issues!",
              1500,
            ]}
            speed={80}
            wrapper="h1"
            className="text-[200px] text-[#fff] font-droid tracking-tight"  
            style={{
              transform: 'scaleY(1.5)',
              letterSpacing: '-0.05em',
              lineHeight: '0.8'
            }}
            cursor={true}
            repeat={0}
          />
        </div>
      )}
    </motion.div>
  );
};

export default LoadingScreen;