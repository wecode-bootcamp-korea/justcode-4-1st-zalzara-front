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
    <div class="footer">
      <section class="info-block">
        <span>잘자라홈코리아 유한회사 (Zalzara Home Korea Ltd.) |</span>
        <span>서울시 중구 한강대로 416 서울스퀘어 13층</span>
        <span>
          <b class="bold">사업자 등록 번호:</b>
          121-22-12194 |
        </span>
        <span>
          <b class="bold">대표자:</b>
          김수한무 |
        </span>
        <span>
          <b class="bold">연락처:</b>
          010-3158-3047 (발신자 부담 번호) |
        </span>
        <span>
          <b class="bold">이메일:</b>
          info.kr@zalzara.com |
        </span>
        <span>
          <b class="bold">호스팅 서비스 제공업체:</b>
          ITX Haley B.V. |
        </span>
        <span>
          <b class="bold">통신판매업신고</b>
          2022-서울강북-01234 |
        </span>
        <span>
          <b class="bold">개인정보 보호 정책</b>
        </span>
      </section>
      <section class="end-block">
        <div class="input-row">
          <input
            type="text"
            name="email"
            id="email"
            class="input"
            placeholder="뉴스레터 구독 - 이메일 주소를 입력하세요"
          />
        </div>
        <div class="social-row">
          <div class="follow-box">
            <span>팔로우하세요</span>
            <div class="icons">
              <RiKakaoTalkFill size="1.6rem" />
              <FaFacebookF size="1.6rem" />
              <FaInstagram size="1.6rem" />
              <FaPinterestP size="1.6rem" />
              <FaYoutube size="1.6rem" />
              <FaTwitter size="1.6rem" />
              <FaSpotify size="1.6rem" />
            </div>
          </div>
          <div class="download-box">
            <span>자라홈 APP 다운로드</span>
            <div class="icons">
              <FaApple size="1.6rem" />
              <DiAndroid size="1.6rem" />
            </div>
          </div>
        </div>
        <div class="footer-row">
          <div class="policy-container">
            <h4>정책</h4>
            <span>구매 약관</span>
            <span>개인정보 보호 정책</span>
            <span>쿠키 정책</span>
            <span>쿠키 설정</span>
          </div>
          <div class="company-container">
            <h4>회사</h4>
            <span>채용 정보</span>
            <span>프레스센터</span>
          </div>
          <div class="contact-container">
            <h4>연락처</h4>
            <span>연락처</span>
            <span>GUEST PURCHASE</span>
            <span>매장 찾기</span>
            <span>010-123-4556</span>
          </div>
        </div>
      </section>
      <div class="language">
        <span>SOUTH KOREA / 대한민국 / 한국어</span>
      </div>
    </div>
  );
}
