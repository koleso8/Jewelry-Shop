import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessaageToTGThunk } from '../../redux/basket/operation';
import {
  selectAllPrice,
  selectBacketItems,
} from '../../redux/basket/selectors';

const BuyButton = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectBacketItems).map(
    item => `\n${item.title} - ${item.count}шт.(${item.count * item.price} грн)`
  );
  const allPrice = useSelector(selectAllPrice);
  const res = `прикраси: ${items} \nЗагальна вартість : ${allPrice} грн`;
  console.log(res);

  return (
    <button
      className="bg-blue-700 text-white  h-12 rounded-3xl px-5  "
      onClick={() => dispatch(sendMessaageToTGThunk(res))}
    >
      ОФОРМИТИ
    </button>
  );
};

export default BuyButton;
