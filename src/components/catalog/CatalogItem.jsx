import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorite/selectors';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { addToFavorite, deleteFavorite } from '../../redux/favorite/slice';
import { selectBacketItems } from '../../redux/basket/selectors';
import ButtonAddOrDelete from '../basket/ButtonAddOrDelete';
import MyLoader from './MyLoader';

const CatalogItem = ({ item }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectFavorites).find(
    card => card.id === item.id
  );
  const onBasket = useSelector(selectBacketItems).find(
    card => card.id === item.id
  );

  return (
    <li className="flex flex-col p-3 rounded-2xl bg-white w-full relative  md:w-52 md:h-80">
      {(
        <img
          className="w-full h-52 overflow-hidden object-cover  rounded-xl"
          src={item.img}
          alt={item.alt}
        />
      ) || <MyLoader />}
      <button className="absolute top-4 right-4">
        {!isFavorite ? (
          <GoHeart
            className="cursor-pointer"
            color="white"
            size="24px"
            onClick={() => dispatch(addToFavorite(item))}
          />
        ) : (
          <GoHeartFill
            className="cursor-pointer"
            color="#3470ff"
            size="24px"
            onClick={() => dispatch(deleteFavorite(item))}
          />
        )}
      </button>

      <h3 className="text-base font-bold capitalize">{item.title}</h3>
      <p className="text-sm md:hidden">{item.comment}</p>
      <p className="text-xs text-gray-600">Ширина: {item.width}</p>
      <p className="text-xs text-gray-600 mb-3">Довжина: {item.lengths}</p>
      <ButtonAddOrDelete item={item} onBasket={onBasket} />
    </li>
  );
};

export default CatalogItem;
