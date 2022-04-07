import React from 'react';
// import styles from './Signup.module.scss';
import './Signup.scss';
import { IoCloseOutline } from 'react-icons/io5';
import { HiChevronLeft } from 'react-icons/hi';

function Signup({ openLoginModal, closeModal }) {
  return (
    <div>
      <div className="signup-background" onClick={closeModal}>
        <section className="signup-wrapper" onClick={e => e.stopPropagation()}>
          <div className="signup-container">
            <div className="signup-top">
              <div className="signup-title">
                <HiChevronLeft
                  className="back-to-login"
                  size="24"
                  onClick={openLoginModal}
                />
                <IoCloseOutline
                  className="x-mark"
                  size="24"
                  onClick={closeModal}
                />
                <div>자라홈 계정 만들기</div>
              </div>
              <div>
                <input type="checkbox" />
                <span>개인</span>
                &nbsp;&nbsp;
                <input type="checkbox" />
                <span>회사</span>
              </div>
            </div>
            <form className="signup-form" action="./user/signup" method="POST">
              <input
                className="name"
                type="text"
                name="username"
                placeholder="이름*"
              />
              <input
                className="id"
                type="text"
                name="email"
                placeholder="이메일*"
              />
              <input
                className="pw"
                type="password"
                name="password"
                placeholder="비밀번호*"
              />
              <div className="consents">
                <div className="consents-checkbox">
                  <input type="checkbox" />
                  <span>모두동의</span>
                </div>
                <div className="consents-checkbox">
                  <input type="checkbox" name="policyAgreed" required />
                  <span>
                    * 개인정보의 수집 및 이용에 대한 동의. 자세히 보기.
                  </span>
                </div>
                <div className="consents-checkbox">
                  <input type="checkbox" name="overseasPrivacy" required />
                  <span>* 개인정보의 국외 이전에 대한 동의. 자세히 보기.</span>
                </div>
                <div className="consents-checkbox">
                  <input type="checkbox" />
                  <span>
                    뉴스레터 구독을 위한 개인정보의 수집 및 이용에 대한 동의.
                    자세히 보기.
                  </span>
                </div>
              </div>
              <button className="make-account">계정 만들기</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Signup;
