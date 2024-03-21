'use client'
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e: { clientX: any; clientY: any; }) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return <div className="fixed z-50 border-[#DBB75F] bg-[#DBB75F] pointer-events-none w-6 h-6 border-2 border-gold-500 rounded-full bg-transparent transform -translate-x-1/2 -translate-y-1/2" style={{ left: `${position.x}px`, top: `${position.y}px` }} />;
};

export default CustomCursor;