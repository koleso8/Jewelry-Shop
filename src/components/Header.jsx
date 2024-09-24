import { useState } from 'react';
import { useScreenWidth } from '../hooks/useScreenWidth';
import BurgerMenu from './BurgerMenu';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

const Header = () => {
  const { isMobile, isTablet } = useScreenWidth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center w-11/12 border-b-[1px]">
      {isTablet && <Navigation />}
      <UserMenu />
      {isMobile && <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </header>
  );
};

export default Header;
