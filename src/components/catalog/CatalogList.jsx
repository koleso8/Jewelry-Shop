import { catalogItems } from '../../test/catalogItems';
import CatalogItem from './CatalogItem';

const CatalogList = () => {
  const items = catalogItems;

  return (
    <ul className="flex flex-wrap gap-3 items-center justify-center">
      {items.map(item => (
        <CatalogItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default CatalogList;
