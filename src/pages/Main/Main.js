import style from './Main.module.scss';
// import './RugImageCard';
import React from 'react';
import Slider from '../../components/Slide/Slider';
// import { useNavigate } from 'react-router-dom';

function Main() {
  return (
    <div className={style.Main}>
      {/* <img alt="main" src="../images/mainImage.jpg" /> */}
      <Slider />
    </div>
  );
}

export default Main;
