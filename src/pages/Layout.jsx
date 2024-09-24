import Header from '../components/Header';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between items-center w-screen ">
      <Toaster position="top-right" />
      <Header />
      <main className="pt-14 h-screen w-11/12">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
