import React from 'react';
import './Detail.scss';
import { useEffect, useState } from 'react';
import Modal from './Modal.js';
import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import { useParams } from 'react-router-dom';

function Detail() {
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
  // const [blockColor, setBlockColor] = useState('white');
  // const [fontColor, setFontColor] = useState('black');
  useEffect(() => {
    fetch('/data/rugList.json')
      .then(res => res.json())
      .then(data => {
        setRugList(data);
      });
  }, []);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [likedProduct, setLikedProduct] = useState(0);

  const params = useParams();
  const urlId = params.id;
  console.log('a', urlId);

  console.log('images: ', rugList.rugImage);
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

  // 블럭 색상 변경 & 폰트 색상 변경 -- 장바구니 담기 마우스 오버/아웃
  // const handleBlockColor = e => {
  //   blockColor === 'white' ? setBlockColor('black') : setBlockColor('white');
  // };
  // const handleFontColor = e => {
  //   fontColor === 'black' ? setFontColor('white') : setFontColor('black');
  // };

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

  // [추천상품로직 구현 필요-백엔드] RecommendItemCard 컴포넌트
  function RecommendItemCard() {
    return (
      <div className="recommend-body">
        <div className="image-box">
          {/* <img alt="추천상품" src={productImg} /> */}
        </div>
        <div className="description-box">
          {/* <span>{productName}</span> */}
          {/* <span>{productPrice}</span> */}
        </div>
      </div>
    );
  }

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
            <img
              alt="이미지 섹션"
              src={productImg}
              // onClick={openModal}
            />
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

                {/* 마우스 오버시 색상 변경 */}
                <div
                  className="add-cart"
                  //장바구니 버튼 클릭시 카트에 id 보내기
                  onClick={addCart}
                >
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
                    <RecommendItemCard />
                    <RecommendItemCard />
                    <RecommendItemCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <Modal
          open={modalOpen}
          close={() => setModalOpen(false)}
          header="Modal heading"
        >
          <img alt="확대된 이미지" src={productImg} />
        </Modal>
      </div>

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
