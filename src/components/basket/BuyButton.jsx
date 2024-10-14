import { useDispatch, useSelector } from 'react-redux';
import { selectBacketItems } from '../../redux/basket/selectors';
import { addToCurrentB } from '../../redux/basket/slice';

const BuyButton = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectBacketItems);

  return (
    <button
      className="bg-blue-700 text-white  h-12 rounded-3xl px-5  "
      onClick={() => dispatch(addToCurrentB(items))}
    >
      ОФОРМИТИ
    </button>
  );
};

export default BuyButton;
