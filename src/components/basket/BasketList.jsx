import { useSelector } from 'react-redux';
import BasketItem from './BasketItem';
import { selectBacketItems } from '../../redux/basket/selectors';

const BasketList = () => {
  const items = useSelector(selectBacketItems);
  return (
    <ul className="flex flex-col gap-3 w-full">
      {items.map(item => (
        <BasketItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default BasketList;
