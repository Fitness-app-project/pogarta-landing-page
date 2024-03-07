"use client"

import { useEffect, useState } from "react"
import { Project } from "./components/Project"
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6"

export const Screen3 = () => {
    const [current, setCurrent] = useState<number>(0)
    const [opacity1, setOpacity1] = useState<number>(1)
    const [opacity2, setOpacity2] = useState<number>(0)
    const [opacity3, setOpacity3] = useState<number>(0)

    const handleClick = (i: number) => {

        if(current === 0) {
            setOpacity1(0)
            setOpacity2(1)
        } else if(current === 1) {
            if(i === 1) {
                setOpacity2(0)
                setOpacity3(1)
            } else {
                setOpacity1(1)
                setOpacity2(0)
            }
        } else if(current === 2) {
            setOpacity2(1)
            setOpacity3(0)
        }
        setCurrent(prev => prev + i)
        
    }

    return (
        <div className="w-screen h-[500px] flex flex-col items-center gap-10 bg-[#e7e7e7] py-10 px-20">
            <h1 className="text-[#33cccc] font-semibold text-5xl">
                Zapoznaj się z naszymi ostatnimi projektami.
            </h1>

            <div className="relative w-screen flex justify-center items-center gap-[70%] h-full">
                <div onClick={() => handleClick(-1)} className="z-10 cursor-pointer">
                    {current !== 0 && (
                        <FaCircleArrowLeft size={40} />
                    )}
                </div>
                <div onClick={() => handleClick(1)} className="z-10 cursor-pointer">
                    {current !== 2 && (
                        <FaCircleArrowRight size={40} />
                    )}
                </div>
                <div className="absolute" style={{ opacity: opacity1, transitionDuration: "400ms" }}>
                    <Project
                        description="Gyms Buddy to Twój nowy, najlepszy przyjaciel z siłowni, który za pomącą planów, treningów i diety będzie wprowadzał użytkownika w zdrowy, regularny tryb życia." 
                    />
                </div>
                <div className="absolute" style={{ opacity: opacity2, transitionDuration: "400ms" }}>
                    <Project description="Jakis inny projekt również bardzo ciekawy" />
                </div>
                <div className="absolute" style={{ opacity: opacity3, transitionDuration: "400ms" }}>
                    <Project description="Jakis inny projekt również bardzo ciekawy" />
                </div>
            </div>


        </div>
    )
}