import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllPrice,
  selectBacketItems,
  selectCurrentItems,
} from '../../redux/basket/selectors';

const OrderForm = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectCurrentItems).map(
    item => `\n${item.title} - ${item.count}шт.(${item.count * item.price} грн)`
  );
  const allPrice = useSelector(selectAllPrice);
  const res = `прикраси: ${items} \nЗагальна вартість : ${allPrice} грн`;

  return (
    <button
      type="submit"
      className="bg-blue-700 text-white  h-12 rounded-3xl px-5  "
    >
      ЗАМОВИТИ
    </button>
  );
};

export default OrderForm;
