import { useState } from 'react';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`relative w-10 h-10 border-black border-[2px] transition-transform duration-300 ${
        isOpen ? 'rotate-90' : 'translate-y-0'
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`absolute w-full top-0 h-[6px] bg-black rounded transition-transform duration-300 ${
          isOpen ? 'rotate-45 translate-y-[180%]' : 'translate-y-0'
        }`}
      ></div>
      <div
        className={`absolute w-full top-[40%] h-[6px] bg-black rounded transition-opacity duration-300 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      ></div>
      <div
        className={`absolute w-full top-[28%] h-[6px] bg-black rounded transition-transform duration-300 ${
          isOpen ? '-rotate-45 translate-y-[10%] w-12' : 'translate-y-5'
        }`}
      ></div>
    </div>
  );
};

export default BurgerMenu;
