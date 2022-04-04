import React, { useState, useEffect, useContext } from 'react';
import './ShopLaterCard.scss';
import ProductCard from './ProductCard';
import { CartContext, BasketContext } from '../Contexts';
import { Link } from 'react-router-dom';

export default function ShopLaterCard() {
  const { items, setItems } = useContext(CartContext);
  const [isNone, setIsNone] = useState(true);

  const totalPrice = () => {
    let prices = items
      .filter(i => i.later === true)
      .map(i => i.price * i.count);
    return prices.reduce((a, c) => a + c);
  };

  const totalCounts = () => {
    let counts = items.filter(i => i.later === true).map(i => i.count);
    return counts.reduce((a, c) => a + c);
  };

  const clearBasket = () => {
    setIsNone(true);
    setItems([...items.filter(i => i.later !== true)]);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    items.filter(i => i.later === true).length > 0
      ? setIsNone(false)
      : setIsNone(true);
  }, [items]);

  return (
    <BasketContext.Provider value={{ items, setItems }}>
      <div className="BasketCard">
        {isNone ||
        items.filter(i => i.later === true).map(i => i.count).length === 0 ? (
          <div className="none_description">
            고객님의 나중에 장보기가 비어있습니다.
          </div>
        ) : items.filter(i => i.count === 0).length !== 0 ? (
          setIsNone(true)
        ) : (
          <>
            {items.map(product =>
              product.count > 0 && product.later !== false ? (
                <ProductCard key={product.id} product={product} />
              ) : null
            )}
            <button className="clear_basket" onClick={clearBasket}>
              장바구니 비우기
            </button>
            <div className="order_box">
              <div className="total_items">{totalCounts()} 제품</div>
              <div className="total_price_with_tax">
                총 제품: 세금 포함 <span>{totalPrice()}원</span>
              </div>
              <div className="total_price">
                합계: <span>{totalPrice()}원*</span>
              </div>
              <span className="promotion_alert">
                프로모션 코드가 있으신가요? 나중에 결제 페이지에서 입력하십시오.
              </span>
              <button className="purchase_btn">주문하기</button>
              <div className="free_deliver">무료 매장 배송 가능</div>
            </div>
          </>
        )}
      </div>
    </BasketContext.Provider>
  );
}