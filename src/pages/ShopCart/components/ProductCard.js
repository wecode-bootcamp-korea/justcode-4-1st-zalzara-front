import React, { useContext, useEffect, useState } from 'react';
import './ProductCard.scss';
import { CartContext, BasketContext } from '../Contexts';

export default function ProductCard({
  count_up_down,
  item,
  product,
  get_price,
}) {
  const [total_price, set_total_price] = useState(item.price);
  console.log(product);
  get_price(item.count * item.price);

  const delete_card = () => {
    return count_up_down(0);
  };

  useEffect(() => {
    set_total_price(item.count * item.price);
  }, [item.count]);

  return (
    <article className="ProductCard">
      <div className="img_box">
        <img src={item.url} alt={item.name} />
        <button className="heart">❤️</button>
        <button className="delete" onClick={() => delete_card()}>
          ❌
        </button>
      </div>
      <div className="text_box">
        <div className="product_detail">
          <span className="name">{item.name}</span>
          <span className="price">{total_price}&nbsp;원</span>
          <span className="id">
            제품 번호&nbsp;
            {item.id}
          </span>
          <span className="size">{item.size}</span>
        </div>
        <div className="count_box">
          <button
            onClick={() => {
              if (item.count === 1) {
                item.count = 0;
              }
              count_up_down(item.count--);
            }}
          >
            -
          </button>
          <div className="count">{item.count}</div>
          <button onClick={() => count_up_down(item.count++)}>+</button>
        </div>
      </div>
    </article>
  );
}
