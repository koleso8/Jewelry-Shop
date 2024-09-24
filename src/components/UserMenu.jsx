import { FaRegHeart } from 'react-icons/fa';
import { LuShoppingBasket } from 'react-icons/lu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectFavorites } from '../redux/favorite/selectors';
import { selectBacketItems } from '../redux/basket/selectors';

const UserMenu = ({ setIsOpen }) => {
  const favorites = useSelector(selectFavorites);
  const basketItems = useSelector(selectBacketItems);

  return (
    <div className="flex">
      <nav className="flex items-center">
        <NavLink
          className="p-[15px] flex items-center "
          to="/favorites"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex gap-2">
            <FaRegHeart size="24px" />
            {favorites.length && <p>{favorites.length}</p>}
          </span>
        </NavLink>
        <NavLink
          className="p-[15px] flex items-center "
          to="/basket"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex gap-2">
            <LuShoppingBasket size="24px" />
            {basketItems.length && <p>{basketItems.length}</p>}
          </span>
        </NavLink>
      </nav>
    </div>
  );
};

export default UserMenu;
