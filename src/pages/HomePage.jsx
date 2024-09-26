import { useEffect } from 'react';
import { scrollToTop } from '../helpers/scrollToTop';

const HomePage = () => {
  useEffect(() => scrollToTop());

  return (
    <section className="flex items-center justify-center">HomePage</section>
  );
};

export default HomePage;
