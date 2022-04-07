import React, { useState } from 'react';
// import styles from './Signup.module.scss';
import './Signup.scss';
import { IoCloseOutline } from 'react-icons/io5';
import { HiChevronLeft } from 'react-icons/hi';

function Signup({ openLoginModal, closeModal }) {
  // id, pw, ... 를 받아 state 로 사용
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [username, setUsername] = useState('');
  // const [policyAgreed, setpolicyAgreed] = useState('');
  // const [overseasPrivacy, setoverseasPrivacy] = useState('');

  const handleSignup = () => {
    fetch('localhost:8000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
        username: username,
        policyAgreed: true,
        overseasPrivacy: true,
      }),
    })
      .then(res => res.json())
      .then(result => console.log(result));
  };

  const handleIdInput = e => {
    setId(e.target.value);
  };

  const handlePwInput = e => {
    setPw(e.target.value);
  };

  const handleUsernameInput = e => {
    setUsername(e.target.value);
  };

  // const handlePolicyAgreedInput = e => {
  //   setpolicyAgreed(e.target.value);
  // };

  // const handleOverseasPrivacyInput = e => {
  //   setoverseasPrivacy(e.target.value);
  // };

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
            <div className="signup-form">
              <input
                className="name"
                type="text"
                placeholder="이름*"
                // 입력할 때마다 state 를 변경
                onChange={handleUsernameInput}
              />
              <input
                className="id"
                type="text"
                placeholder="이메일*"
                // 입력할 때마다 state 를 변경
                onChange={handleIdInput}
              />
              <input
                className="pw"
                type="password"
                placeholder="비밀번호*"
                // 입력할 때마다 state 를 변경
                onChange={handlePwInput}
              />
              <div className="consents">
                <div className="consents-checkbox">
                  <input type="checkbox" />
                  <span>모두동의</span>
                </div>
                <div className="consents-checkbox">
                  <input
                    type="checkbox"
                    required
                    // 입력할 때마다 state 를 변경
                    // onChange={handlePolicyAgreedInput}
                  />
                  <span>
                    * 개인정보의 수집 및 이용에 대한 동의. 자세히 보기.
                  </span>
                </div>
                <div className="consents-checkbox">
                  <input
                    type="checkbox"
                    required
                    // 입력할 때마다 state 를 변경
                    // onChange={handleOverseasPrivacyInput}
                  />
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
              <button className="make-account" onClick={handleSignup}>
                계정 만들기
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Signup;
