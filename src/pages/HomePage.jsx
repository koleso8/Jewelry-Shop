import { useEffect } from 'react';
import { scrollToTop } from '../helpers/scrollToTop';

const HomePage = () => {
  useEffect(() => scrollToTop());

  return <div>Home</div>;
};

export default HomePage;
