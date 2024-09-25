import Header from '../components/Header';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between items-center w-screen bg-slate-100">
      <Toaster position="top-right" />
      <Header />
      <main className="pt-14 min-h-screen w-11/12 mb-3">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
