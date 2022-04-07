import React from 'react';
import './Detail.scss';
import { useEffect, useState } from 'react';
import Modal from './Modal.js';
import { IoHeartOutline, IoHeart } from 'react-icons/io5';

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
  const [blockColor, setBlockColor] = useState('white');
  const [fontColor, setFontColor] = useState('black');
  const [modalOpen, setModalOpen] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [likedProduct, setLikedProduct] = useState(0);

  let productName = rugList.rugImage[0].name;
  let productImg = rugList.rugImage[0].imageUrl; //슬기님 이미지랑 이미지 사이즈 달라서 화면 꺠짐... 어떤 사진 할지 정해야할듯
  let productPrice = rugList.rugImage[0].price;
  let productNumber = rugList.rugImage[0].product_number;
  let productDescription = rugList.rugImage[0].description;
  let productSize = rugList.rugImage[0].size;

  useEffect(() => {
    fetch('/data/rugList.json')
      .then(res => res.json())
      .then(data => {
        setRugList(data);
      });
  }, []);
  console.log(rugList);

  // 블럭 색상 변경 & 폰트 색상 변경 -- 장바구니 담기 마우스 오버/아웃
  const handleBlockColor = e => {
    blockColor === 'white' ? setBlockColor('black') : setBlockColor('white');
  };
  const handleFontColor = e => {
    fontColor === 'black' ? setFontColor('white') : setFontColor('black');
  };
  // 장바구니 클릭시 상품 id 저장
  const addCart = () => {
    // setLikedProduct(data[0].id);
    console.log(`${likedProduct}을 장바구니에 담았습니다.`);
  };

  // 좋아요버튼
  const LikeHandler = () => {
    setIsLike = !isLike;
    console.log('좋아요:' + isLike);
  };
  // [추천상품로직 구현 필요-백엔드] RecommendItemCard 컴포넌트
  function RecommendItemCard() {
    return (
      <div className="recommend-body">
        <div className="image-box">
          <img alt="추천상품" src={productImg} />
          {/* <img alt="추천상품" src="/images/VintageRug.jpeg" /> */}
        </div>
        <div className="description-box">
          <span>{productName}</span>
          <span>{productPrice}</span>
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
              // src={productImg}
              src="../images/FetchDetailRug.jpeg"
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
              </div>
              <div className="content-block">
                <span className="description">{productDescription}</span>
              </div>

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
                  onClick={addCart}
                  onMouseOver={handleBlockColor}
                  onMouseOut={handleBlockColor}
                  style={{
                    backgroundColor: blockColor,
                    transition: '0.3s',
                  }}
                >
                  <div
                    className="add-cart-text"
                    onMouseOver={handleFontColor}
                    onMouseOut={handleFontColor}
                    onClick={likedProduct}
                    style={{
                      color: fontColor,
                      transition: '0.3s',
                    }}
                  >
                    <span>장바구니 담기 ({productPrice})</span>
                  </div>
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
          <img alt="확대된 이미지" src="../images/FetchDetailRug.jpeg" />
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
