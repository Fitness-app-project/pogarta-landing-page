import Image from "next/image"
import bg from "/public/images/bg.svg"


export const Screen1 = () => {

    return (
      <div className="w-full h-screen1	flex flex-col justify-center  items-center  text-[#D9B55E] ">
                <Image src={bg} layout="fill" objectFit="cover"  alt="background" />
        <h1 className="text-9xl	font-cinzel mb-5 z-10">
          Sic Parvis Magna
        </h1>
        <p className=" text-lg  tracking-widest text-[#747474]">
          From small beginnings come great things
        </p>
      </div>
    );
};
