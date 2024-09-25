import Header from '../components/Header';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between items-center w-screen bg-slate-100">
      <Toaster position="top-center" />
      <Header />
      <main className="pt-16 min-h-screen px-1  mb-3 w-full max-w-[400px] md:max-w-[768px] lg:max-w-[1024px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
