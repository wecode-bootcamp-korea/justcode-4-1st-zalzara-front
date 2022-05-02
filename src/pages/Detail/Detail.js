import React from 'react';
import './Detail.scss';
import { useEffect, useState } from 'react';
import Modal from './Modal.js';
import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import RecommendItemCard from './RecommendItemCard';
import Loading from '../Loading/Loading';

function Detail() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [carouselCount, setCarouselCount] = useState(0);
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

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

  useEffect(() => {
    fetch(`http://3.36.72.107:8000/categories/러그/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        setProductDetail(res.productDetail[0]);
        setLoading(false);
      });
  }, [id]);

  const addCart = () => {
    fetch('http://3.36.72.107:8000/shop-cart/add-cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_id: id,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === {}) {
          alert('성공!!!!');
        }
      });
  };

  //좋아요 클릭시 좋아요 표시
  const LikeHandler = () => {
    isLike === false ? setIsLike(true) : setIsLike(false);
  };

  //prev, next 버튼 클릭시 캐로셀 동작
  let carouselStyle = { marginLeft: `${-218 * carouselCount}px` };

  const CarouselHandler = i => {
    setCarouselCount(prev => prev + i);
  };

  //가격 정규표현식
  const slicePrice = p => {
    return p.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <section className="main">
            <div className="content-container">
              {/* 이미지 모달 트리거 */}
              <div
                className="image-section"
                onClick={() => setModalOpen(true)}
                id="img"
              >
                <img alt="이미지 섹션" src={productDetail.imageUrl} />
              </div>

              {/* 컨텐츠 섹션 */}
              <div className="content-section">
                <div className="sticky">
                  <div className="header-box">
                    <h1 className="product-name">{productDetail.name}</h1>
                    <span className="product-price">
                      {`${slicePrice(productDetail.price)} 원`}
                    </span>
                    <span className="product-number">
                      제품번호 {productDetail.product_number}
                    </span>
                    <span className="product-description">
                      {productDetail.description}
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
                          <span>{productDetail.size}</span>
                          <div className="icon" onClick={LikeHandler}>
                            {isLike ? <IoHeart /> : <IoHeartOutline />}
                          </div>
                        </div>
                        <div className="price">
                          <span>{`${slicePrice(productDetail.price)} 원`}</span>
                        </div>
                      </div>
                    </div>

                    {/* 장바구니 버튼 */}
                    <div className="add-cart" onClick={addCart}>
                      <span className="add-cart-text">
                        장바구니 담기 ({`${slicePrice(productDetail.price)} 원`}
                        )
                      </span>
                    </div>
                    <div className="recommend-item-box">
                      <div className="recommend-header">
                        <span>추천 상품</span>
                        <div className="button-box">
                          <button
                            className={
                              carouselCount === 0
                                ? 'button-left disabled'
                                : 'button-left'
                            }
                            onClick={() => CarouselHandler(-1)}
                            disabled={carouselCount === 0 ? true : false}
                          >
                            &#60;
                          </button>
                          <button
                            className={
                              carouselCount === 4
                                ? 'button-right disabled'
                                : 'button-right'
                            }
                            onClick={() => CarouselHandler(1)}
                            disabled={carouselCount === 4 ? true : false}
                          >
                            &#62;
                          </button>
                        </div>
                      </div>
                      <div className="recommend-card-box">
                        <div
                          className="recommend-card-moving"
                          style={carouselStyle}
                        >
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
            </div>
          </section>

          {/* 모달 */}
          <div>
            <Modal
              open={modalOpen}
              close={() => setModalOpen(false)}
              header="Modal heading"
            >
              <img alt="확대된 이미지" src={productDetail.imageUrl} />
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
