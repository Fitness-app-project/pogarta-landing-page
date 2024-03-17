import Image from "next/image"
import PogartaPng from "/public/images/Pogarta.png"
import EBA from "/public/images/5_REGULATION_BLUE_EBA.webp"
import HD from "/public/images/4_REGULATION_BLUE_HealthData.webp"
import RODO from "/public/images/7_REGULATION_BLUE_GDPR.webp"
import CSA from "/public/images/15_SECURITY_BLUE_CSA_STAR.webp"
import OSCP from "/public/images/OSCP.png"
import CSP from "/public/images/CSP.webp"
import CBSA from "/public/images/CBSA.webp"

export const Footer = () => {
  return (
    <footer className="bg-[#222222] w-screen px-10 pt-20 pb-32 flex justify-center items-start">

    <div className="flex flex-col mr-40 ">
    <h2 className="text-4xl font-semibold text-[#A98C53] uppercase tracking-widest ml-5">It&apos;s a great day!</h2>
            {/* <div className="flex items-center mt-10">
            <Image 
                alt="Logo"
                src={PogartaPng}
                width={100}
                height={100}
                style={{ transform: "scale(2)", translate: "40px" }}
            />
        </div> */}
        <div className="flex flex-col justify-center mr-10 ">
        <div className="flex flex-wrap items-center mt-10">
            <Image alt="EBA" src={EBA} width={100} height={100}  />
            <Image alt="HD" src={HD} width={100} height={100}  />
            <Image alt="CSA STAR" src={CSA} width={100} height={100}  />
            <Image alt="HD" src={HD} width={100} height={100}  />

        
        </div>
        <div className="flex flex-wrap items-center mt-10">
        <Image alt="RODO" src={RODO} width={100} height={100}  />
        <Image alt="OSCP" src={OSCP} width={100} height={100} style={{transform: "scale(0.5)"}} />
        <Image alt="CBSA" src={CBSA} width={100} height={100} style={{transform: "scale(0.7)"}}  />
        <Image alt="CSP" src={CSP} width={100} height={100} style={{transform: "scale(0.7)"}}  />
        </div>
    </div>
    </div>

      <div className="flex flex-col text-white ml-40 ">
        <h2 className="text-4xl font-semibold text-[#A98C53] tracking-widest">Contact us:</h2>
        <p className="mt-4 text-xl ">
        If you're interested in collaborating<br/> or have any questions,<br/> don&apos;t hesitate to contact us!<br/>

          <span className="font-extrabold mt-2 ">Call or text</span>
        </p>
        <div className="flex flex-col gap-4 font-bold text-xl mt-2">
          <span>+48 123 456 789</span>
          <span>+48 123 456 789</span>
          <span>hello@pogarta.com</span>
        </div>
      </div>
      
    </footer>
  )
}
