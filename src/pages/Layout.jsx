import Header from '../components/Header';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';
import Loader from '../components/loader/Loader';
import { useSelector } from 'react-redux';
import { selectLoadingBasket } from '../redux/basket/selectors';

const Layout = ({ children }) => {
  const loadingBasket = useSelector(selectLoadingBasket);
  return (
    <div className="flex flex-col justify-between items-center w-screen bg-slate-100">
      <Toaster position="top-center" />
      <Header />
      <main className="pt-16 min-h-screen px-1  mb-3 w-full  max-w-[375px] md:max-w-[768px] lg:max-w-[1024px] ">
        {children}
      </main>
      {loadingBasket && <Loader />}
      <Footer />
    </div>
  );
};

export default Layout;
