import React, { useState, useEffect } from 'react';

const TextoDinamico = ({ phrases }) => {
  const [currentText, setCurrentText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  useEffect(() => {
    console.log(`--- Ciclo useEffect ---`);
    console.log(`  Frase Actual: "${phrases[phraseIndex]}"`);
    console.log(`  Texto Actual: "${currentText}"`);
    console.log(`  Índice Char: ${charIndex}`);
    console.log(`  Borrando?: ${isDeleting}`);
    console.log(`-----------------------`);

    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        setCurrentText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setPhraseIndex(prev => (prev + 1) % phrases.length);
        }
      } else {
        setCurrentText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);

        if (charIndex === currentPhrase.length) {
          setIsDeleting(true);
        }
      }
    };

    let timer;
    const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;

    if (charIndex === phrases[phraseIndex].length && !isDeleting) {
      timer = setTimeout(handleTyping, pauseTime);
    } else if (charIndex === 0 && isDeleting) {
      timer = setTimeout(handleTyping, typingSpeed * 2); 
    }
    else {
      timer = setTimeout(handleTyping, currentSpeed);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime]);
  
  return (
    <div className="dynamic-text-wrapper">
      <span className="dynamic-text-content">{currentText}</span>
      <span className="dynamic-text-cursor">|</span>
    </div>
  );
};

export default TextoDinamico;