import Image from "next/image"
import PogartaCiemnaPng from "/public/images/Pogarta_ciemna.png"

export const Footer = () => {


    return (
        <div className="custom-gradient-footer w-screen h-full px-40 pt-20 pb-32 flex justify-evenly">

            <div className="flex flex-col gap-10 ">
                <Image 
                    alt="Logo"
                    src={PogartaCiemnaPng}
                    width={100}
                    height={100}
                    style={{ transform: "scale(2.2)", translate: "40px" }}
                />

                {/*<h2 className="custom-text-gradient text-4xl font-semibold tracking-wide">Kariera w Pogarta</h2>*/}

                {/*<span className="text-xl font-medium leading-9">Zatrudniamy!<br /> Przejdz na strone Kariera i <br /> sprawdz nasze oferty!</span>*/}
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="uppercase tracking-widest text-[#2b2d31] text-4xl font-semibold">Usługi</h2>
                <div className="divider bg-black h-[5px]"></div>
                <div className="flex flex-col font-medium text-xl gap-4">
                    <span>Custom Software Development</span>
                    <span>Business Application Platforms</span>
                    <span>Cloud Infrastructure</span>
                    <span>Web Development</span>
                    <span>Mobile development</span>
                    <span>Product Design</span>
                    <span>Blockchain</span>
                    <span>Cloud Development</span>
                    <span>Quality Assurance</span>
                    <span>Software Architecture</span>
                </div>
            </div>

            <div className=" flex flex-col gap-4 text-xl font-semibold">
                <h2 className="uppercase tracking-widest text-[#2b2d31] text-4xl font-semibold">Kontakt</h2>
                <div className="divider bg-black h-[5px]"></div>
                <span>Jesteś zainteresowany <br /> współpracą lub masz jakieś <br /> pytania? <span className="font-extrabold">Zadzwoń lub napisz</span> </span>
                <div className="flex flex-col gap-4 font-bold">
                    <span>+48 123 456 789</span>
                    <span>+48 123 456 789</span>
                    <span>pogarta.mail@przyklad.com</span>
                </div>
            </div>

        </div>
    )
}