"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundAnimation } from './Background';
import Modal from './components/Modal';
import { offers } from './components/OffersData';
import { TypeAnimation } from 'react-type-animation';
import { isDesktop } from 'react-device-detect';


export const Screen7 = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedOffer, setSelectedOffer] = useState(null);

    useEffect(() => {
        if (isModalOpen) {
            const originalStyle = window.getComputedStyle(document.body).overflow;
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = originalStyle;
            };
        }
    }, [isModalOpen]);
    
    const chunkArray = (arr: any[], chunkSize: number) => {
        let results = [];
        while (arr.length) {
            results.push(arr.splice(0, chunkSize));
        }
        return results;
    };

    const handleScreenClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLElement;  // Cast to HTMLElement to ensure 'id' is accessible
        if (target.id === 'screen7-container') {
            setModalOpen(false);
        }
    };
    const handleFindOutMore = (offer: any) => {
        setSelectedOffer(offer);
        setModalOpen(true);
    };
    

    const chunkedOffers = chunkArray([...offers], 2);

    const containerVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <div
            id="carrier"
            className={`w-screen ${isDesktop ? "h-[110vh]" : "h-auto"} flex flex-col items-center justify-center screen7-background relative py-6`}
            style={{ borderTopLeftRadius: isDesktop ? '3vh' : '0', borderTopRightRadius: isDesktop ? '3vh' : '0', zIndex: 10 }}
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleScreenClick(e)}
        >
            <div className="w-screen h-[110vh] absolute">
                <BackgroundAnimation />
            </div>
            <h1 className="text-[#D9B55E] mb-0 md:mb-6 lg:mb-20 z-30 relative">
                <h3 className="text-3xl md:text-5xl 2xl:text-6xl font-normal leading-[80px] tracking-wide">
                    <TypeAnimation
                        sequence={[
                            "Current job offers",
                        ]}
                        wrapper="span"
                        speed={10}
                        cursor={false}
                    />
                </h3>
            </h1>

            {/* {chunkedOffers.map((chunk, chunkIndex) => (
                <motion.div
                    className="flex justify-center space-x-8 mb-8 z-30"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    key={chunkIndex}
                > */}
            <div
                className='w-screen grid grid-cols-1 lg:grid-cols-2 gap-8 md:px-16 lg:px-4 xl:px-16 2xl:px-40'
            >
                {offers.map((offer, index) => (
                    <motion.div
                        key={index}
                        className={`bg-black bg-opacity-50 sm:p-10 ${isDesktop ? "rounded-full p-6" : "py-4 pr-1"} flex items-center space-x-4 w-auto z-30`}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    >
                        <div className="flex-1 ml-10">
                            <h2 className="text-2xl text-[#D9B55E]">{offer.title}</h2>
                            <p className="text-[#B7B7B7] text-lg">{offer.details}</p>
                        </div>
                        <div className="ml-auto">
                            <motion.button
                                whileHover={{ scale: 1.1, backgroundColor: '#616161' }}
                                className="bg-[#747474] bg-opacity-30 hover:bg-gray-600 text-[#D9B55E] py-3 px-6 rounded-full transition duration-300 ml-5"
                                onClick={() => handleFindOutMore(offer)}
                            >
                                Find Out More →
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>
                {/* </motion.div>
            ))} */}
            <AnimatePresence>
                {isModalOpen && (
                    <Modal
                        offer={{
                            title: (selectedOffer as any)?.title || '',
                            details: (selectedOffer as any)?.details || '',
                            jobDescription: (selectedOffer as any)?.jobDescription || [],
                            basicRequirements: (selectedOffer as any)?.basicRequirements || [],
                            niceToHave: (selectedOffer as any)?.niceToHave || [],
                        }}
                        handleClose={() => setModalOpen(false)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};
