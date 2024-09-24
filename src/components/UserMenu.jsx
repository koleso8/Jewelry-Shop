import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  return (
    <div className="flex">
      <nav className="flex items-center">
        <NavLink className="p-[15px] flex items-center " to="/favorites">
          Favorites
        </NavLink>
        <NavLink className="p-[15px] flex items-center " to="/basket">
          Basket
        </NavLink>
      </nav>
    </div>
  );
};

export default UserMenu;
