import { CheckLine } from "./CheckLine"

export const Project = () => {


    return (
        <div className="w-full h-full flex items-center justify-evenly">
            <div className="w-1/3 flex flex-col gap-10">
                <div className="w-[215px] h-[100px] bg-white rounded-2xl">
                    Logo
                </div>
                <span className="text-[#4f5155] font-medium tracking-wide">
                    Gyms Buddy to Twój nowy, najlepszy przyjaciel z siłowni, który za pomącą planów, treningów i diety będzie wprowadzał użytkownika w zdrowy, regularny tryb życia.
                </span>
            </div>
            <div className="w-[700px] h-[340px] bg-white rounded-3xl px-6 py-4">
                <h3 className="text-2xl text-[#4f5155] tracking-widest uppercase font-semibold mb-4">Wynik współpracy:</h3>
                <CheckLine text="Osiągniete cele projektowe" />
                <CheckLine text="Dodatkowe funkcje oraz reprezentatywne cechy projektu" />
                <CheckLine text="Zyski i korzyści, które wniósł projekt dla klienta" />
                <CheckLine text="Technologie, systemy użyte podczas projektowania." />
            </div>
        </div>
    )
}