import Header from '../components/Header';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between items-center">
      <Toaster position="top-right" />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
