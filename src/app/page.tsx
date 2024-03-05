import { Menu } from "@/components/Menu/Menu";
import { Screen1 } from "@/components/Screen1/Screen1";
import { Screen2 } from "@/components/Screen2/Screen2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-44 overflow-hidden gap-24">
      <Menu />
      <Screen1 />
      <Screen2 />

      <div className="mt-[500px]">a</div>
    </main>
  );
}
