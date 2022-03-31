import React, { useEffect, useState } from 'react';
import './BasketCard.scss';
import ProductCard from './ProductCard';

export default function BasketCard() {
  const bascket = 0;
  const [item, set_item] = useState({
    url: 'https://image.shutterstock.com/z/stock-photo-scandinavian-wool-dot-carpet-rug-with-cotton-base-and-wool-dots-on-white-background-geometric-1749541253.jpg',
    price: 412414,
    name: '스프라이트 머시기',
    id: `2132/1323/123`,
    size: '더블/퀸 (230 x 250)',
    later: 0,
    count: 1,
  });
  const [is_none, set_is_none] = useState(true);
  const [total_price, set_total_price] = useState(item.price);
  const [count, set_count] = useState(item.count);
  const [later, set_later] = useState(item.later);

  const count_up_down = count => {
    set_count(count);
  };

  const get_price = price => {
    set_total_price(price);
  };

  const set_delete = later => {
    set_later(later);
  };

  useEffect(() => {
    item.count > 0 ? set_is_none(false) : set_is_none(true);
  }, [item, count]);

  return (
    <div className="BasketCard">
      {is_none ? (
        <div className="none_description">
          고객님의 장바구니가 비어있습니다.
        </div>
      ) : count === 0 && item.later === 1 ? (
        set_is_none(true)
      ) : (
        <>
          <ProductCard
            item={item}
            get_price={get_price}
            count_up_down={count_up_down}
          />

          <button className="clear_basket" onClick={() => count_up_down(0)}>
            장바구니 비우기
          </button>

          <div className="order_box">
            <div className="total_items">{item.count} 제품</div>
            <div className="total_price_with_tax">
              총 제품: 세금 포함 <span>{total_price}원</span>
            </div>
            <div className="total_price">
              합계: <span>{total_price}원*</span>
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
  );
}
