'use client';

import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Typewriter = () => {
  const [text] = useTypewriter({
    /* รายการคำที่จะพิมพ์สลับกันไป */
    words: ['Hello!', 'My name is Nontagrich Panpanich', 'I am student of KMUTT ', 'Nice to meet you!'],
    loop: 1, 
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 1000,
  });

  return (
    <p className="mt-3 max-w-md mx-auto text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl">
      <span className="font-bold text-white"> {text}</span>
      <Cursor cursorStyle='|'/>
    </p>
  );
};

export default Typewriter;