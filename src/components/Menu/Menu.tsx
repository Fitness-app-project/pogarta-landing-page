import PogartaPng from "/public/images/Pogarta.png"

import Image from "next/image"


export const Menu = () => {

    return (
        <div className="w-full h-full flex justify-between items-center py-6">
            <div className="flex items-center">
                <Image 
                    alt="Logo"
                    src={PogartaPng}
                    width={100}
                    height={100}
                    style={{ transform: "scale(2)", translate: "40px" }}
                />
            </div>
            <div className="flex justify-evenly items-center gap-12 text-xl ">
                <button className="tracking-widest  ">Home</button>
                <button className="tracking-widest ">Portfolio</button>
                <button className="tracking-widest  ">About us</button>
                <button className="tracking-widest ">Contact</button>
            </div>
        </div>
    )
}