import React, { useContext, useEffect, useState } from 'react';
import './ProductCard.scss';
import { AiOutlineDelete, AiOutlineHeart } from 'react-icons/ai';
import { CartContext } from '../Contexts';

export default function ProductCard({ product }) {
  let { items } = useContext(CartContext);

  const [count, setCount] = useState(product.count);
  product.count = count;

  const [totalPrice, setTotalPrice] = useState(count * product.price);

  const deleteCard = () => setCount(0);

  useEffect(() => {
    setTotalPrice(count * product.price);
  }, [count, product.price]);

  return count === 0 ? null : (
    <article className="ProductCard">
      <div className="img_box">
        <img src={product.url} alt={product.name} />
        <button className="heart">
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
            {product.id}
          </span>
          <span className="size">{product.size}</span>
        </div>
        <div className="count_box">
          <button
            onClick={() => {
              setCount(product.count--);
            }}
          >
            -
          </button>
          <div className="count">{product.count}</div>
          <button onClick={() => setCount(product.count + 1)}>+</button>
        </div>
      </div>
    </article>
  );
}
