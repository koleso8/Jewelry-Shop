import { useDispatch } from 'react-redux';
import {
  deleteFromBasket,
  minusCount,
  plusCount,
} from '../../redux/basket/slice';
import { IoMdClose } from 'react-icons/io';

const BasketItem = ({ item }) => {
  const dispatch = useDispatch();

  const price = item.price * item.count;

  return (
    <li className=" w-full bg-white rounded-lg flex h-20 justify-between items-start font-bold md:h-28 ">
      <img
        className="h-full rounded-lg lg:w-[230px]"
        src={item.img}
        alt={item.alt}
      />
      <div className="flex flex-col justify-between pr-8 w-[60%] h-full lg:flex-row lg:items-center lg:w-[80%] ">
        <h3 className="first-letter:capitalize font-bold text-lg underline md:text-2xl lg:text-3xl ">
          {item.title}
        </h3>
        <div className="flex justify-between lg:w-[40%]">
          <p className="text-center rounded-3xl md:text-2xl lg:text-3xl">
            {price} грн.
          </p>

          <span className="flex gap-2 md:text-2xl lg:text-3xl">
            {item.count > 1 && (
              <button
                className="px-2 border rounded-lg bg-slate-100"
                onClick={() => dispatch(minusCount(item.id))}
              >
                -
              </button>
            )}
            {item.count}
            <button
              className="px-2 border rounded-lg bg-slate-100"
              onClick={() => dispatch(plusCount(item.id))}
            >
              +
            </button>
          </span>
        </div>
      </div>
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
