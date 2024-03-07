import Image from "next/image"
import CheckGif from "/public/gifs/check.gif"

interface IProps {
    text: string
}

export const CheckLine: React.FC<IProps> = ({ text }) => {
    return (
        <div className="w-full h-[50px] font-semibold text-xl flex text-[#4f5155] items-center gap-2">
            <Image
                src={CheckGif}
                alt="Check"
                width={35}
                height={35}
                unoptimized
            />
            <span>{text}</span>
        </div>
    )
}

