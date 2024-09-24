import { useSelector } from 'react-redux';

import { selectFavorites } from '../redux/favorite/selectors';

import FavoriteList from '../components/favorite/FavoriteList';
import WithoutFavorites from '../components/favorite/WithoutFavorites';
import { scrollToTop } from '../helpers/scrollToTop';

const Favorites = () => {
  scrollToTop();
  const favorites = useSelector(selectFavorites);
  return (
    <div>{favorites.length ? <FavoriteList /> : <WithoutFavorites />}</div>
  );
};

export default Favorites;
