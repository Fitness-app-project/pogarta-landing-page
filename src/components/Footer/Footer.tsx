import Image from "next/image"
import PogartaCiemnaPng from "/public/images/Pogarta_ciemna.png"

export const Footer = () => {


    return (
        <div className=" custom-gradient-footer w-screen h-full px-40 pt-20 pb-32 flex justify-evenly">


            <div className="flex flex-col gap-2">
                <h2 className="uppercase tracking-widest text-[#A98C53] text-4xl font-semibold">Any Questions?</h2>
                
            </div>

            <div className=" flex flex-col gap-4 text-xl font-semibold">
                <h2 className=" tracking-widest text-[#A98C53] text-4xl font-semibold ">Contact us:</h2>
                <span>Jesteś zainteresowany <br /> współpracą lub masz jakieś <br /> pytania? <span className="font-extrabold">Zadzwoń lub napisz</span> </span>
                <div className="flex flex-col gap-4 font-bold">
                    <span>+48 123 456 789</span>
                    <span>+48 123 456 789</span>
                    <span>hello@pogarta.com</span>
                </div>
            </div>

        </div>
    )
}