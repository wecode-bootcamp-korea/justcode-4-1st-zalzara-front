import React, { useEffect, useState } from 'react';
import BasketCard from './components/BasketCard';
import ShopLaterCard from './components/ShopLater';
import './ShopCart.scss';

export default function ShopCart() {
  const [card, setCard] = useState(<BasketCard />);
  const [line, setLine] = useState('basket');
  const [basket, set_basket] = useState([]);
  let items = [];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    items = [
      {
        url: 'https://image.shutterstock.com/z/stock-photo-scandinavian-wool-dot-carpet-rug-with-cotton-base-and-wool-dots-on-white-background-geometric-1749541253.jpg',
        price: 412414,
        name: '스프라이트 머시기',
        id: `2132/1323/123`,
        size: '더블/퀸 (230 x 250)',
        later: 0,
        count: 1,
      },
      {
        url: 'https://image.shutterstock.com/z/stock-photo-scandinavian-wool-dot-carpet-rug-with-cotton-base-and-wool-dots-on-white-background-geometric-1749541253.jpg',
        price: 412414,
        name: '스프라이트 머시기',
        id: `2132/1323/123`,
        size: '더블/퀸 (230 x 250)',
        later: 0,
        count: 1,
      },
    ];
    let basket_arr = items.map(i => {
      if (i.later === 0) return i;
    });
    set_basket(basket_arr);
  }, []);

  const change_basket = event => {
    event.preventDefault();
    const { className } = event.target;
    if (className === 'basket' || className === 'basket_out') {
      setLine('basket');
      return setCard(<BasketCard />);
    } else {
      setLine('shop-later');
      return setCard(<ShopLaterCard />);
    }
  };

  return (
    <div className="ShopCart">
      <header />
      <nav className="nav_bar">
        <div
          className={line === 'basket' ? 'basket' : 'basket_out'}
          onClick={change_basket}
        >
          장바구니 <span>({})</span>
        </div>{' '}
        <div
          className={line !== 'basket' ? 'shop_later' : 'shop_later_out'}
          onClick={change_basket}
        >
          나중에 쇼핑하기 <span>(0)</span>
        </div>
      </nav>
      {card}
      <footer />
    </div>
  );
}
