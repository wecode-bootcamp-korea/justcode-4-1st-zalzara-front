import style from './Main.module.scss';
// import './RugImageCard';
import React from 'react';
// import { useNavigate } from 'react-router-dom';

function Main() {
  return (
    <div className={style.Main}>
      <img alt="main" src="../images/mainImage.jpg" />
    </div>
  );
}

export default Main;
