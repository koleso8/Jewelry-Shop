import { FaHeartCircleXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const WithoutFavorites = () => {
  return (
    <div className="flex flex-col items-center">
      <FaHeartCircleXmark size="30vw" color="#3470ff" className="mx-auto" />
      <h3 className="text-[50px]  text-center font-bold">Упппсс</h3>
      <p className="text-[20px]  text-center mb-4">
        {'Ви ще не маєте улюблених товарів :('}
      </p>
      <Link className=" bg-[#3470ff] text-white p-2 rounded-2xl " to="/catalog">
        До каталогу
      </Link>
    </div>
  );
};

export default WithoutFavorites;
