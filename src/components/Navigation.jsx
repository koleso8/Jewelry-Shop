import { NavLink } from 'react-router-dom';

const Navigation = ({ setIsOpen }) => {
  return (
    <nav className="flex flex-col justify-around items-center font-bold text-black text-4xl gap-7 md:flex-row md:gap-0 md:text-lg">
      <NavLink className="p-[15px]" to="/" onClick={() => setIsOpen(false)}>
        Головна
      </NavLink>
      <NavLink
        className="p-[15px]"
        to="/catalog"
        onClick={() => setIsOpen(false)}
      >
        Каталог
      </NavLink>
      <NavLink
        className="p-[15px]"
        to="/about"
        onClick={() => setIsOpen(false)}
      >
        Про мене
      </NavLink>
    </nav>
  );
};

export default Navigation;
