import React, { useState } from 'react';
import style from './RugImageCard.module.scss';
import { useNavigate } from 'react-router-dom';

function RugImageCard({ rug }) {
  const [isHovering, setIsHovering] = useState(false);

  const navigate = useNavigate();

  const postProduct = rugId => {
    fetch('http://localhost:8800/categories/:category', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: rugId,
      }),
    });
  };

  return (
    <div
      className={style.RugImageCard}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <li className={style.rug__list}>
        <div className={style.rug__item}>
          <div className={style.img__wrapper}>
            <img
              alt="rug"
              className={style.rug__img}
              src={rug.imageUrl}
              onClick={() => navigate(`./${rug.name}`)}
            />
            <div
              className={style.pop__cart}
              style={{ opacity: isHovering ? 1 : 0 }}
              onClick={() => postProduct(rug.id)}
            >
              <span className={style.get__in__cart}>장바구니에 담기</span>
            </div>
          </div>

          <div className={style.rug__info}>
            <h2
              className={style.rug__name}
              onClick={() => navigate(`./${rug.name}`)}
            >
              {rug.name}
            </h2>
            <p className={style.rug__price}>{rug.price}</p>
          </div>
        </div>
      </li>
    </div>
  );
}

export default RugImageCard;
