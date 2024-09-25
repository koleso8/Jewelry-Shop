import { useSelector } from 'react-redux';

import { selectFavorites } from '../redux/favorite/selectors';

import FavoriteList from '../components/favorite/FavoriteList';
import WithoutFavorites from '../components/favorite/WithoutFavorites';
import { scrollToTop } from '../helpers/scrollToTop';
import { useEffect } from 'react';

const Favorites = () => {
  useEffect(() => scrollToTop());
  const favorites = useSelector(selectFavorites);
  return (
    <div>{favorites.length ? <FavoriteList /> : <WithoutFavorites />}</div>
  );
};

export default Favorites;
