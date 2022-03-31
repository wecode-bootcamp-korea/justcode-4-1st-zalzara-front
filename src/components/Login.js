// import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Header from '../../components/Header';
import './Login.scss';

function Login({ showModal, setShowModal, closeModal }) {
  return (
    <div className="login-background">
      {showModal ? (
        <section className="login-container">
          <div className="left-half">
            <div className="login-comment">
              <p className="login-title">로그인</p>
              <div className="guest-purchase-comment">
                <p>신속한 결제 진행을 위해 필요한 정보를 요청할 수 있습니다.</p>
                <p>
                  Can’t find your order? You might have purchased as a guest.
                  Click here and we’ll tell you how to find it.
                </p>
              </div>
            </div>
            <div className="login-form">
              <input className="id" type="text" placeholder="이메일*" />
              <input className="pw" type="password" placeholder="비밀번호*" />
              <Link to="/forgot-pw" className="forgot-pw">
                비밀번호를 잊으셨습니까?
              </Link>
              <button className="login-button">로그인</button>
              <div className="social-login-wrapper">
                <h4>
                  <span>또는</span>
                </h4>
                <div className="social-login">
                  <img alt="facebook-login" src="./images/facebook_icon.png" />
                  <img alt="naver-login" src="./images/naver_icon.png" />
                </div>
                <p className="privacy-policy">
                  개인 정보 정책에 따라 계정과 연동하는 것에 동의합니다.
                </p>
              </div>
            </div>
          </div>
          <div className="right-half">
            <h1>회원가입</h1>
            <button>계정 만들기</button>
          </div>
        </section>
      ) : null}
    </div>
  );
}

export default Login;
