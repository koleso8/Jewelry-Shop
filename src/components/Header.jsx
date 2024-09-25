import { useState } from 'react';
import { useScreenWidth } from '../hooks/useScreenWidth';
import BurgerMenu from './BurgerMenu';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import MobileMenu from './MobileMenu';
// import CustomModal from './CustomModal';

const Header = () => {
  const { isMobile, isTablet } = useScreenWidth();
  const [isOpen, setIsOpen] = useState(false);
  isOpen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'unset');

  return (
    <header className="bg-white flex justify-center items-center  w-screen border-b-[1px] fixed z-10">
      <section className=" flex  justify-between items-center w-11/12 z-10 ">
        {isTablet && <Navigation setIsOpen={setIsOpen} />}
        <UserMenu setIsOpen={setIsOpen} />
        {isMobile && <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
        {isMobile && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
        {/* <CustomModal /> */}
      </section>
    </header>
  );
};

export default Header;
