import React from 'react';
import './Detail.scss';
import { useEffect, useState } from 'react';
import Modal from './Modal.js';
import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import RecommendItemCard from './RecommendItemCard';

function Detail() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [rugList, setRugList] = useState({
    rugImage: [
      {
        id: 0,
        name: '',
        imageUrl: '',
        price: '',
        product_number: 0,
        description: '',
      },
    ],
  });

  useEffect(() => {
    fetch('/data/rugList.json')
      .then(res => res.json())
      .then(data => {
        setRugList(data);
      });
  }, []);

  const params = useParams();
  const urlId = params.id;

  let productName;
  let productImg;
  let productPrice;
  let productNumber;
  let productDescription;
  let productSize;
  let productKey;
  if (rugList.rugImage[urlId - 1] != null) {
    productName = rugList.rugImage[urlId - 1].name;
    productImg = rugList.rugImage[urlId - 1].imageUrl;
    productPrice = rugList.rugImage[urlId - 1].price;
    productNumber = rugList.rugImage[urlId - 1].product_number;
    productDescription = rugList.rugImage[urlId - 1].description;
    productSize = rugList.rugImage[urlId - 1].size;
    productKey = rugList.rugImage[urlId - 1].id;
  }

  // 장바구니 클릭시 상품 id 보내기
  const addCart = () => {
    fetch('http://localhost:8000/shop-cart/add-cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_id: urlId,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === {}) {
          alert('성공!!!!');
        }
      });
  };

  const LikeHandler = () => {
    isLike === false ? setIsLike(true) : setIsLike(false);
  };

  return (
    <div>
      <section className="main">
        <div className="content-container">
          {/* 이미지 모달 트리거 */}
          <div
            className="image-section"
            onClick={() => setModalOpen(true)}
            id="img"
          >
            <img alt="이미지 섹션" src={productImg} />
          </div>

          {/* 컨텐츠 섹션 */}
          <div className="content-section">
            <div className="sticky">
              <div className="header-box">
                <h1 className="product-name">{productName}</h1>
                <span className="product-price">{productPrice}</span>
                <span className="product-number">제품번호 {productNumber}</span>
                <span className="product-description">
                  {productDescription}
                </span>
              </div>

              {/* 사이즈 섹션 */}
              <div className="action-block">
                <div className="slide">
                  <div className="size-header">
                    <span>사이즈</span>
                  </div>
                  <div className="size-detail">
                    <div className="size">
                      <span>{productSize}</span>
                      <div className="icon" onClick={LikeHandler}>
                        {isLike ? <IoHeart /> : <IoHeartOutline />}
                      </div>
                    </div>
                    <div className="price">
                      <span>{productPrice}</span>
                    </div>
                  </div>
                </div>

                {/* 장바구니 버튼 */}
                <div className="add-cart" onClick={addCart}>
                  <span className="add-cart-text">
                    장바구니 담기 ({productPrice})
                  </span>
                </div>
                <div className="recommend-item-box">
                  <div className="recommend-header">
                    <span>추천 상품</span>
                    <div className="button-box">
                      <button className="button-left">&#60;</button>
                      <button className="button-right">&#62;</button>
                    </div>
                  </div>
                  <div className="recommend-card-box">
                    {rugList.rugImage.map(rug => (
                      <RecommendItemCard
                        key={rug.id}
                        image={rug.imageUrl}
                        name={rug.name}
                        price={rug.price}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 모달 */}
      <div>
        <Modal
          open={modalOpen}
          close={() => setModalOpen(false)}
          header="Modal heading"
        >
          <img alt="확대된 이미지" src={productImg} />
        </Modal>
      </div>
    </div>
  );
}

export default Detail;
