import { NavLink } from 'react-router-dom';

const Navigation = ({ setIsOpen }) => {
  return (
    <nav className="flex flex-col justify-around items-center font-bold text-black gap-7 md:flex-row md:gap-0">
      <NavLink className="p-[15px]" to="/" onClick={() => setIsOpen(false)}>
        Home
      </NavLink>
      <NavLink
        className="p-[15px]"
        to="/catalog"
        onClick={() => setIsOpen(false)}
      >
        Catalog
      </NavLink>
      <NavLink
        className="p-[15px]"
        to="/about"
        onClick={() => setIsOpen(false)}
      >
        About
      </NavLink>
    </nav>
  );
};

export default Navigation;
