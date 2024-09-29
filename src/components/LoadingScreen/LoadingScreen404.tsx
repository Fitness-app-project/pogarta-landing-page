import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [showError, setShowError] = useState(true);
  const [showJoking, setShowJoking] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [startGlitch, setStartGlitch] = useState(false); // Nowy stan dla efektu glitch

  useEffect(() => {
    const glitchTimeout = setTimeout(() => {
      setStartGlitch(true); // Aktywacja glitch na 500ms przed końcem 1 elementu
    }, 3000);

    const jokeTimeout = setTimeout(() => {
      setShowError(false);
      setShowJoking(true);
    }, 3500);

    const finishTimeout = setTimeout(() => {
      setFadeOut(true);
    }, 7500);

    return () => {
      clearTimeout(glitchTimeout);
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
        <motion.div
          className="flex justify-center items-start max-w-4xl px-[5vh] pb-[40vh]"
          animate={startGlitch ? {
            opacity: [1, 0.8, 0.5, 0.8, 1], // Efekt glitch migania
            x: [-5, 5, -10, 10, 0], // Przesunięcia poziome
            scale: [1, 1.02, 0.98, 1.02, 1] // Zmiany skali
          } : {}}
          transition={{
            duration: 0.5, // Czas trwania efektu glitch
            ease: "easeInOut", // Płynność animacji
            repeat: 1 // Efekt występuje raz przed końcem
          }}
        >
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
        </motion.div>
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
