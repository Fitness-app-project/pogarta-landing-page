import { Footer } from "@/components/Footer/Footer";
import { FooterBar } from "@/components/FooterBar/FooterBar";
import { Menu } from "@/components/Menu/Menu";
import { Screen1 } from "@/components/Screen1/Screen1";
import { Screen2 } from "@/components/Screen2/Screen2";
import { Screen3 } from "@/components/Screen3/Screen3";
import { Screen4 } from "@/components/Screen4/Screen4";
import { Screen5 } from "@/components/Screen5/Screen5";
import { Screen6 } from "@/components/Screen6/Screen6";
import { Screen7 } from "@/components/Screen7/Screen7";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-60 overflow-hidden text-[#FDFDFD]">
      <Menu />
      <Screen1 />
      <Screen2 />
      <Screen3 />
      <Screen4 />
      <Screen5 />
      <Screen6 />
      <Screen7 />
      <Footer />
      <FooterBar/>
    </main>
  );
}
