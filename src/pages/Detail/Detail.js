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
  const [carousel, setCarousel] = useState(0);
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
  if (rugList.rugImage[urlId - 1] != null) {
    productName = rugList.rugImage[urlId - 1].name;
    productImg = rugList.rugImage[urlId - 1].imageUrl;
    productPrice = rugList.rugImage[urlId - 1].price;
    productNumber = rugList.rugImage[urlId - 1].product_number;
    productDescription = rugList.rugImage[urlId - 1].description;
    productSize = rugList.rugImage[urlId - 1].size;
  }

  console.log(productImg);

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
        console.log(result);
        if (result.message === {}) {
          alert('성공!!!!');
        }
      });
  };

  const LikeHandler = () => {
    isLike === false ? setIsLike(true) : setIsLike(false);
  };

  console.log('carousel: ' + carousel);
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
                      <button
                        className="button-left"
                        onClick={() => setCarousel(1)}
                      >
                        &#60;
                      </button>
                      <button
                        className="button-right"
                        onClick={() => (setCarousel += 1)}
                      >
                        &#62;
                      </button>
                    </div>
                  </div>
                  <div className="recommend-card-box">
                    {rugList.rugImage.map(rug => (
                      <RecommendItemCard
                        image={productImg}
                        name={productName}
                        price={productPrice}
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

      {/* footer */}
      <section className="detail-footer">
        <span>
          <b className="bold">제조업체: </b>
          Zara Home S.A.|
        </span>
        <span>
          <b className="bold">수입업체: </b>
          Zara Home Korea Ltd.|
        </span>
        <span>
          <b className="bold">제조국: </b>
          스페인|
        </span>
        <span>
          <b className="bold">제조일: </b>본 제품은 캠페인 출시 6개월 전에
          제조되었습니다. 보다 정확한 제조일을 확인하시려면 080-500-6445에
          연락하십시오.|
        </span>
        <span>
          <b className="bold">품질 보증 기준: </b>
          소비자는 저희 제품의 결함으로 인한 피해에 대하여 약관 및 조건에
          의거하여 보상받을 수 있습니다.
        </span>
      </section>
    </div>
  );
}

export default Detail;
