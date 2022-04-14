import React, { useEffect, useState } from 'react';
import BasketCard from './components/BasketCard';
import ShopLaterCard from './components/ShopLater';
import { CartContext } from './Contexts';
import './ShopCart.scss';

export default function ShopCart() {
  const [items, setItems] = useState([]);
  const [card, setCard] = useState(<BasketCard />);
  const [line, setLine] = useState('basket');
  const [loading, setLoading] = useState(true);

  /*
  const fetchData = async () => {
    const response = await fetch('http://localhost:8000/shop-cart', {
      method: 'GET',
    });
    const getData = await response.json();

    if (getData) {
      setItems(getData);
      setLoading(false);
    }
  };
*/
  useEffect(() => {
    // fetchData();
    let data = [
      {
        id: 1,
        url: 'https://image.shutterstock.com/z/stock-photo-carpet-bathmat-and-rug-boho-style-ethnic-design-pattern-with-distressed-woven-texture-and-effect-1970556758.jpg',
        price: 319000,
        name: '빈티지 러그',
        pid: `3132/133/123/45`,
        size: '200 x 300',
        count: 1,
        later: false,
      },
      {
        id: 2,
        url: 'https://image.shutterstock.com/z/stock-photo-vintage-rug-carpet-design-grunge-background-frame-carpet-colorful-geometry-knitwear-rug-textile-2023200983.jpg',
        price: 899000,
        name: '플렉트 러그',
        pid: `2132/123/123/12`,
        size: '230 x 250',
        count: 1,
        later: false,
      },
    ];

    setItems(data);
  }, []);
  const basketCount = later => {
    let count = 0;
    // eslint-disable-next-line array-callback-return
    items.map(i => {
      if (i.later === later) {
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
            장바구니 <span>({basketCount(false)})</span>
          </div>
          <div
            className={line !== 'basket' ? 'shop_later' : 'shop_later_out'}
            onClick={changeBasket}
          >
            나중에 쇼핑하기 <span>({basketCount(true)})</span>
          </div>
        </nav>
        {card}
      </div>
    </CartContext.Provider>
  );
}
