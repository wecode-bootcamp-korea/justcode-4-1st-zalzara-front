import React, { useContext, useEffect, useState } from 'react';
import './ProductCard.scss';
import { AiOutlineDelete, AiOutlineHeart } from 'react-icons/ai';
import { CartContext } from '../Contexts';

export default function ProductCard({ product }) {
  const { items, setItems } = useContext(CartContext);

  let [count, setCount] = useState(product.count);
  product.count = count;

  const [totalPrice, setTotalPrice] = useState(count * product.price);

  const [later, setLater] = useState(product.later);
  product.later = later;

  const deleteCard = () => setCount(0);

  useEffect(() => {
    setTotalPrice(count * product.price);
    setItems([...items]);
  }, [count, later]);

  return count === 0 ? null : (
    <article className="ProductCard">
      <div className="img_box">
        <img src={product.url} alt={product.name} />
        <button className="heart" onClick={() => setLater(prev => !prev)}>
          <AiOutlineHeart />
        </button>
        <button className="delete" onClick={() => deleteCard()}>
          <AiOutlineDelete />
        </button>
      </div>
      <div className="text_box">
        <div className="product_detail">
          <span className="name">{product.name}</span>
          <span className="price">{totalPrice}&nbsp;원</span>
          <span className="id">
            제품 번호&nbsp;
            {product.pid}
          </span>
          <span className="size">{product.size}</span>
        </div>
        <div className="count_box">
          <button
            onClick={() => {
              // eslint-disable-next-line no-const-assign
              setCount(count--);
            }}
          >
            -
          </button>
          <div className="count">{count}</div>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
    </article>
  );
}
