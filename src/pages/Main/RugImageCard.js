import React, { useState } from 'react';
import style from './RugImageCard.module.scss';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function RugImageCard({ rug }) {
  const [isHovering, setIsHovering] = useState(false);
  // const [isColoring, setIsColoring] = useState({
  //   background: 'rgba(255, 255, 255, 0.781)',
  //   fontColor: 'black',
  // });

  const navigate = useNavigate();

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
              onClick={() => navigate('/detail/' + rug.id)}
            />
            <div className={style.pop__cart}>
              <span className={style.get__in__cart}>장바구니에 담기</span>
            </div>
          </div>

          <div className={style.rug__info}>
            <h2 className={style.rug__name}>{rug.name}</h2>
            <p className={style.rug__price}>{rug.price}</p>
          </div>
        </div>
      </li>
    </div>
  );
}

export default RugImageCard;
