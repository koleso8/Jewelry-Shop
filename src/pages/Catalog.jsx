import { useEffect } from 'react';
import CatalogList from '../components/catalog/CatalogList';
import { scrollToTop } from '../helpers/scrollToTop';

const Catalog = () => {
  useEffect(() => scrollToTop());
  return (
    <section>
      <CatalogList />
    </section>
  );
};

export default Catalog;
