"use client"
import { motion } from "framer-motion";
import CountUp from 'react-countup';

const statVariants = {
    hover: { scale: 1.05 }
};

export const Screen2 = () => {
    return (
        <div className="w-screen h-full flex flex-col items-center z-1">
            <div className="w-screen flex justify-evenly text-white bg-[#000000] bg-opacity-10 h-[230px] z-1 ">
                {[{ end: 12, color: '#886A38', text: 'Years of Experience' }, 
                  { end: 600, color: '#8D6F3B', text: 'Completed Projects' },
                  { end: 120, color: '#766749', text: 'Clients Worldwide' },
                  { end: 40, color: '#C0A56F', text: 'Specialists' }].map((item, index) => (
                    <motion.div
                        variants={statVariants}
                        initial={{ scale: 1 }}
                        animate={{ scale: 1 }}
                        whileHover="hover"
                        custom={index}
                        className="flex inset-0 items-center gap-8 w-[280px] h-[70px] px-2 m-auto z-10"
                        key={index}
                    >
                        <span className={`text-5xl font-extrabold`} style={{ color: item.color }}>
                            <CountUp end={item.end} duration={2.5} />+
                        </span>
                        <span className="text-xl font-medium">
                            {item.text}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
