import { useState } from 'react';
import BurgerMenu from './BurgerMenu';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <nav className="flex items-center">
        <NavLink className="p-[15px] flex items-center " to="/favorites">
          Favorites
        </NavLink>
        <NavLink className="p-[15px] flex items-center " to="/basket">
          Basket
        </NavLink>
        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </div>
  );
};

export default UserMenu;
