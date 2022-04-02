import React from 'react';
import styles from './Signup.module.scss';
import { IoCloseOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Signup({ showSignupModal, closeModal }) {
  return (
    <div>
      {showSignupModal ? (
        <div>
          <div className={styles.signup__background} onClick={closeModal}>
            <section
              className={styles.signup__container}
              onClick={e => e.stopPropagation()}
            >
              <div className="left-half">
                <div className="login-comment">
                  <p className="login-title">자라홈 계정 만들기</p>
                  <div className="guest-purchase-comment">
                    <p>
                      신속한 결제 진행을 위해 필요한 정보를 요청할 수 있습니다.
                    </p>
                    <p>
                      Can’t find your order? You might have purchased as a
                      guest. Click here and we’ll tell you how to find it.
                    </p>
                  </div>
                </div>
                <div className="login-form">
                  <input className="name" type="text" placeholder="이름*" />
                  <input className="id" type="text" placeholder="이메일*" />
                  <input
                    className="pw"
                    type="password"
                    placeholder="비밀번호*"
                  />
                  <button className="login-button">계정 만들기</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Signup;
