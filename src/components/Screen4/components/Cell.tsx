import Image from "next/image"

interface IProps {
    img: string
    text: string
}

export const Cell: React.FC<IProps> = ({ img, text }) => {

    return (
        <div className="flex flex-col justify-start items-center gap-4 w-[350px] h-[300px] pt-4 px-2 border-b-2 border-black">
            <Image
                alt="Logo"
                src={img}
                width={100}
                height={100}
                unoptimized
            />
            <span className="text-lg text-justify">
                {text}
            </span>
        </div>
    )
}