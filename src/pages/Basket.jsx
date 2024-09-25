import { useDispatch, useSelector } from 'react-redux';
import { selectBacketItems } from '../redux/basket/selectors';
import BasketList from '../components/basket/BasketList';
import WithoutBasketItems from '../components/basket/WithoutBasketItems';
import { scrollToTop } from '../helpers/scrollToTop';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaHome } from 'react-icons/fa';
import { useEffect } from 'react';

const Basket = () => {
  useEffect(() => scrollToTop());
  const dispatch = useDispatch();
  const basketItems = useSelector(selectBacketItems);
  return (
    <div className="flex flex-col gap-4">
      {basketItems.length ? <BasketList /> : <WithoutBasketItems />}
      {!!basketItems.length && (
        <button
          className="bg-[#3470ff] px-2  rounded-3xl h-full text-white  flex items-center justify-around"
          onClick={() => dispatch()}
        >
          <TbTruckDelivery size="50px" />
          Оформити замовлення
          <FaHome size="50px" />
        </button>
      )}
    </div>
  );
};
export default Basket;
