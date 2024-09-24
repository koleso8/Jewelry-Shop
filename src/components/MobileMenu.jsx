import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`-z-10 bg-zinc-600  absolute w-screen h-[50vh] top-[55px] left-0 flex justify-center items-center flex-col  ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-all`}
    >
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default MobileMenu;
