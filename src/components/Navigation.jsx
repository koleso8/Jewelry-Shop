import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="flex justify-around items-center font-bold text-black ">
      <NavLink className="p-[15px]" to="/">
        Home
      </NavLink>
      <NavLink className="p-[15px]" to="/catalog">
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
