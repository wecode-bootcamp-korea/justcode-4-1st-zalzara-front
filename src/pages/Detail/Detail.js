import React from 'react';
import Footer from '../../components/Footer';
import './Detail.scss';

export default function Detail() {
  return (
    <div class="detail">
      {/* <Header/> 서연님 만드는중 */}
      <main class="main">
        {/* <section class="image-block"></section>
        <section class="product-info-block"></section> */}
      </main>
      <footer>
        <div class="info">
          <span>
            <b class="bold">제조업체:</b>
            Zalzara Home S.A. |
          </span>
          <span>
            <b class="bold">수입업체:</b>
            Zalzara Home Korea Ltd. |
          </span>
          <span>
            <b class="bold">제조국:</b>
            한국 |
          </span>
          <span>
            <b class="bold">제조일:</b>본 제품은 캠페인 출시 6개월 전에
            제조되었습니다. 보다 정확한 제조일을 확인하시려면 010-3158-3047에
            연락하십시오. |
          </span>
          <span>
            <b class="bold">품질 보증 기준:</b>
            소비자는 저희 제품의 결함으로 인한 피해에 대하여 약관 및 조건에
            의거하여 보상받을 수 있습니다.
          </span>
        </div>

        {/* <Footer /> 공통컴포넌트 */}
        <Footer />
      </footer>
    </div>
  );
}
