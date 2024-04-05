import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundAnimation } from './Background';
import Modal from './components/Modal';
import { offers } from './components/OffersData';
import { TypeAnimation } from 'react-type-animation';


export const Screen7 = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedOffer, setSelectedOffer] = useState(null);

    const chunkArray = (arr: any[], chunkSize: number) => {
        let results = [];
        while (arr.length) {
            results.push(arr.splice(0, chunkSize));
        }
        return results;
    };

    const handleScreenClick = (e: { target: { id: string } }) => {
        if (e.target.id === 'screen7-container') {
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
            className="w-screen h-[110vh] flex flex-col items-center justify-center screen7-background relative"
            style={{ borderTopLeftRadius: '3vh', borderTopRightRadius: '3vh', zIndex: 10 }}
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleScreenClick(e)}
        >
            <div className="w-screen h-[110vh] absolute">
                <BackgroundAnimation />
            </div>
            <h1 className="text-6xl font-medium text-[#D9B55E] mb-20 z-30 relative">
            <h3 className="font-normal text-[40px] leading-[80px] tracking-wide">
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
            {chunkedOffers.map((chunk, chunkIndex) => (
                <motion.div
                    className="flex justify-center space-x-8 mb-8 z-30"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    key={chunkIndex}
                >
                    {chunk.map((offer, index) => (
                        <motion.div
                            key={index}
                            className="bg-black bg-opacity-50 p-10 rounded-full flex items-center space-x-4 w-[calc(50%-4rem)] z-30"
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
                </motion.div>
            ))}
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
