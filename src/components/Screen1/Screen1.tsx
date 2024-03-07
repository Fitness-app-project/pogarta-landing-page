import Image from "next/image"
import PhonePng from '/public/images/Phone.png'

export const Screen1 = () => {

    return (
        <div className="w-full h-full flex justify-between items-center">
            <div className="w-1/2 flex flex-col justify-center gap-10">
                <h1 className="uppercase text-4xl text-gray-600 font-bold">Jesteśmy by <span className="text-lime-500">tworzyć</span></h1>
                <span className="text-gray-500 font-medium tracking-wider text-lg">Realizujemy pomysł począwszy od projektu poprzez <br /> kolejne procesy produkcji i wprowadzenie na rynek.</span>
                <button className="btn w-[220px] bg-lime-500 text-white uppercase tracking-widest rounded-3xl">Dowiedz się więcej</button>
            </div>
            <div className="w-1/2 flex justify-center items-center">
                <Image
                    src={PhonePng}
                    alt="Phone"
                    style={{ transform: "scale(1.7)", translate: "-40%" }}
                />
            </div>
        </div>
    )
}