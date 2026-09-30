import React, { useState, useEffect } from 'react';

const TypeWriter = ({ words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    let timer;
    if (!isDeleting && text === currentWord) {
      // Pause at the end of the word before starting to delete
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      // Move to the next word after deleting
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      // Typing or deleting
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline-flex items-center">
      {text}
      <span className="animate-ping border-r-[3px] border-emerald-400 ml-1 h-[1.1em] rounded-full opacity-70"></span>
    </span>
  );
};

export default TypeWriter;
