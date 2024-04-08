'use client'


import ScreensManager from "./ScreensManager";
export default function Home() {
  return (
    <>
    {/* <CustomCursor /> */}
    <main className="flex min-h-screen flex-col items-center px-60 text-[#FDFDFD]">
      {/* <Menu /> */}
      {/* {screens.map((screen, index) => (
        <motion.div
          key={screen.id}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {screen.component}
        </motion.div>
      ))} */}
      <ScreensManager/>
{/* <Screen1/>
<Screen2/>
      <Screen3 />
      <Screen4 /> */}
      {/* <Screen5 /> */}
      {/* <Screen6 /> */}
      {/* <Screen7 />
      <Footer />
      <FooterBar/> */}
    </main>
    </>

  );
}
