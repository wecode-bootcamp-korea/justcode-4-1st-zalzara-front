import React from 'react';
import './Footer.scss';

import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaTwitter,
  FaSpotify,
  FaApple,
} from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { DiAndroid } from 'react-icons/di';

export default function Footer() {
  return (
    <div className="footer">
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
      <section className="info-block">
        <span>잘자라홈코리아 유한회사 (Zalzara Home Korea Ltd.) |</span>
        <span>서울시 중구 한강대로 416 서울스퀘어 13층</span>
        <span>
          <b className="bold">사업자 등록 번호:</b>
          121-22-12194 |
        </span>
        <span>
          <b className="bold">대표자:</b>
          김수한무 |
        </span>
        <span>
          <b className="bold">연락처:</b>
          010-3158-3047 (발신자 부담 번호) |
        </span>
        <span>
          <b className="bold">이메일:</b>
          info.kr@zalzara.com |
        </span>
        <span>
          <b className="bold">호스팅 서비스 제공업체:</b>
          ITX Haley B.V. |
        </span>
        <span>
          <b className="bold">통신판매업신고</b>
          2022-서울강북-01234 |
        </span>
        <span>
          <b className="bold">개인정보 보호 정책</b>
        </span>
      </section>
      <section className="end-block">
        <div className="input-row">
          <input
            type="text"
            name="email"
            id="email"
            className="input"
            placeholder="뉴스레터 구독 - 이메일 주소를 입력하세요"
          />
        </div>
        <div className="social-row">
          <div className="follow-box">
            <span>팔로우하세요</span>
            <div className="icons">
              <RiKakaoTalkFill size="1.6rem" />
              <FaFacebookF size="1.6rem" />
              <FaInstagram size="1.6rem" />
              <FaPinterestP size="1.6rem" />
              <FaYoutube size="1.6rem" />
              <FaTwitter size="1.6rem" />
              <FaSpotify size="1.6rem" />
            </div>
          </div>
          <div className="download-box">
            <span>자라홈 APP 다운로드</span>
            <div className="icons">
              <FaApple size="1.6rem" />
              <DiAndroid size="1.6rem" />
            </div>
          </div>
        </div>
        <div className="footer-row">
          <div className="policy-container">
            <h4>정책</h4>
            <span>구매 약관</span>
            <span>개인정보 보호 정책</span>
            <span>쿠키 정책</span>
            <span>쿠키 설정</span>
          </div>
          <div className="company-container">
            <h4>회사</h4>
            <span>채용 정보</span>
            <span>프레스센터</span>
          </div>
          <div className="contact-container">
            <h4>연락처</h4>
            <span>연락처</span>
            <span>GUEST PURCHASE</span>
            <span>매장 찾기</span>
            <span>010-123-4556</span>
          </div>
        </div>
      </section>
      <div className="language">
        <span>SOUTH KOREA / 대한민국 / 한국어</span>
      </div>
    </div>
  );
}
