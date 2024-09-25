import { addToBasket, deleteFromBasket } from '../../redux/basket/slice';
import { useDispatch } from 'react-redux';

const ButtonAddOrDelete = ({ item, onBasket }) => {
  const dispatch = useDispatch();
  return (
    <>
      {' '}
      {onBasket ? (
        <button
          className="bg-[#3470ff] p-3 rounded-3xl text-white font-bold flex items-center justify-center"
          onClick={() => dispatch(deleteFromBasket(item))}
        >
          Видалити з кошика
        </button>
      ) : (
        <button
          className="bg-[#3470ff] p-3 rounded-3xl text-white font-bold flex items-center justify-center"
          onClick={() => dispatch(addToBasket(item))}
        >
          {item.price} грн.
        </button>
      )}
    </>
  );
};

export default ButtonAddOrDelete;
