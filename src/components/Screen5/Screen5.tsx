export const Screen5 = () => {

    return (
        <div className="w-screen h-full flex flex-col items-center bg-[#f2f2f2]">
            <div className="w-[65%] flex flex-col gap-10 py-20">

                <h1 className="w-full text-center custom-text-gradient text-4xl font-semibold tracking-wider">Klienci, którzy nam zaufali</h1>

                <div className="flex justify-evenly">
                    <div className="bg-white w-[200px] h-[100px] rounded-2xl">X</div>
                    <div className="bg-white w-[200px] h-[100px] rounded-2xl">X</div>
                    <div className="bg-white w-[200px] h-[100px] rounded-2xl">X</div>
                    <div className="bg-white w-[200px] h-[100px] rounded-2xl">X</div>
                    <div className="bg-white w-[200px] h-[100px] rounded-2xl">X</div>
                </div>
            </div>

            <div className="w-screen h-full flex justify-evenly text-[#4f5155] bg-[#e7e7e7] py-10">

                <div className="flex items-center gap-8 w-[280px] h-[70px] px-2">
                    <span className="text-[#86c146] text-5xl font-extrabold">5+</span>
                    <span className="text-xl font-medium">Lat doświadczenia</span>
                </div>
                
                <div className="divider lg:divider-horizontal" style={{ margin: 0 }}></div> 

                <div className="flex items-center gap-8 w-[280px] h-[70px] px-2">
                    <span className="text-[#86c146] text-5xl font-extrabold">50+</span>
                    <span className="text-xl font-medium">Ukończonych projektów</span>
                </div>

                <div className="divider lg:divider-horizontal" style={{ margin: 0 }}></div> 
                
                <div className="flex items-center gap-8 w-[280px] h-[70px] px-2">
                    <span className="text-[#86c146] text-5xl font-extrabold">30+</span>
                    <span className="text-xl font-medium">Klientów z całego świata</span>
                </div>
                
                <div className="divider lg:divider-horizontal" style={{ margin: 0 }}></div> 
                
                <div className="flex items-center gap-8 w-[280px] h-[70px] px-2">
                    <span className="text-[#86c146] text-5xl font-extrabold">30+</span>
                    <span className="text-xl font-medium">Specjalistów</span>
                </div>

            </div>
        </div>
    )
}