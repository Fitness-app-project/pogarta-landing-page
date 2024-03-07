"use client"

import { Project } from "./components/Project"

export const Screen3 = () => {

    return (
        <div className="w-screen h-full flex flex-col items-center gap-10 bg-[#e7e7e7] py-10 px-20">
            <h1 className="text-[#33cccc] font-semibold text-5xl">
                Zapoznaj się z naszymi ostatnimi projektami.
            </h1>
            <Project />
        </div>
    )
}