import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';
import ShopCart from './pages/ShopCart/ShopCart';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/List" element={<List />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/ShopCart" element={<ShopCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
