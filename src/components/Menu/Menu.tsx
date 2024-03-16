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
            <div className="flex justify-evenly items-center gap-24 text-xl uppercase">
                <button className="uppercase tracking-widest">Strona Główna</button>
                <button className="uppercase tracking-widest">O nas</button>
                <button className="uppercase tracking-widest">portfolio</button>
                <button className="uppercase tracking-widest">kontakt</button>
            </div>
        </div>
    )
}