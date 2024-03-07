import { Menu } from "@/components/Menu/Menu";
import { Screen1 } from "@/components/Screen1/Screen1";
import { Screen2 } from "@/components/Screen2/Screen2";
import { Screen3 } from "@/components/Screen3/Screen3";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-60 overflow-hidden gap-24 text-[#4f5155]">
      <Menu />
      <Screen1 />
      <Screen2 />
      <Screen3 />

      <div className="mt-[500px]">a</div>
    </main>
  );
}
