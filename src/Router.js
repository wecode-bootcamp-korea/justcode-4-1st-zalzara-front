import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import ShopCart from './pages/ShopCart/ShopCart';
import CategoryList from './pages/CategoryList/CategoryList';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './pages/List/List';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/categories/:category" element={<List />} />
        <Route path="/categories/:category/:id" element={<Detail />} />
        <Route path="/shop-cart" element={<ShopCart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
