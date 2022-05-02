import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RugImageCard from '../List/RugImageCard';
import './List.scss';
import Loading from '../Loading/Loading';

export default function List() {
  const { category } = useParams();

  const [loading, setLoading] = useState(true);

  const [rugList, setRugList] = useState([{}]);

  useEffect(() => {
    fetch('http://3.36.72.107:8000/categories/러그', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(result => {
        setRugList(result.products);
        setLoading(false);
      });
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {loading ? (
        <Loading />
      ) : (
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
              {rugList.map(rug => (
                <RugImageCard key={rug.id} rug={rug} />
              ))}
            </ul>
          ) : (
            <div className="waitingPage">{category}(은)는 준비 중입니다.</div>
          )}
        </div>
      )}
    </>
  );
}
