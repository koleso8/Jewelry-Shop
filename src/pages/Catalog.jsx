import CatalogList from '../components/catalog/CatalogList';
import { scrollToTop } from '../helpers/scrollToTop';

const Catalog = () => {
  scrollToTop();
  return (
    <section>
      <CatalogList />
    </section>
  );
};

export default Catalog;
