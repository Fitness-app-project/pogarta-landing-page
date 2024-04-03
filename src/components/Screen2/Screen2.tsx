'use client'
import { motion } from "framer-motion";
import CountUp from 'react-countup';

export const Screen2 = () => {
    return (
        <div className="w-screen h-[20vh] flex flex-col items-center z-10" style={{ borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'}}>           
            <div className="w-screen flex justify-evenly text-white bg-[#000000] bg-opacity-10 h-[230px] z-1 ">
                {[{ end: 7, color: '#886A38', text: 'Years of Experience' }, 
                  { end: 40, color: '#8D6F3B', text: 'Completed Projects' },
                  { end: 25, color: '#766749', text: 'Clients Worldwide' },
                  { end: 30, color: '#C0A56F', text: 'Specialists' }].map((item, index) => (
                    <motion.div
                        initial={{ scale: 1 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px 2px #DBB75F", borderRadius: "15px" }}
                        className="flex inset-0 items-center gap-8 w-[280px] h-[20vh] px-2 m-auto z-10 transition-all duration-200 ease-in-out rounded-lg"
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
    );
};
