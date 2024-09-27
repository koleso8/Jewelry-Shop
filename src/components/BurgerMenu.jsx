const BurgerMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`relative w-10 h-10  transition-transform duration-300 ${
        isOpen ? 'rotate-90' : 'translate-y-0'
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`absolute w-full top-0 h-[6px] bg-slate-800 rounded transition-transform duration-300 ${
          isOpen ? 'rotate-45 translate-y-[280%]' : 'translate-y-0'
        }`}
      ></div>
      <div
        className={`absolute w-full top-[40%] h-[6px] bg-slate-800 rounded transition-opacity duration-300 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      ></div>
      <div
        className={`absolute w-full bottom-0 h-[6px] bg-slate-800 rounded transition-transform duration-300 ${
          isOpen ? '-rotate-45 -translate-y-[280%]  ' : 'translate-y-0'
        }`}
      ></div>
    </div>
  );
};

export default BurgerMenu;
