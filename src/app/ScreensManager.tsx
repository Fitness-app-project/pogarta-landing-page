import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu } from '@/components/Menu/Menu';
import { Screen1 } from '@/components/Screen1/Screen1';
import { Screen2 } from '@/components/Screen2/Screen2';
import { Screen3 } from '@/components/Screen3/Screen3';
import { Screen4 } from '@/components/Screen4/Screen4';
import { Screen7 } from '@/components/Screen7/Screen7';

const ScreensManager = () => {
  const screen1Ref = useRef<HTMLDivElement>(null);
  const screen3Ref = useRef<HTMLDivElement>(null);
  const screen4Ref = useRef<HTMLDivElement>(null);
  const [screen1Opacity, setScreen1Opacity] = useState(1);
  const [screen3Opacity, setScreen3Opacity] = useState(1);
  const [screen4Opacity, setScreen4Opacity] = useState(1);
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const triggerHeightForScreen3 = windowHeight * 2;
    const triggerHeightForScreen4 = windowHeight * 4.2;

    const screen1Pos = screen1Ref.current?.getBoundingClientRect();
    const screen3Pos = screen3Ref.current?.getBoundingClientRect();
    const screen4Pos = screen4Ref.current?.getBoundingClientRect();

      setScreen1Opacity(screen1Pos ? Math.max(0, 1 - Math.max(0, window.scrollY - screen1Pos.top) / 700) : 1);
    if (screen3Pos) {
      const screen3StartFade = Math.max(0, window.scrollY - triggerHeightForScreen3);
      setScreen3Opacity(Math.max(0, 1 - screen3StartFade / 500));
    } else {
      setScreen3Opacity(1); 
    }

    if (screen4Pos) {
      const screen4StartFade = Math.max(0, window.scrollY - triggerHeightForScreen4);
      setScreen4Opacity(Math.max(0, 1 - screen4StartFade / 500));
    } else {
      setScreen4Opacity(1);
    }
  };
  
  
  
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div style={{ zIndex: 1, position: 'sticky', top: 0, opacity: screen1Opacity }} ref={screen1Ref}>
        <Menu/>
        <Screen1 />
        <Screen2 />
      </div>

        <div style={{ position: 'sticky', top:-700 , zIndex: 1, opacity: screen3Opacity }} ref={screen3Ref}>
          <Screen3/>
        </div>
      <div style={{position: 'sticky', top:-1000 , zIndex: 1, opacity: screen4Opacity }} ref={screen4Ref}>
        <Screen4/>
      </div>
      <div style={{ zIndex: 1, position: 'sticky'}}>
        <Screen7/>
      </div>
    </>
  );
};

export default ScreensManager;