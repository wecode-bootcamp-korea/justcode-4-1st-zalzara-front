import React from 'react';
import style from './RecommendItemCard.module.scss';

function RecommendItemCard({ image, name, price }) {
  return (
    <div className={style.recommend__body}>
      <div className={style.image__box}>
        <img alt="μΆμ²μν" src={image} />
      </div>
      <div className={style.description__box}>
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </div>
  );
}

export default RecommendItemCard;
