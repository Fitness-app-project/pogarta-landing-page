// Modal.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { offers } from './OffersData';

interface Offer {
  title: string;
  details: string;
  jobDescription: string[];
  basicRequirements: string[];
  niceToHave: string[];
}

interface ModalProps {
  offer: Offer;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ offer, handleClose }) => {
  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      onClick={handleBackgroundClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-[#222222] p-6 rounded-lg max-w-md w-full m-4"
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.7 }}
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4 text-[#D9B55E]">{offer.title}</h2>
        <p className="text-[#B7B7B7]">{offer.details}</p>

        {/* Render Job Description */}
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2 text-[#D9B55E]">Job Description</h3>
          <ul className="list-disc list-inside text-[#B7B7B7]">
          {offer.jobDescription && offer.jobDescription.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Render Basic Requirements */}
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2 text-[#D9B55E]">Basic Requirements</h3>
          <ul className="list-disc list-inside text-[#B7B7B7]">
           {offer.basicRequirements && offer.basicRequirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Render Nice to Have */}
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2 text-[#D9B55E]">Nice to Have</h3>
          <ul className="list-disc list-inside text-[#B7B7B7]">
            {offer.niceToHave && offer.niceToHave.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Close Button */}
        <button
          className="mt-6 bg-[#D9B55E] text-white py-2 px-4 rounded hover:bg-[#bfa55d] transition ease-in-out duration-150"
          onClick={handleClose}
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
