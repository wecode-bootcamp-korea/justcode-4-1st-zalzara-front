import style from './Main.module.scss';
import React from 'react';
import Slider from '../../components/Slide/Slider';

function Main() {
  return (
    <div className={style.Main}>
      <Slider />
    </div>
  );
}

export default Main;
