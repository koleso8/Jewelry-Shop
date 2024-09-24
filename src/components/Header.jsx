import { useState } from 'react';
import { useScreenWidth } from '../hooks/useScreenWidth';
import BurgerMenu from './BurgerMenu';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import MobileMenu from './MobileMenu';

const Header = () => {
  const { isMobile, isTablet } = useScreenWidth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-zinc-100 flex justify-center items-center  w-screen border-b-[1px] fixed z-10">
      <section className=" flex  justify-between items-center w-11/12">
        {isTablet && <Navigation />}
        <UserMenu />
        {isMobile && <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
        {isMobile && <MobileMenu isOpen={isOpen} />}
      </section>
    </header>
  );
};

export default Header;
