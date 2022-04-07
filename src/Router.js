import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import ShopCart from './pages/ShopCart/ShopCart';
import CategoryList from './pages/CategoryList/CategoryList';
import Header from './components/Header';
import Footer from './components/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/shop-cart" element={<ShopCart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
