import { useEffect, useState } from 'react';

const Typewriter = ({ text }: { text: string }) => {
  const [typewriterText, setTypewriterText] = useState('');

  useEffect(() => {
    let i = 0;
    const speed = text.length > 50 ? 25 : 50;
    const timer = setInterval(() => {
      if (i < text.length) {
        if (text.charAt(i) === '\n') {
          setTypewriterText((prev) => prev + '<br />');
          i++;
        } else {
          setTypewriterText((prev) => prev + text.charAt(i));
          i++;
        }
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text]);

  return <span dangerouslySetInnerHTML={{ __html: typewriterText }} />;
};

export default Typewriter;