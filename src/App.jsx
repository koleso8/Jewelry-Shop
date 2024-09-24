import { Route, Routes } from 'react-router-dom';

import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import Favorites from './pages/Favorites';
import Basket from './pages/Basket';
import AboutMe from './pages/AboutMe';
import Catalog from './pages/Catalog';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </Layout>
  );
};

export default App;
