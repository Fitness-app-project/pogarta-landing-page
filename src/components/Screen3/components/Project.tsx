import { CheckLine } from "./CheckLine"

interface IProps {
    logo?: any
    checklist?: string[]
    description: string
}

export const Project: React.FC<IProps> = ({ description, checklist, logo }) => {


    return (
        <div className="w-screen h-full flex items-center justify-center gap-10">
            <div className="w-1/4 flex flex-col gap-10">
                <div className="w-[215px] h-[100px] bg-white rounded-2xl">
                    Logo
                </div>
                <span className="text-[#4f5155] font-medium tracking-wide">
                    {description}
                </span>
            </div>
            <div className="w-1/3 h-[340px] bg-white rounded-3xl px-6 py-4">
                <h3 className="text-2xl text-[#4f5155] tracking-widest uppercase font-semibold mb-4">Wynik współpracy:</h3>
                <CheckLine text="Osiągniete cele projektowe" />
                <CheckLine text="Dodatkowe funkcje oraz reprezentatywne cechy projektu" />
                <CheckLine text="Zyski i korzyści, które wniósł projekt dla klienta" />
                <CheckLine text="Technologie, systemy użyte podczas projektowania." />
            </div>
        </div>
    )
}