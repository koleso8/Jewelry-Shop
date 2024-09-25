import { TbBasketOff } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const WithoutBasketItems = () => {
  return (
    <div className="flex flex-col items-center">
      <TbBasketOff size="30vw" color="#3470ff" className="mx-auto" />
      <h3 className="text-[50px]  text-center font-bold">Упппсс</h3>
      <p className="text-[20px]  text-center mb-4">{'Ваш кошик порожній'}</p>
      <Link className=" bg-[#3470ff] text-white p-2 rounded-2xl " to="/catalog">
        До каталогу
      </Link>
    </div>
  );
};

export default WithoutBasketItems;
