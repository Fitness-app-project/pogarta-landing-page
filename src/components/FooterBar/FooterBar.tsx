import { isMobile, isDesktop } from "react-device-detect";

export const FooterBar = () => {
    return (
      <div className={`relative bg-[#383838] h-12 tracking-widest text-center content-center items-center${isMobile ? 'px-2 w-full whitespace-nowrap' : 'px-4  w-dvw'}`}>
        <p className={`text-white text-align center absolute left-1/2 transform -translate-x-1/2 text-xs md:text-base ${isMobile ? 'top-4' : 'top-3'}`}>
          © 2024 - POGARTA, All rights Reserved.
        </p>
      </div>
    )
}