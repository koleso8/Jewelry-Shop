import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="flex flex-col justify-around items-center font-bold text-black md:flex-row ">
      <NavLink className="p-[15px]" to="/">
        Home
      </NavLink>
      <NavLink className="p-[15px]" to="/catalog">
        Catalog
      </NavLink>
      <NavLink className="p-[15px]" to="/about">
        About
      </NavLink>
    </nav>
  );
};

export default Navigation;
