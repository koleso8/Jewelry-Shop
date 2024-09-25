import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorite/selectors';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { addToFavorite, deleteFavorite } from '../../redux/favorite/slice';

const CatalogItem = ({ item }) => {
  const dispath = useDispatch();
  const isFavorite = useSelector(selectFavorites).find(
    card => card.id === item.id
  );

  return (
    <li className="flex flex-col p-3 rounded-2xl bg-white w-full md:w-52 relative">
      <img
        className="w-full h-52 overflow-hidden object-cover  rounded-xl"
        src={item.img}
        alt={item.alt}
      />
      <span className="absolute top-4 right-4">
        {!isFavorite ? (
          <GoHeart
            className="cursor-pointer"
            color="white"
            size="24px"
            onClick={() => dispath(addToFavorite(item))}
          />
        ) : (
          <GoHeartFill
            className="cursor-pointer"
            color="#3470ff"
            size="24px"
            onClick={() => dispath(deleteFavorite(item))}
          />
        )}
      </span>

      <h3 className="text-base font-bold capitalize">{item.title}</h3>
      <p className="text-sm">{item.comment}</p>
      <p className="text-xs text-gray-600">Ширина: {item.width}</p>
      <p className="text-xs text-gray-600 mb-3">Довжина: {item.lengths}</p>
      <button className="bg-[#3470ff] p-3 rounded-3xl text-white font-bold flex items-center justify-center">
        {item.price}
      </button>
    </li>
  );
};

export default CatalogItem;
