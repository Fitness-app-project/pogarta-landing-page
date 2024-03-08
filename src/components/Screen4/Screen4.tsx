import Image from "next/image"
import { Cell } from "./components/Cell"

export const Screen4 = () => {


    return (
        <div className="w-screen h-full flex flex-col items-center bg-white gap-10 py-24 mt-24">
            <h1 className="font-bold text-5xl text-[#2b2d31] uppercase">
                Rozumiemy twoje 
                <span className="text-[#33cccc]"> potrzeby</span>
            </h1>
            <span className="text-xl">
                Zależy nam na najlepszym kontakcie z Tobą, abyś mógł w zamian otrzymać pełnowartościowy, dopracowany produkt oraz...
            </span>

            <div className="flex w-[1050px] h-[900px]">
                
                <div className="flex flex-col border-t-2 border-black border-l-2 w-[350px] h-[900px]">
                    <Cell img="/gifs/equality.gif" text="Dokładnie sprawdzony, utalentowany zespół, który jest motywowany do działania." />                    
                    <Cell img="/gifs/note.gif" text="Nasz zespół ds. analiz biznesowych zajmie się zbieraniem kluczowych informacji o projekcie, aby zapewnić wymagania techniczne zrozumiałe dla programistów." />                    
                    <Cell img="/gifs/Safety.gif" text="Zapewnimy wszystko, czego potrzebujesz, aby bezproblemowo przekazać nowe oprogramowanie i przeszkolić swoje wewnętrzne zespoły." />                    
                </div>
                
                <div className="flex flex-col border-t-2 border-black border-l-2 w-[350px] h-[900px]">
                    <Cell img="/gifs/certificate.gif" text="Uzyskaj porady ekspertów, kiedy ich potrzebujesz, od dowolnej agencji w naszej sieci, niezależnie od tego, czy jest to analityk, projektant UX, czy niszowy ekspert ds. technologii." />                    
                    <Cell img="/gifs/document.gif" text="Otrzymujesz pełną własność i licencję na oprogramowanie stworzone przez naszą firmę, dzięki czemu możesz swobodnie z niego korzystać i komercjalizować." />                    
                    <Cell img="/gifs/consultation.gif" text="Doradzamy w zakresie aspektów, które należy wzmocnić. Świadczymy usługi analizy biznesowej, pomagamy w projektowaniu architektury oprogramowania i zarządzaniu jego cyklem." />                    
                </div>

                <div className="flex flex-col border-t-2 border-black border-x-2 w-[350px] h-[900px]">
                    <Cell img="/gifs/thought-leadership.gif" text="Twój lider techniczny zajmIe się wszystkimi zadaniami związanymi z zarządzaniem zespołem projektowym, dzięki czemu możesz skupić się na tym, co ważne." />                    
                    <Cell img="/gifs/tech-support.gif" text="Kompleksowe testowanie, całodobowe wsparcie w przypadku błędów i konserwacja na żądanie." />                    
                    <Cell img="/gifs/ab-testing.gif" text="Mierzymy wskaźniki produktywności i KPI dedykowanych zespołów, monitorujemy jakość oprogramowania, zarządzamy rezultatami, wspieramy start-upy indywidualnym programem." />                    
                </div>

            </div>
        </div>
    )
}