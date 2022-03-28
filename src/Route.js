import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';
import ShopCart from './pages/ShopCart/ShopCart';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/List" element={<List />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/ShopCart" element={<ShopCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
