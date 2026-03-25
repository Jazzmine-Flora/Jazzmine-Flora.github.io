import React, { useEffect, useState } from "react";

interface Props {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
  className?: string;
}

const TypingText: React.FC<Props> = ({
  words,
  typeSpeed = 80,
  deleteSpeed = 40,
  pause = 2200,
  className,
}) => {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplay(word.slice(0, display.length + 1));
          if (display.length + 1 === word.length) {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          setDisplay(word.slice(0, display.length - 1));
          if (display.length - 1 === 0) {
            setDeleting(false);
            setWordIdx((i) => (i + 1) % words.length);
          }
        }
      },
      deleting ? deleteSpeed : typeSpeed,
    );

    return () => clearTimeout(timeout);
  }, [display, deleting, wordIdx, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className={className}>
      {display}
      <span className="typing-cursor" aria-hidden="true" />
    </span>
  );
};

export default TypingText;
