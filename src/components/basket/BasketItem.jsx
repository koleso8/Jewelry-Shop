import { useDispatch } from 'react-redux';
import { deleteFromBasket } from '../../redux/basket/slice';
import { TbBasketOff } from 'react-icons/tb';

const BasketItem = ({ item }) => {
  const dispatch = useDispatch();
  console.log(item);

  return (
    <li className=" w-full bg-white rounded-lg flex h-20 justify-between font-bold">
      <span className="justify-between p-2">
        <h3 className="first-letter:capitalize font-bold text-lg">
          {item.title}
        </h3>
        <p className="p-2 bg-[#3470ff] text-white w-24 text-center rounded-3xl ">
          {item.price} грн
        </p>
      </span>
      <button
        className="bg-[#3470ff] px-2  rounded-l-3xl h-full text-white  flex items-center justify-center"
        onClick={() => dispatch(deleteFromBasket(item))}
      >
        <TbBasketOff size="50px" />
      </button>
    </li>
  );
};

export default BasketItem;
