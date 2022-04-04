import style from './Main.module.scss';
// import './RugImageCard';
import React, { useEffect, useState } from 'react';
import RugImageCard from './RugImageCard';
// import { useNavigate } from 'react-router-dom';

function Main() {
  const [rugList, setRugList] = useState({
    rugImage: [],
  });

  // const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/rugList.json')
      .then(res => res.json())
      .then(data => {
        setRugList(data);
      });
  }, []);

  return (
    <div className={style.Main}>
      <img alt="main" src="../images/mainImage.jpg" />
      <section>
        <div className="actionBar">
          <p className={style.categoryBar}>
            <span>5</span>
            <span>제품</span>
            <span>|</span>
            <span>보기</span>
            <span>2</span>
            <span>4</span>
            <span>|</span>
            <span>+</span>
            <span>필터</span>
          </p>
        </div>
      </section>
      <ul className={style.rug__list}>
        {rugList.rugImage.map(rug => (
          <RugImageCard key={rug.id} rug={rug} />
        ))}
      </ul>
      {/* <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button> */}
    </div>
  );
}

export default Main;
