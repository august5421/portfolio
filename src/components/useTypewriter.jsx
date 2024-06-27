import { useState, useEffect } from 'react';

const useTypewriter = (textArray, speed = 100, delay = 500) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true); 

  useEffect(() => {
    let timeout;

    if (isTyping && !isDeleting) {
      timeout = setTimeout(() => {
        const nextText = textArray[index].slice(0, displayedText.length + 1);
        setDisplayedText(nextText);

        if (nextText === textArray[index]) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1000);
        }
      }, speed);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        const prevText = textArray[index].slice(0, displayedText.length - 1);
        setDisplayedText(prevText);

        if (prevText === 'I ') {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
          setIsTyping(true); 
        }
      }, speed);
    }

    const blinkInterval = setInterval(() => {
      setCursorVisible((prevVisible) => !prevVisible);
    }, 500);

    return () => {
      clearTimeout(timeout);
      clearInterval(blinkInterval);
    };
  }, [displayedText, isTyping, isDeleting, index, textArray, speed, delay]);

  const textWithCursor = isTyping || isDeleting ? `${displayedText}` : displayedText;

  return textWithCursor;
};

export default useTypewriter;
