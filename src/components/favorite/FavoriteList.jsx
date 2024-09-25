import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorite/selectors';
import CatalogItem from '../catalog/CatalogItem';

const FavoriteList = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <ul className="flex flex-wrap gap-3">
      {favorites.map(item => (
        <CatalogItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default FavoriteList;
