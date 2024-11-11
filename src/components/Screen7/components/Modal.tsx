// Modal.tsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { offers } from './OffersData';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import scrollLock from 'scroll-lock';
import { isDesktop } from 'react-device-detect';
interface Offer {
  title: string;
  details: string;
  jobDescription: string[];
  basicRequirements: string[];
  niceToHave: string[];
  disableScroll: boolean;
}

interface ModalProps {
  offer: Offer;
  handleClose: () => void;
  isMobile: boolean;
}

const Modal: React.FC<ModalProps> = ({ offer, handleClose, isMobile }) => {
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const modalElement = modalContentRef.current;

    if (modalElement) {
      // Zablokuj przewijanie strony, ale pozwól przewijać modal
      scrollLock.disablePageScroll(modalElement);
    }

    return () => {
      if (modalElement) {
        // Odblokuj przewijanie
        scrollLock.enablePageScroll(modalElement);
      }
    };
  }, []);

  const handleBackgroundClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  const modalContent = (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      onClick={handleBackgroundClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={`bg-[#222222] p-4 rounded-lg ${isMobile ? 'max-w-xs h-[85vh] overflow-y-auto' : 'max-w-md'} w-full m-2 relative`}
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.7 }}
        onClick={e => e.stopPropagation()}
      >
        {isMobile && (
          <button
            className="absolute top-2 right-2 text-[#D9B55E]"
            onClick={handleClose}
          >
            <FaTimes size={25} />
          </button>
        )}
        <h2 className="text-xl font-bold mb-3 text-[#D9B55E]">{offer.title}</h2>
        <p className="text-[#B7B7B7]">{offer.details}</p>

        {/* Render Job Description */}
        <div className="mt-3">
          <h3 className="text-md font-bold mb-1 text-[#D9B55E]">Job Description</h3>
          <ul className="list-disc list-inside text-[#B7B7B7]">
          {offer.jobDescription && offer.jobDescription.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Render Basic Requirements */}
        <div className="mt-3">
          <h3 className="text-md font-bold mb-1 text-[#D9B55E]">Basic Requirements</h3>
          <ul className="list-disc list-inside text-[#B7B7B7]">
           {offer.basicRequirements && offer.basicRequirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Render Nice to Have */}
        <div className="mt-3">
          <h3 className="text-md font-bold mb-1 text-[#D9B55E]">Nice to Have</h3>
          <ul className="list-disc list-inside text-[#B7B7B7]">
            {offer.niceToHave && offer.niceToHave.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Close Button */}
        {isDesktop && (
          <button
            className="mt-5 bg-[#D9B55E] text-white py-2 px-3 rounded hover:bg-[#bfa55d] transition ease-in-out duration-150"
            onClick={handleClose}
          >
            Close
          </button>
        )}
      </motion.div>
    </motion.div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById('modal-root') as HTMLElement,
  );
};

export default Modal;
