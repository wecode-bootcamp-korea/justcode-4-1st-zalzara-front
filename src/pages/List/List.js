import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RugImageCard from '../List/RugImageCard';
import './List.scss';

export default function List() {
  const { category } = useParams();

  const [rugList, setRugList] = useState({
    rugImage: [],
  });

  useEffect(() => {
    fetch('/data/rugList.json')
      .then(res => res.json())
      .then(data => {
        setRugList(data);
      });
  }, []);

  return (
    <div className="List">
      <section>
        <div className="actionBar">
          <p className="categoryBar">
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
      {category === '러그' ? (
        <ul className="rug__list">
          {rugList.rugImage.map(rug => (
            <RugImageCard key={rug.id} rug={rug} />
          ))}
        </ul>
      ) : (
        <div>{category}는 준비 중입니다</div>
      )}
    </div>
  );
}
