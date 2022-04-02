import React from 'react';
import './Detail.scss';
import { useEffect, useState } from 'react';

function Detail() {
  const [rugList, setRugList] = useState([]);
  const [blockColor, setBlockColor] = useState('white');
  const [fontColor, setFontColor] = useState('black');

  // const productName = rugList.rugImage[0].name;
  // const productPrice = rugList.rugImage[0].price;
  // const productDescription = rugList.rugImage[0].description;
  // const productImg = rugList.rugImage[0].imgUrl;

  useEffect(() => {
    fetch('/data/rugList.json')
      .then(res => res.json())
      .then(data => {
        setRugList(data);
      });
  }, []);

  // [추천상품로직 구현 필요-백엔드] RecommendItemCard 컴포넌트
  function RecommendItemCard() {
    return (
      <div className="recommend-body">
        <div className="image-box">
          {/* <img alt="추천상품" src={productImg} /> */}
          <img alt="추천상품" src="/images/VintageRug.jpeg" />
        </div>
        <div className="description-box">
          <span>플렉트러그</span>
          <span>150,000 원</span>
        </div>
      </div>
    );
  }
  // 블럭 색상 변경 -- 장바구니 담기 마우스 오버/아웃
  const handleBlockColor = e => {
    blockColor === 'white' ? setBlockColor('black') : setBlockColor('white');
  };
  // 폰트 색상 변경 -- 장바구니 담기 마우스 오버/아웃
  const handleFontColor = e => {
    fontColor === 'black' ? setFontColor('white') : setFontColor('black');
  };
  // [기능구현필요] 장바구니 담기 클릭 이벤트
  function addCart() {
    // console.log('장바구니담기');
  }

  return (
    <div>
      <section className="main">
        <div className="content-container">
          {/* 이미지 섹션| Trigger Modal */}
          <div className="image-section" id="img">
            <img
              alt="이미지 섹션"
              // src={productImg}
              src="../images/FetchDetailRug.jpeg"
              onClick={function (event) {
                // console.log('이미지를 클릭함');
              }}
            />
          </div>
          {/* Modal */}
          <div className="modal">
            {/* Close Button */}
            <span className="close">&times;</span>
            {/*  Modal content */}
            <img
              className="modal-content"
              id="img01"
              alt="fetch-lug"
              src="../images/FetchDetailRug.jpeg"
            />
          </div>
          {/* 컨텐츠 섹션 */}
          <div className="content-section">
            <div className="sticky">
              <div className="header-box">
                {/* 목데이터 
                <h1 className="product-name">{productName}</h1>
                <span className="product-price">{productPrice}</span> */}

                <h1 className="product-name">패치 디테일 주트 러그</h1>
                <span className="product-price">699,000 원</span>
                <span className="product-number">제품번호</span>
              </div>
              <div className="content-block">
                {/* 목데이터 
                <span className="description">{productDescription}</span> */}
                <span className="description">
                  주트 패치워크 소재의 내추럴 컬러 러그
                </span>
              </div>
              <div className="action-block">
                <div className="size-header-box">
                  <span>사이즈</span>
                </div>
                <div className="size-detail">
                  <div className="size">
                    {/* 목데이터 */}
                    {/* <span>{rugList.rugImage[0].size}</span> */}
                    <span>160x230cm</span>
                  </div>
                  <div className="price">
                    {/* 목데이터 */}
                    {/* <span>{rugList.rugImage[0].price}</span> */}
                    <span>699,000 원</span>
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
                    style={{
                      color: fontColor,
                      transition: '0.3s',
                    }}
                  >
                    {/* 목데이터 */}
                    {/* <span>장바구니 담기 ({productName})</span> */}
                    <span>장바구니 담기 (699,000 원)</span>
                  </div>
                </div>
                <div className="recommend-item-box">
                  <div className="recommend-header">
                    <span>추천 상품</span>
                    <div className="button-box">
                      <span className="button-left">&#60;</span>
                      <span className="button-right">&#62;</span>
                    </div>
                  </div>
                  <RecommendItemCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Detail;
