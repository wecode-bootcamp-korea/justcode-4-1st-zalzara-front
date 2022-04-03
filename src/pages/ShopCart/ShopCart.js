import React, { useEffect, useState } from 'react';
import BasketCard from './components/BasketCard';
import ShopLaterCard from './components/ShopLater';
import { CartContext } from './Contexts';
import './ShopCart.scss';

export default function ShopCart() {
  const [items, setItems] = useState([]);
  const [card, setCard] = useState(<BasketCard />);
  const [line, setLine] = useState('basket');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setItems([
      {
        id: 2,
        url: 'https://image.shutterstock.com/z/stock-photo-scandinavian-wool-dot-carpet-rug-with-cotton-base-and-wool-dots-on-white-background-geometric-1749541253.jpg',
        price: 412414,
        name: '스프라이트 머시기',
        pid: `2132/1323/123`,
        size: '더블/퀸 (230 x 250)',
        later: 1,
        count: 1,
      },
      {
        id: 2,
        url: 'https://image.shutterstock.com/z/stock-photo-scandinavian-wool-dot-carpet-rug-with-cotton-base-and-wool-dots-on-white-background-geometric-1749541253.jpg',
        price: 123231,
        name: '콜라',
        pid: `2132/1323/123`,
        size: '더블/퀸 (230 x 250)',
        later: 0,
        count: 1,
      },
    ]);
  }, []);

  const basketCount = items => {
    let count = 0;
    // eslint-disable-next-line array-callback-return
    items.map(i => {
      if (i.later === 0) {
        count += i.count;
      }
    });
    return count;
  };

  const changeBasket = event => {
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
    <CartContext.Provider value={{ items, setItems }}>
      <div className="ShopCart">
        <nav className="nav_bar">
          <div
            className={line === 'basket' ? 'basket' : 'basket_out'}
            onClick={changeBasket}
          >
            장바구니 <span>({basketCount(items)})</span>
          </div>{' '}
          <div
            className={line !== 'basket' ? 'shop_later' : 'shop_later_out'}
            onClick={changeBasket}
          >
            나중에 쇼핑하기 <span>(0)</span>
          </div>
        </nav>
        {card}
      </div>
    </CartContext.Provider>
  );
}
