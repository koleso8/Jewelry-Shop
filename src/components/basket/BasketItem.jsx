import { useDispatch } from 'react-redux';
import { deleteFromBasket } from '../../redux/basket/slice';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const BasketItem = ({ item }) => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);

  return (
    <li className=" w-full bg-white rounded-lg flex h-20 justify-between items-center font-bold">
      <div className="justify-between p-1 w-[60%]">
        <h3 className="first-letter:capitalize font-bold text-lg">
          {item.title}
        </h3>
        <span className="flex gap-4 items-center">
          <p className="p-2 underline text-center rounded-3xl ">
            {item.price} грн
          </p>
        </span>
      </div>
      <img className="h-full rounded-lg" src={item.img} alt={item.alt} />
      <button
        className="p-1 rounded-l-3xl h-10 flex items-center justify-center"
        onClick={() => dispatch(deleteFromBasket(item))}
      >
        <IoMdClose size="26px" />
      </button>
    </li>
  );
};

export default BasketItem;
