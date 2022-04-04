import React from 'react';
import './Detail.scss';
import { useEffect, useState } from 'react';
import Modal from './Modal.js';
import Header from '../../components/Header';
// import { useNavigate } from 'react-router-dom';

function Detail() {
  const [rugList, setRugList] = useState([]);
  const [blockColor, setBlockColor] = useState('white');
  const [fontColor, setFontColor] = useState('black');
  const [modalOpen, setModalOpen] = useState(false);

  // const navigate = useNavigate();

  const data = {
    id: 1,
    name: '패치 디테일 주트 러그',
    imgUrl: '../images/FetchDetailRug.jpeg',
    price: '699,000 원',
    description: '주트 패치워크 소재의 내추럴 컬러 러그',
    size: '160x230cm',
    product_id: 1,
  };

  // 블럭 색상 변경 & 폰트 색상 변경 -- 장바구니 담기 마우스 오버/아웃
  const handleBlockColor = e => {
    blockColor === 'white' ? setBlockColor('black') : setBlockColor('white');
  };
  const handleFontColor = e => {
    fontColor === 'black' ? setFontColor('white') : setFontColor('black');
  };
  // 장바구니 담기 클릭 이벤트
  const addCart = () => {};

  // //[모달] 핸들러
  // const ModalHandler = () => {
  //   setModalOpen(prev => !prev);
  // };

  //[모달] 핸들러
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  //목데이터 가져오기
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

  return (
    <div>
      <Header />
      <section className="main">
        <div className="content-container">
          {/* 이미지 모달 트리거 */}
          <div className="image-section" onClick={openModal} id="img">
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

      <div>
        <Modal open={modalOpen} close={closeModal} header="Modal heading">
          <img alt="확대된 이미지" src="../images/FetchDetailRug.jpeg" />
        </Modal>
      </div>

      <section class="detail-footer">
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
