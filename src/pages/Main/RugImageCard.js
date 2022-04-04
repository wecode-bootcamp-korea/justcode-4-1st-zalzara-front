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
  function handleClick() {
    navigate('./detail');
  } // 클릭하면 detail페이지로 이동하기

  // const [fontColor, setFontColor] = useState('white');
  // 호버 했을 때 isHovering이 true가 되는 함수
  // const mouseOnCart = () => {
  //   setIsColoring({ background: 'black', fontColor: 'white' });
  // };
  // const mouseOutCart = () => {
  //   setIsColoring({ background: 'grey', fontColor: 'black' });
  // };
  // // 마우스를 뗐을 때 isHovering이 false가 되는 함수

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
              onClick={handleClick}
            />
          </div>
          {/* {isHovering ? ( */}
          <div
            className={style.pop__cart}
            style={{ opacity: isHovering ? 1 : 0 }}
            // style={{
            //   backgroundColor: isColoring.background,
            //   color: isColoring.fontColor,
            // }}
            // onMouseOver={mouseOnCart}
            // onMouseOut={mouseOutCart}
          >
            <span className={style.get__in__cart}>장바구니에 담기</span>
          </div>
          {/* ) : null} */}
          <div className={style.rug__info}>
            <h2 className={style.rug__name} onClick={handleClick}>
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
