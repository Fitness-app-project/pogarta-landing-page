'use client'

import ScreensManager from "./ScreensManager";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-[#FDFDFD]">
      <ScreensManager/>
      <div id="root"></div>
  <div id="modal-root"></div>
    </main>
  );
}
