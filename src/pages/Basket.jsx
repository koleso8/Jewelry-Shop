import { useSelector } from 'react-redux';
import { selectBacketItems } from '../redux/basket/selectors';
import BasketList from '../components/basket/BasketList';
import WithoutBasketItems from '../components/basket/WithoutBasketItems';
import { scrollToTop } from '../helpers/scrollToTop';

const Basket = () => {
  scrollToTop();
  const basketItems = useSelector(selectBacketItems);
  return (
    <div>{basketItems.length ? <BasketList /> : <WithoutBasketItems />}</div>
  );
};
export default Basket;
