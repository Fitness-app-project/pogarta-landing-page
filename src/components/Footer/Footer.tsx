import Image from "next/image"
import FB from "/public/images/Socials/facebook.svg"
import IG from "/public/images/Socials/instagram.svg"
import LinkedIn from "/public/images/Socials/linkedin.svg"
import Clutch from "/public/images/Socials/Clutch.co.svg"
import X from "/public/images/Socials/X.svg"
import FBColor from "/public/images/Socials/facebook-color.svg";
import IGColor from "/public/images/Socials/instagram-color.svg";
import LinkedInColor from "/public/images/Socials/linkedin-color.svg";
import ClutchColor from "/public/images/Socials/Clutch.co-color.svg";
import XColor from "/public/images/Socials/X-color.svg";
import React, { useState } from "react"


export const Footer = () => {
  const [hoverFB, setHoverFB] = useState(false);
  const [hoverIG, setHoverIG] = useState(false);
  const [hoverLinkedIn, setHoverLinkedIn] = useState(false);
  const [hoverClutch, setHoverClutch] = useState(false);
  const [hoverX, setHoverX] = useState(false);

  const imageStyle = (isHovered:any) => ({
    transition: "transform 0.3s",
    transform: isHovered ? "scale(0.6)" : "scale(0.5)"
  });
  const imageStyle2 = (isHovered:any) => ({
    transition: "transform 0.3s",
    transform: isHovered ? "scale(0.55)" : "scale(0.45)"
  });

  return (
    <footer id="contact" className="bg-[#222222] w-screen px-10 pt-[8rem] pb-32 flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-52 lg:gap-0 lg:justify-between md:items-start">

      <div className="flex flex-col">
        <h2 className="text-4xl font-semibold text-[#A98C53] uppercase tracking-widest">Let&apos;s talk</h2>

              {/* <div className="flex items-center mt-10">
              <Image 
                  alt="Logo"
                  src={PogartaPng}
                  width={100}
                  height={100}
                  style={{ transform: "scale(2)", translate: "40px" }}
              />
            </div> */}
        
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap items-center mt-10">
              <a href="https://www.facebook.com/people/Pogarta/61556942754758/" target="_blank" onMouseEnter={() => setHoverFB(true)} onMouseLeave={() => setHoverFB(false)}>
                <Image alt="FB" src={hoverFB ? FBColor : FB} width={100} height={100} style={imageStyle(hoverFB)} />
                </a>
              <a href="https://www.instagram.com/pogarta.softwarehouse/" target="_blank" onMouseEnter={() => setHoverIG(true)} onMouseLeave={() => setHoverIG(false)}>
                <Image alt="IG" src={hoverIG ? IGColor : IG} width={100} height={100} style={imageStyle(hoverIG)} />
              </a>
              <a href="https://www.linkedin.com/company/pogarta/" target="_blank" onMouseEnter={() => setHoverLinkedIn(true)} onMouseLeave={() => setHoverLinkedIn(false)}>
                <Image alt="LinkedIn" src={hoverLinkedIn ? LinkedInColor : LinkedIn} width={100} height={100} style={imageStyle(hoverLinkedIn)} />
              </a>
              <a href="https://twitter.com/Pogarta_" target="_blank" onMouseEnter={() => setHoverX(true)} onMouseLeave={() => setHoverX(false)}>
                <Image alt="X" src={hoverX ? XColor : X} width={100} height={100} style={imageStyle2(hoverX)} />
              </a>
                {/* <a href="#" onMouseEnter={() => setHoverClutch(true)} onMouseLeave={() => setHoverClutch(false)}>
                  <Image alt="Clutch" src={hoverClutch ? ClutchColor : Clutch} width={100} height={100} style={imageStyle(hoverClutch)} />
                </a> */}
            </div>
          </div>
      </div>

      <div className="flex flex-col text-white">
        <h2 className="text-4xl font-semibold text-[#A98C53] tracking-widest">Contact us:</h2>

        <p className="mt-10 text-xl ">
          Custom Solutions for Your Specific Needs. <br />
          Our Expert Team will Help You Succeed. <br />
        </p>

        <div className="flex flex-col gap-4 font-bold text-xl mt-2">
          {/* <span className="font-extrabold mt- ">Call or text</span> */}

          {/* <span>+48 123 456 789</span> */}
          <span>hello@pogarta.com</span>
        </div>

      </div>
    </footer>
  )
}
