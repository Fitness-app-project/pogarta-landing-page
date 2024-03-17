export const Screen2 = () => {

    return (
        <div className="w-screen h-full flex flex-col items-center">
           

            <div className="w-screen flex  justify-evenly  text-[#FFFFFF] bg-[#000000] bg-opacity-10 h-252 ">

                <div className="flex inset-0 items-center gap-8 w-[280px] h-[70px] px-2 m-auto  ">
                    <span className="text-[#886A38] text-5xl font-extrabold">5+</span>
                    <span className="text-xl font-medium">Lat doświadczenia</span>
                </div>
                
                <div className="divider lg:divider-horizontal" style={{ margin: 0 }}></div> 

                <div className="flex items-center gap-8 w-[280px] h-[70px] px-2 m-auto ">
                    <span className="text-[#8D6F3B] text-5xl font-extrabold">70+</span>
                    <span className="text-xl font-medium">Ukończonych projektów</span>
                </div>

                <div className="divider lg:divider-horizontal" style={{ margin: 0 }}></div> 
                
                <div className="flex items-center gap-8 w-[280px] h-[70px] px-2 m-auto">
                    <span className="text-[#766749] text-5xl font-extrabold">50+</span>
                    <span className="text-xl font-medium">Klientów z całego świata</span>
                </div>
                
                <div className="divider lg:divider-horizontal" style={{ margin: 0 }}></div> 
                
                <div className="flex items-center gap-8 w-[280px] h-[70px] px-2 m-auto">
                    <span className="text-[#C0A56F] text-5xl font-extrabold">30+</span>
                    <span className="text-xl font-medium">Specjalistów</span>
                </div>

            </div>
        </div>
    )
}