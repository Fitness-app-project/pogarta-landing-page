import Image from "next/image"

export const Screen7 = () => {


    return (
        <div className="bg-[#d9d9d9] relative w-screen h-[800px] flex justify-center mt-24">
            <img src="/images/Ai.png" alt="Ai" className="absolute z-10" style={{ translate: "0% -40%" }} />

            <div className="custom-gradient text-white w-[65%] h-[300px] rounded-[50px] absolute flex justify-center items-center px-60" style={{ top: "40%" }}>
                <h1 className="text-5xl tracking-wide">
                    Porozmawiaj z naszymi ekspertami, <br />aby odblokować wiele nowych <span className="font-bold">możliwości</span>.
                </h1>
            </div>
        </div>
    )
}