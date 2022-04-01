import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import './styles/reset.scss';
import './styles/common.scss';

import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
