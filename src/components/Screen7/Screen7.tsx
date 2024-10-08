"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useViewportScroll,
  useTransform,
} from "framer-motion";
import { BackgroundAnimation } from "./Background";
import Modal from "./components/Modal";
import { offers } from "./components/OffersData";
import { TypeAnimation } from "react-type-animation";
import { isDesktop } from "react-device-detect";

export const Screen7 = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);

  const screen7Ref = useRef<HTMLDivElement>(null);
  const [offsetTop, setOffsetTop] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const { scrollY } = useViewportScroll();

  // Funkcja do blokowania scrolla
  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  // Funkcja do odblokowania scrolla
  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  // Kiedy modal się otwiera, blokujemy scrollowanie, a jak się zamyka, odblokowujemy
  useEffect(() => {
    if (isModalOpen) {
      disableScroll();
    } else {
      enableScroll();
    }

    // Czyszczenie po odmontowaniu komponentu
    return () => enableScroll();
  }, [isModalOpen]);

  useEffect(() => {
    const updateDimensions = () => {
      if (screen7Ref.current) {
        const rect = screen7Ref.current.getBoundingClientRect();
        setOffsetTop(window.scrollY + rect.top);
        setScreenHeight(rect.height);
      }
      setWindowHeight(window.innerHeight);
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    window.addEventListener("scroll", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("scroll", updateDimensions);
    };
  }, []);

  const startTransform = offsetTop * 0.5 - windowHeight;
  const endTransform = offsetTop - windowHeight;

  // Animacja przesunięcia tylko dla komputerów (desktop)
  const y = useTransform(
        scrollY,
        [startTransform, endTransform],
        [0, -((endTransform - startTransform) * 0.5)],
        { clamp: false }
      )

  const handleScreenClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    if (target.id === "screen7-container") {
      setModalOpen(false);
    }
  };

  const handleFindOutMore = (offer: any) => {
    setSelectedOffer(offer);
    setModalOpen(true);
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      id="carrier"
      ref={screen7Ref}
      className={`w-screen ${
        isDesktop ? "h-[110vh]" : "h-auto"
      } ${isDesktop ? "mt-[100vh]" : "0"} flex flex-col items-center justify-center screen7-background relative py-6`}
      style={{
        y: isDesktop ? y : 0,
        borderTopLeftRadius: isDesktop ? "3vh" : "0",
        borderTopRightRadius: isDesktop ? "3vh" : "0",
        borderBottomLeftRadius: isDesktop ? "3vh" : "0",
        borderBottomRightRadius: isDesktop ? "3vh" : "0",
        zIndex: 10,
      }}
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        handleScreenClick(e)
      }
    >
      {isDesktop && (
        <div className="w-screen h-[110vh] absolute">
          <BackgroundAnimation />
        </div>
      )}
      <h1 className="text-[#D9B55E] mb-0 md:mb-6 lg:mb-20 z-30 relative">
        <h3 className="text-3xl md:text-5xl 2xl:text-6xl font-normal leading-[80px] tracking-wide">
          <TypeAnimation
            sequence={["Current job offers"]}
            wrapper="span"
            speed={10}
            cursor={false}
          />
        </h3>
      </h1>
      <div className="w-screen grid grid-cols-1 lg:grid-cols-2 gap-8 md:px-16 lg:px-4 xl:px-16 2xl:px-40">
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            className={`bg-black bg-opacity-50 sm:p-10 ${
              isDesktop ? "rounded-full p-6" : "py-4 pr-1"
            } flex items-center space-x-4 w-auto z-30`}
            variants={itemVariants}
            whileHover={
              isDesktop
                ? { scale: 1.05, transition: { duration: 0.2 } }
                : undefined // Hover tylko dla komputerów
            }
          >
            <div className="flex-1 ml-10">
              <h2 className="text-2xl text-[#D9B55E]">{offer.title}</h2>
              <p className="text-[#B7B7B7] text-lg">{offer.details}</p>
            </div>
            <div className="ml-auto">
              <motion.button
                whileHover={
                  isDesktop
                    ? { scale: 1.1, backgroundColor: "#616161" }
                    : undefined
                }
                className="bg-[#747474] bg-opacity-30 hover:bg-gray-600 text-[#D9B55E] py-3 px-6 rounded-full transition duration-300 ml-5"
                onClick={() => handleFindOutMore(offer)}
              >
                Find Out More →
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <Modal
            offer={{
              title: (selectedOffer as any)?.title || "",
              details: (selectedOffer as any)?.details || "",
              jobDescription: (selectedOffer as any)?.jobDescription || [],
              basicRequirements: (selectedOffer as any)?.basicRequirements || [],
              niceToHave: (selectedOffer as any)?.niceToHave || [],
            }}
            handleClose={() => setModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};
