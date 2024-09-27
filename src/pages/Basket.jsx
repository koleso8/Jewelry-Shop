import { useDispatch, useSelector } from 'react-redux';
import { selectAllPrice, selectBacketItems } from '../redux/basket/selectors';
import BasketList from '../components/basket/BasketList';
import WithoutBasketItems from '../components/basket/WithoutBasketItems';
import { scrollToTop } from '../helpers/scrollToTop';
import { useEffect } from 'react';
import { setAllPrice } from '../redux/basket/slice';

const Basket = () => {
  const dispatch = useDispatch();
  const basketItems = useSelector(selectBacketItems);
  const allPrice = useSelector(selectAllPrice);

  useEffect(() => {
    scrollToTop();
    dispatch(setAllPrice());
  });

  return (
    <div className="flex flex-col gap-4 w-full md:text-2xl md:gap-8 lg:text-3xl">
      {basketItems.length ? <BasketList /> : <WithoutBasketItems />}
      {!!basketItems.length && (
        <div className=" bg-white rounded-3xl h-full flex items-center justify-between  text-black pl-4 font-extrabold ">
          <p className=" w-[36%] md:w-[50%] ">Загальна вартість :</p>
          <p className="">{allPrice} грн.</p>
          <button
            className="bg-blue-700 text-white  h-12 rounded-3xl px-5  "
            onClick={() => dispatch()}
          >
            ОФОРМИТИ
          </button>
        </div>
      )}
    </div>
  );
};
export default Basket;
